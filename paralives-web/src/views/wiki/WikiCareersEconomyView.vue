<template>
  <WikiCategoryShell
    title="Paralives Economy — Paradimes, bills, and shopping"
    title-id="wiki-careers-econ-title"
    lead="Paradimes income, lot expenses, build pricing, shopping habits, museum milestones, and surprise costs — tuned for Early Access snapshots."
    :breadcrumb-parent="{ title: 'Jobs & money', href: '/wiki/careers' }"
    hero-image="/images/wiki-paralives.webp"
  >
    <template #aside>
      <nav class="wiki-rail-toc" aria-label="On this page">
        <h2 class="wiki-rail-title">On this page</h2>
        <ul>
          <li><a href="#overview">Economy basics</a></li>
          <li><a href="#starting-budget">Starting budget</a></li>
          <li><a href="#income">Income &amp; salaries</a></li>
          <li><a href="#bills">Bills &amp; daycare</a></li>
          <li><a href="#shopping">Shopping</a></li>
          <li><a href="#donations">Museum &amp; bundles</a></li>
          <li><a href="#risk">Emergencies</a></li>
          <li><a href="#budget-plan">First-week plan</a></li>
          <li><a href="#accuracy">Accuracy</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>
    </template>

    <aside class="wiki-callout wiki-callout--snapshot" aria-label="Early Access snapshot note">
      <p class="wiki-callout__title">Early Access snapshot</p>
      <p class="wiki-callout__body">
        Paralives is in active Early Access — figures here reflect a typical installed build and may shift with tuning,
        feature flags, or content updates. Always verify large purchases and recurring bill lines in your own save.
      </p>
    </aside>

    <div class="wiki-prose">
      <div class="wiki-econ-stats" aria-label="Starting cash and bill numbers we checked in EA">
        <div class="wiki-econ-stat">
          <strong>78,000</strong>
          <span>Paradimes at new save (May 2026 build)</span>
        </div>
        <div class="wiki-econ-stat">
          <strong>7 days</strong>
          <span>Configured bill cycle</span>
        </div>
        <div class="wiki-econ-stat">
          <strong>15</strong>
          <span>Community Center bundles</span>
        </div>
        <div class="wiki-econ-stat">
          <strong>11</strong>
          <span>Museum reward milestones</span>
        </div>
      </div>

      <aside class="wiki-callout wiki-econ-scope" aria-label="How we describe verified numbers">
        <p class="wiki-econ-scope-lead">
          <strong>How we checked these numbers.</strong>
          We pulled figures from a May 2026 Windows EA save and cross-checked config data. When a flag says disabled,
          we say so — still open your bills screen after the next Steam patch and tell us if yours differs.
        </p>
      </aside>

      <p>
        Want job titles before budget math?
        <a href="/wiki/careers/occupations">Paralives Careers and Occupations</a> lists every EA role grouping. For
        application mechanics and rabbit-hole rules, see the
        <a href="/wiki/careers">careers and money section</a>.
      </p>
    </div>

    <section id="overview" class="wiki-prose">
      <h2>Household economy in scope</h2>
      <p>
        <strong>Paradimes</strong> pay for furniture and goods, yet household finances run deeper. Income arrives from
        careers, benefit lines, story payouts, resales, and civic rewards — then flows out through lot purchases,
        utilities, daycare, groceries, disaster replacements, and community projects.
      </p>
      <div class="wiki-econ-flow">
        <div class="wiki-econ-flow-card wiki-econ-flow-card--in">
          <h3>Money in</h3>
          <ul>
            <li>Career wages plus rank-based salary increases</li>
            <li>Family and unemployment benefit credits on bills</li>
            <li>Story card payouts and negotiated bill discounts</li>
            <li>Museum milestones and Community Center bundle prizes</li>
            <li>Reselling items, artwork, and duplicate purchases</li>
          </ul>
        </div>
        <div class="wiki-econ-flow-card wiki-econ-flow-card--out">
          <h3>Money out</h3>
          <ul>
            <li>Lot purchases and large Build Mode projects</li>
            <li>Electricity, water, and municipal tax charges</li>
            <li>Daycare fees and child transport costs</li>
            <li>Catalog buys, wardrobe updates, and takeaway meals</li>
            <li>Fire replacements and Community Center pledges</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="starting-budget" class="wiki-prose">
      <h2>New-game funds and build-meter pricing</h2>
      <p>
        Fresh households currently begin with <strong>78,000 Paradimes</strong> per extracted defaults. Residential lots
        are purchasable, and terraforming charges apply per square meter before furniture enters the budget.
      </p>
      <table class="wiki-data-table wiki-econ-table">
        <thead>
          <tr>
            <th scope="col">Confirmed cost</th>
            <th scope="col">Configured value</th>
            <th scope="col">Why it bites</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Starting funds</th>
            <td>$78,000</td>
            <td>Baseline balance before first bill</td>
          </tr>
          <tr>
            <th scope="row">Lot terrain</th>
            <td>$5 / m<sup>2</sup></td>
            <td>Large grading edits chew cash fast</td>
          </tr>
          <tr>
            <th scope="row">Walls</th>
            <td>$1 / m<sup>2</sup></td>
            <td>Cheapest structural edits</td>
          </tr>
          <tr>
            <th scope="row">Platforms</th>
            <td>$25 / m<sup>2</sup></td>
            <td>Split levels and elevations cost real Paradimes</td>
          </tr>
          <tr>
            <th scope="row">Residential lots</th>
            <td>Purchasable</td>
            <td>Lot deeds participate in budgeting</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section id="income" class="wiki-prose">
      <h2>Salaries and tech employer tracks</h2>
      <p>
        Occupation records define wages, perks, and bill hooks. About twenty-five tech and studio roles currently expose
        readable daily salaries in extracted data — other jobs exist without matching line items, so this section reports
        only documented ranges.
      </p>
      <table class="wiki-data-table wiki-econ-table">
        <thead>
          <tr>
            <th scope="col">Employer arc</th>
            <th scope="col">Daily pay spread</th>
            <th scope="col">Bonus per rank</th>
            <th scope="col">Roles with values</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Parallel Studios</th>
            <td>$250 – $450 / day</td>
            <td>$10 – $15</td>
            <td>6</td>
          </tr>
          <tr>
            <th scope="row">Mapple Web Inc.</th>
            <td>$450 – $800 / day</td>
            <td>$15 – $20</td>
            <td>9</td>
          </tr>
          <tr>
            <th scope="row">ClickWork Industries</th>
            <td>$800 – $2,100 / day</td>
            <td>$20 – $50</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
      <p>
        Reference captures cite Parallel gameplay programmers near $250/day, Mapple full-stack developers near $450/day,
        ClickWork product managers near $1,200/day, and ClickWork executive roles topping around $2,100/day — confirm on
        the hiring panel after each patch. Full titles appear in
        <a href="/wiki/careers/occupations">Careers and Occupations</a>.
      </p>
    </section>

    <section id="bills" class="wiki-prose">
      <h2>Weekly bills, utilities, and childcare</h2>
      <p>
        Bills run on a <strong>10,080-minute</strong> cycle — seven Sim days — with a <strong>1,440-minute</strong>
        settlement window after delivery. Mailbox drops and a <em>Settle</em> action keep the rhythm predictable once you
        learn the cadence.
      </p>
      <table class="wiki-data-table wiki-econ-table">
        <thead>
          <tr>
            <th scope="col">Bill line</th>
            <th scope="col">Reference tuning</th>
            <th scope="col">What it implies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Electricity</th>
            <td>$0.076 / kWh; usage cost multiplier 0.12/min</td>
            <td>Lights, electronics, hungry appliances pile on</td>
          </tr>
          <tr>
            <th scope="row">Water</th>
            <td>$0.10 / liter; usage multiplier 0.08/min</td>
            <td>Separate low/high draw categories matter</td>
          </tr>
          <tr>
            <th scope="row">Municipal taxes</th>
            <td>5% charge percent</td>
            <td>Eval-driven property skim</td>
          </tr>
          <tr>
            <th scope="row">Family benefit</th>
            <td>$200 benefit score when rules fire</td>
            <td>Household subsidy entry</td>
          </tr>
          <tr>
            <th scope="row">Unemployment benefits</th>
            <td>$100 benefit score when rules fire</td>
            <td>Safety net line</td>
          </tr>
          <tr>
            <th scope="row">Daycare</th>
            <td>$0.25 / child / minute</td>
            <td>Clocked while kids are checked in</td>
          </tr>
          <tr>
            <th scope="row">Daycare transport</th>
            <td>$20 / child</td>
            <td>Trips from lots you do not own</td>
          </tr>
        </tbody>
      </table>
      <p>
        Career perks may add bill bonuses (such as expense-covered perks) or bill training costs back to the household,
        so finances extend beyond simple salary-minus-utilities math.
      </p>
    </section>

    <section id="shopping" class="wiki-prose">
      <h2>Shopping, meals, inventory, and resale</h2>
      <div class="wiki-econ-cards">
        <div class="wiki-econ-card">
          <h3>Catalog scale</h3>
          <p>
            The item catalog spans thousands of entries, with roughly half exposing explicit price multipliers. Build
            Mode shares the economy: buy, sell, duplicate, and insufficient-funds warnings apply to walls, platforms,
            and props.
          </p>
        </div>
        <div class="wiki-econ-card">
          <h3>Household inventory</h3>
          <p>
            UI strings reference household inventory and collection views, meaning purchases can route to storage rather
            than appearing immediately in a room.
          </p>
        </div>
        <div class="wiki-econ-card">
          <h3>Online orders &amp; food</h3>
          <p>
            “Shop online” appears as a real interaction category, with purchase verbs for goods, outfits, and meals — a
            generic food order costs about <strong>$20</strong> in reference captures.
          </p>
        </div>
        <div class="wiki-econ-card">
          <h3>Selling &amp; creative income</h3>
          <p>
            Reselling returns Paradimes, wants can encourage painting flips, and Art-talented Parafolks see stronger
            resale outcomes in talent text — a solid reason to buy an easel before another sofa.
          </p>
        </div>
      </div>
      <aside class="wiki-callout wiki-callout--warn">
        <p class="wiki-econ-stores-note">
          <strong>Specialty stores not live yet.</strong>
          Configuration files describe two shop concepts with daily stock and rebates, but the store system is flagged
          <em>disabled</em> in current data. Treat those entries as forward-looking design — not proof registers work in
          your installed build.
        </p>
      </aside>
    </section>

    <section id="donations" class="wiki-prose">
      <h2>Museum milestones and Community Center bundles</h2>
      <p>
        Long-term civic goals also move money: museum UI exists with four collectible lanes and eleven reward tiers
        blending cash, trophies, and utility upgrades. The Community Center defines fifteen bundles spanning money, food,
        art, and tech contributions.
      </p>
      <h3>Museum reward ladder</h3>
      <div class="wiki-econ-rewards" aria-label="Museum milestone rewards">
        <div v-for="r in museumRewards" :key="r.label" class="wiki-econ-reward">
          <strong>{{ r.label }}</strong>
          {{ r.prize }}
        </div>
      </div>
      <h3>Community Center money track</h3>
      <table class="wiki-data-table wiki-econ-table">
        <thead>
          <tr>
            <th scope="col">Bundle</th>
            <th scope="col">Paradimes required</th>
            <th scope="col">Unlock order</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Money bundle 1</th>
            <td>$5,000</td>
            <td>Starting gate</td>
          </tr>
          <tr>
            <th scope="row">Money bundle 2</th>
            <td>$20,000</td>
            <td>After bundle 1</td>
          </tr>
          <tr>
            <th scope="row">Money bundle 3</th>
            <td>$50,000</td>
            <td>After bundle 2</td>
          </tr>
          <tr>
            <th scope="row">Money bundle 4</th>
            <td>$125,000</td>
            <td>After bundle 3</td>
          </tr>
          <tr>
            <th scope="row">Money bundle 5</th>
            <td>$500,000</td>
            <td>After bundle 4</td>
          </tr>
        </tbody>
      </table>
      <p>
        Non-cash bundles request cooked meals, mushrooms, sale-ready paintings, and tech donations — worthwhile reasons
        to train varied skills instead of hoarding liquid Paradimes.
      </p>
    </section>

    <section id="risk" class="wiki-prose">
      <h2>Fire damage and broken appliances</h2>
      <p>
        House fires carry real economic weight. Configuration supports multiple burning props, timed spread, burnt
        object states, extinguish interactions, and an <em>not enough money to replace</em> failure when funds run dry
        mid-crisis.
      </p>
      <div class="wiki-econ-cards wiki-econ-cards--pair">
        <div class="wiki-econ-card">
          <h3>Fire load</h3>
          <p>
            Reference configuration allows double-digit burning items and fire objects, with spread beginning after
            roughly fifteen Sim minutes if left unchecked.
          </p>
        </div>
        <div class="wiki-econ-card">
          <h3>Leaks &amp; wear</h3>
          <p>
            Broken appliance states can create water puddles and raise usage costs, so deferred maintenance may slowly
            inflate utility bills.
          </p>
        </div>
      </div>
    </section>

    <section id="budget-plan" class="wiki-prose">
      <h2>First-week budgeting tips</h2>
      <p>
        Secure housing with modest terrain edits, observe your first weekly bill before expensive platforms, establish
        income, reserve Paradimes for daycare and transport if children are involved, then invest surplus into museum
        collections or Community Center bundles.
      </p>
      <p>
        Creative households can supplement wages through painting sales, museum milestones (cash plus solar or turbine
        rewards), and story cards that inject funds or ease bill pressure.
      </p>
    </section>

    <section id="accuracy" class="wiki-prose">
      <h2>Data accuracy across patches</h2>
      <p>
        Figures come from a May 2026 Early Access save we played: starting balances, bill tuning, representative tech salaries,
        bundle ladders, and risk settings. We avoid presenting disabled systems as live shopping features and do not
        invent catalog prices when only multipliers exist in data.
      </p>
      <p>
        Notice a mismatch after updating? Your running client is authoritative — share screenshots if values changed and
        we will refresh this article.
      </p>
    </section>

    <section id="faq" class="wiki-prose wiki-econ-faq">
      <h2>Economy FAQ</h2>
      <div v-for="item in faq" :key="item.q" class="wiki-econ-faq-item">
        <h3>{{ item.q }}</h3>
        <p>{{ item.a }}</p>
      </div>
    </section>

    <div class="wiki-prose">
      <p class="wiki-econ-updated">Last checked in-game May 26, 2026 — unofficial player notes. Confirm figures in your save after Steam patches.</p>
    </div>

  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const museumRewards = [
  { label: '5 items', prize: '$250 reward' },
  { label: '10 items', prize: 'Laptop reward' },
  { label: '15 items', prize: 'Low trophy' },
  { label: '20 items', prize: '$500 reward' },
  { label: '30 items', prize: 'Solar panel' },
  { label: '40 items', prize: '$1,500 reward' },
  { label: '50 items', prize: 'Mid trophy' },
  { label: '60 items', prize: 'Wind turbine' },
  { label: '70 items', prize: '$2,000 reward' },
  { label: '85 items', prize: 'Top trophy' },
  { label: '90 items', prize: 'Miniature castle' },
]

const faq = [
  {
    q: 'What is the money currency?',
    a: 'Household cash is Paradimes — same wording the UI uses when you buy furniture or goods.',
  },
  {
    q: 'How much does a fresh household start with?',
    a: 'Default new-game configs in the EA capture land on 78,000 Paradimes before first spend.',
  },
  {
    q: 'How often do bills arrive?',
    a: 'Bills are configured around a seven-day cycle, and once a bill is generated you get about one Sim day to settle it.',
  },
  {
    q: 'Are dedicated shops guaranteed active?',
    a: 'Shopping verbs exist broadly, but the specialty store scaffold is flagged off in extracted data until a patch enables it.',
  },
  {
    q: 'Can donations refill the treasury?',
    a: 'Yes — museum milestones pay cash plus objects, and Community Center bundles often grant Paradimes or pricey rewards.',
  },
]
</script>

<style scoped>
.wiki-callout strong {
  color: inherit;
}

.wiki-econ-scope {
  border-left-color: var(--color-sky-deep);
  background: color-mix(in srgb, var(--color-sky) 22%, var(--color-white));
}

.wiki-econ-scope-lead {
  margin: 0;
  font-size: 0.93rem;
  line-height: 1.62;
}

.wiki-econ-updated {
  margin-top: 1.5rem !important;
  font-size: 0.88rem !important;
  color: var(--color-ink-muted) !important;
}

.wiki-econ-stores-note {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.6;
}
</style>
