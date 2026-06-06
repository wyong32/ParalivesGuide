<template>
  <article class="map-page">
    <PageHero
      title-id="map-title"
      :title="pageH1"
      eyebrow="Melino map"
      variant="tool"
      :quick-answer="`Melino is the EA open world — four districts, ~50–70 lots per studio materials, no load screens between areas. Filter ${mapPinStats.markers} community pins below; confirm names in-game after patches.`"
      reviewed="2026-06-05"
      reviewed-label="June 5, 2026"
      meta-note="Fan-made pins — not an in-game export"
      :meta-links="devMetaLink"
      stamp-src="/images/map-hero.webp"
      stamp-alt="Melino town map with community pins"
      stamp-caption="Melino pin map"
      :breadcrumbs="mapCrumbs"
    />

    <div class="map-body">
      <div class="container map-main">
        <section class="map-section">
          <h2>Interactive map</h2>
          <p>Scroll to zoom, drag to pan, filter categories, click pins for notes.</p>
          <MelinoInteractiveMap />
        </section>

        <section class="map-section">
          <h2>Districts</h2>
          <div class="map-district-grid">
            <article v-for="d in mapDistricts" :key="d.name" class="map-district-card">
              <span aria-hidden="true">{{ d.emoji }}</span>
              <h3>{{ d.name }}</h3>
              <p>{{ d.note }}</p>
            </article>
          </div>
        </section>

        <section class="map-section">
          <h2>Key venues</h2>
          <p>Many commercial lots are rabbit holes at EA — Parafolks enter, gameplay resolves off-screen.</p>
          <ul class="map-poi-list">
            <li v-for="poi in mapPois" :key="poi.id" class="map-poi-item">
              <span aria-hidden="true">{{ poi.icon }}</span>
              <div>
                <strong>{{ poi.name }}</strong>
                <p>{{ poi.desc }}</p>
              </div>
            </li>
          </ul>
        </section>

        <section class="map-section">
          <h2>First outing</h2>
          <ol class="map-steps">
            <li v-for="step in firstVisitSteps" :key="step">{{ step }}</li>
          </ol>
        </section>

        <section class="map-section">
          <h2>Town features by phase</h2>
          <div class="map-phase-grid">
            <article class="map-phase-card map-phase-card--day">
              <h3>Day one</h3>
              <ul>
                <li v-for="item in townDayOne" :key="item">{{ item }}</li>
              </ul>
            </article>
            <article class="map-phase-card map-phase-card--ea">
              <h3>During EA</h3>
              <ul>
                <li v-for="item in townDuringEa" :key="item">{{ item }}</li>
              </ul>
            </article>
          </div>
        </section>

        <section class="map-section">
          <h2>FAQ</h2>
          <div class="map-faq-list">
            <article v-for="item in mapFaq" :key="item.q" class="map-faq-item">
              <h3>{{ item.q }}</h3>
              <p>{{ item.a }}</p>
            </article>
          </div>
        </section>

        <section class="map-section map-related">
          <p>
            <RouterLink to="/wiki/careers/occupations">Occupations</RouterLink> ·
            <RouterLink to="/wiki/careers/economy">Economy</RouterLink> ·
            <RouterLink to="/how-to-play">How to Play</RouterLink> ·
            <RouterLink to="/updates">Updates</RouterLink>
          </p>
        </section>

        <footer class="map-trust-footer">
          Unofficial — trust your installed build when pins and labels disagree.
        </footer>
      </div>
    </div>
  </article>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import PageHero from '@/components/layout/PageHero.vue'
import MelinoInteractiveMap from '@/components/map/MelinoInteractiveMap.vue'
import { MELINO_MAP } from '@/data/melinoMap.js'
import { getPageH1 } from '@/seo/pageKeywords.js'
import {
  firstVisitSteps,
  mapDistricts,
  mapFaq,
  mapPois,
  townDayOne,
  townDuringEa,
} from '@/data/mapGuide.js'
import { getCanonicalOrigin, resolveCanonicalUrl } from '@/seo/documentMeta.js'
import { seoConfig } from '@/seo/config.js'

const pageH1 = getPageH1('map')
const mapCrumbs = [{ to: '/', label: 'Home' }, { label: 'Map' }]
const devMetaLink = [{ href: 'https://www.paralives.com/development', label: 'Official dev lists' }]
const PAGE_URL = resolveCanonicalUrl('/map')
const SITE_ORIGIN = getCanonicalOrigin()

const mapPinStats = {
  markers: MELINO_MAP.markers.length,
}

function injectJsonLd() {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.id = 'map-page-jsonld'
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: PAGE_URL,
    name: 'Melino Town Map — Paralives Guide',
    description: 'Unofficial Melino interactive map and town guide for Paralives Early Access.',
    dateModified: '2026-06-05',
    isPartOf: { '@type': 'WebSite', name: seoConfig.siteName, url: SITE_ORIGIN + '/' },
  })
  document.head.appendChild(script)
}

onMounted(() => injectJsonLd())
onUnmounted(() => document.getElementById('map-page-jsonld')?.remove())
</script>

<style scoped>
.map-body {
  padding: 2.5rem 0 4rem;
}

.map-section {
  margin-bottom: 2.5rem;
}

.map-section h2 {
  font-family: var(--font-display);
  font-size: 1.35rem;
  margin-bottom: 0.75rem;
}

.map-section p {
  line-height: 1.65;
  margin-bottom: 0.85rem;
}

.map-district-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

@media (max-width: 768px) {
  .map-district-grid {
    grid-template-columns: 1fr;
  }
}

.map-district-card {
  padding: 1rem;
  background: var(--color-cream);
  border: 2.5px solid var(--color-outline);
  border-radius: 14px;
}

.map-district-card span {
  font-size: 1.4rem;
}

.map-district-card h3 {
  font-size: 1rem;
  margin: 0.25rem 0;
}

.map-district-card p {
  margin: 0;
  font-size: 0.88rem;
  color: var(--color-muted);
}

.map-poi-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.map-poi-item {
  display: flex;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  background: var(--color-white);
  border: 2.5px solid var(--color-outline);
  border-radius: 14px;
}

.map-poi-item span {
  font-size: 1.4rem;
}

.map-poi-item strong {
  display: block;
  font-family: var(--font-display);
}

.map-poi-item p {
  margin: 0.2rem 0 0;
  font-size: 0.88rem;
  color: var(--color-muted);
}

.map-steps {
  padding-left: 1.25rem;
  line-height: 1.65;
}

.map-phase-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 768px) {
  .map-phase-grid {
    grid-template-columns: 1fr;
  }
}

.map-phase-card {
  padding: 1rem;
  border: 3px solid var(--color-outline);
  border-radius: 16px;
}

.map-phase-card--day {
  background: var(--color-mint);
}

.map-phase-card--ea {
  background: var(--color-lavender);
}

.map-phase-card h3 {
  font-size: 0.95rem;
  margin: 0 0 0.5rem;
}

.map-phase-card ul {
  margin: 0;
  padding-left: 1.1rem;
  font-size: 0.88rem;
}

.map-faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.map-faq-item {
  padding: 1rem;
  background: color-mix(in srgb, var(--color-sky) 30%, var(--color-white));
  border: 2.5px solid var(--color-outline);
  border-radius: 14px;
}

.map-faq-item h3 {
  font-size: 0.95rem;
  margin: 0 0 0.35rem;
}

.map-faq-item p {
  margin: 0;
  font-size: 0.9rem;
}

.map-related a {
  font-weight: 700;
}

.map-trust-footer {
  font-size: 0.82rem;
  color: var(--color-muted);
  padding-top: 1rem;
  border-top: 2px solid var(--color-outline);
}
</style>
