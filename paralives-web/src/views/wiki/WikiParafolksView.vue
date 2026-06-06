<template>
  <WikiCategoryShell
    title="Paralives Parafolks — genetics and family play"
    lead="Creation sliders, genetics, life stages, children, aging, and death — what carries between generations in EA."
  >
    <div class="wiki-prose">
      <h2>Meet your Parafolks</h2>
      <p>
        <strong>Parafolks</strong> (Paras) are the sims you design and direct. The community chose the name “Parafolk”
        via a Patreon vote years ago. Create them in <strong>Paramaker</strong> (PAM), then manage households in Live
        Mode. They progress through eight life stages, can raise children, and eventually pass away. No afterlife
        gameplay is planned.
      </p>

      <h2>What stays editable after creation</h2>
      <p>
        Day-one Paramaker offers sliders, color wheels, tattoos, layered outfits, asymmetry, and multiple wardrobe
        slots. Much appearance work continues in Live Mode — salon visits at Headlines, outfit swaps, certain detail
        tweaks. <strong>Body sliders lock</strong> once you leave creation, fixing underlying bone structure.
      </p>
      <p>
        Names, gender, life stage, and voice appear fixed after entering the world — finalize identity in PAM.
        Genetic appearance also locks even if you recolor hair later in play.
      </p>

      <h2>Personality versus inheritance</h2>
      <p>
        Stats, vibe, talent, social perk, and lifestyles come from your choices and gameplay — not parental DNA.
        Children inherit faces, not a parent’s vibe. See
        <a href="/wiki/traits">stats &amp; personality</a> for the full breakdown.
      </p>

      <h2>Genetics at Early Access launch</h2>
      <p>
        Genetics ship with EA launch. From existing household members you can generate children, siblings, or parents
        in Paramaker. A dedicated <strong>family tree screen</strong> and deeper gene editing arrive later in EA — you
        can run legacies before that UI exists.
      </p>

      <h3>Facial features and height</h3>
      <p>
        Each facial feature inherits a <strong>complete slider set</strong> from one parent — mom’s nose or dad’s
        cheeks, avoiding blended proportions that break faces. Height selects a parent’s short, medium, or tall band,
        then randomizes within it so siblings differ. Gender influences the height roll.
      </p>

      <h3>Eye, skin, and hair color</h3>
      <p>
        Eyes, skin, and base hair color follow dominant/recessive-style rules — a grandparent’s blue eyes can reappear
        after skipping a generation. Only <strong>base</strong> hair color counts genetically, not highlights or roots.
        Neon dye is cosmetic in PAM; the game retains a hidden natural tone for offspring.
      </p>
      <p>
        Skin brightness can fall anywhere within a parent’s range; exact hue may vary between swatches. Heterochromia is
        not inherited yet — genetics pick one eye color.
      </p>

      <h3>Hair texture inheritance</h3>
      <p>
        Straight, wavy, curly, and coily textures follow inheritance rules — coily often wins ties, straight is most
        recessive. Random child hairstyles draw only from textures the child can actually wear.
      </p>

      <div class="wiki-callout wiki-callout--warn">
        Hair dye does not alter DNA. Town NPCs carry preset genetics you cannot edit. No in-game screen yet reveals
        hidden recessive genes before conception — that feature may arrive in a later EA patch.
      </div>

      <h2>Eight life stages</h2>
      <p>
        Baby → Toddler → Child → Preteen → Teenager → Young Adult → Adult → Elder. Babies and toddlers may hide
        sliders until aging up despite genes already being set. Pregnancy and birth are streamlined at EA launch (no
        mandatory hospital minigame). Twins and triplets occur but remain uncommon.
      </p>

      <h2>Illness and death</h2>
      <p>
        All Parafolks start able-bodied. Colds spread from work or school; soup and caring perks ease recovery. Serious
        disability gameplay was not targeted for early EA, though medical clutter exists for builders.
      </p>
      <p>
        At least <strong>four death types</strong> have been discussed, including old age. Players cannot command death
        directly — autonomy triggers it when conditions are met, consistent with other high-stakes outcomes.
      </p>

      <h2>Character panel and short-term memories</h2>
      <p>
        The character panel tracks personality, identity, inventory, relationships, careers, skills, and thoughts.
        Current “memories” are short-term context — closer to “hunger was 8/10 at 8am” than lifelong biography. That
        data still shapes Together Cards and want suggestions. Related guides:
        <a href="/wiki/emotions">emotions</a>,
        <a href="/wiki/needs-wants">needs &amp; wants</a>.
      </p>

      <h2>Parli — the spoken language</h2>
      <p>
        Spoken dialogue uses gibberish <strong>Parli</strong>. Written UI defaults to English; mod tools can localize
        text if you prefer a different flavor.
      </p>

      <h2>How townies are generated</h2>
      <p>
        When the game needs a new face — move-ins, town population — it draws from premade Parafolks, including
        supporter-created characters from development. They are not scripted story NPCs, but their genetics enter the
        active pool.
      </p>

      <h2>Still on the EA roadmap</h2>
      <ul>
        <li>Family tree menu after launch.</li>
        <li>Pets in Paramaker and Live Mode pets on the during-EA list.</li>
        <li>Workshop exports preserving genetics for shared characters.</li>
        <li>Modded species with custom inheritance rules if creators pursue them.</li>
      </ul>
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'
</script>
