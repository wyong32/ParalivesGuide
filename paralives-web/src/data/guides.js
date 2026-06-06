/**
 * 指南数据 — 玩家视角撰写；seo 字段供详情页 TDK 使用
 */
const guidesData = [
  {
    id: 1,
    title: 'Getting Started with Paralives Early Access',
    description:
      'Your first-hour checklist: what Early Access means, how Build / Paramaker / Live Mode fit together, and what to expect before you click Play.',
    tags: ['Beginner', 'Early Access', 'Basics'],
    publishDate: '2026-06-05',
    readTime: '10 min read',
    imageUrl: '/images/guides/guide01.webp',
    imageAlt: 'Getting started with Paralives Early Access — beginner guide cover',
    seo: {
      title: 'Paralives Getting Started — Early Access Guide for Steam',
      description:
        'Paralives getting-started guide: three modes, first-hour checklist, realistic Early Access expectations, and wiki links — start your Melino save on Steam today.',
      keywords:
        'Paralives getting started, Paralives Guides, Paralives beginner, Paralives game, Early Access, Steam, Paramaker, Live Mode',
    },
    addressBar: 'getting-started',
    isHome: true,
    detailsHtml: `
      <p class="guide-lead">
        We wrote this for friends picking up Paralives on Steam Early Access — not as a studio manual.
        If a step here disagrees with your installed build, trust the game client and the latest dev post.
      </p>
      <h2>Before you click Play</h2>
      <p>
        Early Access means saves can outlive balance tweaks. Name a household you are okay keeping for a
        few patches, save often, and expect missing features the public roadmap still lists for later EA
        (pets, seasons, cars, and more).
      </p>
      <h2>Your first hour</h2>
      <ol>
        <li><strong>Paramaker</strong> — lock talents, vibes, and stats you will not regret; genetics matter for legacy play.</li>
        <li><strong>Build Mode</strong> — place a modest starter home; hunger and energy bite fast on a fresh household.</li>
        <li><strong>Live Mode</strong> — visit one shop or the museum, send someone to work, and watch bills plus needs tick.</li>
      </ol>
      <p>
        For the full first-evening checklist, system specs, and EA caveats, use our
        <a href="/how-to-play">How to Play</a> page. For mechanics mid-save, jump into the
        <a href="/wiki">wiki topics</a> or <a href="/cheats">cheat commands</a> (always verify with in-game <strong>HELP</strong>).
      </p>
    `,
  },
]

export default guidesData
export const guides = guidesData
