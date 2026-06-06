<template>
  <LegalPageShell :page="aboutUsPage" current-path="/legal/about-us" />
</template>

<script setup>
import LegalPageShell from '@/components/legal/LegalPageShell.vue'
import { aboutUsPage } from '@/data/legalContent.js'
</script>
