/** @deprecated 使用 wikiHub.js — 保留 re-export 供旧 import */
export {
  wikiTopics,
  getWikiPathFromRoute as getWikiSlugFromPath,
  getWikiNeighbors,
} from './wikiHub.js'

export const wikiQuickLinks = [
  { to: '/wiki', label: 'All wiki topics' },
  { to: '/how-to-play', label: 'How to Play' },
  { to: '/cheats', label: 'Cheat commands' },
  { to: '/map', label: 'Melino map' },
  { to: '/updates', label: 'EA roadmap' },
]
