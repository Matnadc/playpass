import { onMounted, onUnmounted, ref } from "vue";
import { getAllPricing } from "../services/pricing-list.js";

export function usePricingList() {
    const pricing = ref({});
    const isLoading = ref(true);
    let unsubscribe;

    onMounted(async () => {
        unsubscribe = await getAllPricing(newPricing => {
            pricing.value = newPricing;
            isLoading.value = false;
        });
    });

    onUnmounted(() => {
        if (typeof unsubscribe !== 'function') return;
        unsubscribe();
    });

    return { pricing, isLoading }
}