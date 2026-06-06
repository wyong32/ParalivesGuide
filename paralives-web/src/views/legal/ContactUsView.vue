<template>
  <LegalPageShell :page="contactUsPage" current-path="/legal/contact-us" />
</template>

<script setup>
import LegalPageShell from '@/components/legal/LegalPageShell.vue'
import { contactUsPage } from '@/data/legalContent.js'
</script>
