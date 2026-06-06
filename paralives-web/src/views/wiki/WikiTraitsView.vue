<template>
  <WikiCategoryShell
    title="Paralives Stats — lifestyles and social perks"
    lead="Seven Paramaker points across four stats, optional lifestyles, and one social perk slot — max three per column."
  >
    <div class="wiki-prose">
      <h2>Several systems, one personality</h2>
      <p>
        Many life sims pack traits into a single list. Paralives spreads identity across
        <strong>stats</strong>, a <strong>vibe</strong>, a <strong>talent</strong>, a
        <strong>social perk</strong>, and optional <strong>lifestyles</strong>. The EA feature sheet labels the full
        set “personality traits,” which can mislead newcomers expecting one screen — you are configuring multiple
        layers that interact in Live Mode.
      </p>
      <p>
        Creation choices are not permanent. Completing
        <a href="/wiki/needs-wants">wants</a> and
        <a href="/wiki/needs-wants">goals</a> earns personality points you can spend to evolve vibes, strengthen
        talents, or unlock additional social perks during a save.
      </p>

      <h2>Stat points — seven across four categories</h2>
      <p>
        Adult previews allocate <strong>seven points</strong> among Physique, Mind, Creativity, and Charisma. Each stat
        accepts zero to three points (one per stat is a common default). Other life stages may receive different
        budgets once Paramaker fully supports them.
      </p>
      <p>
        Stats influence skill pacing, want suggestions, and occasionally job applications when skill levels lag. Build
        around your story — high Charisma for social legacies, high Mind for analytical careers — then align vibe and
        talent picks.
      </p>
    </div>

    <table class="wiki-data-table">
      <thead>
        <tr>
          <th scope="col">Stat</th>
          <th scope="col">What it shapes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="s in statRows" :key="s.name">
          <th scope="row">{{ s.name }}</th>
          <td>{{ s.desc }}</td>
        </tr>
      </tbody>
    </table>

    <div class="wiki-prose">
      <h2>Lifestyles — quiet autopilot rules</h2>
      <p>
        Lifestyles are optional tags that bias autonomous behavior when you are hands-off. Combinations work — a
        vegetarian night owl is perfectly valid. Configure them in Paramaker alongside stat distribution.
      </p>
    </div>

    <table class="wiki-data-table">
      <thead>
        <tr>
          <th scope="col">Lifestyle</th>
          <th scope="col">Choices</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="l in lifestyles" :key="l.name">
          <th scope="row">{{ l.name }}</th>
          <td>{{ l.options }}</td>
        </tr>
      </tbody>
    </table>

    <div class="wiki-prose">
      <p>
        <strong>Night Owl</strong> adjusts hunger and sleep timing so roommates may sync meal and bedtime rhythms.
        Neat, Normal, and Dirty cleaning habits change how quickly mess becomes uncomfortable. Vegetarian is binary —
        autonomy honors it when suitable meals exist.
      </p>
      <p>
        Certain lifestyles and high stats can add cartridges to specific need bars, so two Parafolks sharing a lot may
        experience different daily pressure even with identical furniture.
      </p>

      <h2>What children do not inherit</h2>
      <p>
        Stats, vibes, talents, social perks, and lifestyles reflect player choices — not parent DNA. Genetics cover
        appearance only. Read <a href="/wiki/parafolks">Parafolks &amp; genetics</a> for what passes between
        generations.
      </p>

      <div class="wiki-callout">
        Additional personality options are likely across Early Access. Trait mods will expand once Workshop tools
        stabilize — review <a href="/wiki/modding">modding</a> guidance before loading custom packs on a legacy
        save.
      </div>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const statRows = [
  {
    name: 'Physique',
    desc: 'Strength, agility, health. Zero points is allowed — not everyone is athletic.',
  },
  {
    name: 'Mind',
    desc: 'Logic, problem solving, math-y tasks. Helps analytical jobs and focused hobbies.',
  },
  {
    name: 'Creativity',
    desc: 'Artistic bent. Pairs with creative skills and decor-heavy play.',
  },
  {
    name: 'Charisma',
    desc: 'Communication and leadership. Social careers and Together Card success lean here.',
  },
]

const lifestyles = [
  { name: 'Vegetarian', options: 'On or off' },
  { name: 'Cleaning habits', options: 'Neat · Normal · Dirty' },
  { name: 'Sleep schedule', options: 'Early Bird · Normal · Night Owl' },
]
</script>
