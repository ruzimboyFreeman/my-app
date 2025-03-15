import { ref, computed } from "vue";
import { useWindowSize } from "@vueuse/core"; // Helps detect screen size changes

const isSidebarOpen = ref(false);

export function useSidebar() {
    const { width } = useWindowSize(); // Detect screen width

    // Determine if the view is mobile (e.g., width < 768px)
    const isMobile = computed(() => width.value < 768);

    // Toggle sidebar state
    const toggleSidebar = () => {
        isSidebarOpen.value = !isSidebarOpen.value;
    };

    return {
        isSidebarOpen,
        isMobile,
        toggleSidebar,
    };
}
