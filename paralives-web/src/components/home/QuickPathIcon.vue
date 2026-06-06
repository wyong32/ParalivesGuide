<!--
  Icons adapted from Lucide (ISC) — https://lucide.dev
  play: list-checks · cheats: terminal · talents: sparkles
  map: map-pinned · build: palette · roadmap: milestone
-->
<template>
  <span class="quick-path-badge" :class="`quick-path-badge--${name}`">
    <svg
      class="quick-path-icon"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <!-- How to Play — checklist primer -->
      <template v-if="name === 'play'">
        <path d="m3 17 2 2 4-4" />
        <path d="m3 7 2 2 4-4" />
        <path d="M13 6h8" />
        <path d="M13 12h8" />
        <path d="M13 18h8" />
      </template>

      <!-- Cheats — debug console -->
      <template v-else-if="name === 'cheats'">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" x2="20" y1="19" y2="19" />
      </template>

      <!-- Talents — creation specialties -->
      <template v-else-if="name === 'talents'">
        <path
          d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
        />
        <path d="M20 3v4" />
        <path d="M22 5h-4" />
        <path d="M4 17v2" />
        <path d="M5 18H3" />
      </template>

      <!-- Town Map — Melino pins -->
      <template v-else-if="name === 'map'">
        <path
          d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"
        />
        <circle cx="12" cy="8" r="2" />
        <path
          d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
        />
      </template>

      <!-- Build Mode — color wheel & decor -->
      <template v-else-if="name === 'build'">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" stroke="none" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" stroke="none" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" stroke="none" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" stroke="none" />
        <path
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
        />
      </template>

      <!-- Roadmap — EA milestones -->
      <template v-else-if="name === 'roadmap'">
        <path d="M12 13v8" />
        <path d="M12 3v3" />
        <path
          d="M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"
        />
      </template>
    </svg>
  </span>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
    validator: (v) => ['play', 'cheats', 'talents', 'map', 'build', 'roadmap'].includes(v),
  },
})
</script>

<style scoped>
.quick-path-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 14px;
  background: rgba(255, 253, 249, 0.72);
  border: 2.5px solid color-mix(in srgb, var(--color-outline) 28%, transparent);
  box-shadow: 2px 2px 0 color-mix(in srgb, var(--color-outline) 18%, transparent);
  color: var(--color-outline);
}

.quick-path-icon {
  display: block;
}
</style>
