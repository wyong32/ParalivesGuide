<template>
  <article v-if="guide" class="guide-detail-page">
    <PageHero
      title-id="guide-detail-title"
      :title="guide.title"
      :eyebrow="guide.categories?.[0] || 'Guide'"
      variant="guides"
      :lead="guide.description"
      meta-note=""
      :stamp-src="guide.imageUrl"
      :stamp-alt="guide.imageAlt || guide.title"
      stamp-size="large"
      :breadcrumbs="[
        { to: '/', label: 'Home' },
        { to: '/guides', label: 'Guides' },
        { label: guide.title },
      ]"
    >
      <ul v-if="guide.categories?.length" class="guide-hero-cats" aria-label="Categories">
        <li v-for="cat in guide.categories" :key="cat">
          <RouterLink :to="{ path: '/guides', query: { category: cat } }">{{ cat }}</RouterLink>
        </li>
      </ul>
    </PageHero>

    <section class="guide-read-section">
      <div class="container">
        <div class="guide-read-layout">
          <div class="guide-article-col">
            <article
              class="guide-article-sheet guide-article-html"
              aria-label="Guide content"
              v-html="processedHtml"
            ></article>
          </div>

          <aside v-if="anchors.length" class="guide-sidebar" aria-label="Guide sidebar">
            <nav class="guide-side-card guide-side-toc" aria-label="On this page">
              <p class="guide-side-label">On this page</p>
              <ol class="guide-toc">
                <li
                  v-for="(item, index) in anchors"
                  :key="item.id"
                  :class="{ 'is-active': activeAnchor === item.id }"
                >
                  <a :href="`#${item.id}`" @click="onTocClick">
                    <span class="guide-toc-num">{{ index + 1 }}</span>
                    <span class="guide-toc-text">{{ item.label }}</span>
                  </a>
                </li>
              </ol>
            </nav>
          </aside>
        </div>
      </div>
    </section>

    <section v-if="otherGuides.length" class="guide-siblings-section">
      <div class="container">
        <div class="guide-siblings-head">
          <h2>More guides</h2>
          <RouterLink to="/guides" class="guide-siblings-all">All guides →</RouterLink>
        </div>
        <ul class="guide-siblings-grid">
          <li v-for="item in otherGuides" :key="item.addressBar">
            <RouterLink :to="`/guides/${item.addressBar}`" class="guide-sibling-card">
              <div class="guide-sibling-media">
                <img :src="item.imageUrl" :alt="item.imageAlt" width="320" height="180" loading="lazy" />
                <span class="guide-sibling-cat">{{ item.categories?.[0] }}</span>
              </div>
              <div class="guide-sibling-body">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>

    <section class="guide-next-section">
      <div class="container">
        <h2>Keep playing</h2>
        <ul class="guide-next-grid">
          <li v-for="link in nextLinks" :key="link.to">
            <RouterLink :to="link.to" class="guide-next-card" :class="link.tone">
              <span class="guide-next-tag">{{ link.tag }}</span>
              <span class="guide-next-title">{{ link.label }}</span>
              <span class="guide-next-arrow" aria-hidden="true">→</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>
  </article>

  <section v-else class="not-found-section">
    <div class="container">
      <div class="not-found-content">
        <h1>Guide Not Found</h1>
        <p>This guide does not exist yet. Browse our full list or start with the beginner path.</p>
        <RouterLink to="/guides">All guides</RouterLink>
        <RouterLink to="/how-to-play">How to Play</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '@/components/layout/PageHero.vue'
import guides from '@/data/guides.js'
import { extractGuideAnchors, injectGuideHeadingIds } from '@/utils/guideHtml.js'

const route = useRoute()
const activeAnchor = ref('')
let observer = null

const guide = computed(() => {
  const key = String(route.params.slug || '').replace(/^\/+|\/+$/g, '')
  return guides.find((g) => g.addressBar === key || g.slug === key) ?? null
})

const processedHtml = computed(() =>
  guide.value ? injectGuideHeadingIds(guide.value.detailsHtml) : '',
)

const anchors = computed(() =>
  guide.value ? extractGuideAnchors(guide.value.detailsHtml) : [],
)

const otherGuides = computed(() => {
  if (!guide.value) return []
  return guides.filter((g) => g.addressBar !== guide.value.addressBar).slice(0, 2)
})

const nextLinks = [
  { to: '/how-to-play', label: 'How to Play', tag: 'New save', tone: 'tone-sunny' },
  { to: '/cheats', label: 'Cheat commands', tag: 'Live Mode', tone: 'tone-lavender' },
  { to: '/mods', label: 'Mods & Workshop', tag: 'Steam', tone: 'tone-mint' },
  { to: '/guides', label: 'All guides', tag: 'Browse', tone: 'tone-peach' },
]

function onTocClick() {
  // Hash navigation; scroll-spy updates active state
}

function setupScrollSpy() {
  teardownScrollSpy()
  if (!anchors.value.length) return

  const headings = anchors.value
    .map((a) => document.getElementById(a.id))
    .filter(Boolean)

  if (!headings.length) return

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible[0]?.target?.id) {
        activeAnchor.value = visible[0].target.id
      }
    },
    {
      rootMargin: '-20% 0px -55% 0px',
      threshold: [0, 0.25, 0.5, 1],
    },
  )

  headings.forEach((el) => observer.observe(el))
  activeAnchor.value = headings[0].id
}

function teardownScrollSpy() {
  observer?.disconnect()
  observer = null
}

watch(
  () => [guide.value?.addressBar, anchors.value.length],
  () => {
    requestAnimationFrame(() => setupScrollSpy())
  },
)

onMounted(() => setupScrollSpy())
onUnmounted(() => teardownScrollSpy())
</script>

<style scoped>
.guide-detail-page {
  --guide-accent: var(--color-coral-deep);
}

/* Hero category chips */
.guide-hero-cats {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  list-style: none;
  padding: 0;
  margin: 0.85rem 0 0;
}

.guide-hero-cats a {
  display: inline-block;
  padding: 0.3rem 0.7rem;
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--color-text);
  background: var(--color-peach);
  border: 2px solid var(--color-outline);
  border-radius: 999px;
  box-shadow: 2px 2px 0 var(--color-outline);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.guide-hero-cats a:hover {
  transform: translate(-2px, -2px);
  box-shadow: 4px 4px 0 var(--color-outline);
  color: var(--color-coral-deep);
}

/* Reading layout */
.guide-read-section {
  padding: 2.5rem 0 4rem;
  background-color: var(--color-cream);
  background-image: repeating-linear-gradient(
    180deg,
    transparent,
    transparent 1.65rem,
    color-mix(in srgb, var(--color-outline) 5%, transparent) 1.66rem
  );
}

.guide-read-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(240px, 280px);
  gap: 2rem;
  align-items: start;
}

.guide-article-sheet {
  padding: 2rem 2.1rem 2.25rem;
  background: var(--color-white);
  border: 3px solid var(--color-outline);
  border-left: 7px solid var(--guide-accent);
  border-radius: 6px 24px 24px 6px;
  box-shadow: 8px 8px 0 color-mix(in srgb, var(--guide-accent) 18%, var(--color-outline));
}

/* Sidebar — TOC only */
.guide-sidebar {
  position: sticky;
  top: var(--site-anchor-offset, 6.35rem);
}

.guide-side-card {
  padding: 1.1rem 1.15rem;
  background: var(--color-white);
  border: 2.5px solid var(--color-outline);
  border-radius: 16px;
  box-shadow: 4px 4px 0 var(--color-outline);
}

.guide-side-label {
  margin: 0 0 0.35rem;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-sage-dark);
}

.guide-toc {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  max-height: min(52vh, 420px);
  overflow-y: auto;
}

.guide-toc a {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  padding: 0.45rem 0.5rem;
  border-radius: 10px;
  text-decoration: none;
  color: var(--color-muted);
  transition: background 0.2s ease, color 0.2s ease;
  cursor: pointer;
}

.guide-toc-num {
  flex-shrink: 0;
  width: 1.35rem;
  height: 1.35rem;
  display: grid;
  place-items: center;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 800;
  color: var(--color-text);
  background: var(--color-sunny);
  border: 2px solid var(--color-outline);
  border-radius: 6px;
}

.guide-toc-text {
  font-size: 0.84rem;
  font-weight: 600;
  line-height: 1.4;
}

.guide-toc li.is-active a,
.guide-toc a:hover {
  background: color-mix(in srgb, var(--color-lavender) 35%, var(--color-white));
  color: var(--color-sage-dark);
}

.guide-toc li.is-active .guide-toc-num {
  background: var(--color-coral-deep);
  color: #fff;
  border-color: var(--color-outline);
}

/* Prose */
.guide-article-html :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.75;
  color: var(--color-muted);
}

.guide-article-html :deep(.guide-lead) {
  font-size: 1.1rem;
  line-height: 1.72;
  color: var(--color-text);
}

.guide-article-html :deep(h2) {
  scroll-margin-top: calc(var(--site-anchor-offset, 6.35rem) + 0.5rem);
  position: relative;
  font-size: 1.22rem;
  margin: 2.25rem 0 0.85rem;
  padding: 0.55rem 0 0.55rem 1rem;
  color: var(--color-sage-dark);
  border-left: 4px solid var(--guide-accent);
  background: color-mix(in srgb, var(--color-peach) 22%, transparent);
  border-radius: 0 10px 10px 0;
}

.guide-article-html :deep(h2:first-of-type) {
  margin-top: 0.5rem;
}

.guide-article-html :deep(h3) {
  font-size: 1.02rem;
  margin: 1.35rem 0 0.55rem;
  color: var(--color-grass);
}

.guide-article-html :deep(ul),
.guide-article-html :deep(ol) {
  margin: 0 0 1.1rem 1.2rem;
  padding: 0;
  color: var(--color-muted);
  line-height: 1.7;
}

.guide-article-html :deep(li) {
  margin-bottom: 0.4rem;
}

.guide-article-html :deep(a) {
  color: var(--color-sage-dark);
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.guide-article-html :deep(a:hover) {
  color: var(--color-coral-deep);
}

.guide-article-html :deep(img) {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 1.25rem auto;
  border-radius: 12px;
  border: 2.5px solid var(--color-outline);
  box-shadow: 4px 4px 0 var(--color-outline);
}

.guide-article-html :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1.15rem 0 1.35rem;
  font-size: 0.88rem;
  display: block;
  overflow-x: auto;
}

.guide-article-html :deep(thead) {
  background: var(--color-mint);
}

.guide-article-html :deep(th),
.guide-article-html :deep(td) {
  border: 2px solid var(--color-outline);
  padding: 0.55rem 0.7rem;
  text-align: left;
  vertical-align: top;
  min-width: 7rem;
}

.guide-article-html :deep(code) {
  padding: 0.12rem 0.35rem;
  font-size: 0.88em;
  background: var(--color-cream);
  border: 1.5px solid color-mix(in srgb, var(--color-outline) 40%, transparent);
  border-radius: 5px;
}

/* More guides */
.guide-siblings-section {
  padding: 3rem 0;
  background: var(--color-white);
  border-top: 3px solid var(--color-outline);
}

.guide-siblings-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.guide-siblings-head h2 {
  font-size: 1.25rem;
  color: var(--color-grass);
}

.guide-siblings-all {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--color-sage-dark);
  text-decoration: none;
  cursor: pointer;
}

.guide-siblings-all:hover {
  color: var(--color-coral-deep);
  text-decoration: underline;
}

.guide-siblings-grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

.guide-sibling-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
  background: var(--color-cream);
  border: 3px solid var(--color-outline);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 5px 5px 0 var(--color-outline);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.guide-sibling-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 8px 8px 0 var(--color-outline);
}

.guide-sibling-media {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.guide-sibling-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.guide-sibling-cat {
  position: absolute;
  top: 0.65rem;
  left: 0.65rem;
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  background: var(--color-sunny);
  border: 2px solid var(--color-outline);
  border-radius: 6px;
}

.guide-sibling-body {
  padding: 1rem 1.1rem 1.15rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.guide-sibling-body h3 {
  font-size: 0.98rem;
  margin-bottom: 0.4rem;
  line-height: 1.35;
}

.guide-sibling-body p {
  font-size: 0.84rem;
  color: var(--color-muted);
  line-height: 1.55;
  flex: 1;
}

/* Next steps */
.guide-next-section {
  padding: 3rem 0 4.5rem;
  background: linear-gradient(180deg, var(--color-mint) 0%, var(--color-cream) 100%);
  border-top: 3px solid var(--color-outline);
}

.guide-next-section h2 {
  font-size: 1.2rem;
  margin-bottom: 1.1rem;
  color: var(--color-grass);
}

.guide-next-grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.85rem;
}

.guide-next-card {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-height: 5.5rem;
  padding: 0.9rem 1rem;
  text-decoration: none;
  color: var(--color-text);
  border: 2.5px solid var(--color-outline);
  border-radius: 14px;
  box-shadow: 3px 3px 0 var(--color-outline);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.guide-next-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0 var(--color-outline);
}

.guide-next-tag {
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.85;
}

.guide-next-title {
  font-family: var(--font-display);
  font-size: 0.92rem;
  font-weight: 800;
  line-height: 1.3;
  flex: 1;
}

.guide-next-arrow {
  font-size: 1rem;
  font-weight: 800;
  align-self: flex-end;
}

.tone-sunny {
  background: var(--color-sunny);
}
.tone-lavender {
  background: var(--color-lavender);
}
.tone-mint {
  background: var(--color-mint);
}
.tone-peach {
  background: var(--color-peach);
}

.not-found-section {
  padding: 5rem 0;
  text-align: center;
}

.not-found-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

@media (max-width: 1024px) {
  .guide-read-layout {
    grid-template-columns: 1fr;
  }

  .guide-sidebar {
    position: static;
  }

  .guide-toc {
    max-height: none;
  }

  .guide-next-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .guide-article-sheet {
    padding: 1.35rem 1.25rem 1.5rem;
    border-radius: 6px 18px 18px 6px;
  }

  .guide-siblings-grid,
  .guide-next-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .guide-hero-cats a,
  .guide-sibling-card,
  .guide-next-card {
    transition: none;
  }
}
</style>
