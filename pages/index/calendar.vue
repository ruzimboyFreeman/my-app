<template>
  <div class="p-4 space-y-4">
<!--    <h2 class="text-xl font-bold">Daily Activities</h2>-->

    <!-- Contribution Calendar -->
    <div class="overflow-auto">
      <div class="flex flex-nowrap justify-center items-start">

        <!-- Week Days (Column) -->
        <div class="inline-block w-auto text-left font-normal p-2">
          <div v-for="week in weekDays" :key="week.order" class="text-sm text-muted-foreground">
            {{ week.name }}
          </div>
        </div>

        <!-- Weeks -->
<!--        <div class="relative">-->
<!--          &lt;!&ndash; Month Labels &ndash;&gt;-->
<!--          <div class="absolute -top-6 flex">-->
<!--            <div-->
<!--                v-for="(month, index) in monthLabels"-->
<!--                :key="index"-->
<!--                :style="{ width: month.width + 'px' }"-->
<!--                class="text-center text-sm font-semibold"-->
<!--            >-->
<!--              {{ month.name }}-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

        <!-- Weeks -->
        <div v-for="(week, weekIndex) in calendarData" :key="weekIndex" class="flex flex-col gap-1 mr-1">
          <div
              v-for="(day, dayIndex) in week"
              :key="dayIndex"
              @mouseenter="showTooltip($event, day)"
              @mouseleave="hideTooltip"
              class="w-4 h-4 rounded cursor-pointer mt-0.5 transition-all duration-150"
              :class="getHeatmapClass(day.activities)"
          ></div>
        </div>
      </div>
    </div>

    <!-- Tooltip -->
    <TooltipProvider>
      <Tooltip v-if="tooltip.visible">
        <TooltipTrigger as-child>
          <div
              class="fixed bg-gray-700 text-white text-xs rounded p-2 shadow-lg transition-all"
              :style="{ top: tooltip.y + 'px', left: tooltip.x + 'px' }"
          >
            {{ tooltip.text }}
          </div>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Dummy activity data for each day
const activities = ref([
  { date: "2025-02-10", title: "Solved a LeetCode problem", count: 2 },
  { date: "2025-02-12", title: "Wrote a blog post", count: 1 },
  { date: "2025-02-13", title: "Reviewed PR", count: 3 },
]);

const weekDays = ref([
  { name: "Sun", order: 1 },
  { name: "Mon", order: 2 },
  { name: "Tue", order: 3 },
  { name: "Wed", order: 4 },
  { name: "Thu", order: 5 },
  { name: "Fri", order: 6 },
  { name: "Sat", order: 7 },
]);

const calendarData = ref([]);
const monthLabels = ref([]);
const tooltip = ref({ visible: false, text: "", x: 0, y: 0 });

const generateCalendar = () => {
  let currentDate = new Date();
  let lastMonth = null;
  let monthStartIndex = 0;
  for (let week = 0; week < 53; week++) {
    let weekData = [];
    for (let day = 0; day < 7; day++) {
      let dateString = currentDate.toISOString().split("T")[0];
      let activity = activities.value.find((a) => a.date === dateString);
      let month = currentDate.toLocaleString("default", { month: "short" });

      if (month !== lastMonth) {
        // Store month label width based on previous entries
        if (lastMonth) {
          monthLabels.value.push({
            name: lastMonth,
            width: (week - monthStartIndex) * 18, // Approximate width
          });
        }
        monthStartIndex = week;
        lastMonth = month;
      }

      weekData.push({
        date: dateString,
        activities: activity ? activity.count : 0,
      });
      currentDate.setDate(currentDate.getDate() - 1);
    }
    weekData.reverse();
    calendarData.value.push(weekData);
  }
  calendarData.value.reverse();
};

const getHeatmapClass = (count) => {
  if (count > 5) return "bg-green-600 hover:bg-green-700";
  if (count > 3) return "bg-green-400 hover:bg-green-500";
  if (count > 1) return "bg-green-200 hover:bg-green-300";
  return "bg-gray-200 hover:bg-gray-300";
};

const showTooltip = (event, day) => {
  tooltip.value = {
    visible: true,
    text: `${day.date}: ${day.activities} activities`,
    x: event.clientX + 10,
    y: event.clientY + 10,
  };
};

const hideTooltip = () => {
  tooltip.value.visible = false;
};

onMounted(generateCalendar);
</script>
