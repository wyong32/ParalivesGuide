<template>
  <article class="cheats-page">
    <PageHero
      title-id="cheats-title"
      :title="pageH1"
      eyebrow="Console commands"
      variant="tool"
      reviewed="2026-06-05"
      reviewed-label="June 5, 2026"
      meta-note="Unofficial · backup saves before debug commands"
      stamp-src="/images/guides/guide02.webp"
      stamp-alt="Cheat console in Live Mode"
      stamp-caption="Debug panel"
      :breadcrumbs="cheatsCrumbs"
    >
      <template #quick>
        <p>
          <strong>Quick answer:</strong> <kbd>Ctrl+F1</kbd> or <kbd>Ctrl+Shift+C</kbd> (Win) /
          <kbd>Cmd+Fn+F1</kbd> (Mac). No activation cheat required. Type <strong>HELP</strong> for the full list in
          your patch — this page lists common player commands only.
        </p>
      </template>
    </PageHero>

    <div class="cheats-body">
      <div class="container cheats-main">
        <section class="cheats-section">
          <h2>How to use</h2>
          <ol class="cheats-steps">
            <li>Select the Parafolk first for character-specific commands.</li>
            <li>Open the console, type a command, press Enter (case-insensitive).</li>
            <li>Use parameters after a space — e.g. <code>SETMONEY 50000</code>.</li>
            <li>Re-run <strong>HELP</strong> after major patches.</li>
          </ol>
          <p class="cheats-risk-note">
            <span class="cheats-risk cheats-risk--safe">Safe</span> fixer commands ·
            <span class="cheats-risk cheats-risk--caution">Caution</span> skips progression ·
            <span class="cheats-risk cheats-risk--debug">Debug</span> backup first
          </p>
        </section>

        <section class="cheats-section">
          <h2>Commands</h2>
          <div class="cheats-toolbar">
            <input v-model="searchQuery" type="search" placeholder="Search…" autocomplete="off" />
            <ul class="cheats-filter-list">
              <li v-for="cat in cheatCategories" :key="cat">
                <button type="button" :class="{ active: activeFilter === cat }" @click="activeFilter = cat">
                  {{ cat }}
                </button>
              </li>
            </ul>
          </div>

          <div class="cheats-table-wrap">
            <table class="cheats-table">
              <thead>
                <tr>
                  <th scope="col">Command</th>
                  <th scope="col">Effect</th>
                  <th scope="col">Risk</th>
                  <th scope="col">Copy</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cheat in filteredCheats" :key="cheat.command">
                  <td><code>{{ cheat.command }}</code></td>
                  <td>{{ cheat.effect }}</td>
                  <td>
                    <span class="cheats-risk" :class="`cheats-risk--${cheat.risk}`">
                      {{ cheat.risk }}
                    </span>
                  </td>
                  <td>
                    <button type="button" class="copy-btn" @click="copyCommand(cheat.example)">
                      {{ copied === cheat.example ? 'Copied!' : 'Copy' }}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="cheats-section">
          <h2>FAQ</h2>
          <div class="cheats-faq-list">
            <article v-for="item in faq" :key="item.q" class="cheats-faq-item">
              <h3>{{ item.q }}</h3>
              <p>{{ item.a }}</p>
            </article>
          </div>
        </section>

        <footer class="cheats-trust-footer">
          HELP is authoritative — hundreds of debug entries exist beyond this table.
        </footer>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed, ref } from 'vue'
import PageHero from '@/components/layout/PageHero.vue'
import { cheatCategories, cheatCommands } from '@/data/cheats.js'
import { getPageH1 } from '@/seo/pageKeywords.js'

const pageH1 = getPageH1('cheats')
const cheatsCrumbs = [{ to: '/', label: 'Home' }, { label: 'Cheats' }]

const activeFilter = ref('All')
const searchQuery = ref('')
const copied = ref('')

const filteredCheats = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  return cheatCommands.filter((c) => {
    const catOk = activeFilter.value === 'All' || c.category === activeFilter.value
    if (!catOk) return false
    if (!q) return true
    return c.command.toLowerCase().includes(q) || c.effect.toLowerCase().includes(q)
  })
})

const faq = [
  {
    q: 'Best money cheat?',
    a: 'JACKPOT (+50,000). SETMONEY sets an exact balance; PRINTMONEY adds a custom amount.',
  },
  {
    q: 'Will cheats break saves?',
    a: 'Money, needs, and UNSTUCK are usually fine. Town overrides and genetics debug need a backup save.',
  },
  {
    q: 'Why fewer commands than HELP shows?',
    a: 'HELP lists all debug tools. We keep the ones players actually use day to day.',
  },
]

async function copyCommand(text) {
  try {
    await navigator.clipboard.writeText(text)
    copied.value = text
    setTimeout(() => {
      copied.value = ''
    }, 2000)
  } catch {
    copied.value = ''
  }
}
</script>

<style scoped>
.cheats-body {
  padding: 2.5rem 0 4rem;
}

.cheats-section {
  margin-bottom: 2.5rem;
}

.cheats-section h2 {
  font-family: var(--font-display);
  font-size: 1.35rem;
  margin-bottom: 0.75rem;
}

.cheats-steps {
  padding-left: 1.25rem;
  line-height: 1.65;
  margin-bottom: 1rem;
}

.cheats-risk-note {
  font-size: 0.85rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.cheats-risk {
  display: inline-block;
  padding: 0.1rem 0.45rem;
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  border-radius: 999px;
  border: 2px solid var(--color-outline);
}

.cheats-risk--safe {
  background: var(--color-mint);
}

.cheats-risk--caution {
  background: var(--color-sunny);
}

.cheats-risk--debug {
  background: var(--color-peach);
}

.cheats-toolbar {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.cheats-toolbar input {
  max-width: 280px;
  padding: 0.55rem 0.75rem;
  border: 2.5px solid var(--color-outline);
  border-radius: 10px;
}

.cheats-filter-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.cheats-filter-list button {
  padding: 0.4rem 0.8rem;
  border: 2px solid var(--color-outline);
  border-radius: 999px;
  background: var(--color-white);
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
}

.cheats-filter-list button.active {
  background: var(--color-sunny);
}

.cheats-table-wrap {
  overflow-x: auto;
  border: 3px solid var(--color-outline);
  border-radius: 16px;
}

.cheats-table {
  width: 100%;
  min-width: 520px;
  border-collapse: collapse;
  font-size: 0.88rem;
}

.cheats-table th,
.cheats-table td {
  padding: 0.65rem 0.8rem;
  text-align: left;
  border-bottom: 2px solid color-mix(in srgb, var(--color-outline) 35%, transparent);
}

.cheats-table thead th {
  background: var(--color-mint);
}

.cheats-table code {
  font-weight: 800;
  color: var(--color-coral);
}

.copy-btn {
  padding: 0.3rem 0.65rem;
  background: var(--color-coral);
  color: #fff;
  border: 2px solid var(--color-outline);
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  cursor: pointer;
}

.cheats-faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.cheats-faq-item {
  padding: 1rem;
  background: var(--color-cream);
  border: 2.5px solid var(--color-outline);
  border-radius: 14px;
}

.cheats-faq-item h3 {
  font-size: 0.95rem;
  margin: 0 0 0.35rem;
}

.cheats-faq-item p {
  margin: 0;
  font-size: 0.9rem;
}

.cheats-trust-footer {
  font-size: 0.82rem;
  color: var(--color-muted);
  padding-top: 1rem;
  border-top: 2px solid var(--color-outline);
}
</style>
