<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { articleService } from '@/services/articleService';
import { ArrowLeftIcon } from 'lucide-vue-next';



const route = useRoute();
const slug = route.params.slug;
const { data: article, pending, error } = await useAsyncData(`article/${slug}`, () => articleService.getArticle(slug));

const articleContent = ref('');

</script>

<template>
  <NuxtLink to="/articles" class="text-primary hover:underline block mt-4">
    <span class="font-bold">
      <ArrowLeftIcon /> Back to Articles
    </span>
  </NuxtLink>
  <p class="max-w-xl mx-auto ">{{ article.content }}</p>

</template>
<style scoped>
/* Button styling */
span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* Space between text and icon */
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  transition: background-color 0.3s ease-in-out;
}

/* Icon styling */
span .lucide {
  width: 1rem;
  height: 1rem;
  color: inherit;
  transition: transform 0.3s ease-in-out; /* Smooth transition for the icon */
}

/* Move the icon on hover */
span:hover .lucide {
  transform: translateX(-0.5rem); /* Move the icon to the right */
}
</style>
