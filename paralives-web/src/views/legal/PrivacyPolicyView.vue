<template>
  <LegalPageShell :page="privacyPolicyPage" current-path="/legal/privacy-policy" />
</template>

<script setup>
import LegalPageShell from '@/components/legal/LegalPageShell.vue'
import { privacyPolicyPage } from '@/data/legalContent.js'
</script>
