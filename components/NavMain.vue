<template>
  <SidebarGroup>
    <SidebarGroupLabel class="font-bold text-md">Admin Panel</SidebarGroupLabel>
    <SidebarMenu>
      <Collapsible
          v-for="item in items"
          :key="item.title"
          as-child
          :default-open="item.isActive"
          class="group/collapsible"
      >
        <SidebarMenuItem>
          <CollapsibleTrigger as-child>
            <SidebarMenuButton :tooltip="item.title">
              <component  :is="item.icon" v-if="item.icon" />
              <span class=" font-bold">{{ item.title }}</span>
              <ChevronRight class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              <SidebarMenuSubItem v-for="subItem in item.items" :key="subItem.title">
                <SidebarMenuSubButton as-child>
                  <NuxtLink :to="subItem.url">
                    <span class="font-normal">{{ subItem.title }}</span>
                  </NuxtLink>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  </SidebarGroup>
</template>

<script setup>
import { ChevronRight } from 'lucide-vue-next';
import { defineProps } from 'vue';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

const props = defineProps({
  items: {
    type: Array,
    required: true,
    validator: (items) => items.every((item) => typeof item.title === 'string' && typeof item.url === 'string'),
  },
});
</script>
