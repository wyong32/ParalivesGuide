<template>
  <article class="legal-page">
    <PageHero
      :title-id="titleId"
      :title="page.title"
      eyebrow="Legal"
      variant="tool"
      :lead="page.lead"
      :breadcrumbs="breadcrumbs"
      reviewed="2026-06-05"
      reviewed-label="June 5, 2026"
      meta-note="Unofficial fan site — not Paralives Studio or Valve"
    />

    <div class="legal-body">
      <div class="container">
        <div class="legal-article">
          <p class="legal-updated">
            Last updated: <time :datetime="page.lastUpdated">{{ updatedLabel }}</time>
          </p>

          <section
            v-for="(section, index) in page.sections"
            :key="`${section.heading}-${index}`"
            class="legal-section"
          >
            <h2>{{ section.heading }}</h2>
            <p
              v-for="(para, pIndex) in section.paragraphs"
              :key="`p-${index}-${pIndex}`"
              v-html="formatParagraph(para)"
            ></p>
            <ul v-if="section.list?.length">
              <li v-for="item in section.list" :key="item" v-html="formatParagraph(item)"></li>
            </ul>
            <p
              v-for="(para, aIndex) in section.paragraphsAfter"
              :key="`pa-${index}-${aIndex}`"
              v-html="formatParagraph(para)"
            ></p>
            <ul v-if="section.listAfter?.length">
              <li v-for="item in section.listAfter" :key="item" v-html="formatParagraph(item)"></li>
            </ul>
          </section>

          <section v-if="page.copyrightBlock" class="legal-copyright-block">
            <h2>{{ page.copyrightBlock.heading }}</h2>
            <p v-for="line in page.copyrightBlock.lines" :key="line" v-html="formatParagraph(line)"></p>
          </section>

          <nav class="legal-related" aria-label="Other legal pages">
            <h2>Other legal pages</h2>
            <ul>
              <li v-for="link in otherLegalLinks" :key="link.to">
                <RouterLink :to="link.to">{{ link.label }}</RouterLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import PageHero from '@/components/layout/PageHero.vue'
import { LEGAL_EMAIL, legalCrossLinks } from '@/data/legalContent.js'

const props = defineProps({
  page: { type: Object, required: true },
  currentPath: { type: String, required: true },
})

const titleId = computed(() => {
  const slug = props.currentPath.split('/').filter(Boolean).pop() || 'legal'
  return `legal-${slug}-title`
})

const breadcrumbs = computed(() => [
  { to: '/', label: 'Home' },
  { label: props.page.title },
])

const updatedLabel = computed(() => {
  const d = props.page.lastUpdated
  if (!d) return ''
  try {
    return new Date(d).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return d
  }
})

const otherLegalLinks = computed(() =>
  legalCrossLinks.filter((link) => link.to !== props.currentPath),
)

function formatParagraph(text) {
  if (!text) return ''
  const escaped = String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  return escaped.replace(
    new RegExp(LEGAL_EMAIL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
    `<a href="mailto:${LEGAL_EMAIL}">${LEGAL_EMAIL}</a>`,
  )
}
</script>

<style scoped>
.legal-body {
  padding: 2.5rem 0 4rem;
  background: var(--color-white);
}

.legal-article {
  max-width: 52rem;
  margin: 0 auto;
  padding: 1.75rem 1.85rem 2rem;
  background: var(--color-cream);
  border: 3px solid var(--color-outline);
  border-radius: 18px;
  box-shadow: 6px 6px 0 var(--color-outline);
}

.legal-updated {
  margin: 0 0 1.75rem;
  padding-bottom: 1rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-muted);
  border-bottom: 2px dashed color-mix(in srgb, var(--color-outline) 30%, transparent);
}

.legal-section {
  margin-bottom: 1.75rem;
}

.legal-section h2 {
  font-size: 1.08rem;
  color: var(--color-sage-dark);
  margin-bottom: 0.65rem;
}

.legal-section p,
.legal-copyright-block p {
  font-size: 0.94rem;
  line-height: 1.72;
  color: var(--color-muted);
  margin-bottom: 0.85rem;
}

.legal-section ul {
  margin: 0 0 0.85rem 1.15rem;
  padding: 0;
  font-size: 0.94rem;
  line-height: 1.65;
  color: var(--color-muted);
}

.legal-section li {
  margin-bottom: 0.45rem;
}

.legal-section :deep(a),
.legal-copyright-block :deep(a) {
  color: var(--color-sage-dark);
  font-weight: 700;
}

.legal-copyright-block {
  margin-top: 2rem;
  padding: 1.25rem 1.35rem;
  background: var(--color-sunny);
  border: 2.5px solid var(--color-outline);
  border-radius: 12px;
  box-shadow: 4px 4px 0 var(--color-outline);
}

.legal-copyright-block h2 {
  font-size: 1rem;
  margin-bottom: 0.65rem;
  color: var(--color-text);
}

.legal-related {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px dashed color-mix(in srgb, var(--color-outline) 30%, transparent);
}

.legal-related h2 {
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
  color: var(--color-grass);
}

.legal-related ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.legal-related a {
  font-family: var(--font-display);
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--color-sage-dark);
  text-decoration: none;
}

.legal-related a:hover {
  color: var(--color-coral-deep);
  text-decoration: underline;
}

@media (max-width: 768px) {
  .legal-article {
    padding: 1.35rem 1.25rem 1.5rem;
  }
}
</style>
