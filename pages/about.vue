<script setup>
import { ref } from 'vue';
import profileImg from '../assets/avatar.jpg';
// Reactive state for title and content
const title = ref('About Me');
const content = ref("Hello, I am [Your Name], and this is my personal blog where I share my thoughts on various topics!");
const techStack = ref(['Vue.js', 'Nuxt.js', 'TailwindCSS', 'ShadCN', 'TypeScript']);
const projects = ref([
  {
    id: 1,
    title: 'Project One',
    description: 'A cool project built with Vue & Nuxt.',
    image: '/project1.jpg',
    link: 'https://github.com/yourusername/project-one'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Another awesome project using ShadCN.',
    image: '/project2.jpg',
    link: 'https://github.com/yourusername/project-two'
  }
]);
</script>

<template>
  <div class="flex flex-col items-center justify-center m-20 text-center">
    <!-- Profile Image -->
    <div class="mb-6">
      <img :src="profileImg" alt="Profile" class="w-40 h-40 rounded-full shadow-lg" />
    </div>
    <!-- Hero Section -->
    <div class="max-w-2xl">
      <h1 class="text-4xl font-bold">Salom, Mening ismim Ruzimboy</h1>
      <p class="mt-4 text-lg text-muted-foreground">Turli xil qiziqarli va murakkab web ilovalar yasashga qiziqaman</p>
    </div>

    <!-- Tech Stack -->
    <div class="mt-8">
      <h2 class="text-2xl font-semibold">Tech Stack</h2>
      <div class="flex flex-wrap justify-center gap-4 mt-4">
        <span class="px-4 py-2 bg-primary text-white rounded-lg">Vue.js</span>
        <span class="px-4 py-2 bg-primary text-white rounded-lg">Nuxt.js</span>
        <span class="px-4 py-2 bg-primary text-white rounded-lg">ShadCN</span>
        <span class="px-4 py-2 bg-primary text-white rounded-lg">Tailwind CSS</span>
      </div>
    </div>

    <!-- Projects Showcase -->
    <div class="mt-12 max-w-4xl w-full">
      <h2 class="text-2xl font-semibold">Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div class="p-4 border rounded-lg shadow-sm hover:shadow-lg transition">
          <h3 class="text-xl font-medium">Project 1</h3>
          <p class="text-muted-foreground">Description of the project.</p>
        </div>
        <div class="p-4 border rounded-lg shadow-sm hover:shadow-lg transition">
          <h3 class="text-xl font-medium">Project 2</h3>
          <p class="text-muted-foreground">Description of the project.</p>
        </div>
      </div>
    </div>

    <!-- Social Links -->
    <div class="mt-12">
      <h2 class="text-2xl font-semibold">Connect with me</h2>
      <div class="flex gap-4 mt-4">
        <a href="#" class="text-primary hover:underline">GitHub</a>
        <a href="#" class="text-primary hover:underline">LinkedIn</a>
        <a href="#" class="text-primary hover:underline">Twitter</a>
      </div>
    </div>
  </div>
</template>
