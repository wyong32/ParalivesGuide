<template>
  <article class="home-page">
    <section class="hero-section" aria-labelledby="hero-heading">
      <div class="hero-blob hero-blob-a" aria-hidden="true"></div>
      <div class="hero-blob hero-blob-b" aria-hidden="true"></div>
      <div class="hero-blob hero-blob-c" aria-hidden="true"></div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-copy">
            <span class="hero-badge">✦ Paralives Guide · Steam Early Access (since May 25, 2026)</span>
            <h1 id="hero-heading">
              <span class="title-line title-accent">{{ homeH1.primary }}</span>
              <span class="title-line">— {{ homeH1.secondary }}</span>
            </h1>
            <p class="hero-lead">
              We play the <strong>Paralives game</strong> on Steam Early Access and write down what
              actually helps — wiki topics, a first-save walkthrough, cheat commands you verify with
              in-game <strong>HELP</strong>, Workshop mods we keep enabled, and a Melino map that flags
              day-one features versus what is still on the public EA roadmap.
            </p>
            <ul class="hero-tags" aria-label="Paralives game tags">
              <li v-for="tag in heroGameTags" :key="tag">
                <span class="hero-tag-chip">{{ tag }}</span>
              </li>
            </ul>
            <div class="hero-actions">
              <RouterLink to="/how-to-play" class="btn-primary">How to Play</RouterLink>
              <RouterLink to="/wiki" class="btn-secondary">Wiki</RouterLink>
            </div>
            <p class="hero-note">
              Independent fan site · Not Paralives Studio or Steam · Verify cheats with in-game
              <strong>HELP</strong> after patches
            </p>
          </div>
          <div class="hero-visual">
            <div class="photo-collage">
              <figure
                v-for="frame in heroFrames"
                :key="frame.variant"
                class="photo-frame"
                :class="frame.variant"
              >
                <span v-if="frame.tape" class="frame-tape" :class="frame.tape"></span>
                <span v-if="frame.pin" class="frame-pin" aria-hidden="true"></span>
                <img
                  :src="frame.imageUrl"
                  :alt="frame.alt"
                  width="200"
                  height="150"
                  loading="eager"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="quick-section" aria-labelledby="quick-heading">
      <div class="container">
        <div class="quick-content">
          <div class="section-label">
            <span class="label-dot"></span>
            <h2 id="quick-heading">Paralives Quick Paths</h2>
          </div>
          <p class="section-intro">Shortcuts across the guide — each card opens a finished section.</p>
          <ul class="quick-grid">
            <li v-for="item in quickLinks" :key="item.to">
              <RouterLink :to="item.to" :class="['quick-card', item.color]">
                <span class="card-icon" aria-hidden="true">
                  <QuickPathIcon :name="item.icon" />
                </span>
                <span class="card-title">{{ item.label }}</span>
                <span class="card-desc">{{ item.desc }}</span>
                <span class="card-tag">{{ item.tag }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="ea-section" aria-labelledby="ea-heading">
      <div class="container">
        <div class="ea-content">
          <div class="section-label">
            <span class="label-dot label-dot-coral"></span>
            <h2 id="ea-heading">What's New in Early Access</h2>
          </div>
          <p class="section-intro">
            Steam Early Access began <strong>May 25, 2026</strong>. The studio targets roughly two years
            of free updates before 1.0 — no paid DLC pledged. Below is what players can rely on today
            versus what the public roadmap still lists for later in EA.
          </p>

          <div class="ea-status-bar">
            <div class="ea-status-pill ea-status-pill--live">Live on Steam · PC &amp; Mac</div>
            <div class="ea-status-pill">~$39.99 intro price · may rise slowly</div>
            <div class="ea-status-pill">June–Sept 2026 · hotfixes &amp; performance focus</div>
          </div>

          <div class="ea-grid">
            <article class="ea-card ea-card--launch">
              <span class="ea-card-label">Launch milestone</span>
              <h3>Day one shipped</h3>
              <ul>
                <li v-for="item in eaDayOne" :key="item">{{ item }}</li>
              </ul>
              <RouterLink to="/updates" class="ea-card-link">Official lists on Updates →</RouterLink>
            </article>

            <article class="ea-card ea-card--roadmap">
              <span class="ea-card-label">During Early Access</span>
              <h3>Still on the roadmap</h3>
              <ul>
                <li v-for="item in eaLater" :key="item">{{ item }}</li>
              </ul>
              <RouterLink to="/wiki" class="ea-card-link">Wiki marks day-one vs later →</RouterLink>
            </article>

            <article class="ea-card ea-card--focus">
              <span class="ea-card-label">Player focus now</span>
              <h3>What to do first</h3>
              <ol class="ea-steps">
                <li v-for="step in eaFirstSteps" :key="step">{{ step }}</li>
              </ol>
              <RouterLink to="/how-to-play" class="ea-card-link">Full walkthrough on How to Play →</RouterLink>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="guides-section" aria-labelledby="guides-heading">
      <div class="container">
        <div class="guides-content">
          <div class="section-head">
            <div class="section-label">
              <span class="label-dot label-dot-lavender"></span>
              <h2 id="guides-heading">Paralives Guides Highlights</h2>
            </div>
            <RouterLink to="/guides" class="view-all">All guides →</RouterLink>
          </div>
          <p class="section-intro section-intro--light">
            Featured walkthroughs for Steam Early Access — updated as we publish more.
          </p>
          <ul v-if="hotGuides.length" class="guides-grid">
            <li v-for="guide in hotGuides" :key="guide.to">
              <article class="guide-card-stack">
                <RouterLink :to="guide.to" class="guide-card-link">
                  <div class="guide-card-media">
                    <img :src="guide.imageUrl" :alt="guide.alt" width="480" height="260" loading="lazy" />
                    <span class="guide-cat-badge">{{ guide.category }}</span>
                  </div>
                  <div class="guide-card-body">
                    <h3>{{ guide.title }}</h3>
                    <p>{{ guide.excerpt }}</p>
                    <p class="guide-meta">{{ guide.meta }}</p>
                  </div>
                </RouterLink>
              </article>
            </li>
          </ul>
          <p v-else class="guides-empty">No featured guides on the homepage right now.</p>
        </div>
      </div>
    </section>

    <section class="wiki-section" aria-labelledby="wiki-heading">
      <div class="container">
        <div class="wiki-content">
          <div class="section-label">
            <span class="label-dot label-dot-mint"></span>
            <h2 id="wiki-heading">Paralives Wiki Topics</h2>
          </div>
          <p class="section-intro">
            {{ wikiEntryCount }} articles in five groups — skill leveling, jobs by lot, and household money
            each have their own page. We flag what shipped day one versus what the studio still lists for later EA.
          </p>
          <div class="wiki-layout">
            <ul class="wiki-topic-grid">
              <li v-for="topic in wikiHomeTopics" :key="topic.path">
                <RouterLink :to="`/wiki/${topic.path}`" class="wiki-topic-card">
                  <img
                    v-if="topic.icon"
                    class="wiki-topic-icon"
                    :src="topic.icon"
                    :alt="`${topic.title} icon`"
                    width="36"
                    height="36"
                    loading="lazy"
                  />
                  <div>
                    <h3>{{ topic.title }}</h3>
                    <p>{{ topic.description }}</p>
                    <span class="wiki-topic-tag">{{ topic.tag }}</span>
                  </div>
                </RouterLink>
              </li>
            </ul>
            <aside class="wiki-aside">
              <span class="wiki-aside-sticker">EA</span>
              <h3>Live Mode highlights</h3>
              <ul>
                <li>Personality traits · talents · vibes · stats</li>
                <li>Emotions · wants · six needs · autonomy</li>
                <li>Rabbit-hole careers · bills · museum</li>
                <li>Together Cards · multiselect · relationships</li>
                <li>Genetics · children · aging · mod tools</li>
              </ul>
              <RouterLink to="/wiki" class="wiki-aside-link">Browse all wiki topics →</RouterLink>
              <RouterLink to="/updates" class="wiki-aside-link">Day-one vs during-EA lists →</RouterLink>
            </aside>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section" aria-labelledby="about-heading">
      <div class="container">
        <div class="about-spread">
          <header class="about-masthead">
            <div class="about-masthead-copy">
              <span class="section-label">
                <span class="label-dot label-dot-coral"></span>
                <h2 id="about-heading">About Paralives Guide</h2>
              </span>
              <p class="about-lead">
                <strong>Paralives</strong> is the indie life sim on Steam;
                <strong>Paralives Guide</strong> is run by players who keep EA saves. We note what
                changed after hotfixes and point you to the page that fixes tonight’s problem.
              </p>
              <ul class="about-pills" aria-label="Site facts">
                <li v-for="pill in aboutPills" :key="pill">{{ pill }}</li>
              </ul>
            </div>
            <div class="about-snaps" aria-hidden="true">
              <figure class="about-snap about-snap--a">
                <span class="about-snap-tape"></span>
                <img
                  src="/images/about-01.webp"
                  alt=""
                  width="200"
                  height="140"
                  loading="lazy"
                />
              </figure>
              <figure class="about-snap about-snap--b">
                <span class="about-snap-tape about-snap-tape--mint"></span>
                <img
                  src="/images/about-02.webp"
                  alt=""
                  width="180"
                  height="130"
                  loading="lazy"
                />
              </figure>
            </div>
          </header>

          <div class="about-journal">
            <article class="about-page about-page--game">
              <span class="about-page-eyebrow">The game</span>
              <h3>Life in Melino, your way</h3>
              <p>
                Paralives Studio’s sandbox sim lets you create Parafolks in <strong>Paramaker</strong>,
                shape grid-free homes in <strong>Build Mode</strong>, and play out days in
                <strong>Live Mode</strong> across Melino — shops, museum, careers, relationships, and
                bills included.
              </p>
              <p>
                <strong>Steam Early Access</strong> began May 25, 2026 on Windows and macOS. The public
                roadmap targets years of <strong>free updates</strong> with no paid DLC packs.
              </p>
              <ul class="about-checklist">
                <li v-for="point in aboutGamePoints" :key="point">
                  <span class="about-check" aria-hidden="true">✦</span>
                  {{ point }}
                </li>
              </ul>
              <div class="about-modes" aria-label="Core game modes">
                <span class="about-mode-chip about-mode-chip--paramaker">Paramaker</span>
                <span class="about-mode-chip about-mode-chip--build">Build Mode</span>
                <span class="about-mode-chip about-mode-chip--live">Live Mode</span>
              </div>
            </article>

            <div class="about-spine" aria-hidden="true">
              <span class="about-spine-ring"></span>
              <span class="about-spine-ring"></span>
              <span class="about-spine-ring"></span>
            </div>

            <article class="about-page about-page--site">
              <span class="about-page-eyebrow">This website</span>
              <h3>Built for players mid-save</h3>
              <p>
                Paralives Guide is an <strong>unofficial fan site</strong> — not the developer or Steam.
                After each patch we refresh wiki pages, cheat commands, the Melino pin map, and roadmap
                notes so you can see what shipped day one versus what is still listed for later EA.
              </p>
              <ul class="about-checklist">
                <li v-for="point in aboutSitePoints" :key="point">
                  <span class="about-check" aria-hidden="true">✦</span>
                  {{ point }}
                </li>
              </ul>
              <nav class="about-nav" aria-label="Start here">
                <span class="about-nav-label">Start here</span>
                <ul>
                  <li v-for="link in aboutSiteLinks" :key="link.to">
                    <RouterLink :to="link.to">{{ link.label }}</RouterLink>
                  </li>
                </ul>
              </nav>
            </article>
          </div>

          <aside class="about-note">
            <span class="about-note-pin" aria-hidden="true"></span>
            <p>
              Purchase support, refunds, and account issues go to Steam or Paralives Studio — this site
              covers everyday play, not official customer service.
            </p>
          </aside>
        </div>
      </div>
    </section>

    <section class="faq-section" aria-labelledby="faq-heading">
      <div class="container">
        <div class="faq-content">
          <header class="faq-header">
            <span class="section-label">
              <span class="label-dot label-dot-sunny"></span>
              <h2 id="faq-heading">FAQ</h2>
            </span>
            <p class="faq-lead">
              Common questions about Paralives on Steam and how to use Paralives Guide alongside your
              save.
            </p>
          </header>
          <ul class="faq-list">
            <li v-for="item in faqItems" :key="item.q">
              <article class="faq-card" :class="item.tone">
                <header class="faq-card-head">
                  <span class="faq-card-tag">{{ item.tag }}</span>
                  <h3>{{ item.q }}</h3>
                </header>
                <div class="faq-card-body">
                  <p>{{ item.a }}</p>
                  <RouterLink v-if="item.linkTo" :to="item.linkTo" class="faq-card-link">
                    {{ item.linkLabel }} →
                  </RouterLink>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="cta-section" aria-labelledby="cta-heading">
      <div class="container">
        <div class="cta-content">
          <h2 id="cta-heading">Paralives Early Access — keep learning</h2>
          <p>
            Revisit the beginner walkthrough after each patch, drill into any wiki topic, or explore
            Melino on the interactive map.
          </p>
          <div class="cta-actions">
            <RouterLink to="/how-to-play" class="btn-primary">How to Play</RouterLink>
            <RouterLink to="/wiki" class="btn-secondary">Browse Wiki</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import QuickPathIcon from '@/components/home/QuickPathIcon.vue'
import guides from '@/data/guides.js'
import { pageSeo } from '@/seo/pageKeywords.js'

const homeH1 = pageSeo.home.h1
import { wikiHubEntryCount, wikiHubGroups } from '@/data/wikiHub.js'

const heroGameTags = [
  'Life Simulation',
  'Steam Early Access',
  'Sandbox',
  'Open World',
  'Build Mode',
  'Paramaker',
  'Parafolks',
  'No Paid DLC',
]

const heroFrames = [
  {
    alt: 'Paralives grid-free build mode preview',
    imageUrl: '/images/hero-04.webp',
    variant: 'frame-main',
    tape: 'tape-center',
    pin: true,
  },
  {
    alt: 'Melino open world town overview',
    imageUrl: '/images/hero-01.webp',
    variant: 'frame-tl',
    tape: 'tape-left',
  },
  {
    alt: 'Parafolk character creator Paramaker',
    imageUrl: '/images/hero-02.webp',
    variant: 'frame-tr',
  },
  {
    alt: 'Paralives live simulation gameplay',
    imageUrl: '/images/hero-03.webp',
    variant: 'frame-bl',
    tape: 'tape-right',
  },
  {
    alt: 'Paralives wiki talents and game systems',
    imageUrl: '/images/hero-05.webp',
    variant: 'frame-br',
  },
]

const quickLinks = [
  { to: '/how-to-play', label: 'How to Play', desc: 'Three modes, first-evening goals', tag: 'New save', icon: 'play', color: 'card-sunny' },
  { to: '/cheats', label: 'Cheats', desc: 'Console commands & Paradimes', tag: 'Live Mode', icon: 'cheats', color: 'card-lavender' },
  { to: '/wiki/talents', label: 'Talents', desc: 'Seven specialties at creation', tag: 'Wiki', icon: 'talents', color: 'card-mint' },
  { to: '/map', label: 'Town Map', desc: 'Melino shops & venues', tag: 'Map', icon: 'map', color: 'card-peach' },
  { to: '/build', label: 'Build Mode', desc: 'Curved walls & color wheel', tag: 'Build', icon: 'build', color: 'card-sky' },
  { to: '/updates', label: 'Roadmap', desc: 'Day-one vs during-EA lists', tag: 'Updates', icon: 'roadmap', color: 'card-berry' },
]

const eaDayOne = [
  'Paramaker, Build Mode, and Live Mode core loop',
  'Open-world Melino — shops, restaurants, museum',
  'Needs, emotions, wants, rabbit-hole careers',
  'Bills, relationships, Together Cards, genetics',
  'In-game modding tools & Steam Workshop hooks',
]

const eaLater = [
  'Pets, weather seasons, drivable cars',
  'Gardening, fishing, town editing tools',
  'Parties, weddings, expanded social systems',
  'More vibes, talents, and venue depth',
]

const eaFirstSteps = [
  'Create a Parafolk you like in Paramaker',
  'Build or pick a modest starter home',
  'Visit one shop or the museum in Melino',
  'Send someone to work and watch bills/needs',
  'Save often — EA patches change balance',
]

const hotGuides = guides
  .filter((g) => g.isHome)
  .map((g) => ({
    title: g.title,
    excerpt: g.description,
    category: g.tags?.[0] ?? 'Guide',
    meta: [g.readTime, g.publishDate].filter(Boolean).join(' · '),
    to: `/guides/${g.addressBar}`,
    alt: g.imageAlt,
    imageUrl: g.imageUrl,
  }))

const wikiEntryCount = wikiHubEntryCount

/** 首页展示 wiki 精选（与完整 index 分组一致） */
const wikiHomeTopics = wikiHubGroups
  .flatMap((g) => g.items)
  .filter((item) =>
    ['talents', 'vibes', 'skills', 'skills/leveling', 'emotions', 'careers/occupations', 'careers/economy', 'build-tools'].includes(
      item.path,
    ),
  )

const aboutPills = [
  'Steam EA · May 25, 2026',
  'Unofficial fan site',
  'Revised after patches',
]

const aboutGamePoints = [
  'Curved walls, split levels, and deep color control in Build Mode',
  'Talents, vibes, needs, emotions, and careers in Live Mode',
  'Pets, seasons, and cars listed for later Early Access phases',
]

const aboutSitePoints = [
  'Wiki topics grouped — skill tables, jobs, and economy each have their own page',
  'Cheat page tracks console commands per build',
  'Map pins Melino shops, schools, and civic lots',
]

const aboutSiteLinks = [
  { to: '/how-to-play', label: 'How to Play' },
  { to: '/wiki', label: 'Wiki' },
  { to: '/cheats', label: 'Cheats' },
  { to: '/map', label: 'Map' },
]

const faqItems = [
  {
    tag: 'Game',
    q: 'What is Paralives?',
    tone: 'faq-tone-sky',
    a: 'A community-driven life simulation where you design Parafolks, build without a rigid grid, and live in the open-world town Melino. Three modes — Paramaker, Build Mode, and Live Mode — form the core loop players use today on Steam Early Access.',
    linkTo: '/how-to-play',
    linkLabel: 'How to Play walkthrough',
  },
  {
    tag: 'Release',
    q: 'Is Paralives available on Steam now?',
    tone: 'faq-tone-mint',
    a: 'Yes. Early Access for Windows and macOS went live May 25, 2026. The studio still plans a long EA period with free content updates rather than paid expansion packs — check your store client for the current price and regional availability.',
    linkTo: '/updates',
    linkLabel: 'See roadmap & milestones',
  },
  {
    tag: 'Cheats',
    q: 'How do I open the cheat console?',
    tone: 'faq-tone-lavender',
    a: 'Most players use Ctrl+Shift+C or Ctrl+F1, then type HELP to list commands valid in their installed build. Command names can change after hotfixes, so treat any online list — including ours — as a starting point, not gospel.',
    linkTo: '/cheats',
    linkLabel: 'Open cheat commands',
  },
  {
    tag: 'Content',
    q: 'Are pets, weather, and cars in the game yet?',
    tone: 'faq-tone-peach',
    a: 'They are on the public during-EA roadmap, not the full day-one feature set we document on Updates. You can build, furnish, work rabbit-hole jobs, socialize, and explore Melino today; plan legacy pet saves after the relevant patches ship.',
    linkTo: '/updates',
    linkLabel: 'Compare day-one vs later EA',
  },
  {
    tag: 'Site',
    q: 'What does Paralives Guide cover?',
    tone: 'faq-tone-sunny',
    a: 'A How to Play walkthrough, wiki topics with separate skill leveling and economy pages, cheat and build pages, Steam Workshop mod notes, a Melino pin map, and roadmap notes we refresh after patches.',
    linkTo: '/wiki',
    linkLabel: 'Browse wiki topics',
  },
  {
    tag: 'Trust',
    q: 'Is Paralives Guide official?',
    tone: 'faq-tone-berry',
    a: 'No. We are an independent fan resource with no affiliation to Paralives Studio or Valve. Use us for mechanics, routing, and community tips; contact Steam or the developer for purchases, refunds, or legal notices.',
  },
]
</script>

<style scoped>
.home-page {
  overflow-x: hidden;
}

/* Hero */
.hero-section {
  position: relative;
  overflow: hidden;
  padding: 3.5rem 0 5rem;
  background: linear-gradient(180deg, var(--color-sky) 0%, #d4f0fc 40%, var(--color-cream) 100%);
  border-bottom: 3px solid var(--color-outline);
}

.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(2px);
  opacity: 0.65;
  pointer-events: none;
}

.hero-blob-a {
  width: 280px;
  height: 120px;
  top: 12%;
  right: 8%;
  background: #fff;
  border-radius: 50%;
  box-shadow: 60px 10px 0 -10px #fff, 120px 0 0 -20px #fff;
}

.hero-blob-b {
  width: 100px;
  height: 100px;
  bottom: 18%;
  left: 5%;
  background: var(--color-peach);
  opacity: 0.35;
}

.hero-blob-c {
  width: 70px;
  height: 70px;
  top: 30%;
  left: 15%;
  background: var(--color-sunny);
  opacity: 0.4;
}

.hero-content {
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-badge {
  display: inline-block;
  padding: 0.35rem 0.9rem;
  background: var(--color-white);
  border: 2.5px solid var(--color-outline);
  border-radius: 999px;
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--color-grass);
  box-shadow: 3px 3px 0 var(--color-outline);
  margin-bottom: 1.25rem;
}

.hero-copy h1 {
  margin-bottom: 1.25rem;
}

.title-line {
  display: block;
}

.title-accent {
  color: var(--color-coral);
  text-shadow: 3px 3px 0 var(--color-peach);
}

.hero-lead {
  font-size: 1.08rem;
  max-width: 54ch;
  margin-bottom: 1.25rem;
  color: var(--color-muted);
  line-height: 1.65;
}

.hero-tags {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.hero-tag-chip {
  display: inline-block;
  padding: 0.3rem 0.7rem;
  font-size: 0.72rem;
  font-weight: 700;
  background: var(--color-white);
  border: 2px solid var(--color-outline);
  border-radius: 999px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.btn-primary,
.btn-secondary {
  display: inline-block;
  padding: 0.9rem 1.85rem;
  border-radius: 999px;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 800;
  text-decoration: none;
  border: 3px solid var(--color-outline);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary {
  background: var(--color-coral);
  color: #fff;
  box-shadow: 5px 5px 0 var(--color-outline);
}

.btn-primary:hover {
  color: #fff;
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0 var(--color-outline);
}

.btn-secondary {
  background: var(--color-white);
  color: var(--color-text);
  box-shadow: 4px 4px 0 var(--color-outline);
}

.btn-secondary:hover {
  background: var(--color-sunny);
  transform: translate(-2px, -2px);
}

.hero-note {
  font-size: 0.82rem;
  color: var(--color-muted);
  max-width: 48ch;
}

/* Hero collage */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 420px;
}

.photo-collage {
  position: relative;
  width: min(100%, 460px);
  height: 400px;
}

.photo-frame {
  position: absolute;
  margin: 0;
  background: var(--color-white);
  padding: 0.65rem;
  border: 3px solid var(--color-outline);
  border-radius: 6px;
  box-shadow: 6px 7px 0 var(--color-outline);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.photo-frame:hover {
  z-index: 10 !important;
  box-shadow: 9px 11px 0 var(--color-outline);
}

.photo-frame img {
  width: 100%;
  display: block;
  object-fit: cover;
  border: 2px solid var(--color-outline);
  border-radius: 3px;
  background: var(--color-peach);
}

.frame-main {
  width: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-48%, -52%) rotate(5deg);
  z-index: 4;
}

.frame-main img {
  aspect-ratio: 4/3;
}

.frame-main:hover {
  transform: translate(-48%, -54%) rotate(2deg) scale(1.03);
}

.frame-tl {
  width: 128px;
  top: 2%;
  left: 0;
  transform: rotate(-16deg);
  z-index: 2;
  background: var(--color-sky);
}

.frame-tl img {
  aspect-ratio: 1/1;
}

.frame-tl:hover {
  transform: rotate(-10deg) scale(1.05);
}

.frame-tr {
  width: 145px;
  top: 0;
  right: -4%;
  transform: rotate(13deg);
  z-index: 5;
  background: var(--color-lavender);
}

.frame-tr img {
  aspect-ratio: 5/4;
}

.frame-tr:hover {
  transform: rotate(8deg) scale(1.05);
}

.frame-bl {
  width: 138px;
  bottom: 4%;
  left: 2%;
  transform: rotate(-9deg);
  z-index: 3;
  background: var(--color-mint);
}

.frame-bl img {
  aspect-ratio: 3/4;
}

.frame-bl:hover {
  transform: rotate(-4deg) scale(1.05);
}

.frame-br {
  width: 118px;
  bottom: 8%;
  right: 0;
  transform: rotate(18deg);
  z-index: 1;
  background: var(--color-peach);
}

.frame-br img {
  aspect-ratio: 1/1;
}

.frame-br:hover {
  transform: rotate(12deg) scale(1.06);
}

.frame-tape {
  position: absolute;
  height: 14px;
  background: rgba(255, 213, 107, 0.75);
  border: 1.5px solid rgba(58, 79, 72, 0.35);
  z-index: 2;
  pointer-events: none;
}

.tape-center { width: 52px; top: -7px; left: 50%; transform: translateX(-50%); }
.tape-left { width: 38px; top: -6px; left: 18%; transform: rotate(-28deg); background: rgba(213, 192, 245, 0.8); }
.tape-right { width: 42px; top: -6px; right: 12%; transform: rotate(22deg); background: rgba(184, 232, 200, 0.85); }

.frame-pin {
  position: absolute;
  top: -9px;
  right: 22%;
  width: 16px;
  height: 16px;
  background: var(--color-coral);
  border: 2.5px solid var(--color-outline);
  border-radius: 50%;
  z-index: 3;
}

/* Section shared */
.section-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.section-label h2 {
  margin: 0;
}

.section-intro {
  margin-bottom: 1.75rem;
  color: var(--color-muted);
  max-width: 62ch;
  line-height: 1.65;
}

.section-intro--light {
  color: color-mix(in srgb, var(--color-white) 88%, var(--color-text));
}

.label-dot {
  width: 14px;
  height: 14px;
  background: var(--color-coral);
  border: 2px solid var(--color-outline);
  border-radius: 50%;
  flex-shrink: 0;
}

.label-dot-coral { background: var(--color-coral); }
.label-dot-lavender { background: var(--color-lavender); }
.label-dot-mint { background: var(--color-mint); }
.label-dot-sunny { background: var(--color-sunny); }

/* Quick */
.quick-section {
  padding: 4rem 0;
  margin-top: -2rem;
}

.quick-grid {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
}

.quick-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.4rem;
  padding: 1.25rem 0.65rem;
  border: 3px solid var(--color-outline);
  border-radius: 22px;
  text-decoration: none;
  color: var(--color-text);
  box-shadow: 5px 5px 0 var(--color-outline);
  transition: transform 0.2s ease;
  height: 100%;
}

.quick-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 8px 8px 0 var(--color-outline);
  color: var(--color-text);
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.35rem;
}
.card-title { font-family: var(--font-display); font-weight: 800; font-size: 0.95rem; }
.card-desc { font-size: 0.72rem; color: var(--color-muted); font-weight: 600; }
.card-tag { font-size: 0.65rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.8; }

.card-sunny { background: var(--color-sunny); }
.card-lavender { background: var(--color-lavender); }
.card-mint { background: var(--color-mint); }
.card-berry { background: var(--color-berry); color: #fff; }
.card-berry .card-desc { color: rgba(255,255,255,0.85); }
.card-berry :deep(.quick-path-badge) {
  background: rgba(255, 255, 255, 0.22);
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 2px 2px 0 rgba(58, 79, 72, 0.15);
  color: #fff;
}
.card-sky { background: var(--color-sky); }
.card-peach { background: var(--color-peach); }

/* EA section */
.ea-section {
  padding: 3rem 0 4.5rem;
  background: linear-gradient(180deg, var(--color-cream) 0%, var(--color-white) 100%);
}

.ea-status-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-bottom: 1.75rem;
}

.ea-status-pill {
  padding: 0.45rem 0.9rem;
  font-size: 0.82rem;
  font-weight: 700;
  background: var(--color-white);
  border: 2px solid var(--color-outline);
  border-radius: 999px;
  box-shadow: 3px 3px 0 var(--color-outline);
}

.ea-status-pill--live {
  background: var(--color-mint);
}

.ea-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.ea-card {
  padding: 1.5rem;
  border: 3px solid var(--color-outline);
  border-radius: 20px;
  box-shadow: 6px 6px 0 var(--color-outline);
  background: var(--color-white);
  display: flex;
  flex-direction: column;
}

.ea-card--launch { background: linear-gradient(160deg, var(--color-mint) 0%, var(--color-white) 70%); }
.ea-card--roadmap { background: linear-gradient(160deg, var(--color-peach) 0%, var(--color-white) 70%); }
.ea-card--focus { background: linear-gradient(160deg, var(--color-sky) 0%, var(--color-white) 70%); }

.ea-card-label {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-grass);
  margin-bottom: 0.5rem;
}

.ea-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.85rem;
  color: var(--color-grass);
}

.ea-card ul,
.ea-steps {
  padding-left: 1.2rem;
  font-size: 0.9rem;
  color: var(--color-muted);
  flex: 1;
}

.ea-card li {
  margin-bottom: 0.4rem;
}

.ea-card-link {
  margin-top: 1rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.88rem;
  text-decoration: none;
}

/* Guides — 上图下文 */
.guides-section {
  padding: 4rem 0;
  background: linear-gradient(145deg, var(--color-mint-deep) 0%, var(--color-grass) 40%, var(--color-sky-deep) 100%);
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.section-head .section-label {
  margin-bottom: 0;
}

.view-all {
  font-family: var(--font-display);
  font-weight: 700;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background: var(--color-white);
  border: 2.5px solid var(--color-outline);
  border-radius: 999px;
  box-shadow: 3px 3px 0 var(--color-outline);
}

.guides-grid {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.35rem;
}

.guide-card-stack {
  background: var(--color-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 3px solid var(--color-white);
  box-shadow: 6px 6px 0 var(--color-outline);
  height: 100%;
  transition: transform 0.2s ease;
}

.guide-card-stack:hover {
  transform: translateY(-5px);
}

.guide-card-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.guide-card-media {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.guide-card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.guide-cat-badge {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.25rem 0.55rem;
  background: var(--color-sunny);
  border: 2px solid var(--color-outline);
  border-radius: 6px;
}

.guide-card-body {
  padding: 1.15rem 1.25rem 1.35rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.guide-card-body h3 {
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
}

.guide-card-body p {
  font-size: 0.9rem;
  color: var(--color-muted);
  flex: 1;
}

.guide-meta {
  margin-top: 0.75rem;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--color-grass);
}

.guides-empty {
  text-align: center;
  color: color-mix(in srgb, var(--color-white) 85%, transparent);
}

/* Wiki database */
.wiki-section {
  padding: 4rem 0;
}

.wiki-layout {
  display: grid;
  grid-template-columns: 1fr minmax(240px, 300px);
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .wiki-layout {
    grid-template-columns: 1fr;
  }
}

.wiki-topic-grid {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}

.wiki-topic-card {
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
  text-decoration: none;
  color: inherit;
  background: var(--color-white);
  border: 3px solid var(--color-outline);
  border-radius: 16px;
  box-shadow: 4px 4px 0 var(--color-outline);
  transition: transform 0.2s ease;
  height: 100%;
}

.wiki-topic-card:hover {
  transform: translateY(-3px);
  color: inherit;
}

.wiki-topic-icon {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  object-fit: contain;
}

.wiki-topic-card h3 {
  font-size: 0.98rem;
  margin-bottom: 0.25rem;
}

.wiki-topic-card p {
  font-size: 0.82rem;
  color: var(--color-muted);
  margin-bottom: 0.35rem;
}

.wiki-topic-tag {
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-grass);
}

.wiki-aside {
  padding: 1.25rem;
  background: linear-gradient(145deg, var(--color-mint) 0%, var(--color-sky) 100%);
  border: 3px solid var(--color-outline);
  border-radius: 20px;
  box-shadow: 5px 5px 0 var(--color-outline);
  position: relative;
}

.wiki-aside-sticker {
  position: absolute;
  top: -12px;
  right: 16px;
  padding: 0.3rem 0.7rem;
  background: var(--color-coral);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 800;
  border: 2px solid var(--color-outline);
  border-radius: 999px;
  transform: rotate(4deg);
}

.wiki-aside h3 {
  font-size: 1rem;
  margin-bottom: 0.75rem;
}

.wiki-aside ul {
  padding-left: 1.1rem;
  font-size: 0.88rem;
  color: var(--color-muted);
}

.wiki-aside li {
  margin-bottom: 0.35rem;
}

.wiki-aside-link {
  display: inline-block;
  margin-top: 1rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.88rem;
}

/* About — journal spread */
.about-section {
  padding: 4rem 0;
  background-color: var(--color-cream);
  background-image: repeating-linear-gradient(
    180deg,
    transparent,
    transparent 1.65rem,
    color-mix(in srgb, var(--color-outline) 6%, transparent) 1.66rem
  );
  border-top: 3px solid var(--color-outline);
}

.about-spread {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.about-masthead {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 2rem;
  align-items: center;
  padding: 1.5rem 1.65rem 1.55rem 1.75rem;
  background: var(--color-white);
  border: 3px solid var(--color-outline);
  border-left: 7px solid var(--color-coral-deep);
  border-radius: 6px 22px 22px 6px;
  box-shadow: 7px 7px 0 color-mix(in srgb, var(--color-coral-deep) 22%, var(--color-outline));
}

.about-masthead-copy .section-label {
  margin-bottom: 0.65rem;
}

.about-lead {
  font-size: 1.02rem;
  color: var(--color-muted);
  line-height: 1.68;
  max-width: 58ch;
}

.about-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
}

.about-pills li {
  padding: 0.35rem 0.75rem;
  font-size: 0.78rem;
  font-weight: 700;
  background: var(--color-sunny);
  border: 2px solid var(--color-outline);
  border-radius: 999px;
  box-shadow: 2px 2px 0 var(--color-outline);
}

.about-snaps {
  position: relative;
  width: 220px;
  height: 200px;
  flex-shrink: 0;
}

.about-snap {
  position: absolute;
  margin: 0;
  padding: 0.5rem 0.5rem 0.65rem;
  background: var(--color-white);
  border: 2.5px solid var(--color-outline);
  box-shadow: 4px 5px 0 var(--color-outline);
}

.about-snap img {
  display: block;
  width: 100%;
  object-fit: cover;
  border: 2px solid var(--color-outline);
  border-radius: 2px;
}

.about-snap--a {
  width: 148px;
  top: 0;
  left: 0;
  transform: rotate(-8deg);
  z-index: 2;
  background: var(--color-sky);
}

.about-snap--a img {
  aspect-ratio: 4 / 3;
}

.about-snap--b {
  width: 132px;
  bottom: 0;
  right: 0;
  transform: rotate(11deg);
  z-index: 1;
  background: var(--color-mint);
}

.about-snap--b img {
  aspect-ratio: 5 / 4;
}

.about-snap-tape {
  position: absolute;
  top: -7px;
  left: 50%;
  width: 44px;
  height: 14px;
  transform: translateX(-50%);
  background: rgba(255, 213, 107, 0.8);
  border: 1.5px solid rgba(58, 79, 72, 0.35);
  z-index: 2;
  pointer-events: none;
}

.about-snap-tape--mint {
  background: rgba(184, 232, 200, 0.9);
  transform: translateX(-50%) rotate(-12deg);
}

.about-journal {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0;
  align-items: stretch;
}

.about-page {
  padding: 1.5rem 1.55rem 1.6rem;
  background: var(--color-white);
  border: 3px solid var(--color-outline);
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.about-page--game {
  border-radius: 18px 0 0 18px;
  border-right: none;
  box-shadow: -4px 5px 0 color-mix(in srgb, var(--color-sky-deep) 30%, var(--color-outline));
  background: linear-gradient(165deg, var(--color-sky) 0%, var(--color-white) 42%);
}

.about-page--site {
  border-radius: 0 18px 18px 0;
  border-left: none;
  box-shadow: 4px 5px 0 color-mix(in srgb, var(--color-mint-deep) 30%, var(--color-outline));
  background: linear-gradient(195deg, var(--color-mint) 0%, var(--color-white) 42%);
}

.about-spine {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.1rem;
  width: 18px;
  background: color-mix(in srgb, var(--color-outline) 12%, var(--color-cream));
  border-top: 3px solid var(--color-outline);
  border-bottom: 3px solid var(--color-outline);
}

.about-spine-ring {
  width: 10px;
  height: 10px;
  border: 2.5px solid var(--color-outline);
  border-radius: 50%;
  background: var(--color-white);
}

.about-page-eyebrow {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.22rem 0.55rem;
  color: var(--color-sage-dark);
  background: var(--color-white);
  border: 2px solid var(--color-outline);
  border-radius: 4px;
  width: fit-content;
}

.about-page h3 {
  font-size: 1.12rem;
  color: var(--color-grass);
  margin: 0;
}

.about-page p {
  font-size: 0.9rem;
  color: var(--color-muted);
  line-height: 1.62;
  margin: 0;
}

.about-checklist {
  list-style: none;
  padding: 0;
  margin: 0.35rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.about-checklist li {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  font-size: 0.88rem;
  color: var(--color-muted);
  line-height: 1.5;
}

.about-check {
  flex-shrink: 0;
  color: var(--color-coral-deep);
  font-size: 0.75rem;
  margin-top: 0.15rem;
}

.about-modes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: auto;
  padding-top: 0.75rem;
}

.about-mode-chip {
  padding: 0.3rem 0.65rem;
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  border: 2px solid var(--color-outline);
  border-radius: 6px;
  box-shadow: 2px 2px 0 var(--color-outline);
}

.about-mode-chip--paramaker {
  background: var(--color-lavender);
}

.about-mode-chip--build {
  background: var(--color-peach);
}

.about-mode-chip--live {
  background: var(--color-mint);
}

.about-nav {
  margin-top: auto;
  padding-top: 0.85rem;
  border-top: 2px dashed color-mix(in srgb, var(--color-outline) 35%, transparent);
}

.about-nav-label {
  display: block;
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-muted);
  margin-bottom: 0.5rem;
}

.about-nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.about-nav a {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--color-text);
  background: var(--color-white);
  border: 2px solid var(--color-outline);
  border-radius: 999px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.about-nav a:hover {
  transform: translate(-2px, -2px);
  box-shadow: 3px 3px 0 var(--color-outline);
  color: var(--color-coral-deep);
}

.about-note {
  position: relative;
  max-width: 36rem;
  margin: 0 auto;
  padding: 1.1rem 1.35rem 1rem;
  background: var(--color-sunny);
  border: 2.5px solid var(--color-outline);
  border-radius: 4px 14px 14px 14px;
  box-shadow: 5px 6px 0 var(--color-outline);
  transform: rotate(-1.5deg);
}

.about-note-pin {
  position: absolute;
  top: -8px;
  left: 1.25rem;
  width: 14px;
  height: 14px;
  background: var(--color-coral);
  border: 2.5px solid var(--color-outline);
  border-radius: 50%;
}

.about-note p {
  margin: 0;
  font-size: 0.84rem;
  color: var(--color-muted);
  line-height: 1.55;
  text-align: center;
}

@media (max-width: 1024px) {
  .about-masthead {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .about-lead {
    margin-left: auto;
    margin-right: auto;
  }

  .about-pills {
    justify-content: center;
  }

  .about-snaps {
    margin: 0 auto;
  }

  .about-journal {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .about-spine {
    display: none;
  }

  .about-page--game,
  .about-page--site {
    border: 3px solid var(--color-outline);
    border-radius: 18px;
    box-shadow: 5px 5px 0 var(--color-outline);
  }

  .about-modes,
  .about-nav {
    justify-content: center;
    text-align: center;
  }

  .about-nav ul {
    justify-content: center;
  }
}

/* FAQ — 顶栏标题卡片，一行一题 */
.faq-section {
  padding: 4rem 0 5rem;
  background: linear-gradient(180deg, var(--color-white) 0%, var(--color-sky) 120%);
}

.faq-header {
  margin-bottom: 1.75rem;
}

.faq-lead {
  font-size: 0.98rem;
  color: var(--color-muted);
  max-width: 52ch;
  margin-top: 0.5rem;
}

.faq-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-card {
  border: 3px solid var(--color-outline);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 5px 5px 0 var(--color-outline);
  background: var(--color-white);
}

.faq-card-head {
  padding: 0.9rem 1.25rem;
  border-bottom: 3px solid var(--color-outline);
}

.faq-tone-sky .faq-card-head {
  background: var(--color-sky);
}

.faq-tone-mint .faq-card-head {
  background: var(--color-mint);
}

.faq-tone-lavender .faq-card-head {
  background: var(--color-lavender);
}

.faq-tone-peach .faq-card-head {
  background: var(--color-peach);
}

.faq-tone-sunny .faq-card-head {
  background: var(--color-sunny);
}

.faq-tone-berry .faq-card-head {
  background: var(--color-berry);
  color: #fff;
}

.faq-tone-berry .faq-card-tag {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  color: #fff;
}

.faq-card-tag {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  padding: 0.2rem 0.5rem;
  margin-bottom: 0.35rem;
  background: var(--color-white);
  border: 2px solid var(--color-outline);
  border-radius: 5px;
}

.faq-card-head h3 {
  font-size: 1.02rem;
  margin: 0;
}

.faq-card-body {
  padding: 1.1rem 1.25rem 1.25rem;
}

.faq-card-body p {
  font-size: 0.92rem;
  color: var(--color-muted);
  line-height: 1.65;
  margin: 0;
}

.faq-card-link {
  display: inline-block;
  margin-top: 0.65rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.88rem;
}

/* CTA */
.cta-section {
  padding: 4rem 0 5.5rem;
  background: linear-gradient(135deg, var(--color-grass) 0%, var(--color-mint-deep) 100%);
  border-top: 3px solid var(--color-outline);
}

.cta-content {
  text-align: center;
  max-width: 560px;
  margin: 0 auto;
}

.cta-content h2 {
  color: #fff;
  text-shadow: 2px 2px 0 var(--color-outline);
  margin-bottom: 0.75rem;
}

.cta-content p {
  color: color-mix(in srgb, #fff 90%, transparent);
  margin-bottom: 1.5rem;
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-lead,
  .hero-note {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-tags {
    justify-content: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-visual {
    min-height: 380px;
    margin-top: 1rem;
  }

  .photo-collage {
    margin: 0 auto;
  }

  .quick-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .ea-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .quick-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tag-build,
  .tag-live,
  .tag-mods {
    display: none;
  }

  .photo-collage {
    transform: scale(0.9);
    transform-origin: top center;
  }
}
</style>
