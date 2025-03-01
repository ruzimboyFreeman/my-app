<script setup>
import { ref } from 'vue';
import { navigateTo } from '#app';
import { useRouter } from '#app';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Home, BookOpen, Code, User, Send } from 'lucide-vue-next';

const router = useRouter();

const menuOptions = ref([
  { label: 'Home', key: '/', icon: Home,external: false },
  { label: 'Articles', key: '/articles', icon: BookOpen, external: false },
  { label: 'Leetcode', key: '/leetcode', icon: Code ,external: false},
  { label: 'About', key: '/about', icon: User ,external: false},
  { label: 'Channel', key: 'https://t.me/easy_programming_uz', icon: Send,external:true },
]);

const handleSelect = (item) => {
  if (item.external) {
    window.open(item.key,'_blank'); // 🔥 Tashqi havolaga yo‘naltirish
  } else {
    navigateTo(item.key); // 🚀 Ichki sahifalarga yo‘naltirish
  }

};
</script>

<template>
  <nav class="bg-background text-foreground ">
    <div class="container mx-auto flex justify-between items-center p-4">
      <!-- Logo -->
      <NuxtLink to="/" class="text-xl font-bold hover:text-primary transition-colors">
        My Blog
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex gap-4">
        <Button v-for="item in menuOptions" :key="item.key" variant="ghost" @click="handleSelect(item)">
          <component :is="item.icon" class="w-4 h-4 mr-1" />
          <div>{{ item.label }}</div>
        </Button>
      </div>

      <!-- Mobile Menu -->
      <div class="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline">Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-48">
            <DropdownMenuItem v-for="item in menuOptions" :key="item.key" @click="handleSelect(item.key)">
              <component :is="item.icon" class="w-4 h-4 mr-2" />
              {{ item.label }}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </nav>
</template>
