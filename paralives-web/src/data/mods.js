/** Steam Workshop hub — requires owning Paralives in your library to subscribe. */
export const WORKSHOP_HUB_URL = 'https://steamcommunity.com/app/1118520/workshop/'

export const modInstallSteps = [
  'Own Paralives on Steam — Workshop subscribe and download need a license tied to your account.',
  'In Steam: Library → Paralives → Community Hub → Workshop, or open the hub link below.',
  'Hit Subscribe on a mod. Steam queues the download; launch the game to finish syncing.',
  'In-game: main menu Mods (wording may shift per patch) → browse or manage subscribed packs.',
  'Restart once if new furniture or CAS pieces do not show after your first subscribe.',
]

export const workshopCategories = [
  { label: 'Modpacks', note: 'Furniture, clutter, tattoos, small gameplay tweaks bundled as one subscribe.' },
  { label: 'Households', note: 'Ready-made families with relationships — drop into a lot and play.' },
  { label: 'Houses', note: 'Finished residential shells; check bed/bath count in the Workshop preview.' },
]

/** Hand-picked mods we keep enabled — not endorsed by the studio. Re-check after patches. */
export const modPicks = [
  {
    id: 'sensible-camera-control',
    title: 'Sensible Camera Control',
    category: 'Quality of life',
    emoji: '📷',
    featured: true,
    note:
      'Kills the automatic camera tilt when you look around. Small change, but I stopped fighting the default angle after the first evening in Live Mode.',
    workshopUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3732825585',
  },
  {
    id: 'invite-to-current-lot',
    title: 'Invite to Current Lot',
    category: 'Social',
    emoji: '📱',
    featured: true,
    note:
      'Phone → Call Parafolk → Invite to Current Lot. Picks actually walk to your lot instead of you hoping a vague invite works. Read recent comments if invites bug out on your patch.',
    workshopUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3732831966',
  },
  {
    id: 'display-townies-on-map',
    title: 'Display Townies on Map',
    category: 'Map & UI',
    emoji: '🗺️',
    featured: true,
    note:
      'Zoom the town map out and you see portraits for who is where. Does not fix routing, but I use it to spot busy venues before sending a Parafolk across Melino.',
    workshopUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3732799847',
  },
  {
    id: 'favorite-links-myshunosun',
    title: 'Favorite links by myshunosun',
    category: 'CAS / tattoos',
    emoji: '🎨',
    featured: true,
    note:
      'Six tattoo styles with full recolor in Paramaker. Lightweight cosmetic pack — good if you want more skin detail without a huge subscribe list.',
    workshopUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3732120005',
  },
  {
    id: 'kidi-furniture',
    title: 'Kidi Furniture Items',
    category: 'Build',
    emoji: '🛏️',
    featured: false,
    note:
      'Pillow-fort bed, bean bag, canopy — reads like a kids room without looking pasted in. Handy while official kid clutter is still thin at EA.',
    workshopUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3674608388',
  },
  {
    id: 'rococo-bedroom',
    title: 'Rococo Bedroom Items',
    category: 'Build',
    emoji: '✨',
    featured: false,
    note:
      'Ornate bed, vanity, rug set for a fussy bedroom. Pastel rococo vibe that still sits okay next to base-game pieces in Melino.',
    workshopUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3683577667',
  },
  {
    id: 'eliza-richards',
    title: 'Eliza Richards',
    category: 'Household',
    emoji: '👤',
    featured: false,
    note:
      'Single sim with a fresh-start brief — likes baking and reading, ambitions left open. Nice if you want a story seed without importing a whole legacy cast.',
    workshopUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3732751508',
  },
  {
    id: 'split-level-house',
    title: 'Split Level House',
    category: 'House',
    emoji: '🏠',
    featured: false,
    note:
      '3 bed, 2 bath suburban split-level you can drop on a lot. Boring in the best way — room for kids, guests, or a home office without a full build session.',
    workshopUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3731731891',
  },
]

export const modsFaq = [
  {
    q: 'Do I need to own Paralives before I can use Workshop?',
    a: 'Yes. Steam ties Workshop subscribe and download to a game license in your library. Without owning Paralives, you typically cannot subscribe or pull mods — browsing may work, but installs will not.',
  },
  {
    q: 'Where do new items show up after I subscribe?',
    a: 'Build objects land in Build Mode catalog tabs. CAS pieces appear in Paramaker. Gameplay tweaks apply on next launch — check the mod description for menu paths or phone interactions.',
  },
  {
    q: 'Will mods break my save after an EA patch?',
    a: 'Sometimes. Back up saves before stacking gameplay mods. After each patch, skim the mod’s Workshop comments, toggle suspects off in the in-game mod list, and test on a throwaway household first.',
  },
  {
    q: 'How is this different from the wiki modding page?',
    a: 'This page is a short player pick list with direct Workshop links. Workshop policy and free-update stance live on the wiki modding article — read that for studio context, use this page for subscribe targets.',
  },
]
