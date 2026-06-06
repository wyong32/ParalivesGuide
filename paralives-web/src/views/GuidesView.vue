<template>
  <article>
    <PageHero
      title-id="guides-title"
      :title="guidesH1"
      eyebrow="Walkthroughs"
      variant="guides"
      lead="Walkthroughs and mode tips for the Steam game — written for players mid-save, updated when patches change balance. Not affiliated with Paralives Studio."
      :breadcrumbs="guidesCrumbs"
    />

    <section class="guides-filter-section">
      <div class="container">
        <div class="guides-filter-content">
          <h2 class="sr-only">Filter guides by category</h2>
          <ul class="filter-list" role="list">
            <li>
              <button
                type="button"
                :class="{ active: activeCategory === 'All' }"
                @click="activeCategory = 'All'"
              >
                All
              </button>
            </li>
            <li v-for="cat in categories" :key="cat">
              <button
                type="button"
                :class="{ active: activeCategory === cat }"
                @click="activeCategory = cat"
              >
                {{ cat }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="guides-list-section">
      <div class="container">
        <div class="guides-list-content">
          <h2 class="sr-only">Guide articles</h2>
          <ul class="article-grid">
            <li v-for="guide in filteredGuides" :key="guide.addressBar">
              <RouterLink :to="`/guides/${guide.addressBar}`">
                <img
                  :src="guide.imageUrl"
                  :alt="guide.imageAlt"
                  width="480"
                  height="260"
                  loading="lazy"
                />
                <span class="category">{{ guide.tags?.[0] }}</span>
                <h3>{{ guide.title }}</h3>
                <p>{{ guide.description }}</p>
                <span class="meta"
                  >{{ guide.readTime || 'Guide' }} · {{ guide.publishDate }}</span
                >
              </RouterLink>
            </li>
          </ul>
          <p v-if="filteredGuides.length === 0" class="empty">No guides in this category yet.</p>
        </div>
      </div>
    </section>

    <section class="guides-cta-section">
      <div class="container">
        <div class="guides-cta-content">
          <h2>Need a Faster Start?</h2>
          <p>Follow our five-step beginner path before diving into individual guides.</p>
          <RouterLink to="/how-to-play" class="cta-btn">How to Play</RouterLink>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue'
import PageHero from '@/components/layout/PageHero.vue'
import guides from '@/data/guides.js'
import { getPageH1 } from '@/seo/pageKeywords.js'

const guidesH1 = getPageH1('guides')
const guidesCrumbs = [{ to: '/', label: 'Home' }, { label: 'Guides' }]
const categories = ['Beginner', 'Build', 'Live Mode', 'Mods', 'Early Access', 'Basics']
const activeCategory = ref('All')

const filteredGuides = computed(() => {
  if (activeCategory.value === 'All') return guides
  return guides.filter((g) => g.tags?.includes(activeCategory.value))
})
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}

.guides-filter-section {
  padding: 1.75rem 0;
}

.filter-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.filter-list button {
  padding: 0.55rem 1.1rem;
  border: 2.5px solid var(--color-outline);
  background: var(--color-white);
  border-radius: 999px;
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-text);
  cursor: pointer;
  box-shadow: 3px 3px 0 var(--color-outline);
  transition: all 0.2s ease;
}

.filter-list button:hover,
.filter-list button.active {
  background: var(--color-lavender);
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0 var(--color-outline);
}

.guides-list-section {
  padding: 3rem 0 4rem;
}

.article-grid {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.article-grid a {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem;
  background: var(--color-white);
  border: 3px solid var(--color-outline);
  border-radius: 20px;
  text-decoration: none;
  color: var(--color-text);
  cursor: pointer;
  box-shadow: 5px 5px 0 var(--color-outline);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.article-grid li:nth-child(3n + 1) a {
  background: linear-gradient(160deg, var(--color-peach) 0%, var(--color-white) 50%);
}
.article-grid li:nth-child(3n + 2) a {
  background: linear-gradient(160deg, var(--color-sky) 0%, var(--color-white) 50%);
}
.article-grid li:nth-child(3n) a {
  background: linear-gradient(160deg, var(--color-mint) 0%, var(--color-white) 50%);
}

.article-grid a:hover {
  transform: translate(-3px, -3px);
  box-shadow: 8px 8px 0 var(--color-outline);
}

.article-grid img {
  margin-bottom: 1rem;
}

.category {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text);
  background: var(--color-sunny);
  border: 2px solid var(--color-outline);
  padding: 0.15rem 0.5rem;
  border-radius: 6px;
  margin-bottom: 0.5rem;
}

.article-grid h3 {
  font-size: 1.1rem;
  margin-bottom: 0.6rem;
}

.article-grid p {
  font-size: 0.9rem;
  color: var(--color-muted);
  flex: 1;
  margin-bottom: 1rem;
}

.meta {
  font-size: 0.78rem;
  color: var(--color-muted);
}

.empty {
  text-align: center;
  color: var(--color-muted);
  padding: 3rem;
}

.guides-cta-section {
  padding: 3.5rem 0 5rem;
  background: linear-gradient(180deg, var(--color-sunny) 0%, var(--color-peach) 100%);
  border-top: 3px solid var(--color-outline);
}

.guides-cta-content {
  text-align: center;
}

.cta-btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.9rem 2rem;
  background: var(--color-coral);
  color: #fff;
  border-radius: 999px;
  font-family: var(--font-display);
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
  border: 3px solid var(--color-outline);
  box-shadow: 5px 5px 0 var(--color-outline);
}

.cta-btn:hover {
  color: #fff;
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0 var(--color-outline);
}

@media (max-width: 1024px) {
  .article-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .article-grid {
    grid-template-columns: 1fr;
  }
}
</style>
