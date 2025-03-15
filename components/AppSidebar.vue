<script setup>
import { ref } from 'vue';
import {
  LucideAudioWaveform,
  LucideBookOpen,
  LucideBot,
  LucideCommand,
  LucideFrame,
  LucideGalleryVerticalEnd,
  LucideMap,
  LucidePieChart,
  LucideSettings2,
  LucideSquareTerminal
} from 'lucide-vue-next';

import NavMain from '@/components/NavMain.vue';
import NavProjects from '@/components/NavProjects.vue';
import NavUser from '@/components/NavUser.vue';
import TeamSwitcher from '@/components/TeamSwitcher.vue';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';

const data = ref({
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    { name: "My-blog", logo: LucideGalleryVerticalEnd },
  ],
  navMain: [
    {
      title: "Articles",
      url: "#",
      icon: LucideSquareTerminal,
      isActive: true,
      items: [
        { title: "List", url: "/admin/articles/list" },
        { title: "Create", url: "/admin/articles/create" },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: LucideBot,
      items: [
        { title: "Genesis", url: "#" },
        { title: "Explorer", url: "#" },
        { title: "Quantum", url: "#" },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: LucideBookOpen,
      items: [
        { title: "Introduction", url: "#" },
        { title: "Get Started", url: "#" },
        { title: "Tutorials", url: "#" },
        { title: "Changelog", url: "#" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: LucideSettings2,
      items: [
        { title: "General", url: "#" },
        { title: "Team", url: "#" },
        { title: "Billing", url: "#" },
        { title: "Limits", url: "#" },
      ],
    },
  ],
  projects: [
    { name: "Design Engineering", url: "#", icon: LucideFrame },
    { name: "Sales & Marketing", url: "#", icon: LucidePieChart },
    { name: "Travel", url: "#", icon: LucideMap },
  ],
});
</script>

<template>
  <Sidebar collapsible="icon">
    <SidebarHeader>
      <TeamSwitcher :teams="data.teams" />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
<!--      <NavProjects :projects="data.projects" />-->
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
