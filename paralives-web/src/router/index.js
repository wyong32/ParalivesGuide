import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import { seoConfig } from '@/seo/config.js'
import { guideNotFoundSeo, routeSeo } from '@/router/routeSeo.js'
import {
  applyDocumentSeo,
  buildArticleJsonLd,
  buildHomeGraphJsonLd,
  resolveCanonicalUrl,
} from '@/seo/documentMeta.js'

function routeMeta(pageKey) {
  return routeSeo[pageKey] ?? {}
}

function getGuideBySlug(list, slug) {
  if (!slug || !Array.isArray(list)) return null
  const key = String(slug).replace(/^\/+|\/+$/g, '')
  return list.find((item) => item.slug === key || item.addressBar === key) ?? null
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: routeMeta('home'),
    },
    {
      path: '/how-to-play',
      name: 'how-to-play',
      component: () => import('@/views/HowToPlayView.vue'),
      meta: routeMeta('how-to-play'),
    },
    {
      path: '/start',
      redirect: '/how-to-play',
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: () => import('@/views/WikiView.vue'),
      meta: routeMeta('wiki'),
    },
    {
      path: '/wiki/talents',
      name: 'wiki-talents',
      component: () => import('@/views/wiki/WikiTalentsView.vue'),
      meta: routeMeta('wiki-talents'),
    },
    {
      path: '/wiki/vibes',
      name: 'wiki-vibes',
      component: () => import('@/views/wiki/WikiVibesView.vue'),
      meta: routeMeta('wiki-vibes'),
    },
    {
      path: '/wiki/skills/leveling',
      name: 'wiki-skills-leveling',
      component: () => import('@/views/wiki/WikiSkillsLevelingView.vue'),
      meta: routeMeta('wiki-skills-leveling'),
    },
    {
      path: '/wiki/skills',
      name: 'wiki-skills',
      component: () => import('@/views/wiki/WikiSkillsView.vue'),
      meta: routeMeta('wiki-skills'),
    },
    {
      path: '/wiki/traits',
      name: 'wiki-traits',
      component: () => import('@/views/wiki/WikiTraitsView.vue'),
      meta: routeMeta('wiki-traits'),
    },
    {
      path: '/wiki/emotions',
      name: 'wiki-emotions',
      component: () => import('@/views/wiki/WikiEmotionsView.vue'),
      meta: routeMeta('wiki-emotions'),
    },
    {
      path: '/wiki/needs-wants',
      name: 'wiki-needs-wants',
      component: () => import('@/views/wiki/WikiNeedsWantsView.vue'),
      meta: routeMeta('wiki-needs-wants'),
    },
    {
      path: '/wiki/parafolks',
      name: 'wiki-parafolks',
      component: () => import('@/views/wiki/WikiParafolksView.vue'),
      meta: routeMeta('wiki-parafolks'),
    },
    {
      path: '/wiki/build-tools',
      name: 'wiki-build-tools',
      component: () => import('@/views/wiki/WikiBuildToolsView.vue'),
      meta: routeMeta('wiki-build-tools'),
    },
    {
      path: '/wiki/careers/occupations',
      name: 'wiki-careers-occupations',
      component: () => import('@/views/wiki/WikiCareersOccupationsView.vue'),
      meta: routeMeta('wiki-careers-occupations'),
    },
    {
      path: '/wiki/careers/economy',
      name: 'wiki-careers-economy',
      component: () => import('@/views/wiki/WikiCareersEconomyView.vue'),
      meta: routeMeta('wiki-careers-economy'),
    },
    {
      path: '/wiki/careers',
      name: 'wiki-careers',
      component: () => import('@/views/wiki/WikiCareersView.vue'),
      meta: routeMeta('wiki-careers'),
    },
    {
      path: '/wiki/relationships',
      name: 'wiki-relationships',
      component: () => import('@/views/wiki/WikiRelationshipsView.vue'),
      meta: routeMeta('wiki-relationships'),
    },
    {
      path: '/wiki/modding',
      name: 'wiki-modding',
      component: () => import('@/views/wiki/WikiModdingView.vue'),
      meta: routeMeta('wiki-modding'),
    },
    {
      path: '/guides',
      name: 'guides',
      component: () => import('@/views/GuidesView.vue'),
      meta: routeMeta('guides'),
    },
    {
      path: '/guides/:slug',
      name: 'guide-detail',
      component: () => import('@/views/GuideDetailView.vue'),
    },
    {
      path: '/build',
      name: 'build',
      component: () => import('@/views/BuildView.vue'),
      meta: routeMeta('build'),
    },
    {
      path: '/cheats',
      name: 'cheats',
      component: () => import('@/views/CheatsView.vue'),
      meta: routeMeta('cheats'),
    },
    {
      path: '/mods',
      name: 'mods',
      component: () => import('@/views/ModsView.vue'),
      meta: routeMeta('mods'),
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('@/views/MapView.vue'),
      meta: routeMeta('map'),
    },
    {
      path: '/updates',
      name: 'updates',
      component: () => import('@/views/UpdatesView.vue'),
      meta: routeMeta('updates'),
    },
    {
      path: '/legal/privacy-policy',
      name: 'legal-privacy',
      component: () => import('@/views/legal/PrivacyPolicyView.vue'),
      meta: routeMeta('legal-privacy'),
    },
    {
      path: '/legal/terms-of-service',
      name: 'legal-terms',
      component: () => import('@/views/legal/TermsOfServiceView.vue'),
      meta: routeMeta('legal-terms'),
    },
    {
      path: '/legal/copyright',
      name: 'legal-copyright',
      component: () => import('@/views/legal/CopyrightView.vue'),
      meta: routeMeta('legal-copyright'),
    },
    {
      path: '/legal/about-us',
      name: 'legal-about',
      component: () => import('@/views/legal/AboutUsView.vue'),
      meta: routeMeta('legal-about'),
    },
    {
      path: '/legal/contact-us',
      name: 'legal-contact',
      component: () => import('@/views/legal/ContactUsView.vue'),
      meta: routeMeta('legal-contact'),
    },
  ],
})

router.afterEach(async (to) => {
  if (to.name === 'guide-detail') {
    const slug = to.params.slug
    const { default: guides } = await import('@/data/guides.js')
    const g = getGuideBySlug(guides, slug)
    const path = g ? `/guides/${g.addressBar || g.slug}` : to.path
    if (!g) {
      applyDocumentSeo({
        path,
        title: guideNotFoundSeo.title,
        description: guideNotFoundSeo.description,
        keywords: guideNotFoundSeo.keywords,
      })
      return
    }
    const description = g.seo?.description || g.description || seoConfig.defaults.description
    const keywords = g.seo?.keywords || seoConfig.defaults.keywords
    const title = g.seo?.title || g.title
    applyDocumentSeo({
      path,
      title,
      description,
      keywords,
      ogImage: g.imageUrl,
      ogType: 'article',
      jsonLd: buildArticleJsonLd({
        headline: title,
        description,
        url: resolveCanonicalUrl(path),
        datePublished: g.publishDate,
        imageUrl: g.imageUrl,
      }),
    })
    return
  }

  const title = to.meta?.title ?? seoConfig.defaults.title
  const description = to.meta?.description || seoConfig.defaults.description
  const canonicalPath = to.path

  applyDocumentSeo({
    path: canonicalPath,
    title,
    description,
    keywords: to.meta?.keywords || seoConfig.defaults.keywords,
    ogImage: to.meta?.ogImage,
    jsonLd:
      to.name === 'home'
        ? buildHomeGraphJsonLd({
            name: title,
            description,
            url: resolveCanonicalUrl(canonicalPath),
          })
        : undefined,
  })
})

export default router
