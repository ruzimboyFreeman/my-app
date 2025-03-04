<script setup>
import { ref } from 'vue';

// Sidebar state
const isSidebarOpen = ref(true);

// Toggle sidebar
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 text-gray-900">
    <!-- Sidebar -->
    <aside
        :class="[
        'fixed top-0 left-0 h-screen bg-white shadow-lg transition-all duration-300',
        isSidebarOpen ? 'w-64' : 'w-16'
      ]"
    >
      <div class="p-4 flex items-center justify-between">
        <h1
            :class="[
            'text-lg font-bold transition-all duration-300',
            isSidebarOpen ? 'opacity-100' : 'opacity-0'
          ]"
        >
          Admin Panel
        </h1>
        <button @click="toggleSidebar" class="text-gray-500 hover:text-gray-700">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <!-- Navigation Links -->
      <nav class="mt-4">
        <ul>
          <li>
            <NuxtLink
                to="/admin/dashboard"
                class="flex items-center p-2 hover:bg-gray-200 rounded"
            >
              <span
                  :class="[
                  'ml-4 transition-all duration-300',
                  isSidebarOpen ? 'opacity-100' : 'opacity-0'
                ]"
              >
                Dashboard
              </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
                to="/admin/articles"
                class="flex items-center p-2 hover:bg-gray-200 rounded"
            >
              <span
                  :class="[
                  'ml-4 transition-all duration-300',
                  isSidebarOpen ? 'opacity-100' : 'opacity-0'
                ]"
              >
                Articles
              </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
                to="/admin/categories"
                class="flex items-center p-2 hover:bg-gray-200 rounded"
            >
              <span
                  :class="[
                  'ml-4 transition-all duration-300',
                  isSidebarOpen ? 'opacity-100' : 'opacity-0'
                ]"
              >
                Categories
              </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
                to="/admin/settings"
                class="flex items-center p-2 hover:bg-gray-200 rounded"
            >
              <span
                  :class="[
                  'ml-4 transition-all duration-300',
                  isSidebarOpen ? 'opacity-100' : 'opacity-0'
                ]"
              >
                Settings
              </span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <div :class="['ml-64 transition-all duration-300', isSidebarOpen ? 'ml-64' : 'ml-16']">
      <!-- Header -->
      <header class="bg-white shadow p-4">
        <h2 class="text-xl font-bold">Admin Panel</h2>
      </header>

      <!-- Page Content -->
      <main class="p-8">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
