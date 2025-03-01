<script setup>
import Navbar from '@/components/NavbarMenu.vue'; // Ensure the correct import path
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    <div class="container mx-auto py-8">
      <NuxtPage /> <!-- This is necessary to display page content -->
    </div>
  </div>
</template>
