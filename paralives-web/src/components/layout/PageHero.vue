<template>
  <header class="page-hero" :class="`page-hero--${variant}`" :aria-labelledby="titleId">
    <div class="container">
      <div class="page-hero-masthead">
        <div class="page-hero-main">
          <slot name="breadcrumb">
            <nav v-if="breadcrumbs?.length" class="page-hero-crumb" aria-label="Breadcrumb">
              <span
                v-for="(crumb, index) in breadcrumbs"
                :key="`${crumb.label}-${index}`"
                class="page-hero-crumb-item"
              >
                <RouterLink v-if="crumb.to" :to="crumb.to">{{ crumb.label }}</RouterLink>
                <a v-else-if="crumb.href" :href="crumb.href">{{ crumb.label }}</a>
                <span v-else aria-current="page">{{ crumb.label }}</span>
                <span
                  v-if="index < breadcrumbs.length - 1"
                  class="page-hero-crumb-sep"
                  aria-hidden="true"
                  >›</span
                >
              </span>
            </nav>
          </slot>

          <p v-if="eyebrow" class="page-hero-eyebrow">{{ eyebrow }}</p>
          <h1 :id="titleId" class="page-hero-title">{{ title }}</h1>

          <p v-if="lead" class="page-hero-lead">{{ lead }}</p>
          <slot />

          <div v-if="quickAnswer || $slots.quick" class="page-hero-quick">
            <slot name="quick">
              <p><strong>Quick answer:</strong> {{ quickAnswer }}</p>
            </slot>
          </div>

          <p v-if="hasMeta" class="page-hero-meta">
            <slot name="meta">
              <template v-if="reviewed">
                Reviewed <time :datetime="reviewed">{{ reviewedLabel || reviewed }}</time>
              </template>
              <template v-if="reviewed && (metaLinks?.length || metaNote)"> · </template>
              <span v-for="(link, i) in metaLinks" :key="link.href">
                <a :href="link.href" rel="noopener noreferrer" target="_blank">{{ link.label }}</a>
                <span v-if="i < metaLinks.length - 1 || metaNote"> · </span>
              </span>
              <span v-if="metaNote">{{ metaNote }}</span>
            </slot>
          </p>
        </div>

        <figure v-if="stampSrc" class="page-hero-stamp">
          <img :src="stampSrc" :alt="stampAlt || ''" width="148" height="111" loading="eager" decoding="async" />
          <figcaption v-if="stampCaption">{{ stampCaption }}</figcaption>
        </figure>
      </div>
    </div>
    <div class="page-hero-edge" aria-hidden="true"></div>
  </header>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  titleId: { type: String, required: true },
  title: { type: String, required: true },
  eyebrow: { type: String, default: '' },
  lead: { type: String, default: '' },
  quickAnswer: { type: String, default: '' },
  variant: {
    type: String,
    default: 'tool',
    validator: (v) => ['wiki', 'guides', 'tool', 'roadmap', 'mods'].includes(v),
  },
  stampSrc: { type: String, default: '' },
  stampAlt: { type: String, default: '' },
  stampCaption: { type: String, default: '' },
  breadcrumbs: { type: Array, default: () => [] },
  reviewed: { type: String, default: '' },
  reviewedLabel: { type: String, default: '' },
  metaNote: { type: String, default: 'Unofficial · verify in-game after patches' },
  metaLinks: { type: Array, default: () => [] },
})

const hasMeta = computed(
  () => props.reviewed || props.metaNote || (props.metaLinks && props.metaLinks.length > 0),
)
</script>

<style scoped>
.page-hero {
  --page-hero-accent: var(--color-sky-deep);
  position: relative;
  padding: 1.75rem 0 2.75rem;
  background-color: var(--color-cream);
  background-image: repeating-linear-gradient(
    180deg,
    transparent,
    transparent 1.65rem,
    color-mix(in srgb, var(--color-outline) 7%, transparent) 1.66rem
  );
}

.page-hero--wiki {
  --page-hero-accent: var(--color-sage-dark);
}

.page-hero--guides {
  --page-hero-accent: var(--color-coral-deep);
}

.page-hero--roadmap {
  --page-hero-accent: var(--color-lavender-deep);
}

.page-hero--mods {
  --page-hero-accent: var(--color-berry);
}

.page-hero-masthead {
  display: grid;
  gap: 1.75rem;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
  padding: 1.5rem 1.65rem 1.55rem 1.75rem;
  background: var(--color-white);
  border: 3px solid var(--color-outline);
  border-left: 7px solid var(--page-hero-accent);
  border-radius: 6px 22px 22px 6px;
  box-shadow: 7px 7px 0 color-mix(in srgb, var(--page-hero-accent) 22%, var(--color-outline));
}

@media (max-width: 768px) {
  .page-hero-masthead {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding: 1.35rem 1.4rem 1.4rem 1.5rem;
  }
}

.page-hero-crumb {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0.5rem;
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 0.65rem;
}

.page-hero-crumb-item {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem 0.5rem;
}

.page-hero-crumb a {
  color: var(--color-sage-dark);
  text-decoration: none;
}

.page-hero-crumb a:hover {
  color: var(--color-coral-deep);
  text-decoration: underline;
}

.page-hero-crumb-sep {
  opacity: 0.45;
  font-size: 0.75rem;
}

.page-hero-eyebrow {
  display: inline-block;
  margin: 0 0 0.45rem;
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.22rem 0.6rem;
  color: var(--page-hero-accent);
  background: color-mix(in srgb, var(--page-hero-accent) 12%, var(--color-white));
  border: 2px solid color-mix(in srgb, var(--page-hero-accent) 35%, var(--color-outline));
  border-radius: 4px;
}

.page-hero-title {
  margin: 0;
  font-family: var(--font-cartoon);
  font-size: clamp(1.55rem, 3.8vw, 2.25rem);
  font-weight: 700;
  line-height: 1.18;
  letter-spacing: -0.02em;
  color: var(--color-ink);
}

.page-hero-lead {
  margin: 0.75rem 0 0;
  font-size: 1.02rem;
  line-height: 1.65;
  color: var(--color-ink-muted);
  max-width: 62ch;
}

.page-hero-quick {
  margin-top: 1rem;
  padding: 0.8rem 0.95rem;
  background: color-mix(in srgb, var(--color-sunny) 48%, var(--color-white));
  border: 2px solid color-mix(in srgb, var(--color-outline) 55%, transparent);
  border-left: 5px solid var(--page-hero-accent);
  border-radius: 0 12px 12px 0;
  font-size: 0.9rem;
  line-height: 1.58;
}

.page-hero-quick p {
  margin: 0;
}

.page-hero-quick :deep(kbd) {
  padding: 0.12rem 0.4rem;
  background: var(--color-white);
  border: 2px solid var(--color-outline);
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
}

.page-hero-meta {
  margin: 0.85rem 0 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--color-muted);
}

.page-hero-meta a {
  color: var(--color-sage-dark);
  font-weight: 600;
}

.page-hero-stamp {
  margin: 0;
  justify-self: center;
  width: min(152px, 38vw);
  padding: 0.4rem 0.4rem 1.35rem;
  background: var(--color-white);
  border: 2.5px solid var(--color-outline);
  box-shadow: 4px 5px 0 var(--color-outline);
  transform: rotate(3deg);
}

.page-hero-stamp img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.page-hero-stamp figcaption {
  margin-top: 0.4rem;
  font-size: 0.62rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.page-hero-edge {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 14px;
  background: var(--color-white);
  mask-image: radial-gradient(10px at 10px 0, transparent 97%, #000);
  mask-size: 20px 14px;
  mask-repeat: repeat-x;
  mask-position: center bottom;
  transform: translateY(50%);
}
</style>
