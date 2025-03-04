<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from '@/components/NavbarMenu.vue';

const hasShadow = ref(false);

const handleScroll = () => {
  hasShadow.value = window.scrollY > 50; // Adjust the threshold as needed
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Navbar -->
    <div
        class="fixed top-0 left-0 w-full z-50 bg-background transition-shadow duration-300"
        :class="{ 'shadow-md': hasShadow }"
    >
      <Navbar v-if="!$route.path.startsWith('/admin')" />
    </div>

    <!-- Main Content -->
    <div class="mx-auto py-28">
      <NuxtPage />
    </div>
  </div>
</template>
