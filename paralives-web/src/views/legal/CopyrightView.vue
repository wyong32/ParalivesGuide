<template>
  <LegalPageShell :page="copyrightPage" current-path="/legal/copyright" />
</template>

<script setup>
import LegalPageShell from '@/components/legal/LegalPageShell.vue'
import { copyrightPage } from '@/data/legalContent.js'
</script>
