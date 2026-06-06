/**
 * Wiki 列表与侧栏导航 — 分组展示，支持嵌套路由 path
 * 数据可与参考站一致，文案与分组结构独立
 */

export const wikiHubGroups = [
  {
    id: 'paramaker',
    label: 'Paramaker & identity',
    description: 'Choices you lock in (or grow) before and during Live Mode.',
    items: [
      {
        path: 'talents',
        title: 'Talents',
        description: 'Seven launch specialties — how each one nudges matching skills when you play.',
        tag: 'Creation',
        icon: '/images/wiki/talents/Talent-Art.png',
      },
      {
        path: 'vibes',
        title: 'Vibes',
        description: 'Temperament labels that colour moods, social picks, and Together Card odds.',
        tag: 'Personality',
        icon: '/images/wiki/vibes/Vibe-Energetic.png',
      },
      {
        path: 'traits',
        title: 'Stats & lifestyles',
        description: 'The seven-point spread, lifestyle picks, and what carries into the town save.',
        tag: 'Creation',
        icon: null,
      },
      {
        path: 'parafolks',
        title: 'Parafolks & genetics',
        description: 'Height, hair texture, inheritance, life stages, and family play notes.',
        tag: 'Family',
        icon: null,
      },
    ],
  },
  {
    id: 'live',
    label: 'Live Mode systems',
    description: 'Day-to-day simulation — needs, skills, work, and household money.',
    items: [
      {
        path: 'needs-wants',
        title: 'Needs & wants',
        description: 'Six bars, daily goals, sleep resets, and how autonomy picks the next action.',
        tag: 'Survival',
        icon: '/images/wiki/needs/Need-Hunger.png',
      },
      {
        path: 'emotions',
        title: 'Emotions',
        description: 'Mood icons, intensity, and how feelings nudge skills, jobs, and social cards.',
        tag: 'Mood',
        icon: '/images/wiki/emotions/Emotion-Happy.png',
      },
      {
        path: 'skills',
        title: 'Skills basics',
        description: 'What skills are, the level 20 cap, and when Knowledge families matter.',
        tag: 'Progression',
        icon: null,
      },
      {
        path: 'skills/leveling',
        title: 'Skill leveling & Knowledge',
        description: 'XP habits, Knowledge trees, talent cross-checks, and which jobs care about each skill.',
        tag: 'Data tables',
        icon: null,
      },
      {
        path: 'careers/occupations',
        title: 'Jobs by workplace',
        description: 'Job titles sorted by café, clinic, campus, studio, and shop lots in Melino.',
        tag: 'Workplaces',
        icon: null,
      },
      {
        path: 'careers/economy',
        title: 'Economy & bills',
        description: 'Starting Paradimes, meter build costs, bills, shopping, museum, and emergencies.',
        tag: 'Money',
        icon: null,
      },
    ],
  },
  {
    id: 'build',
    label: 'Build Mode',
    description: 'Lot tools that shipped for Early Access builders.',
    items: [
      {
        path: 'build-tools',
        title: 'Build tools',
        description: 'Curved walls, split levels, pools, roofs, and the colour wheel in practice.',
        tag: 'Housing',
        icon: null,
      },
    ],
  },
  {
    id: 'social',
    label: 'Social play',
    description: 'Relationships, cards, and perks that stack per Parafolk.',
    items: [
      {
        path: 'relationships',
        title: 'Relationships',
        description: 'Social perks, romance tracks, multiselect outings, and Together Cards.',
        tag: 'Social',
        icon: '/images/wiki/social-perks/SocialPerk-GoodAtMakingFriends.png',
      },
    ],
  },
  {
    id: 'community',
    label: 'Community & mods',
    description: 'Workshop hooks and how free EA updates relate to paid DLC talk.',
    items: [
      {
        path: 'modding',
        title: 'Mods & DLC policy',
        description: 'Steam Workshop, in-game tools, and what the studio pledged about paid packs.',
        tag: 'Workshop',
        icon: null,
      },
    ],
  },
]

/** 侧栏顺序：含 hub 未展示的补充页（如 careers 总览） */
export const wikiTopics = [
  ...wikiHubGroups.flatMap((g) => g.items),
  {
    path: 'careers',
    title: 'Work in Melino — jobs & money',
    description: 'Rabbit-hole jobs, Domains, and links to the job list by lot and economy page.',
    tag: 'Careers',
    icon: null,
    hubOnly: false,
    hiddenFromHub: true,
  },
]

export const wikiHubEntryCount = wikiHubGroups.reduce((n, g) => n + g.items.length, 0)

export function getWikiPathFromRoute(routePath) {
  const m = String(routePath || '').match(/^\/wiki\/(.+?)\/?$/)
  return m ? m[1] : null
}

export function findWikiTopic(path) {
  if (!path) return null
  return wikiTopics.find((t) => t.path === path) ?? null
}

export const wikiQuickLinks = [
  { to: '/wiki', label: 'All wiki topics' },
  { to: '/how-to-play', label: 'How to Play' },
  { to: '/cheats', label: 'Cheat commands' },
  { to: '/map', label: 'Melino map' },
  { to: '/updates', label: 'EA roadmap' },
]

export function getWikiNeighbors(path) {
  const index = wikiTopics.findIndex((t) => t.path === path)
  if (index < 0) return { prev: null, next: null, others: wikiTopics.filter((t) => !t.hiddenFromHub) }
  return {
    prev: index > 0 ? wikiTopics[index - 1] : null,
    next: index < wikiTopics.length - 1 ? wikiTopics[index + 1] : null,
    others: wikiTopics.filter((t) => t.path !== path && !t.hiddenFromHub),
  }
}

/** 侧栏「同组话题」— 按 hub 分组，不用线性 prev/next */
export function getWikiGroupPeers(path) {
  const group = wikiHubGroups.find((g) => g.items.some((i) => i.path === path))
  if (!group) return { groupLabel: '', peers: [] }
  return {
    groupLabel: group.label,
    peers: group.items.filter((i) => i.path !== path),
  }
}

/** 孤立页侧栏「Also relevant」— 手工策展，与参考站线性邻居不同 */
export const wikiCrossLinks = {
  talents: [
    { path: 'skills', title: 'Skills basics' },
    { path: 'traits', title: 'Stats & lifestyles' },
  ],
  vibes: [
    { path: 'emotions', title: 'Emotions' },
    { path: 'relationships', title: 'Relationships' },
  ],
  traits: [
    { path: 'talents', title: 'Talents' },
    { path: 'vibes', title: 'Vibes' },
  ],
  parafolks: [
    { path: 'traits', title: 'Stats & lifestyles' },
    { path: 'relationships', title: 'Relationships' },
  ],
  'needs-wants': [
    { path: 'emotions', title: 'Emotions' },
    { path: 'skills', title: 'Skills basics' },
  ],
  emotions: [
    { path: 'needs-wants', title: 'Needs & wants' },
    { path: 'relationships', title: 'Relationships' },
  ],
  skills: [
    { path: 'skills/leveling', title: 'Leveling tables' },
    { path: 'careers/occupations', title: 'Occupations' },
  ],
  'skills/leveling': [
    { path: 'skills', title: 'Skills basics' },
    { path: 'careers/occupations', title: 'Occupations' },
  ],
  'careers/occupations': [
    { path: 'careers/economy', title: 'Economy & bills' },
    { path: 'skills/leveling', title: 'Leveling tables' },
  ],
  'careers/economy': [
    { path: 'careers/occupations', title: 'Occupations' },
    { path: 'build-tools', title: 'Build tools' },
  ],
  careers: [
    { path: 'careers/occupations', title: 'Occupations' },
    { path: 'careers/economy', title: 'Economy & bills' },
  ],
  'build-tools': [
    { path: 'careers/economy', title: 'Economy & bills' },
    { path: '/how-to-play', title: 'How to Play', external: true },
  ],
  relationships: [
    { path: 'emotions', title: 'Emotions' },
    { path: 'vibes', title: 'Vibes' },
  ],
  modding: [
    { path: '/mods', title: 'Mods we use', external: true },
    { path: 'build-tools', title: 'Build tools' },
  ],
}

export function getWikiCrossLinks(path) {
  return wikiCrossLinks[path] ?? []
}
