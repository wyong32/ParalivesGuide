<template>
  <WikiCategoryShell
    title="Paralives Build Tools — walls, terrain, and color"
    lead="Walls, platforms, terrain, pools, roofs, and colour tools — what builders can touch on owned lots during Early Access."
  >
    <div class="wiki-prose">
      <h2>Build Mode scope in Early Access</h2>
      <p>
        Build Mode handles individual lots inside Live Mode — walls, rooms, furniture, and yard shaping. You cannot
        reshape all of Melino at once; whole-town editing is planned for later. Construction spends household Paradimes,
        not real-world currency beyond the game purchase.
      </p>

      <h2>Navigating the build catalog</h2>
      <p>
        Browse via tabs plus search: <strong>Structures</strong> for shell elements, <strong>Customization</strong> for
        paints and surfaces, <strong>Rooms</strong> for themed packs (kitchen, nursery, etc.),
        <strong>Furniture</strong> for seating, beds, and clutter, and <strong>Terrain</strong> for trees, rocks, and
        outdoor props. Items may appear in multiple submenus — search helps on large catalogs.
      </p>

      <h2>Recoloring and resizing</h2>
      <p>
        Swatches are starting points, not ceilings — the color wheel applies to objects, walls, floors, and ceilings.
        Resize tables, sofas, counters, beds, and much clutter. Doors remain a fixed size for technical reasons, but
        <strong>wall height</strong> is adjustable. Flip counter handles or toilet paper for left-handed layouts. The
        advanced placement tool stacks, rotates, and elevates most pieces.
      </p>
      <p>
        Palette planners can preview hex values in our
        <a href="/build">Build Mode tips</a> before committing Paradimes to in-game paint.
      </p>

      <h2>Flexible walls without rigid grids</h2>
      <p>
        Walls, half-walls, and fences accept custom lengths and angles. Enable snapping for speed; adjust grid assist
        for tricky corners. Upper floors can snap to walls below, and whole-floor duplication saves time on rectangular
        layouts versus redrawing each level.
      </p>

      <h2>Curved walls and split levels</h2>
      <p>
        Curved walls have been showcased since 2019 footage. At EA launch, doors and windows still cannot sit on curves
        — that arrives later in EA. Split-level platforms enable sunken living rooms or raised entries; stairs auto-extend
        when a step exceeds casual walk-up height.
      </p>

      <h2>Terrain tools</h2>
      <p>
        Raise, lower, or flatten lot terrain for hills and landscaped yards. Pools, lakes, and ponds remain on the later
        roadmap if you are sketching a waterfront home at launch.
      </p>
    </div>

    <h2 class="wiki-section-heading">Launch vs later EA</h2>
    <div class="wiki-phase-grid">
      <section class="wiki-phase-card wiki-phase-card--day">
        <h2><span class="wiki-badge wiki-badge--day">Launch</span> In your toolbox May 25</h2>
        <ul>
          <li>Color wheel on surfaces and objects</li>
          <li>Straight and curved walls, optional grid</li>
          <li>Split levels, multi-floor shells, duplicate floor</li>
          <li>Stairs, roofs, fences, move wall, resize</li>
          <li>Terrain raise / lower / flatten</li>
          <li>Snapping, alignment helpers, catalog search</li>
        </ul>
      </section>
      <section class="wiki-phase-card wiki-phase-card--ea">
        <h2><span class="wiki-badge wiki-badge--ea">Later EA</span> On the roadmap</h2>
        <ul>
          <li>Pools, lakes, ponds</li>
          <li>Basements</li>
          <li>Doors and windows on curved walls</li>
          <li>Fancier roofs and stair customization</li>
          <li>Editing Melino itself as a world</li>
          <li>Sharing full lots on Workshop (partial sharing first)</li>
        </ul>
      </section>
    </div>

    <div class="wiki-callout">
      Build objects support Workshop distribution. After patches, confirm furniture mods before opening legacy saves.
      World-tool timelines appear on our <a href="/updates">updates</a> page and
      <a href="/wiki/modding">modding</a> notes.
    </div>
  </WikiCategoryShell>
</template>

<script setup>
import WikiCategoryShell from '@/components/wiki/WikiCategoryShell.vue'
</script>
