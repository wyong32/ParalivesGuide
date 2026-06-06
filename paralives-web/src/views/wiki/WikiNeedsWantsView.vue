<template>
  <WikiCategoryShell
    title="Paralives Needs &amp; Wants — daily bars and goals"
    lead="Six survival bars, mood-driven wants, and the sleep reset rule — plus how NPC autonomy picks the next task."
  >
    <div class="wiki-prose">
      <h2>Needs, wants, and goals — three layers</h2>
      <p>
        All three appear in the thought panel, yet each system behaves differently.
        <strong>Needs</strong> are physical and mental bars — neglect them and mood and performance suffer.
        <strong>Wants</strong> are brief wishes you select from
        <a href="/wiki/emotions">emotion cards</a>; skipping them is safe, but finishing them grants personality
        points.
        <strong>Goals</strong> are longer story arcs the game suggests (relocate, buy appliances, meet neighbors) —
        they do not come from emotion cards.
      </p>
      <p>
        Earlier builds displayed needs and wants as sentence lists. Community feedback pushed a clearer split — bars
        for needs, cards for wants — so green, yellow, and red states scan instantly.
      </p>

      <h2>Side-by-side comparison</h2>
      <table class="wiki-compare-table">
        <thead>
          <tr>
            <th></th>
            <th>Needs</th>
            <th>Wants</th>
            <th>Goals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Punished if ignored?</th>
            <td>Usually yes — mood and work suffer</td>
            <td>No</td>
            <td>Depends on the goal</td>
          </tr>
          <tr>
            <th>Who assigns it</th>
            <td>The sim</td>
            <td>You, from an emotion card</td>
            <td>The sim suggests</td>
          </tr>
          <tr>
            <th>Looks like</th>
            <td>10 cartridges per bar</td>
            <td>Cards</td>
            <td>Grouped missions</td>
          </tr>
          <tr>
            <th>Resets</th>
            <td>Always draining</td>
            <td>When they sleep</td>
            <td>Per goal rules</td>
          </tr>
          <tr>
            <th>Personality points</th>
            <td>Indirect through mood</td>
            <td>Yes when done</td>
            <td>Yes; full groups can grant perks</td>
          </tr>
        </tbody>
      </table>

      <h2>Decoding need cartridges</h2>
      <p>
        Open Thoughts on the active Para. Each need bar uses cartridges — ten slots by default. Green signals comfort,
        yellow warns urgency, red means trouble. Dark blue empty slots need attention: fridge or dining out for hunger,
        beds for sleep, toilets for bathroom, showers for hygiene, hobbies or breaks for fun, solitude for me time.
      </p>
      <p>
        Hunger and sleep often follow a loose daily rhythm so housemates may hunger around shared mealtimes. During
        crises such as house fires, the game can temporarily ignore needs so fleeing is not penalized.
      </p>

      <h2>Wants — optional personality fuel</h2>
      <p>
        Tap an emotion card, then choose a want. Suggestions factor in vibe, stats, lifestyles, talent, social perk,
        who is present, nearby objects, relationships, and short-term “memories” (recent need levels and events — not
        a full life history). Dull options? Shift context — cooking in the kitchen surfaces food-related wants more
        often.
      </p>

      <h2>Goals — longer arcs</h2>
      <p>
        Goals might read “save for a better stove” or “befriend the neighbor.” Completing them awards personality
        points like wants. Finishing an entire themed group can grant a perk — worth keeping goals active instead of
        only chasing daily mood fixes.
      </p>

      <h2>Personality effects on timing</h2>
      <p>
        <a href="/wiki/vibes">Jesters</a> hit boredom faster, surfacing fun needs sooner.
        <a href="/wiki/traits">Night Owls</a> offset sleep and hunger schedules. Letting needs crash pushes negative
        emotions into <a href="/wiki/relationships">Together Cards</a> — angry Parafolks see more red mean variants.
      </p>

      <h2>Town NPCs at EA launch</h2>
      <p>
        Uncontrolled Parafolks do not run full need simulation — a performance trade-off. You may still see toilet use
        or mimed eating as ambient flavor, but NPCs will not starve or autonomously cook full meals like household
        members. Visit town for story beats, not expecting NPCs to self-manage hunger.
      </p>
    </div>

    <h2 class="wiki-section-heading">The six core needs</h2>
    <table class="wiki-data-table">
      <thead>
        <tr>
          <th scope="col">Icon</th>
          <th scope="col">Need</th>
          <th scope="col">What to do when it drops</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="n in needs" :key="n.name">
          <td>
            <img
              class="wiki-table-icon"
              :src="`/images/wiki/needs/${n.icon}`"
              :alt="`${n.name} need icon`"
              width="40"
              height="40"
              loading="lazy"
            />
          </td>
          <th scope="row">{{ n.name }}</th>
          <td>{{ n.desc }}</td>
        </tr>
      </tbody>
    </table>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const needs = [
  {
    name: 'Hunger',
    icon: 'Need-Hunger.png',
    desc: 'Empty means starving. Fridge, cooking, eating out. Often follows meal times.',
  },
  {
    name: 'Sleep',
    icon: 'Need-Sleep.png',
    desc: 'Empty means exhausted. Beds and routines; Night Owls hit this on a later clock.',
  },
  {
    name: 'Bathroom',
    icon: 'Need-Bathroom.png',
    desc: 'Find a toilet on the lot or in town venues before it hits red.',
  },
  {
    name: 'Hygiene',
    icon: 'Need-Hygiene.png',
    desc: 'Drains all day; exercise and cleaning speed it up. Showers fix it fast.',
  },
  {
    name: 'Fun',
    icon: 'Need-Fun.png',
    desc: 'Shows when bored from long tasks. Jesters see it more often — plan breaks.',
  },
  {
    name: 'Me Time',
    icon: 'Need-MeTime.png',
    desc: 'Solo recharge. Pairs well with “good at being alone” social perk.',
  },
]
</script>
