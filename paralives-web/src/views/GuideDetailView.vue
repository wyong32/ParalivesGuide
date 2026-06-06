<template>
  <article v-if="guide">
    <PageHero
      title-id="guide-detail-title"
      :title="guide.title"
      :eyebrow="guide.tags?.[0] || 'Guide'"
      variant="guides"
      :lead="guide.description"
      :breadcrumbs="[
        { to: '/', label: 'Home' },
        { to: '/guides', label: 'Guides' },
        { label: guide.title },
      ]"
    >
      <template #meta>
        Updated {{ guide.publishDate }} · {{ guide.readTime || 'Guide' }} · Unofficial — verify
        in-game after patches
      </template>
    </PageHero>

    <section class="guide-body-section">
      <div class="container">
        <div class="guide-body-content guide-article-html" v-html="guide.detailsHtml"></div>
      </div>
    </section>

    <section class="related-section">
      <div class="container">
        <div class="related-content">
          <h2>Keep playing</h2>
          <div class="tool-links">
            <RouterLink to="/cheats">Cheat commands →</RouterLink>
            <RouterLink to="/mods">Mods &amp; Workshop →</RouterLink>
            <RouterLink to="/how-to-play">How to Play →</RouterLink>
            <RouterLink to="/guides">All guides →</RouterLink>
          </div>
        </div>
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
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageHero from '@/components/layout/PageHero.vue'
import guides from '@/data/guides.js'

const route = useRoute()

const guide = computed(() => {
  const key = String(route.params.slug || '').replace(/^\/+|\/+$/g, '')
  return guides.find((g) => g.addressBar === key || g.slug === key) ?? null
})
</script>

<style scoped>
.guide-body-section {
  padding: 3rem 0 4rem;
  background: var(--color-white);
}

.guide-article-html :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.7;
}

.guide-article-html :deep(.guide-lead) {
  font-size: 1.08rem;
}

.related-section {
  padding: 2.5rem 0 4rem;
  background: var(--color-cream);
}

.tool-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.tool-links a {
  font-family: var(--font-display);
  font-weight: 700;
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
</style>
