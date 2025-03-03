<script setup>
import {useRouter} from 'vue-router';
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from '@/components/ui/accordion';
import { ArrowRightIcon } from 'lucide-vue-next';
import { articleService } from '@/services/articleService';
const router = useRouter();
const { data: topics, pending, error } = await useAsyncData('articles', () => articleService.listArticles());

const openArticle = (slug) => {
  router.push(`/articles/${slug}`);
};
</script>

<template>
  <div class="max-w-xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">📚 Maqolalar</h1>
    <Accordion type="single" collapsible class="w-full">
      <AccordionItem v-for="topic in topics" :key="topic.id" :value="topic.id">
        <AccordionTrigger class="text-1xl">{{ topic.title }}</AccordionTrigger>
        <AccordionContent>
          <p class="mb-2">{{ topic.title }}</p>
          <Button variant="outline" @click="openArticle(topic.id)"> Read more
            <ArrowRightIcon />
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
<style scoped>
/* Button styling */
button {
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
button .lucide {
  width: 1rem;
  height: 1rem;
  color: inherit;
  transition: transform 0.3s ease-in-out; /* Smooth transition for the icon */
}

/* Move the icon on hover */
button:hover .lucide {
  transform: translateX(0.5rem); /* Move the icon to the right */
}
</style>
