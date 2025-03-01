<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const router = useRouter();

const topics = ref([
  { slug: 'vue-3-basics', title: 'Vue 3 Basics', content: 'Learn about Composition API, reactivity, and Vue Router!' },
  { slug: 'understanding-vite', title: 'Understanding Vite', content: 'A fast build tool for Vue applications!' },
  { slug: 'shadcn-ui-components', title: 'ShadCN UI Components', content: 'A modern Vue 3 component library with great customization!' },
]);

const openArticle = (slug) => {
  router.push(`/articles/${slug}`);
};
</script>

<template>
  <div class="max-w-xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">📚 Maqolalar</h1>
    <Accordion type="single" collapsible class="w-full">
      <AccordionItem v-for="topic in topics" :key="topic.slug" :value="topic.slug">
        <AccordionTrigger class="text-1xl">{{ topic.title }}</AccordionTrigger>
        <AccordionContent>
          <p class="mb-2">{{ topic.content }}</p>
          <Button variant="outline" @click="openArticle(topic.slug)">📖 Batafsil</Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
