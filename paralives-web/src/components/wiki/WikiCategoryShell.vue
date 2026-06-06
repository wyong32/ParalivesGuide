<template>
  <article class="wiki-cat-page">
    <PageHero
      :title-id="titleId"
      :title="title"
      :lead="lead"
      variant="wiki"
      :stamp-src="heroImage"
      :stamp-alt="`${title} — Paralives Guide wiki`"
      stamp-caption="Wiki article"
    >
      <template #breadcrumb>
        <nav class="wiki-breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/wiki">All wiki topics</RouterLink>
          <span aria-hidden="true">/</span>
          <template v-if="breadcrumbParent">
            <a :href="breadcrumbParent.href">{{ breadcrumbParent.title }}</a>
            <span aria-hidden="true">/</span>
          </template>
          <span>{{ title }}</span>
        </nav>
      </template>
    </PageHero>

    <div class="wiki-cat-body">
      <div class="container wiki-cat-container">
        <div
          class="wiki-article-layout"
          :class="{ 'wiki-article-layout--full': !showRail }"
        >
          <div class="wiki-article-main">
            <slot />
          </div>

          <aside v-if="showRail" class="wiki-rail" aria-label="Article sidebar">
            <slot v-if="hasAsideSlot" name="aside" />

            <section v-if="sidebarPeers.length" class="wiki-rail-card">
              <p class="wiki-rail-eyebrow">{{ groupPeers.groupLabel }}</p>
              <h2 class="wiki-rail-title">Related topics</h2>
              <ul class="wiki-rail-peer-list">
                <li v-for="peer in sidebarPeers" :key="peer.path">
                  <RouterLink :to="`/wiki/${peer.path}`" class="wiki-rail-peer">
                    <img
                      v-if="peer.icon"
                      :src="peer.icon"
                      alt=""
                      width="28"
                      height="28"
                      loading="lazy"
                    />
                    <span class="wiki-rail-peer-text">
                      <strong>{{ peer.title }}</strong>
                    </span>
                  </RouterLink>
                </li>
              </ul>
            </section>

            <section v-else-if="curatedLinks.length" class="wiki-rail-card">
              <p class="wiki-rail-eyebrow">Paralives Guide</p>
              <h2 class="wiki-rail-title">Also relevant</h2>
              <ul class="wiki-rail-peer-list">
                <li v-for="link in curatedLinks" :key="link.href">
                  <RouterLink :to="link.href" class="wiki-rail-peer">
                    <span class="wiki-rail-peer-text">
                      <strong>{{ link.title }}</strong>
                    </span>
                  </RouterLink>
                </li>
              </ul>
            </section>
          </aside>
        </div>

        <footer class="wiki-cat-footer">
          <div class="wiki-cat-footer-nav">
            <RouterLink to="/wiki" class="wiki-footer-chip">← All wiki topics</RouterLink>
            <RouterLink to="/updates" class="wiki-footer-chip">EA roadmap</RouterLink>
          </div>
          <p class="wiki-source-note">
            Unofficial Paralives Early Access notes on Paralives Guide. Tables reflect builds we checked
            in-game — screenshot your bills screen and tell us if yours differs after a Steam patch.
          </p>
        </footer>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed, useSlots } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '@/components/layout/PageHero.vue'
import {
  getWikiCrossLinks,
  getWikiGroupPeers,
  getWikiPathFromRoute,
} from '@/data/wikiHub.js'
import '../../assets/wiki-pages.css'

defineProps({
  title: { type: String, required: true },
  lead: { type: String, default: '' },
  titleId: { type: String, default: 'wiki-cat-title' },
  breadcrumbParent: {
    type: Object,
    default: null,
    validator: (v) =>
      v == null || (typeof v.href === 'string' && typeof v.title === 'string'),
  },
  heroImage: { type: String, default: '/images/about-02.webp' },
})

const slots = useSlots()
const route = useRoute()

const hasAsideSlot = computed(() => Boolean(slots.aside?.()?.length))

const currentPath = computed(() => getWikiPathFromRoute(route.path))

const groupPeers = computed(() => getWikiGroupPeers(currentPath.value))

/** 同 hub 分组内话题，最多 3 条，避免侧栏过长 */
const sidebarPeers = computed(() => groupPeers.value.peers.slice(0, 3))

/** 孤立页（单篇分组）用手工策展链接，与参考站线性邻居不同 */
const curatedLinks = computed(() => {
  if (sidebarPeers.value.length) return []
  return getWikiCrossLinks(currentPath.value)
    .slice(0, 3)
    .map((link) => ({
      title: link.title,
      href: link.external || String(link.path).startsWith('/')
        ? link.path
        : `/wiki/${link.path}`,
    }))
})

const showRail = computed(
  () =>
    hasAsideSlot.value ||
    sidebarPeers.value.length > 0 ||
    curatedLinks.value.length > 0,
)
</script>

<style scoped>
/* 右侧栏 — 本站贴纸卡通风，与参考站 mint 面板区分 */
.wiki-rail {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.wiki-rail {
  position: sticky;
  top: var(--site-anchor-offset);
  max-height: calc(100vh - var(--site-anchor-offset) - 1rem);
  overflow-y: auto;
  padding-bottom: 0.5rem;
}

@media (max-width: 1024px) {
  .wiki-rail {
    position: static;
    max-height: none;
    overflow: visible;
  }
}

.wiki-rail-card {
  padding: 1rem 1.1rem;
  background: var(--color-white);
  border: 3px solid var(--color-outline);
  border-radius: 18px;
  box-shadow: 5px 5px 0 var(--color-outline);
}

.wiki-rail-eyebrow {
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-grass);
  margin-bottom: 0.35rem;
}

.wiki-rail-title {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 800;
  margin: 0 0 0.75rem;
  color: var(--color-text);
}

.wiki-rail-peer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.wiki-rail-peer {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.55rem 0.65rem;
  text-decoration: none;
  color: inherit;
  background: var(--color-cream);
  border: 2px solid var(--color-outline);
  border-radius: 12px;
  transition: transform 0.15s ease;
}

.wiki-rail-peer:hover {
  transform: translate(-2px, -2px);
  color: inherit;
}

.wiki-rail-peer img {
  flex-shrink: 0;
  object-fit: contain;
}

.wiki-rail-peer-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
}

.wiki-rail-peer-text strong {
  font-size: 0.88rem;
  line-height: 1.3;
}

.wiki-cat-footer {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 3px solid var(--color-outline);
}

.wiki-cat-footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-bottom: 1rem;
}

.wiki-source-note {
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.55;
  color: var(--color-text-muted, color-mix(in srgb, var(--color-text) 72%, transparent));
}

.wiki-footer-chip {
  padding: 0.45rem 0.9rem;
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--color-text);
  background: var(--color-mint);
  border: 2.5px solid var(--color-outline);
  border-radius: 999px;
  box-shadow: 3px 3px 0 var(--color-outline);
}

.wiki-footer-chip:hover {
  background: var(--color-sunny);
  color: var(--color-text);
}

.wiki-breadcrumb a {
  font-weight: 700;
}
</style>
