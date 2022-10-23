<template>
    <div class="d-flex align-items-center gap-2">
        <button type="submit" class="btn btn-primary rounded-0" :disabled="isLoading">
            <slot />
        </button>
        <Loader v-if="isLoading" />
    </div>
</template>

<script setup>
import Loader from './Loader.vue';

defineProps({
    isLoading: {
        type: Boolean,
        default: false,
    }
});
</script>