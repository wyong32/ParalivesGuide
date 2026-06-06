<template>
  <WikiCategoryShell
    title="Paralives Talents — Paramaker specialties that stick"
    lead="One pick at creation that speeds matching skills. Jack-of-All-Trades and Good at Nothing are the oddballs — read before you commit."
  >
    <div class="wiki-prose">
      <h2>Your Paramaker specialty slot</h2>
      <p>
        Talents are a head start, not a gate. Any Parafolk can still train every
        <a href="/wiki/skills">skill</a> the game offers. Picking a talent mainly grants perks that make
        related activities feel smoother — quicker progress bars, stronger results, or unusual rules if you select the
        challenge option.
      </p>
      <p>
        Paramaker lets you assign <strong>one talent</strong> at creation and that is the only mandatory pick there.
        Children do <strong>not</strong> inherit a parent’s Music or Food talent; genetics cover appearance, not
        personality choices.
      </p>

      <h2>Growth across a long legacy</h2>
      <p>
        Completing <a href="/wiki/needs-wants">wants</a> and longer
        <a href="/wiki/needs-wants">goals</a> awards personality points — the same resource spent on
        <a href="/wiki/vibes">vibe</a> evolutions. Reinvest those points to strengthen your talent over time. Few
        talent evolution branches have been shown publicly so far (unlike Serious branching into Studious), yet the
        design clearly supports mid-save upgrades rather than a locked creation choice.
      </p>

      <h2>Choosing for your household plan</h2>
      <p>
        Align your talent with skills you expect to use early. Food pairs naturally with home cooking in family
        saves. Music rewards instrument practice and performance paths. Technology supports desk careers and software
        hobbies. Fitness suits active households — note that hygiene drains faster after exercise sessions.
      </p>
      <p>
        Jack-of-All-Trades fits experimental play where Parafolks dabble in many hobbies. Good at Nothing is
        deliberately punishing — it is a real option, not a typo, and unrelated to social perks whose names begin
        with “Good at…”.
      </p>
    </div>

    <table class="wiki-data-table wiki-talent-table">
      <thead>
        <tr>
          <th scope="col">Icon</th>
          <th scope="col">Talent</th>
          <th scope="col">What players usually build around</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in talents" :key="t.slug">
          <td>
            <img
              class="wiki-table-icon"
              :src="`/images/wiki/talents/${t.icon}`"
              :alt="`${t.name} talent icon`"
              width="40"
              height="40"
              loading="lazy"
            />
          </td>
          <th scope="row">{{ t.name }}</th>
          <td>{{ t.desc }}</td>
        </tr>
      </tbody>
    </table>

    <div class="wiki-prose">
      <h2>How talents fit the personality bundle</h2>
      <p>
        A full Paramaker personality combines seven
        <a href="/wiki/traits">stat points</a>, one
        <a href="/wiki/vibes">vibe</a>, one talent, one
        <a href="/wiki/relationships">social perk</a>, and optional lifestyles. Early Access documentation groups
        these under “personality traits,” which can sound like one menu when the game actually spreads choices across
        several screens.
      </p>

      <h2>Mods and patch safety</h2>
      <p>
        Workshop creators may add custom talents as tools mature. Running personality mods means re-testing saves after
        each update — corrupted trait data can stall wants or break job applications. See our
        <a href="/wiki/modding">modding</a> guide for safer workflows.
      </p>

      <div class="wiki-callout">
        Seven talents have appeared in previews and EA marketing so far. Names, icons, and balance may shift with
        patches — open Paramaker on your current build before locking in a multi-generation legacy concept.
      </div>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const talents = [
  {
    slug: 'art',
    name: 'Art',
    icon: 'Talent-Art.png',
    desc:
      'Painting and other visual creative skills climb faster. Nice for decorators, storytellers, or anyone living in Build Mode.',
  },
  {
    slug: 'music',
    name: 'Music',
    icon: 'Talent-Music.png',
    desc:
      'Instrument skills get a head start. Level guitar first and Music Knowledge makes piano (and the next instrument) less of a grind.',
  },
  {
    slug: 'food',
    name: 'Food',
    icon: 'Talent-Food.png',
    desc:
      'Tied to Cooking and Food Knowledge — home meals, restaurants, and keeping hunger stable on busy days.',
  },
  {
    slug: 'technology',
    name: 'Technology',
    icon: 'Talent-Technology.png',
    desc:
      'Tech hobbies and desk careers. Broad Technology Knowledge can cover gaps when a job wants software skills you have not maxed yet.',
  },
  {
    slug: 'fitness',
    name: 'Fitness',
    icon: 'Talent-Fitness.png',
    desc:
      'Exercise skills level quicker. Trade-off: hygiene drops faster while training — schedule showers.',
  },
  {
    slug: 'jack-of-all-trades',
    name: 'Jack-of-All-Trades',
    icon: 'Talent-JackOfAllTrades.png',
    desc:
      'For Parafolks who bounce between hobbies without committing to one lane early. Slower specialists, flexible days.',
  },
  {
    slug: 'good-at-nothing',
    name: 'Good at Nothing',
    icon: 'Talent-GoodAtNothing.png',
    desc:
      'Odd rules instead of a clean speed boost — meant for challenge runs. Not a social perk; do not mix the names up.',
  },
]
</script>
