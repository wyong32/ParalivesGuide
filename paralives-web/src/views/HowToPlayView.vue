<template>
  <article class="play-page">
    <PageHero
      title-id="play-title"
      :title="pageH1"
      eyebrow="New save guide"
      variant="tool"
      quick-answer="Steam Early Access on PC/Mac (since May 25, 2026). Typical loop: Paramaker → Build on your lot → Live in Melino. Single-player; offline after install."
      reviewed="2026-06-05"
      reviewed-label="June 5, 2026"
      :meta-links="devMetaLink"
      stamp-src="/images/start-01.webp"
      stamp-alt="Choosing a lot in Melino for a new household"
      stamp-caption="First evening"
      :breadcrumbs="playCrumbs"
    />

    <div class="play-body">
      <div class="container">
        <section class="play-section">
          <h2>Three modes</h2>
          <p>You will bounce between these constantly — each has a job, none replaces the others.</p>
          <div class="play-mode-grid">
            <article v-for="mode in gameModes" :key="mode.name" class="play-mode-card">
              <span aria-hidden="true">{{ mode.emoji }}</span>
              <h3>{{ mode.name }}</h3>
              <p class="play-mode-lead">{{ mode.lead }}</p>
              <p>{{ mode.note }}</p>
            </article>
          </div>
        </section>

        <section class="play-section">
          <h2>New save order</h2>
          <p>Public dev materials suggest this flow — adjust if you are builder-first or importing a Workshop household.</p>
          <ol class="play-steps">
            <li v-for="step in newSaveSteps" :key="step">{{ step }}</li>
          </ol>
          <aside class="play-callout">
            <strong>Starter tip:</strong> one or two Parafolks until needs and bills click. Paramaker depth:
            <RouterLink to="/wiki/parafolks">Parafolks wiki</RouterLink>.
          </aside>
        </section>

        <section class="play-section">
          <h2>First evening checklist</h2>
          <p>After move-in, tick these before you call it a night — saves you rerolling tomorrow.</p>
          <ul class="play-checklist">
            <li v-for="goal in firstSessionGoals" :key="goal">{{ goal }}</li>
          </ul>
        </section>

        <section class="play-section">
          <h2>Work &amp; money</h2>
          <p>
            Jobs pay the Build habit. Alex Massé’s public career posts describe sideways growth — not one straight ladder.
          </p>
          <ul class="play-bullet-list">
            <li v-for="item in workBasics" :key="item">{{ item }}</li>
          </ul>
          <p>
            <RouterLink to="/wiki/careers">Careers wiki</RouterLink> ·
            <RouterLink to="/map">Melino map</RouterLink> (job boards) ·
            <RouterLink to="/wiki/careers/economy">Economy tables</RouterLink>
          </p>
        </section>

        <section class="play-section">
          <h2>EA reality check</h2>
          <ul class="play-warnings">
            <li v-for="note in eaReality" :key="note">{{ note }}</li>
          </ul>
          <p>Feature phases: <RouterLink to="/updates">Roadmap &amp; EA status</RouterLink>.</p>
        </section>

        <section class="play-section">
          <h2>System requirements</h2>
          <p>Last major public storefront tables (~late 2025). Match against your Steam listing after patches.</p>
          <div class="play-specs-grid">
            <article v-for="spec in systemSpecs" :key="spec.title" class="play-specs-card">
              <h3>{{ spec.title }}</h3>
              <ul>
                <li v-for="line in spec.items" :key="line">{{ line }}</li>
              </ul>
            </article>
          </div>
          <p class="play-store-note">
            EA price was $39.99 USD at launch, rising toward 1.0 — free content updates, no paid DLC roadmap per studio
            statements.
            <a href="https://store.steampowered.com/app/1118520/Paralives/" rel="noopener noreferrer" target="_blank"
              >Steam store</a
            >
          </p>
        </section>

        <section class="play-section">
          <h2>FAQ</h2>
          <div class="play-faq-list">
            <article v-for="item in howToPlayFaq" :key="item.q" class="play-faq-item">
              <h3>{{ item.q }}</h3>
              <p>{{ item.a }}</p>
            </article>
          </div>
        </section>

        <section class="play-section play-related">
          <p>
            <RouterLink to="/build">Build Mode</RouterLink> ·
            <RouterLink to="/cheats">Cheats</RouterLink> ·
            <RouterLink to="/mods">Mods</RouterLink> ·
            <RouterLink to="/wiki">All wiki topics</RouterLink>
          </p>
        </section>

        <footer class="play-trust-footer">
          Fan guide — if anything here disagrees with your installed build, trust the game client and developer posts.
        </footer>
      </div>
    </div>
  </article>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import PageHero from '@/components/layout/PageHero.vue'
import { getPageH1 } from '@/seo/pageKeywords.js'
import {
  eaReality,
  firstSessionGoals,
  gameModes,
  howToPlayFaq,
  newSaveSteps,
  systemSpecs,
  workBasics,
} from '@/data/howToPlay.js'
import { getCanonicalOrigin, resolveCanonicalUrl } from '@/seo/documentMeta.js'
import { seoConfig } from '@/seo/config.js'

const pageH1 = getPageH1('how-to-play')
const playCrumbs = [{ to: '/', label: 'Home' }, { label: 'How to Play' }]
const devMetaLink = [{ href: 'https://www.paralives.com/development', label: 'Official dev lists' }]
const PAGE_URL = resolveCanonicalUrl('/how-to-play')
const SITE_ORIGIN = getCanonicalOrigin()

function injectJsonLd() {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.id = 'how-to-play-jsonld'
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: PAGE_URL,
    name: 'How to Play Paralives — Early Access walkthrough',
    description: 'Player walkthrough for new Paralives saves: three modes, first-evening checklist, jobs, EA caveats, and system specs.',
    dateModified: '2026-06-05',
    isPartOf: { '@type': 'WebSite', name: seoConfig.siteName, url: SITE_ORIGIN + '/' },
  })
  document.head.appendChild(script)
}

onMounted(() => injectJsonLd())
onUnmounted(() => document.getElementById('how-to-play-jsonld')?.remove())
</script>

<style scoped>
.play-body {
  padding: 2.5rem 0 4rem;
}

.play-section {
  margin-bottom: 2.5rem;
}

.play-section h2 {
  font-family: var(--font-display);
  font-size: 1.35rem;
  margin-bottom: 0.75rem;
}

.play-section p {
  line-height: 1.65;
  margin-bottom: 0.85rem;
}

.play-mode-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .play-mode-grid {
    grid-template-columns: 1fr;
  }
}

.play-mode-card {
  padding: 1.1rem 1.15rem;
  background: var(--color-white);
  border: 3px solid var(--color-outline);
  border-radius: 16px;
  box-shadow: 4px 4px 0 var(--color-outline);
}

.play-mode-card:nth-child(1) {
  background: var(--color-lavender);
}
.play-mode-card:nth-child(2) {
  background: var(--color-sky);
}
.play-mode-card:nth-child(3) {
  background: var(--color-peach);
}

.play-mode-card span {
  font-size: 1.4rem;
}

.play-mode-card h3 {
  margin: 0.4rem 0 0.2rem;
  font-size: 1.05rem;
}

.play-mode-lead {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--color-muted);
  margin-bottom: 0.35rem;
}

.play-mode-card p:last-child {
  margin: 0;
  font-size: 0.9rem;
}

.play-steps,
.play-bullet-list,
.play-checklist {
  margin: 0.75rem 0;
  padding-left: 1.25rem;
  line-height: 1.65;
}

.play-checklist {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.play-checklist li {
  padding: 0.75rem 0.9rem 0.75rem 2.2rem;
  position: relative;
  background: color-mix(in srgb, var(--color-cream) 45%, var(--color-white));
  border: 2px solid color-mix(in srgb, var(--color-outline) 50%, transparent);
  border-radius: 12px;
  font-size: 0.92rem;
}

.play-checklist li::before {
  content: '☐';
  position: absolute;
  left: 0.75rem;
  font-weight: 700;
}

.play-callout {
  margin-top: 1rem;
  padding: 0.9rem 1rem;
  background: var(--color-sunny);
  border: 3px solid var(--color-outline);
  border-radius: 14px;
  font-size: 0.9rem;
}

.play-warnings {
  list-style: none;
  padding: 0;
  margin: 0.75rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.play-warnings li {
  padding: 0.8rem 1rem;
  border-left: 4px solid var(--color-coral);
  background: color-mix(in srgb, var(--color-peach) 22%, var(--color-white));
  border-radius: 0 10px 10px 0;
  font-size: 0.92rem;
  line-height: 1.55;
}

.play-specs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;
  margin: 1rem 0;
}

@media (max-width: 768px) {
  .play-specs-grid {
    grid-template-columns: 1fr;
  }
}

.play-specs-card {
  padding: 1rem;
  background: var(--color-cream);
  border: 2.5px solid var(--color-outline);
  border-radius: 14px;
}

.play-specs-card h3 {
  margin: 0 0 0.4rem;
  font-size: 0.9rem;
}

.play-specs-card ul {
  margin: 0;
  padding-left: 1rem;
  font-size: 0.86rem;
  line-height: 1.5;
  color: var(--color-muted);
}

.play-store-note {
  font-size: 0.88rem;
  color: var(--color-muted);
}

.play-faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.play-faq-item {
  padding: 1rem;
  background: var(--color-mint);
  border: 2.5px solid var(--color-outline);
  border-radius: 14px;
}

.play-faq-item h3 {
  font-size: 0.95rem;
  margin: 0 0 0.35rem;
}

.play-faq-item p {
  margin: 0;
  font-size: 0.9rem;
}

.play-related {
  font-size: 0.9rem;
}

.play-trust-footer {
  font-size: 0.82rem;
  color: var(--color-muted);
  padding-top: 1rem;
  border-top: 2px solid var(--color-outline);
}
</style>
