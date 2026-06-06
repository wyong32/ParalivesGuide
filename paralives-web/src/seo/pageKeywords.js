/**
 * Page H1 copy — TDK lives in router/routeSeo.js and detail data files.
 */

export const pageSeo = {
  home: {
    h1: {
      primary: 'Paralives Guide',
      secondary: 'Player help for the life sim on Steam',
    },
  },
  'how-to-play': {
    h1: 'How to Play Paralives — your first save on Steam',
  },
  wiki: {
    h1: 'Paralives Wiki — game systems players look up in EA',
  },
  guides: {
    h1: 'Paralives Guides — walkthroughs and mode tips',
  },
  build: {
    h1: 'Paralives Build Mode — tools and costs on your lot',
  },
  cheats: {
    h1: 'Paralives Cheats — console commands for your build',
  },
  mods: {
    h1: 'Paralives Mods — Steam Workshop picks we subscribe to',
  },
  map: {
    h1: 'Paralives Map — interactive Melino town map',
  },
  updates: {
    h1: 'Paralives Roadmap — Early Access progress players track',
  },
  'wiki-talents': {
    h1: 'Paralives Talents — Paramaker specialties that stick',
  },
  'wiki-vibes': {
    h1: 'Paralives Vibes — temperament and mood bias',
  },
  'wiki-skills': {
    h1: 'Paralives Skills — leveling basics for Live Mode',
  },
  'wiki-skills-leveling': {
    h1: 'Paralives Skill Tables — levels and Knowledge paths',
  },
  'wiki-traits': {
    h1: 'Paralives Stats — lifestyles and social perks',
  },
  'wiki-emotions': {
    h1: 'Paralives Emotions — moods and Together Cards',
  },
  'wiki-needs-wants': {
    h1: 'Paralives Needs & Wants — daily bars and goals',
  },
  'wiki-parafolks': {
    h1: 'Paralives Parafolks — genetics and family play',
  },
  'wiki-build-tools': {
    h1: 'Paralives Build Tools — walls, terrain, and color',
  },
  'wiki-careers': {
    h1: 'Paralives Careers — jobs across Melino',
  },
  'wiki-careers-occupations': {
    h1: 'Paralives Jobs — occupations by workplace',
  },
  'wiki-careers-economy': {
    h1: 'Paralives Economy — Paradimes, bills, and shopping',
  },
  'wiki-relationships': {
    h1: 'Paralives Relationships — perks and outings',
  },
  'wiki-modding': {
    h1: 'Paralives Mods Policy — Workshop and free updates',
  },
  'legal-privacy': {
    h1: 'Privacy Policy — how paralivesguides.org handles data',
  },
  'legal-terms': {
    h1: 'Terms of Service — rules for using this fan site',
  },
  'legal-copyright': {
    h1: 'Copyright Notice — ownership and permitted use',
  },
  'legal-about': {
    h1: 'About Us — who runs Paralives Guide',
  },
  'legal-contact': {
    h1: 'Contact Us — email the Paralives Guide team',
  },
}

export function getPageH1(pageKey) {
  return pageSeo[pageKey]?.h1 ?? null
}
