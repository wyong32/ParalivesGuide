<template>
  <WikiCategoryShell
    title="Paralives Skills — leveling basics for Live Mode"
    lead="Everyday progression to level 20, plus Knowledge families that make the second instrument cheaper to learn."
  >
    <div class="wiki-prose">
      <h2>What skills actually measure</h2>
      <p>
        Skills track how capable a Para is at specific activities — cooking, guitar, exercise, and whatever your
        current patch includes. You improve them by repeating the action in Live Mode with the right objects. Nothing
        in previews suggests a hard limit on how many skills one character can maintain.
      </p>
      <p>
        Careers evaluate skills through
        <a href="/wiki/careers">application points</a>, yet many skills exist purely for home life and hobbies. A
        balanced household trains beyond the job posting minimums.
      </p>

      <aside class="wiki-skills-cta" aria-label="Skill leveling and Knowledge tables">
        <span class="wiki-skills-cta-eyebrow">Full skill list</span>
        <p class="wiki-skills-cta-desc">
          Looking for the complete skill list, XP tuning notes, and which jobs care about each skill? We split that into a
          companion page so this basics page stays easy to scan on mobile.
        </p>
        <a class="btn btn-primary wiki-skills-cta-btn" href="/wiki/skills/leveling">Skill leveling &amp; Knowledge →</a>
      </aside>

      <h2>Level 20 cap and progress arrows</h2>
      <p>
        Individual skills currently cap at <strong>level 20</strong>. Practice fills the bar; white arrows indicate
        whether learning is brisk or sluggish in the moment. The team has noted that
        <strong>not every level grants a reward yet</strong> — some tiers are placeholders during Early Access. Do
        not expect level 15 to always unlock a recipe or animation.
      </p>
      <p>
        Mundane actions can still grant skill ticks. Running downstairs has been shown to briefly advance exercising —
        useful if you prefer organic growth over dedicated grind blocks.
      </p>

      <h2>How Knowledge families work</h2>
      <p>
        Knowledge groups related skills under one umbrella. Music Knowledge does not mean “plays piano” — it means
        “understands music.” Training guitar accelerates piano and the next instrument. Technology Knowledge supports
        software work even when individual desk skills are not maxed.
      </p>
      <p>
        Knowledge is not performed like a daily activity. It runs passively, boosting sibling skills and sometimes
        padding job applications when you miss one listed requirement but excel in the broader field.
      </p>

      <h2>Friction during practice</h2>
      <p>
        Paramaker <a href="/wiki/talents">talent</a> choices still matter — Food talent pairs naturally with Cooking.
        Ignored <a href="/wiki/needs-wants">needs</a> drag mood and slow practice; address hunger or sleep before a
        long creative session if arrows look weak. Emotions work both ways — workplace stress hampers grinding, and
        repeated failures can feed stress back.
      </p>

      <h2>Younger Parafolks and risky tasks</h2>
      <p>
        Toddlers and children do not reach adult skill ceilings, especially for physical activities. Hazardous kitchen
        work is intended under supervision or via group commands, not solo child cooking. Use multiselect family
        cooking if you role-play safety rules.
      </p>
    </div>

    <h2 class="wiki-section-heading">Skills seen in previews so far</h2>
    <p class="wiki-table-note">
      This is not the final EA roster — some skills remain shelved until supporting gameplay ships.
    </p>
    <table class="wiki-data-table">
      <thead>
        <tr>
          <th scope="col">Skill</th>
          <th scope="col">Knowledge</th>
          <th scope="col">Player notes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="s in skillRows" :key="s.name">
          <th scope="row">{{ s.name }}</th>
          <td>{{ s.knowledge }}</td>
          <td>{{ s.note }}</td>
        </tr>
      </tbody>
    </table>

    <div class="wiki-prose">
      <h2>Skills arriving later in EA</h2>
      <p>
        Gardening and fishing appear on the during-EA Live Mode roadmap, not the day-one build. Their arrival should
        bring new outdoor skills and practice objects. Check our <a href="/updates">updates page</a> for the official
        timeline if you are planning a farm household at launch.
      </p>

      <h2>Workshop skill mods</h2>
      <p>
        Mods can add skills, but they must fit an existing Knowledge family — creating a wholly new Knowledge category
        requires deeper tooling. Details on our <a href="/wiki/modding">modding</a> page.
      </p>

      <p class="wiki-skills-cta-tail">
        Ready for the full skill tables and job cross-check?
        Continue to <a href="/wiki/skills/leveling"><strong>Levels, Knowledge &amp; Talents</strong></a>
        — it follows the same Live Mode rules outlined above.
      </p>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const skillRows = [
  {
    name: 'Cooking',
    knowledge: 'Food',
    note: 'Day-one meals at home; Food talent speeds the bar. Core for hunger management.',
  },
  {
    name: 'Guitar',
    knowledge: 'Music',
    note: 'Classic cross-training example — feeds Music Knowledge for other instruments.',
  },
  {
    name: 'Piano',
    knowledge: 'Music',
    note: 'Easier if someone in the house already built Music Knowledge.',
  },
  {
    name: 'Graphic Design',
    knowledge: 'Art / Technology',
    note: 'Shown in development streams; pair with desk careers when postings appear.',
  },
  {
    name: 'Exercising',
    knowledge: 'Fitness',
    note: 'Physical grind; watch hygiene after workouts. Life-stage limits for kids.',
  },
  {
    name: 'Running',
    knowledge: 'Fitness',
    note: 'Can tick from everyday movement, not only gym objects.',
  },
  {
    name: 'More in development',
    knowledge: 'Varies',
    note: 'The team has teased additional skills and Knowledge types still being slotted.',
  },
]
</script>

<style scoped>
.wiki-skills-appendix-titles-line {
  margin: 1.25rem 0 0.75rem;
  font-family: var(--font-display);
  font-size: clamp(1.05rem, 2.2vw, 1.28rem);
  font-weight: 800;
  line-height: 1.3;
  color: var(--color-ink);
}

.wiki-skills-cta {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin: 0 0 1.85rem;
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

.wiki-skills-cta-eyebrow {
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

.wiki-skills-cta-desc {
  margin: 0 0 0.15rem;
  font-size: 1.02rem;
  line-height: 1.55;
  color: var(--color-ink-muted);
  max-width: none;
}

.wiki-skills-cta-btn {
  align-self: flex-start;
  margin-top: 0.35rem;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.65rem 1.25rem;
}

.wiki-skills-cta-tail {
  margin-top: 0;
  font-size: 0.98rem;
  color: var(--color-ink-muted);
}

@media (max-width: 768px) {
  .wiki-skills-cta-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
