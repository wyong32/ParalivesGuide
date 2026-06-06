<template>
  <article class="wiki-page">
    <PageHero
      title-id="wiki-title"
      :title="wikiH1"
      eyebrow="All topics"
      variant="wiki"
      lead="Grouped by what you actually touch in a save — Paramaker, Live Mode, Build, social play, and mods. We separate day-one EA facts from mechanics still on the public roadmap."
      stamp-src="/images/wiki-paralives.webp"
      stamp-alt="Paralives wiki talents and Live Mode systems"
      stamp-caption="Systems map"
      :breadcrumbs="wikiCrumbs"
    >
      <template #meta>
        {{ entryCount }} articles · {{ groupCount }} groups · unofficial · verify in-game after updates
      </template>
    </PageHero>

    <section class="wiki-main-section">
      <div class="container">
        <nav class="wiki-jump" aria-label="Jump to wiki groups">
          <a v-for="group in wikiHubGroups" :key="group.id" :href="`#wiki-group-${group.id}`">
            {{ group.label }}
          </a>
        </nav>

        <div class="wiki-groups">
          <section
            v-for="group in wikiHubGroups"
            :id="`wiki-group-${group.id}`"
            :key="group.id"
            class="wiki-group"
            :aria-labelledby="`wiki-group-title-${group.id}`"
          >
            <header class="wiki-group-head">
              <h2 :id="`wiki-group-title-${group.id}`">{{ group.label }}</h2>
              <p>{{ group.description }}</p>
            </header>
            <ul class="wiki-topic-list">
              <li v-for="item in group.items" :key="item.path">
                <RouterLink :to="`/wiki/${item.path}`" class="wiki-topic-row">
                  <span v-if="item.icon" class="wiki-topic-icon-wrap">
                    <img :src="item.icon" :alt="''" width="40" height="40" loading="lazy" />
                  </span>
                  <span v-else class="wiki-topic-icon-fallback" aria-hidden="true">📖</span>
                  <span class="wiki-topic-text">
                    <span class="wiki-topic-title">{{ item.title }}</span>
                    <span class="wiki-topic-desc">{{ item.description }}</span>
                  </span>
                  <span class="wiki-topic-tag">{{ item.tag }}</span>
                </RouterLink>
              </li>
            </ul>
          </section>
        </div>

        <aside class="wiki-index-note">
          <p>
            Need the careers landing page first? See
            <RouterLink to="/wiki/careers">Work in Melino — jobs &amp; money</RouterLink> — it links to
            the job list by workplace and the economy page listed above.
          </p>
        </aside>
      </div>
    </section>
  </article>
</template>

<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import { wikiHubGroups, wikiHubEntryCount } from '@/data/wikiHub.js'
import { getPageH1 } from '@/seo/pageKeywords.js'

const wikiH1 = getPageH1('wiki')
const wikiCrumbs = [{ to: '/', label: 'Home' }, { label: 'Wiki' }]
const entryCount = wikiHubEntryCount
const groupCount = wikiHubGroups.length
</script>

<style scoped>
.wiki-main-section {
  padding: 2.5rem 0 4rem;
  background: var(--color-white);
}

.wiki-jump {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.wiki-jump a {
  padding: 0.4rem 0.85rem;
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--color-text);
  background: var(--color-cream);
  border: 2px solid var(--color-outline);
  border-radius: 999px;
  transition: background 0.15s ease;
}

.wiki-jump a:hover {
  background: var(--color-sky);
  color: var(--color-text);
}

.wiki-groups {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.wiki-group-head {
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 3px dashed color-mix(in srgb, var(--color-mint) 55%, transparent);
}

.wiki-group-head h2 {
  font-size: 1.35rem;
  color: var(--color-grass);
  margin-bottom: 0.35rem;
}

.wiki-group-head p {
  font-size: 0.92rem;
  color: var(--color-muted);
}

.wiki-topic-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.wiki-topic-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.15rem;
  text-decoration: none;
  color: inherit;
  background: var(--color-cream);
  border: 3px solid var(--color-outline);
  border-radius: 16px;
  box-shadow: 4px 4px 0 var(--color-outline);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.wiki-topic-row:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--color-outline);
  color: inherit;
}

.wiki-topic-icon-wrap {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-white);
  border: 2px solid var(--color-outline);
  border-radius: 12px;
}

.wiki-topic-icon-wrap img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.wiki-topic-icon-fallback {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  background: var(--color-white);
  border: 2px solid var(--color-outline);
  border-radius: 12px;
}

.wiki-topic-text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
}

.wiki-topic-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.02rem;
}

.wiki-topic-desc {
  font-size: 0.88rem;
  color: var(--color-muted);
  line-height: 1.5;
}

.wiki-topic-tag {
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.55rem;
  background: var(--color-sunny);
  border: 2px solid var(--color-outline);
  border-radius: 6px;
  white-space: nowrap;
}

.wiki-index-note {
  margin-top: 2.5rem;
  padding: 1rem 1.25rem;
  font-size: 0.9rem;
  color: var(--color-muted);
  background: color-mix(in srgb, var(--color-sky) 25%, var(--color-white));
  border: 2px dashed var(--color-outline);
  border-radius: 14px;
}

.wiki-index-note a {
  font-weight: 700;
}

@media (max-width: 768px) {
  .wiki-topic-row {
    grid-template-columns: auto 1fr;
  }

  .wiki-topic-tag {
    grid-column: 2;
    justify-self: start;
    margin-top: 0.25rem;
  }
}
</style>
