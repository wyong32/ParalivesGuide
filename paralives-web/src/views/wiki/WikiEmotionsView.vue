<template>
  <WikiCategoryShell
    title="Paralives Emotions — moods and Together Cards"
    lead="Fifteen preview moods with icons. They stack on needs, steer wants, and can speed or slow skill sessions."
  >
    <template #aside>
      <nav class="wiki-rail-toc" aria-label="On this page">
        <h2 class="wiki-rail-title">On this page</h2>
        <ul>
          <li><a href="#overview">Basics</a></li>
          <li><a href="#gain">How moods show up</a></li>
          <li><a href="#deal">What to do with a card</a></li>
          <li><a href="#stacking">Several at once</a></li>
          <li><a href="#list">Moods seen so far</a></li>
          <li><a href="#colors">Card colors</a></li>
          <li><a href="#mods">Mods</a></li>
        </ul>
      </nav>
    </template>

    <div class="wiki-prose">
      <h2 id="overview">How emotions work in Live Mode</h2>
      <p>
        Emotions reflect a Para’s current mental state — you cannot toggle Happy from a menu. Events, unmet needs,
        work pressure, and social beats generate moods organically. They feed back into the loop: a bad shift breeds
        Stress, and lingering Stress makes the next shift and conversation tougher.
      </p>
      <p>
        Idle animations communicate mood even without queued actions. Previews showed multiple idle variants per
        emotion, so two Happy Parafolks may stand differently.
      </p>

      <h2 id="gain">Why the same event hits differently</h2>
      <p>
        Identical triggers can produce different moods on different Parafolks. Vibe, stats, social perk, and recent
        context all factor in. A promotion might spark Overjoyed in one Para and mild Happy in another who was already
        anxious about bills.
      </p>
      <p>
        <a href="/wiki/relationships">Together Cards</a> can deliberately steer emotions through colored variants —
        pink for romance, red for rivalry, and similar cues.
      </p>

      <h2 id="deal">Using emotion cards</h2>
      <p>
        Open the Thoughts panel on your active Para. Emotions appear as cards there. Select one to attach a
        <a href="/wiki/needs-wants">Want</a> — a short optional goal linked to that feeling (“cheer up,” “apologize,”
        “blow off steam”). Wants reset when the Para sleeps, not at midnight, and completing them awards personality
        points for vibe evolutions and talent upgrades.
      </p>
      <p>
        Ignoring cards is allowed, but negative moods commonly hurt job performance, skill sessions, and social rolls
        until you address the underlying need or relationship issue.
      </p>

      <h2 id="stacking">Multiple moods at once</h2>
      <p>
        A Para can feel Happy about a raise and Sad about a breakup simultaneously. Each card displays an intensity
        value; hover for the contributing factors. Stronger moods outweigh weaker ones — a major Angry may remain on
        the portrait even after a brief Amused moment.
      </p>
      <p>
        The portrait icon bottom-left shows the dominant mood. The thought bubble tab lists the full stack when you
        need detail.
      </p>

      <h2 id="list">Preview mood roster</h2>
      <p>
        The studio has not finalized a launch mood list. The names below already appeared in UI and footage — useful
        for story planning, though expect additions and renames throughout Early Access:
      </p>
    </div>

    <table class="wiki-data-table">
      <thead>
        <tr>
          <th scope="col">Icon</th>
          <th scope="col">Emotion</th>
          <th scope="col">What it usually means in play</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in emotionRows" :key="row.name">
          <td>
            <img
              class="wiki-table-icon"
              :src="`/images/wiki/emotions/${row.icon}`"
              :alt="`${row.name} emotion icon`"
              width="40"
              height="40"
              loading="lazy"
            />
          </td>
          <th scope="row">{{ row.name }}</th>
          <td>{{ row.note }}</td>
        </tr>
      </tbody>
    </table>

    <div class="wiki-prose">
      <h2 id="colors">Reading card colors</h2>
      <p>
        Icons and card tint offer a fast mood read. Previews featured white, green, orange, red, burgundy, pink, and
        grey. Flirty cards lean pink; angry and sad have appeared orange in different builds, so color mapping is not
        fully documented — expect adjustments in future patches.
      </p>

      <h2 id="mods">Custom emotions via mods</h2>
      <p>
        Workshop supports custom emotion packs. After each update, test mods on a spare save — a broken mood system
        can freeze wants or careers until you remove the offending pack. See our
        <a href="/wiki/modding">modding</a> guide.
      </p>
    </div>

    <div class="wiki-callout">
      Additional emotions are planned during Early Access alongside expanded jobs and wants. Our
      <a href="/updates">updates tracker</a> distinguishes day-one Live Mode features from later EA drops.
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const emotionRows = [
  { name: 'Amused', icon: 'Emotion-Amused.png', note: 'Light, playful — often after fun social beats.' },
  { name: 'Angry', icon: 'Emotion-Angry.png', note: 'Work and social suffer until you cool things down.' },
  { name: 'Anxiety', icon: 'Emotion-Anxiety.png', note: 'UI sometimes says Anxious — nerves before bold actions.' },
  { name: 'Bored', icon: 'Emotion-Bored.png', note: 'Tied to fun need when tasks run too long.' },
  { name: 'Disgust', icon: 'Emotion-Disgust.png', note: 'Bad smells, gross objects, rough moments.' },
  { name: 'Embarrassed', icon: 'Emotion-Embarassed.png', note: 'Awkward social outcomes or failed cards.' },
  { name: 'Fear', icon: 'Emotion-Fear.png', note: 'Stressful events; safety-flavored wants follow.' },
  { name: 'Fire', icon: 'Emotion-Fire.png', note: 'Context mood around house-fire danger in previews.' },
  { name: 'Flirty', icon: 'Emotion-Flirty.png', note: 'Romance routes and pink Together variants.' },
  { name: 'Happy', icon: 'Emotion-Happy.png', note: 'General good mood — common after wants land.' },
  { name: 'Inspired', icon: 'Emotion-Inspired.png', note: 'Nice before creative skill sessions.' },
  { name: 'Sad', icon: 'Emotion-Sad.png', note: 'Loss, rejection, neglected ties.' },
  { name: 'Sick', icon: 'Emotion-Sick.png', note: 'Illness — soup and care perks help.' },
  { name: 'Sleep', icon: 'Emotion-Sleep.png', note: 'Fatigue cue alongside the sleep need bar.' },
  { name: 'Stressed', icon: 'Emotion-Stressed.png', note: 'Work pressure, bills, stacked bad days.' },
]
</script>
