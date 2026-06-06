<template>
  <WikiCategoryShell
    title="Paralives Relationships — perks and outings"
    lead="Stacked labels per friend or partner, combo social perks, and the card minigame that appears during outings."
  >
    <div class="wiki-prose">
      <h2>Stacked labels, not one relationship bar</h2>
      <p>
        Two Parafolks are seldom defined by a single connection. They might simultaneously be <strong>friends lvl6</strong>,
        <strong>coworkers lvl3</strong>, and <strong>family</strong> — distinct
        <strong>relationship labels</strong> earned through play rather than one slider.
      </p>
      <p>
        Labels can be <strong>asymmetric</strong>. Your Para may hold Crush lvl8 while the other person does not —
        special interactions like anonymous love letters can still trigger. Continued Together Cards raise label levels;
        high tiers unlock perks (Cooking Buddies lvl20 speeding joint cooking is a well-known example).
      </p>
      <p>
        Romance does not remove friendship — labels stack. When two labels both rank high, a
        <strong>combo label</strong> may appear, such as Productive Duo from Coworker plus Creative Buddy with
        stronger perks.
      </p>
      <p>
        Family, friends, romance, work ties, rivals, and hobby partners occupy separate buckets. Without a family tree UI
        at launch, labels also indicate who is related until that screen arrives.
      </p>

      <h2>Together Cards — branching social choices</h2>
      <p>
        Socializing fills a Together progress bar. After roughly <strong>twenty minutes</strong>, an icon appears on the
        <strong>active</strong> Para’s portrait. Open it and pick one of three cards. These are narrative branches
        (“compliment sincerely” versus “compliment sarcastically”) with lasting consequences.
      </p>
      <p>
        The system considers location, mood, recent memories, nearby objects, and participants. Many cards display
        success odds, vibe icons, or which label might advance.
      </p>

      <h3>Color-coded variants</h3>
      <ul>
        <li><strong>White</strong> — neutral tone</li>
        <li><strong>Green</strong> — friendship</li>
        <li><strong>Pink</strong> — romance</li>
        <li><strong>Dark blue</strong> — skills and hobbies</li>
        <li><strong>Red</strong> — mean</li>
        <li><strong>Dark red</strong> — discomfort</li>
      </ul>
      <p>
        Intense <a href="/wiki/emotions">emotions</a> skew variant availability — angry Parafolks encounter more
        red-tinged options.
      </p>

      <h3>When NPCs initiate</h3>
      <p>
        NPCs sometimes propose the card — surprise job offers, romantic gestures, unexpected twists. The decision still
        routes through your active Para so you can accept or decline.
      </p>

      <h2>Paramaker social perks</h2>
      <p>
        Choose one perk at creation; earn more via personality points later. Perks influence which cards surface and how
        often they succeed — “good at romantic relationships” genuinely eases flirty paths.
      </p>
    </div>

    <ul class="wiki-ref-grid">
      <li v-for="p in socialPerks" :key="p.name" class="wiki-ref-card wiki-ref-card--icon">
        <img
          class="wiki-ref-card-icon"
          :src="`/images/wiki/social-perks/${p.icon}`"
          :alt="`${p.name} social perk icon`"
          width="56"
          height="56"
          loading="lazy"
        />
        <h3>{{ p.name }}</h3>
        <p>{{ p.desc }}</p>
      </li>
    </ul>

    <div class="wiki-prose">
      <h2>Group commands for households</h2>
      <p>
        Multiselect lets several household members cook, travel, or socialize under one instruction — invaluable when
        balancing multiple need bars at once.
      </p>

      <h2>EA launch limitations</h2>
      <p>
        Town NPCs will not develop relationships autonomously at EA launch — neither with you nor each other. That
        behavior is planned for later. Parties, weddings, phone invites, and Para-to-Para online chat also sit on the
        later list. For now, meet people via the <a href="/map">map</a>, invite them home, and run Together Cards at
        restaurants.
      </p>

      <h2>Relationship mods</h2>
      <p>
        Mods can add custom relationship labels, but core categories (family, romance, rivals, etc.) remain fixed. See
        <a href="/wiki/modding">modding</a>.
      </p>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'

const socialPerks = [
  {
    name: 'Good at being alone',
    icon: 'SocialPerk-GoodAtBeingAlone.png',
    desc: 'Solo saves feel natural — me time and quiet hobbies are easier to satisfy.',
  },
  {
    name: 'Good at cooperation',
    icon: 'SocialPerk-GoodAtCooperation.png',
    desc: 'Group chores and duo activities — strong with multiselect households.',
  },
  {
    name: 'Good at making friends',
    icon: 'SocialPerk-GoodAtMakingFriends.png',
    desc: 'Friend labels climb faster; more friendly card variety.',
  },
  {
    name: 'Good at romantic relationships',
    icon: 'SocialPerk-GoodAtRomanticRelationships.png',
    desc: 'Romance labels and pink cards are easier to land and maintain.',
  },
  {
    name: 'Good at taking care of others',
    icon: 'SocialPerk-GoodAtTakingCareOfOthers.png',
    desc: 'Caregiving, soup when sick, supportive family play.',
  },
  {
    name: 'Good with family',
    icon: 'SocialPerk-GoodWithFamily.png',
    desc: 'Multi-generation saves — family-flavored wants and interactions.',
  },
]
</script>
