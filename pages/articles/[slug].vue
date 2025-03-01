<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const route = useRoute();
const articleSlug = ref(route.params.slug);

const articleContent = ref('');

const fetchArticle = () => {
  const articles = {
    'vue-3-basics': 'Vue 3 Basics: Learn about Composition API, reactivity, and Vue Router!',
    'understanding-vite': 'Understanding Vite: A fast build tool for Vue applications!',
    'shadcn-ui-components': 'ShadCN UI Components: A modern Vue 3 component library with great customization!',
  };

  articleContent.value = articles[articleSlug.value] || 'Article not found!';
};

onMounted(fetchArticle);
</script>

<template>
  <Card >
    <CardHeader>
      <CardTitle>📖 {{ articleSlug.replace('-', ' ') }}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{{ articleContent }}</p>
      <NuxtLink to="/articles" class="text-primary hover:underline block mt-4">🔙 Back to Articles</NuxtLink>
    </CardContent>
  </Card>
</template>
