<template>
  <WikiCategoryShell
    title="Paralives Careers — jobs across Melino"
    lead="How rabbit-hole jobs connect to real lots, what Domains mean on job boards, and where to find the occupations list plus economy tables."
  >
    <div class="wiki-prose">
      <h2>Rabbit-hole careers on real lots</h2>
      <p>
        Early Access jobs are primarily <strong>rabbit-hole</strong> shifts: your Parafolk heads to an actual Melino
        workplace, then vanishes into the workday while you manage the household. Cafés, clinics, museums, and similar
        employers exist on the map even when interior walkthroughs are not available yet.
      </p>

      <div class="wiki-careers-cta-row">
        <aside class="wiki-careers-cta" aria-label="Jobs by workplace">
          <span class="wiki-careers-cta-eyebrow">Job titles</span>
          <p class="wiki-careers-cta-desc">
            Scan every occupation grouped by workplace type — handy when sketching a household before your first save
            load.
          </p>
          <a class="btn btn-primary wiki-careers-cta-btn" href="/wiki/careers/occupations">Jobs by workplace →</a>
        </aside>

        <aside class="wiki-careers-cta wiki-careers-cta--economy" aria-label="Economy and bills">
          <span class="wiki-careers-cta-eyebrow">Household money</span>
          <p class="wiki-careers-cta-desc">
            Starting funds, build-meter costs, bill cycles, shopping, museum payouts, and emergency expenses we tracked
            in our EA saves.
          </p>
          <a class="btn btn-primary wiki-careers-cta-btn" href="/wiki/careers/economy">Economy &amp; bills →</a>
        </aside>
      </div>

      <h2>Domains — browsing job boards</h2>
      <p>
        Postings sort under industry themes called <strong>Domains</strong>. A museum receptionist may appear under Art
        despite not painting daily. A waiter might surface under both Food and Service. Domains aid discovery — they do
        not perfectly describe every duty.
      </p>
    </div>

    <table class="wiki-data-table">
      <thead>
        <tr>
          <th scope="col">Domain</th>
          <th scope="col">Covers</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in domains" :key="d.name">
          <th scope="row">{{ d.name }}</th>
          <td>{{ d.theme }}</td>
        </tr>
      </tbody>
    </table>

    <div class="wiki-prose">
      <p class="wiki-careers-cta-tail">
        Prefer the full role list or the Paradimes breakdown first? Open
        <a href="/wiki/careers/occupations"><strong>Careers and Occupations</strong></a>
        or
        <a href="/wiki/careers/economy"><strong>Money, bills &amp; budget</strong></a>
        — both follow the rabbit-hole rules outlined above.
      </p>

      <h2>Applications use points, not perfection</h2>
      <p>
        Postings display skill requirements as <strong>application points</strong>. You need sufficient combined
        points across listed skills — not maximum level in every line. Certain jobs require a floor in one core skill.
        Shortfalls can be partially offset by Domain experience, and matching
        <a href="/wiki/traits">stats</a> may add points when skills trail.
      </p>
      <p>
        Train <a href="/wiki/skills">skills</a> and Knowledge <em>before</em> chasing senior postings. Landing a job
        does not guarantee readiness for the next tier.
      </p>

      <h2>Performance, strikes, and upgrade cards</h2>
      <p>
        Work performance weighs mood on shift, coworker relationships, skill growth, and related factors. Repeated poor
        shifts accumulate <strong>strikes</strong>; enough strikes trigger dismissal. Strong runs award upgrade points —
        open the career panel and choose among three cards:
      </p>
      <ul>
        <li><strong>Expertise</strong> — salary increase</li>
        <li><strong>Extra</strong> — skill progress or improved workplace relationships</li>
      </ul>
      <p>
        Some cards reference household savings (retirement perks, for instance). Two Parafolks sharing a job title may
        still draw different cards because the system reads personality and context.
      </p>

      <h2>No automatic promotion ladder</h2>
      <p>
        A nurse does not automatically become a doctor. Invest perks to grow as a nurse, then apply elsewhere when a
        doctor posting’s point threshold aligns. Switching employers within the same Domain is normal — moving from a
        starter café to a busier restaurant with better pay and perks, for example.
      </p>

      <h2>Schedules and temporary teleporting</h2>
      <p>
        Hiring offers preset hour and day choices. Multiple jobs coexist when schedules do not conflict; students may
        hold part-time roles when school permits. Currently a reminder appears, then Parafolks
        <strong>teleport to work</strong> — no late walking animations or absence penalties yet. Developers describe this
        as temporary until travel to physical buildings and tardiness consequences ship.
      </p>

      <h2>Household finances beyond paychecks</h2>
      <p>
        Electricity and lot bills arrive day one — review finances after major Build Mode spending. Bill timing, daycare
        charges, and museum rewards live in the
        <a href="/wiki/careers/economy">economy appendix</a>. Melino offers shops, restaurants, and a museum for
        long-term collections. Our <a href="/map">town map</a> helps plan first outings.
      </p>

      <h2>Fire risk at launch</h2>
      <p>
        Cooking and electronics can ignite house fires from day one. Stock extinguishers if Paras cook on autonomy.
      </p>

      <div class="wiki-callout">
        Deeper workplaces and expanded job rosters sit on the during-EA roadmap. Planning a career legacy? Review our
        <a href="/updates">updates page</a> to confirm what build one actually includes.
      </div>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const domains = [
  { name: 'Art', theme: 'Galleries, design, visual work' },
  { name: 'Education', theme: 'Teaching and childcare paths' },
  { name: 'Fitness', theme: 'Sports, coaching, physical jobs' },
  { name: 'Food', theme: 'Cooking and serving food' },
  { name: 'Healthcare', theme: 'Care and keeping Paras healthy' },
  { name: 'Maintenance', theme: 'Buildings, repairs, environment' },
  { name: 'Management', theme: 'Leading teams and daily ops' },
  { name: 'Music', theme: 'Instruments and performance' },
  { name: 'Science', theme: 'Research and lab-style work' },
  { name: 'Service', theme: 'Retail and customer help' },
  { name: 'Software development', theme: 'Code and computers' },
]
</script>

<style scoped>
.wiki-careers-appendix-titles-line {
  margin: 1.25rem 0 0.75rem;
  font-family: var(--font-display);
  font-size: clamp(1.05rem, 2.2vw, 1.28rem);
  font-weight: 800;
  line-height: 1.3;
  color: var(--color-ink);
}

.wiki-careers-appendix-titles-sep {
  color: var(--color-ink-muted);
  font-weight: 700;
}

.wiki-careers-cta-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 0 0 1.85rem;
  align-items: stretch;
}


.wiki-careers-cta {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin: 0;
  padding: 1.25rem 1.35rem 1.35rem;
  border-radius: var(--radius-lg);
  border: 3px solid var(--color-sage-dark);
  background: linear-gradient(
    145deg,
    color-mix(in srgb, var(--color-lemon) 72%, var(--color-white)) 0%,
    color-mix(in srgb, var(--color-mint) 48%, var(--color-white)) 52%,
    color-mix(in srgb, var(--color-peach) 35%, var(--color-white)) 100%
  );
  box-shadow:
    0 5px 0 color-mix(in srgb, var(--color-sage-dark) 22%, transparent),
    var(--shadow-card);
}

.wiki-careers-cta--economy {
  border-color: color-mix(in srgb, var(--color-coral-deep) 35%, var(--color-sage-dark));
  background: linear-gradient(
    145deg,
    color-mix(in srgb, var(--color-peach) 38%, var(--color-white)) 0%,
    color-mix(in srgb, var(--color-lemon) 55%, var(--color-white)) 48%,
    color-mix(in srgb, var(--color-mint) 52%, var(--color-white)) 100%
  );
}

.wiki-careers-cta-eyebrow {
  display: inline-block;
  width: fit-content;
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  font-family: var(--font-cartoon);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-sage-dark);
  background: color-mix(in srgb, var(--color-white) 78%, transparent);
  border: 2px dashed color-mix(in srgb, var(--color-sage) 45%, transparent);
}

.wiki-careers-cta-desc {
  margin: 0 0 0.15rem;
  font-size: 1.02rem;
  line-height: 1.55;
  color: var(--color-ink-muted);
  max-width: none;
}

.wiki-careers-cta-btn {
  align-self: flex-start;
  margin-top: 0.35rem;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.65rem 1.25rem;
}

.wiki-careers-cta-tail {
  margin-top: 0;
  font-size: 0.98rem;
  color: var(--color-ink-muted);
}

@media (max-width: 768px) {
  .wiki-careers-cta-row {
    grid-template-columns: 1fr;
  }

  .wiki-careers-cta-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
