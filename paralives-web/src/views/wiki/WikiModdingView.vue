<template>
  <WikiCategoryShell
    title="Paralives Mods Policy — Workshop and free updates"
    lead="How Steam Workshop fits Early Access, what in-game modding tools shipped, and why the studio talks about free updates instead of paid packs."
    hero-image="/images/guides/guide02.webp"
  >
    <div class="wiki-prose">
      <h2>Mods in Early Access</h2>
      <p>
        <strong>Mods</strong> are community-built additions you subscribe to — typically via
        <strong>Steam Workshop</strong> and the <strong>in-game mod browser</strong>. Expect furniture packs, gameplay
        tweaks, Paramaker presets, genetics-friendly accessories, UI utilities, and more. Mods extend the base game but
        never replace patch notes or save backups.
      </p>

      <h2>Free updates versus paid DLC</h2>
      <p>
        Paralives Studio has stated there is <strong>no paid DLC roadmap</strong> for carving core life-sim systems into
        premium packs. Instead, the team plans <strong>free updates over several years</strong> of Early Access toward
        <strong>1.0</strong>, with mods bridging creative gaps between official patches. Pricing and storefront policy
        live on <strong>Steam</strong>; if anything changes, developer announcements and the store page override this
        fan wiki.
      </p>
      <p>
        Our <a href="/updates">roadmap page</a> copies the public day-one versus during-EA feature lists — check it
        before assuming a missing feature will always require a mod.
      </p>

      <h2>Workshop and in-game management</h2>
      <p>
        Early Access launched with <strong>in-game modding tools</strong> and <strong>Workshop integration</strong> so
        you can browse, subscribe, and toggle packs like other Steam life sims. Menu labels may shift per build; after
        each patch, verify your client UI and re-test essential mods.
      </p>
      <ul>
        <li>
          <strong>Subscribe on Steam</strong> to tie packs to your account — common for furniture, CAS items, and
          scripted helpers.
        </li>
        <li>
          <strong>Use the in-game browser</strong> for everyday enable/disable without alt-tabbing (exact wording varies
          by version).
        </li>
        <li>
          <strong>Own Paralives on Steam</strong> for standard Workshop access; without a license, storefront limits may
          block browsing or downloads.
        </li>
      </ul>

      <div class="wiki-callout">
        <p>
          <strong>Mods we keep enabled:</strong> our
          <a href="/mods">Paralives Mods</a> page highlights packs we actually subscribe to, with short write-ups,
          version notes, and Workshop links. It is <strong>not</strong> the full Steam Workshop — use Steam for search
          and community comments.
        </p>
      </div>

      <h2>Common mod targets</h2>
      <p>
        The table below shows where custom content most often lands in our saves. Updates can retire hooks — treat this
        as player notes, not a guarantee.
      </p>
      <table class="wiki-data-table">
        <thead>
          <tr>
            <th scope="col">System</th>
            <th scope="col">Typical mods</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in modSystems" :key="row.system">
            <th scope="row">{{ row.system }}</th>
            <td>{{ row.notes }}</td>
          </tr>
        </tbody>
      </table>

      <h2>Save safety on patch day</h2>
      <p>
        Trait packs, emotion overhauls, and UI mods are popular — and often the first to break after a major patch. If
        wants freeze, careers stall, or moods look corrupted, disable recent installs, load a backup save, and re-enable
        mods in small batches.
      </p>

      <h2>Sharing Parafolks on Workshop</h2>
      <p>
        Workshop exports can include genetics. Downloaded households typically retain inheritable visuals; you may still
        choose personality when they join your save. Hairstyle mods can flag texture categories (straight, wavy, curly,
        coily) for convincing child inheritance; ambitious projects explore occult archetypes layered atop genetics and
        needs.
      </p>

      <h2>Build and lot sharing</h2>
      <p>
        Individual objects and room sets distribute easily through Workshop. Sharing <strong>complete playable lots</strong>
        remains a work in progress during Early Access — expect iterative workflow improvements rather than one-click full
        town ports at launch.
      </p>

      <h2>Relationship mods and core social systems</h2>
      <p>
        Mods can add custom <a href="/wiki/relationships">relationship labels</a>, but core family, romance, and rival
        scaffolding stays intact. Treat additions as overlays, not replacements for the base social graph.
      </p>

      <div class="wiki-callout">
        Before permanently replacing a vanilla system, check <a href="/updates">updates</a> — the next free patch may
        already ship that feature officially.
      </div>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const modSystems = [
  { system: 'Vibes, talents, social perks', notes: 'New personality picks and perks.' },
  { system: 'Emotions & needs', notes: 'Custom moods and need bars.' },
  { system: 'Skills', notes: 'Extra skills that still sit inside an existing Knowledge family.' },
  { system: 'Careers', notes: 'Custom jobs, postings, and workplaces.' },
  { system: 'Relationship labels', notes: 'New labels; core categories stay vanilla.' },
  { system: 'Genetics & CAS', notes: 'Inheritance tweaks, accessories, texture flags, stylized species ideas.' },
  { system: 'Build & Buy', notes: 'Furniture and decor; whole-lot sharing still maturing during EA.' },
]
</script>
