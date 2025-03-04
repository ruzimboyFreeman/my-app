<!-- pages/admin/articles/_id.vue -->
<template>
  <div class="max-w-5xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">{{ isEditMode ? 'Edit Article' : 'Add Article' }}</h1>

    <!-- Form -->
    <form @submit.prevent="saveArticle">
      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Title</label>
        <input v-model="article.title" type="text" class="w-full border p-2 rounded" required />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Content</label>
        <EditorContent :editor="editor" class="border p-4 rounded-md min-h-[300px]" />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Category</label>
        <select v-model="article.category" class="w-full border p-2 rounded">
          <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
        </select>
      </div>

      <button type="submit" class="bg-primary text-white px-4 py-2 rounded">
        {{ isEditMode ? 'Update Article' : 'Save Article' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';

const route = useRoute();
const router = useRouter();

// Initialize TipTap editor
const editor = useEditor({
  extensions: [StarterKit],
  content: '',
});

// Article state
const article = ref({
  id: null,
  title: '',
  content: '',
  category: null,
});
const categories = ref([]);
const isEditMode = route.params.id !== 'new';

// Fetch article data if editing
onMounted(async () => {
  if (isEditMode) {
    const response = await $fetch(`/api/articles/${route.params.id}`);
    article.value = response;
    editor.value.commands.setContent(response.content);
  }

  // Fetch categories
  categories.value = await $fetch('/api/categories');
});

// Save article
const saveArticle = async () => {
  article.value.content = editor.value.getHTML();

  if (isEditMode) {
    await $fetch(`/api/articles/${article.value.id}`, {
      method: 'PUT',
      body: article.value,
    });
  } else {
    await $fetch('/api/articles', {
      method: 'POST',
      body: article.value,
    });
  }

  router.push('/admin/articles');
};
</script>
