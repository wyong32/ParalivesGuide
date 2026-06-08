<template>
  <article class="build-page">
    <PageHero
      title-id="build-title"
      :title="pageH1"
      eyebrow="Lot building"
      variant="tool"
      quick-answer="EA launch includes a color wheel, grid-optional walls (straight, curved, angled), split levels, multi-floor shells, resize, stairs, roofs, fences, and terrain sculpting. Pools, basements, and doors on curved walls are on the during-EA roadmap."
      meta-note=""
      stamp-src="/images/start-04.webp"
      stamp-alt="Build Mode starter home on a Melino lot"
      stamp-caption="Build snapshot"
      :breadcrumbs="buildCrumbs"
    />

    <div class="build-body">
      <div class="container build-main">
        <section class="build-section">
          <h2>Day-one tools</h2>
          <p>
            Build Mode covers one lot at a time — not whole-town editing. Catalog tabs split shell work, room
            furnishing, and terrain. Deeper tool notes live on the
            <RouterLink to="/wiki/build-tools">Build wiki</RouterLink>.
          </p>
          <ul class="build-bullet-list">
            <li><strong>Walls</strong> — full, half, invisible; straight, curved, or angled; optional grid.</li>
            <li><strong>Split levels</strong> — platforms at varied heights; stairs auto-fit tall steps.</li>
            <li><strong>Color &amp; resize</strong> — RGB on most surfaces and furniture; stretch tables, sofas, decor.</li>
            <li><strong>Terrain</strong> — raise, lower, smooth, flatten before heavy planting when you can.</li>
          </ul>
          <aside class="build-callout build-callout--warn">
            <strong>EA gap:</strong> doors and windows do not sit on curved walls yet — plan straight door bays.
          </aside>
        </section>

        <section class="build-section">
          <h2>First home workflow</h2>
          <ol class="build-steps">
            <li>Sculpt terrain, then sketch walls and floor heights.</li>
            <li>Roof and stairs before a decor binge.</li>
            <li>Place bed, toilet, and food prep — Live Mode needs matter more than showcase rooms.</li>
            <li>Full new-save loop: <RouterLink to="/how-to-play">How to Play</RouterLink>.</li>
          </ol>
        </section>

        <section class="build-section">
          <h2>Build costs (Paradimes)</h2>
          <p>
            Meter charges from extracted EA defaults —
            <RouterLink to="/wiki/careers/economy">economy wiki</RouterLink> for full tables.
          </p>
          <table class="build-cost-table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in buildCosts" :key="row.item">
                <th scope="row">{{ row.item }}</th>
                <td>{{ row.rate }}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section class="build-section">
          <h2>Launch vs during EA</h2>
          <div class="build-phase-grid">
            <article class="build-phase-card build-phase-card--day">
              <h3>Day one</h3>
              <ul>
                <li v-for="item in launchFeatures" :key="item">{{ item }}</li>
              </ul>
            </article>
            <article class="build-phase-card build-phase-card--ea">
              <h3>During EA</h3>
              <ul>
                <li v-for="item in roadmapFeatures" :key="item">{{ item }}</li>
              </ul>
            </article>
          </div>
          <p>Track changes on <RouterLink to="/updates">Updates</RouterLink>. Workshop furniture: <RouterLink to="/mods">Mods</RouterLink>.</p>
        </section>

        <section class="build-section">
          <h2>FAQ</h2>
          <div class="build-faq-list">
            <article v-for="item in faq" :key="item.q" class="build-faq-item">
              <h3>{{ item.q }}</h3>
              <p>{{ item.a }}</p>
            </article>
          </div>
        </section>

        <footer class="build-trust-footer">
          Unofficial site — confirm costs and tools in your own client after Steam patches.
        </footer>
      </div>
    </div>
  </article>
</template>

<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import { getPageH1 } from '@/seo/pageKeywords.js'

const pageH1 = getPageH1('build')
const buildCrumbs = [{ to: '/', label: 'Home' }, { label: 'Build' }]

const buildCosts = [
  { item: 'Terrain sculpt', rate: '$5 / m²' },
  { item: 'Walls', rate: '$1 / m²' },
  { item: 'Platforms', rate: '$25 / m²' },
]

const launchFeatures = [
  'Color wheel',
  'Curved & angled walls, optional grid',
  'Split levels, multi-floor, move walls',
  'Resize, stairs, roofs, fences',
  'Terrain sculpting',
]

const roadmapFeatures = [
  'Pools, lakes, ponds',
  'Basements',
  'Doors/windows on curved walls',
  'Advanced roofs & stairs',
  'Town editing tools',
]

const faq = [
  {
    q: 'Is Build Mode gridless?',
    a: 'Walls can place at flexible angles with optional grid snapping — not locked to 90° only.',
  },
  {
    q: 'What drains a starter budget fastest?',
    a: 'Large terraforming and split-level platforms. Flat shells and modest sculpting are safer first passes.',
  },
  {
    q: 'Where is the full tool appendix?',
    a: 'See the Build tools wiki for catalog tabs, Workshop notes, and phase lists.',
  },
]
</script>

<style scoped>
.build-body {
  padding: 2.5rem 0 4rem;
}

.build-section {
  margin-bottom: 2.5rem;
}

.build-section h2 {
  font-family: var(--font-display);
  font-size: 1.35rem;
  margin-bottom: 0.75rem;
}

.build-section p {
  line-height: 1.65;
  margin-bottom: 0.85rem;
}

.build-bullet-list,
.build-steps {
  margin: 0.75rem 0;
  padding-left: 1.25rem;
  line-height: 1.65;
}

.build-callout {
  margin-top: 1rem;
  padding: 0.9rem 1rem;
  background: var(--color-peach);
  border: 3px solid var(--color-outline);
  border-radius: 14px;
  font-size: 0.9rem;
}

.build-cost-table {
  width: 100%;
  border-collapse: collapse;
  border: 3px solid var(--color-outline);
  border-radius: 14px;
  overflow: hidden;
  font-size: 0.9rem;
}

.build-cost-table th,
.build-cost-table td {
  padding: 0.65rem 0.85rem;
  border-bottom: 2px solid color-mix(in srgb, var(--color-outline) 35%, transparent);
  text-align: left;
}

.build-cost-table thead th {
  background: var(--color-mint);
}

.build-cost-table tbody th {
  background: var(--color-cream);
}

.build-phase-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1rem 0;
}

@media (max-width: 768px) {
  .build-phase-grid {
    grid-template-columns: 1fr;
  }
}

.build-phase-card {
  padding: 1rem;
  border: 3px solid var(--color-outline);
  border-radius: 16px;
  box-shadow: 4px 4px 0 var(--color-outline);
}

.build-phase-card--day {
  background: var(--color-mint);
}

.build-phase-card--ea {
  background: var(--color-lavender);
}

.build-phase-card h3 {
  font-size: 0.95rem;
  margin: 0 0 0.5rem;
}

.build-phase-card ul {
  margin: 0;
  padding-left: 1.1rem;
  font-size: 0.88rem;
}

.build-faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.build-faq-item {
  padding: 1rem;
  background: var(--color-cream);
  border: 2.5px solid var(--color-outline);
  border-radius: 14px;
}

.build-faq-item h3 {
  font-size: 0.95rem;
  margin: 0 0 0.35rem;
}

.build-faq-item p {
  margin: 0;
  font-size: 0.9rem;
}

.build-trust-footer {
  font-size: 0.82rem;
  color: var(--color-muted);
  padding-top: 1rem;
  border-top: 2px solid var(--color-outline);
}
</style>
