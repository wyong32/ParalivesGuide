<template>
  <LegalPageShell :page="termsOfServicePage" current-path="/legal/terms-of-service" />
</template>

<script setup>
import LegalPageShell from '@/components/legal/LegalPageShell.vue'
import { termsOfServicePage } from '@/data/legalContent.js'
</script>
