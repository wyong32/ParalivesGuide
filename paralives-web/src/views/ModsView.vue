<template>
  <article class="mods-page">
    <PageHero
      title-id="mods-title"
      :title="pageH1"
      eyebrow="Workshop picks"
      variant="mods"
      quick-answer="EA ships in-game mod tools and Steam Workshop. You need Paralives in your Steam library to subscribe and download — then manage packs from the game’s Mod menu or the Workshop hub."
      meta-note=""
      stamp-src="/images/guides/guide02.webp"
      stamp-alt="Workshop tattoo preview on Parafolks"
      stamp-caption="Workshop CC"
      :breadcrumbs="modsCrumbs"
    />

    <div class="mods-body">
      <div class="container mods-main">
        <aside class="mods-callout mods-callout--must-own" role="note">
          <strong>You must own Paralives on Steam.</strong>
          Workshop subscribe and download are locked to accounts with the game in their library. Without a license you
          may see the hub but cannot install packs — buy or wishlist on
          <a href="https://store.steampowered.com/app/1118520/Paralives/" rel="noopener noreferrer" target="_blank"
            >Steam</a
          >
          first, then return here for links.
        </aside>

        <section class="mods-section">
          <h2>Install (Steam Workshop)</h2>
          <ol class="mods-steps">
            <li v-for="(step, index) in modInstallSteps" :key="index">{{ step }}</li>
          </ol>
        </section>

        <section class="mods-section">
          <h2>What you will see on Workshop</h2>
          <p>Categories shift as creators publish; these three show up constantly in EA:</p>
          <ul class="mods-cat-list">
            <li v-for="cat in workshopCategories" :key="cat.label">
              <strong>{{ cat.label }}</strong> — {{ cat.note }}
            </li>
          </ul>
        </section>

        <section class="mods-section">
          <h2>Picks we actually subscribe to</h2>
          <p>
            Handful of mods we keep enabled on test saves — each link goes straight to Steam. Subscription counts change
            daily; read the Workshop page and recent comments before you rely on a pack for a long legacy.
          </p>
          <ul class="mods-pick-list">
            <li v-for="mod in featuredPicks" :key="mod.id" class="mods-pick-item mods-pick-item--featured">
              <span class="mods-pick-emoji" aria-hidden="true">{{ mod.emoji }}</span>
              <div class="mods-pick-body">
                <div class="mods-pick-head">
                  <h3>{{ mod.title }}</h3>
                  <span class="mods-pick-tag">{{ mod.category }}</span>
                </div>
                <p>{{ mod.note }}</p>
                <a
                  :href="mod.workshopUrl"
                  class="mods-workshop-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Open on Steam Workshop ↗
                </a>
              </div>
            </li>
          </ul>
        </section>

        <section class="mods-section">
          <h2>More worth a subscribe</h2>
          <p>Build, household, and move-in shells — same rules: check patch comments, backup saves for gameplay edits.</p>
          <ul class="mods-pick-list">
            <li v-for="mod in morePicks" :key="mod.id" class="mods-pick-item">
              <span class="mods-pick-emoji" aria-hidden="true">{{ mod.emoji }}</span>
              <div class="mods-pick-body">
                <div class="mods-pick-head">
                  <h3>{{ mod.title }}</h3>
                  <span class="mods-pick-tag">{{ mod.category }}</span>
                </div>
                <p>{{ mod.note }}</p>
                <a
                  :href="mod.workshopUrl"
                  class="mods-workshop-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Open on Steam Workshop ↗
                </a>
              </div>
            </li>
          </ul>
        </section>

        <section class="mods-section">
          <h2>After every EA patch</h2>
          <ul class="mods-bullet-list">
            <li>Back up the save folder before enabling new gameplay mods.</li>
            <li>Skim Workshop comments on your must-have packs — unsubscribe broken ones until updated.</li>
            <li>Toggle suspects off in the in-game mod list and test on a throwaway household.</li>
            <li>Studio tool and policy context:
              <RouterLink to="/wiki/modding">Mods &amp; Workshop wiki</RouterLink>.</li>
          </ul>
        </section>

        <section class="mods-section">
          <h2>FAQ</h2>
          <div class="mods-faq-list">
            <article v-for="item in modsFaq" :key="item.q" class="mods-faq-item">
              <h3>{{ item.q }}</h3>
              <p>{{ item.a }}</p>
            </article>
          </div>
        </section>

        <section class="mods-section mods-related">
          <p>
            <RouterLink to="/wiki/modding">Modding policy</RouterLink> ·
            <RouterLink to="/build">Build Mode</RouterLink> ·
            <RouterLink to="/map">Melino map</RouterLink> ·
            <RouterLink to="/updates">EA roadmap</RouterLink>
          </p>
        </section>

        <footer class="mods-trust-footer">
          Unofficial fan notes — Paralives Studio does not maintain this list. Trust your installed build and Workshop
          pages over any third-party roundup.
        </footer>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import PageHero from '@/components/layout/PageHero.vue'
import { getPageH1 } from '@/seo/pageKeywords.js'
import {
  WORKSHOP_HUB_URL,
  modInstallSteps,
  modPicks,
  modsFaq,
  workshopCategories,
} from '@/data/mods.js'
import { getCanonicalOrigin, resolveCanonicalUrl } from '@/seo/documentMeta.js'
import { seoConfig } from '@/seo/config.js'

const pageH1 = getPageH1('mods')
const modsCrumbs = [{ to: '/', label: 'Home' }, { label: 'Mods' }]
const PAGE_URL = resolveCanonicalUrl('/mods')
const SITE_ORIGIN = getCanonicalOrigin()

const featuredPicks = computed(() => modPicks.filter((m) => m.featured))
const morePicks = computed(() => modPicks.filter((m) => !m.featured))

function injectJsonLd() {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.id = 'mods-page-jsonld'
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: PAGE_URL,
    name: 'Paralives Mods — Steam Workshop Picks',
    description:
      'How to install Paralives mods via Steam Workshop, ownership requirement, and a short hand-picked mod list with direct links.',
    dateModified: '2026-06-05',
    isPartOf: { '@type': 'WebSite', name: seoConfig.siteName, url: SITE_ORIGIN + '/' },
  })
  document.head.appendChild(script)
}

onMounted(() => injectJsonLd())
onUnmounted(() => document.getElementById('mods-page-jsonld')?.remove())
</script>

<style scoped>
.mods-body {
  padding: 2.5rem 0 4rem;
}

.mods-section {
  margin-bottom: 2.5rem;
}

.mods-section h2 {
  margin-bottom: 0.75rem;
}

.mods-callout {
  margin-bottom: 2rem;
  padding: 1rem 1.15rem;
  border: 3px solid var(--color-outline);
  border-radius: 16px;
  font-size: 0.92rem;
  line-height: 1.55;
  box-shadow: 4px 4px 0 var(--color-outline);
}

.mods-callout--must-own {
  background: var(--color-sunny);
}

.mods-steps {
  margin: 1rem 0;
  padding-left: 1.25rem;
}

.mods-steps li {
  margin-bottom: 0.6rem;
}

.mods-cat-list,
.mods-bullet-list {
  margin: 1rem 0;
  padding-left: 1.25rem;
}

.mods-cat-list li,
.mods-bullet-list li {
  margin-bottom: 0.55rem;
}

.mods-pick-list {
  list-style: none;
  padding: 0;
  margin: 1.25rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mods-pick-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  padding: 1.15rem 1.2rem;
  background: var(--color-white);
  border: 3px solid var(--color-outline);
  border-radius: 18px;
  box-shadow: 5px 5px 0 var(--color-outline);
}

.mods-pick-item--featured {
  background: var(--color-mint);
}

.mods-pick-emoji {
  font-size: 1.5rem;
  line-height: 1;
  padding-top: 0.15rem;
}

.mods-pick-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 0.75rem;
  margin-bottom: 0.35rem;
}

.mods-pick-head h3 {
  margin: 0;
  font-size: 1.05rem;
}

.mods-pick-tag {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.15rem 0.5rem;
  background: var(--color-lavender);
  border: 2px solid var(--color-outline);
  border-radius: 999px;
}

.mods-pick-body p {
  margin: 0 0 0.65rem;
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--color-text);
}

.mods-workshop-link {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.88rem;
}

.mods-faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.mods-faq-item {
  padding: 1rem 1.1rem;
  background: rgba(213, 192, 245, 0.35);
  border: 2.5px solid var(--color-outline);
  border-radius: 14px;
}

.mods-faq-item h3 {
  margin: 0 0 0.4rem;
  font-size: 0.98rem;
}

.mods-faq-item p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
}

.mods-related {
  font-size: 0.9rem;
}

.mods-trust-footer {
  margin-top: 2rem;
  padding-top: 1.25rem;
  border-top: 2px dashed var(--color-outline);
  font-size: 0.82rem;
  color: var(--color-muted);
}
</style>
