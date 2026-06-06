<template>
  <WikiCategoryShell
    title="Paralives Jobs — occupations by workplace"
    title-id="wiki-careers-occ-title"
    lead="Every job title we spotted by workplace — hospitals, campuses, studios, shops, and civic lots in Melino."
    :breadcrumb-parent="{ title: 'Jobs & money', href: '/wiki/careers' }"
    hero-image="/images/guides/guide02.webp"
  >
    <template #aside>
      <nav class="wiki-rail-toc" aria-label="On this page">
        <h2 class="wiki-rail-title">On this page</h2>
        <ul>
          <li><a href="#careers-basics">How jobs work</a></li>
          <li><a href="#job-filters">Search tags</a></li>
          <li><a href="#by-workplace">All workplaces</a></li>
          <li><a href="#list-source">When the list drifts</a></li>
          <li><a href="#careers-faq">Q&amp;A</a></li>
        </ul>
      </nav>
    </template>

    <aside class="wiki-callout wiki-callout--snapshot" aria-label="Early Access snapshot note">
      <p class="wiki-callout__title">Early Access snapshot</p>
      <p class="wiki-callout__body">
        Paralives remains in Early Access — treat this job list as a snapshot of your installed build, not a finalized
        roster guaranteed to match every future patch.
      </p>
    </aside>

    <div class="wiki-prose">
      <p class="wiki-occ-lead-tip">
        Workplace names can shift between Steam updates. When in doubt, trust your in-game job board &mdash; this page is
        player notes, not an official studio document. For Paradimes, bills, and shopping costs, open the
        <a href="/wiki/careers/economy">economy appendix</a>.
      </p>

      <div class="wiki-occ-stats" aria-label="Rough scale of what's listed">
        <div class="wiki-occ-stat">
          <strong>{{ stats.occupations }}</strong>
          <span>Role chips in this round-up</span>
        </div>
        <div class="wiki-occ-stat">
          <strong>{{ stats.workplaces }}</strong>
          <span>Workplaces listed</span>
        </div>
        <div class="wiki-occ-stat">
          <strong>{{ stats.careerFields }}</strong>
          <span>Ways postings get tagged</span>
        </div>
        <div class="wiki-occ-stat">
          <strong>{{ stats.skills }}</strong>
          <span>Skill veins the careers UI cares about</span>
        </div>
      </div>

      <p>
        Unsure how rabbit-hole shifts, performance strikes, or teleporting to work fits your save? Start on the
        <a href="/wiki/careers">careers and money section</a> for mechanics. Return here when you need the cast list: which
        job titles attach to each Melino workplace — cafés, hospitals, studios, and shops you can spot on the map.
      </p>
    </div>

    <section id="careers-basics" class="wiki-prose">
      <h2>How occupations fit the career loop</h2>
      <p>
        Paid jobs and school roles both register as <strong>occupations</strong> in game data. You browse postings, spend
        application points, manage schedules, and chase promotions — covered on the main careers page. This appendix
        names the roles: which titles appear at each workplace lot.
      </p>
      <div class="wiki-occ-mechanics">
        <div v-for="m in mechanics" :key="m.n" class="wiki-occ-mechanic">
          <b>{{ m.n }}</b>
          <h3>{{ m.title }}</h3>
          <p>{{ m.body }}</p>
        </div>
      </div>
    </section>

    <section id="job-filters" class="wiki-prose">
      <h2>Career field tags</h2>
      <p>
        These labels align with in-game posting filters — the same concept as Domains on the careers page, useful
        when planning which skills to train before applications.
      </p>
      <div class="wiki-occ-fields" aria-label="Named career fields">
        <span v-for="field in careerFields" :key="field" class="wiki-occ-field">{{ field }}</span>
      </div>
    </section>

    <section id="by-workplace" class="wiki-prose">
      <h2>Every workplace and role</h2>
      <p>
        This Early Access roundup lists roughly {{ stats.occupations }} role labels — browse by sector below. Patches
        occasionally rename workplaces or titles; your installed client is always authoritative.
      </p>
      <div v-for="sector in sectors" :key="sector.name" class="wiki-occ-sector">
        <div class="wiki-occ-sector-head">
          <h3>{{ sector.name }}</h3>
          <span class="wiki-occ-sector-count">{{ sector.roleCount }} roles</span>
        </div>
        <div
          v-for="wp in sector.workplaces"
          :key="wp.name"
          class="wiki-occ-workplace-card"
        >
          <h4 class="wiki-occ-workplace-title">
            {{ wp.name }}
            <span class="wiki-occ-workplace-count">({{ wp.roles.length }})</span>
          </h4>
          <div class="wiki-occ-role-list">
            <span v-for="(role, ri) in wp.roles" :key="`${wp.name}-${ri}`" class="wiki-occ-role">{{ role }}</span>
          </div>
        </div>
      </div>
    </section>

    <section id="list-source" class="wiki-prose">
      <h2>Keeping this list accurate</h2>
      <p>
        We sync role names from Early Access game data so newcomers are not guessing. Salary tuning, mood effects, and
        strike thresholds still change in patches. If a workplace gains new titles after an update, screenshot your job
        board and let us know — your running build outranks any static wiki page once Steam delivers a major patch.
      </p>
    </section>

    <section id="careers-faq" class="wiki-prose wiki-occ-faq">
      <h2>Occupations FAQ</h2>
      <div v-for="item in faq" :key="item.q" class="wiki-occ-faq-item">
        <h3>{{ item.q }}</h3>
        <p>{{ item.a }}</p>
      </div>
    </section>

    <div class="wiki-prose">
      <p style="margin-top: 1.75rem">
        Last checked in-game May 26, 2026 — unofficial player notes from an Early Access build. Re-check after
        Steam updates.
      </p>
    </div>

  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

/** Role grids — tweak when EA renames workplaces (sync with shipped strings when you can). */

const stats = {
  occupations: 126,
  workplaces: 22,
  careerFields: 11,
  skills: 23,
}

const careerFields = [
  'Software Development',
  'Service',
  'Music',
  'Education',
  'Management',
  'Food',
  'Art',
  'Maintenance',
  'Healthcare',
  'Science',
  'Fitness',
]

const mechanics = [
  {
    n: '01',
    title: 'Hunt postings',
    body: 'Filters nudge similar gigs together; you smash application points onto the flyer you care about.',
  },
  {
    n: '02',
    title: 'Clock juggling',
    body: 'Shifts collide like real chores — the HUD whines when two timelines demand the same butt in a cubicle.',
  },
  {
    n: '03',
    title: 'Good week / harsh week',
    body: 'Mood, coworkers, and growth feed the dreaded performance roll — gravy days bank upgrade chances, flops stack strikes.',
  },
  {
    n: '04',
    title: 'Extras & quirks',
    body: 'Perks braid into perks; similar gigs often share vibes so your nurse can flex into caregiver tangents.',
  },
]

const sectors = [
  {
    name: 'Technology and Creative Studios',
    roleCount: 29,
    workplaces: [
      {
        name: 'Parallel Studios',
        roles: [
          'Gameplay Programmer',
          'Character Artist',
          'Animator',
          'Studio Director',
          'Environment Artist',
          'Engine Programmer',
          'Janitor',
        ],
      },
      {
        name: 'Mapple Web Inc.',
        roles: [
          'Full-Stack Developer',
          'Back-End Developer',
          'Front-End Developer',
          'UX Researcher',
          'UI Artist',
          'Graphic Designer',
          'Creative Director',
          'Technical Director',
          'CEO',
          'Janitor',
        ],
      },
      {
        name: 'ClickWork Industries',
        roles: [
          'Systems Engineer',
          'Cybersecurity Engineer',
          'Digital Marketing Designer',
          'Branding Artist',
          'Creative Director',
          'Technical Director',
          'Product Manager',
          'Operations Director',
          'Chief Happiness Officer',
          'CEO',
          'General Practitioner',
          'Janitor',
        ],
      },
    ],
  },
  {
    name: 'Healthcare and Wellness',
    roleCount: 24,
    workplaces: [
      {
        name: 'Hospital',
        roles: [
          'Hospital Clerk',
          'Janitor',
          'Cook',
          'Receptionist',
          'Caregiver',
          'Nurse',
          'Nursing Supervisor',
          'Midwife',
          'General Practitioner',
          'Dermatologist',
          'Surgeon',
          'Music Therapist',
          'Programmer',
          'Systems Engineer',
        ],
      },
      {
        name: 'Clinic',
        roles: ['Receptionist', 'Janitor', 'Nurse', 'General Practitioner'],
      },
      {
        name: 'Gym',
        roles: [
          'Front Desk Associate',
          'Manager',
          'Janitor',
          'Assistant Trainer',
          'Trainer',
          'Celebrity Trainer',
        ],
      },
    ],
  },
  {
    name: 'Education and Research',
    roleCount: 24,
    workplaces: [
      {
        name: 'Elementary School',
        roles: [
          'Student',
          'Janitor',
          'Teacher',
          'Music Teacher',
          'Physical Education Teacher',
          'Principal',
        ],
      },
      {
        name: 'High School',
        roles: [
          'Student',
          'Janitor',
          'Teacher',
          'Music Teacher',
          'Art Teacher',
          'Science Teacher',
          'Physical Education Teacher',
          'Principal',
        ],
      },
      {
        name: 'University Research Lab',
        roles: [
          'Astronomy Researcher',
          'Astronomy Research Supervisor',
          'Environmental Researcher',
          'Environmental Research Supervisor',
        ],
      },
      {
        name: 'Space Agency',
        roles: [
          'Astronomer',
          'Mission Coordinator',
          'Astronaut Trainer',
          'Astronaut',
          'CEO',
          'Janitor',
        ],
      },
    ],
  },
  {
    name: 'Food, Cafes and Hospitality',
    roleCount: 22,
    workplaces: [
      {
        name: 'Chez Maurice',
        roles: ['Cook', 'Waiter', 'Janitor', 'Manager'],
      },
      {
        name: 'Italian Restaurant',
        roles: ['Cook', 'Waiter', 'Janitor', 'Manager'],
      },
      {
        name: 'Fancy Restaurant',
        roles: [
          'Cook',
          'Assistant Chef',
          'Chef',
          'Waiter',
          'Head Waiter',
          'Janitor',
          'Assistant Manager',
          'Manager',
        ],
      },
      {
        name: 'Crème Café',
        roles: ['Barista', 'Janitor', 'Manager'],
      },
      {
        name: "Sip N' Read Bookshop",
        roles: ['Mixologist', 'Janitor', 'Manager'],
      },
    ],
  },
  {
    name: 'Culture, Music, Retail and Services',
    roleCount: 27,
    workplaces: [
      {
        name: 'Music Production Studio',
        roles: [
          'Studio Receptionist',
          'Audio Engineer',
          'Guitarist',
          'Pianist',
          'Lead Guitarist',
          'Lead Pianist',
          'Manager',
          'Multi-Instrumentalist',
        ],
      },
      {
        name: 'Museum/Library',
        roles: [
          'Receptionist',
          'Tour Guide',
          'Guard',
          'Manager',
          'Janitor',
          'Researcher',
          'Curator',
        ],
      },
      {
        name: 'Plant Shop',
        roles: ['Store Clerk', 'Florist', 'Manager'],
      },
      {
        name: 'Hair Salon',
        roles: ['Store Clerk', 'Hairdresser', 'Manager'],
      },
      {
        name: 'Antique Shop',
        roles: ['Store Clerk', 'Manager'],
      },
      {
        name: 'General Store',
        roles: ['Store Clerk', 'Manager'],
      },
      {
        name: "Clothing Store L'Armoire",
        roles: ['Store Clerk', 'Manager'],
      },
    ],
  },
]

const faq = [
  {
    q: 'How many jobs ship in EA right now?',
    a: 'This rundown tracks 126 role slots counting students plus paying gigs — cribbed during an Early Access build. Steam later might add or shave rows; shrug and trust your HUD.',
  },
  {
    q: 'Can mix-and-match vibes exist?',
    a: 'Yep. Postings flirt with broader tags — your barista saga can rhyme with gigs filed under hospitality and customer service chaos.',
  },
  {
    q: 'Promotion sounds grindy?',
    a: 'You stack upgrade points across happy-ish shifts and pick cards that widen pay bumps or perk paths before leaping sideways to fancier postings.',
  },
  {
    q: 'Twin careers possible?',
    a: 'If the calendar agrees. Clashing mandatory hours yell at you before payroll pretends otherwise.',
  },
]
</script>
