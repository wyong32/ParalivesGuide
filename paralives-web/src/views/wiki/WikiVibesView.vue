<template>
  <WikiCategoryShell
    title="Paralives Vibes — temperament and mood bias"
    lead="Eight launch vibes with distinct social and skill flavour. Not the same as talents or stat points — think long-term mood habits."
  >
    <div class="wiki-prose">
      <h2>Vibes shape everyday rhythm</h2>
      <p>
        A vibe is temperament, not decoration. It influences which
        <a href="/wiki/emotions">emotions</a> surface, which
        <a href="/wiki/relationships">Together Cards</a> appear, how quickly certain
        <a href="/wiki/skills">skills</a> advance, and how bonds form over time. Even without player commands, idle
        animations reflect mood — a handy way to read household energy when you pause Live Mode.
      </p>
      <p>
        You select <strong>one vibe</strong> at creation. Personality points earned from wants and goals can later add
        a second vibe or evolve the first — preview builds showed Serious Parafolks branching into Studious or
        Hardworking after enough points accumulated.
      </p>

      <h2>Day-one roster and post-launch additions</h2>
      <p>
        Five vibes target the May 25, 2026 Early Access launch. Three others — Anxious, Grumpy, and Peaceful — were
        deferred until needs and social interactions are fully wired. Expect the long-term vibe list to expand across
        the planned two-year EA period.
      </p>
    </div>

    <table class="wiki-data-table">
      <thead>
        <tr>
          <th scope="col">Icon</th>
          <th scope="col">Vibe</th>
          <th scope="col">Play feel</th>
          <th scope="col">When</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="v in vibeTable" :key="v.name">
          <td>
            <img
              class="wiki-table-icon"
              :src="`/images/wiki/vibes/${v.icon}`"
              :alt="`${v.name} vibe icon`"
              width="40"
              height="40"
              loading="lazy"
            />
          </td>
          <th scope="row">{{ v.name }}</th>
          <td>{{ v.feel }}</td>
          <td>
            <span class="wiki-badge" :class="v.statusClass">{{ v.status }}</span>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="wiki-prose">
      <h2>Planning around Jester Parafolks</h2>
      <p>
        Most Parafolks only see the fun need bar after long tasks trigger boredom. Jesters feel boredom sooner and may
        display fun needs more frequently. Households with a Jester should schedule breaks, outings, hobbies, or social
        time so they are not grinding through chores while everyone else stays comfortable.
      </p>

      <h2>Serious — the confirmed evolution path</h2>
      <p>
        Serious is the only launch vibe with a publicly demonstrated fork (Studious or Hardworking). Other day-one vibes
        lack confirmed branches — treat unofficial evolution charts as provisional until patch notes confirm them.
      </p>

      <h2>Custom vibes and save hygiene</h2>
      <p>
        Workshop supports custom vibes. After a Steam update, disable vibe mods if emotions or wants behave oddly. Our
        <a href="/updates">roadmap page</a> separates day-one social features from later EA additions.
      </p>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const vibeTable = [
  {
    name: 'Energetic',
    icon: 'Vibe-Energetic.png',
    feel: 'Upbeat, movement-heavy days. Good for active legacies and town wandering.',
    status: 'Launch',
    statusClass: 'wiki-badge--day',
  },
  {
    name: 'Gloomy',
    icon: 'Vibe-Gloomy.png',
    feel: 'Lower moods show up more — strong for melancholy story play, harder to keep everyone cheery.',
    status: 'Launch',
    statusClass: 'wiki-badge--day',
  },
  {
    name: 'Jester',
    icon: 'Vibe-Jester.png',
    feel: 'Humor-forward; fun need is a bigger deal. Schedule breaks.',
    status: 'Launch',
    statusClass: 'wiki-badge--day',
  },
  {
    name: 'Overjoyed',
    icon: 'Vibe-Overjoyed.png',
    feel: 'Positive emotions land easier — helpful for social and career momentum.',
    status: 'Launch',
    statusClass: 'wiki-badge--day',
  },
  {
    name: 'Serious',
    icon: 'Vibe-Serious.png',
    feel: 'Can evolve into Studious or Hardworking with personality points.',
    status: 'Launch',
    statusClass: 'wiki-badge--day',
  },
  {
    name: 'Anxious',
    icon: 'Vibe-Anxious.png',
    feel: 'Still being wired to needs and social — expect tweaks when it arrives.',
    status: 'After launch',
    statusClass: 'wiki-badge--ea',
  },
  {
    name: 'Grumpy',
    icon: 'Vibe-Grumpy.png',
    feel: 'Sour-edge storytelling; not in the day-one roster.',
    status: 'After launch',
    statusClass: 'wiki-badge--ea',
  },
  {
    name: 'Peaceful',
    icon: 'Vibe-Peaceful.png',
    feel: 'Calmer temperament once mechanics are done.',
    status: 'After launch',
    statusClass: 'wiki-badge--ea',
  },
]
</script>
