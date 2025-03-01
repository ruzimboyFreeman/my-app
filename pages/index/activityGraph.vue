<template>
  <div class="p-4 space-y-4 flex flex-col items-center">

    <!-- Contribution Calendar (Heatmap) -->
    <calendar />

    <!-- Activities List -->
    <div class=" space-y-4 w-full">
      <Card v-for="activity in activities" :key="activity.id" class="w-full">
        <CardContent class="flex items-center gap-4 w-full">
          <!-- Icon -->
          <div class="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl">
            {{ activity.icon }}
          </div>

          <!-- Activity Details -->
          <div class="flex-1">
            <p class="font-semibold text-lg">{{ activity.title }}</p>
            <p class="text-muted-foreground text-sm">{{ activity.time }}</p>
          </div>

          <!-- Date -->
          <span class="text-muted-foreground text-sm">{{ activity.date }}</span>
        </CardContent>
      </Card>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import calendar from './calendar.vue';
import { Card, CardContent } from '@/components/ui/card';

const activities = ref([
  { id: 1, title: "Wrote an article", time: "5 minutes ago", date: "Feb 13, 2025", icon: "📝" },
  { id: 2, title: "Solved LeetCode problem", time: "2 hours ago", date: "Feb 13, 2025", icon: "💻" },
  { id: 3, title: "Reviewed pull request", time: "1 day ago", date: "Feb 12, 2025", icon: "🔍" },
  { id: 4, title: "Commented on an issue", time: "1 day ago", date: "Feb 12, 2025", icon: "💬" },
]);
</script>
