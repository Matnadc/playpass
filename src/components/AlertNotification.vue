<template>
    <div :class="['p-3 mb-3 alert rounded-0', `bg-${type}`, closable ? 'alert-dismissible' : null]" role="alert">
        <slot />
        <button v-if="closable" type="button" class="btn-close" aria-label="Cerrar notificación" @click="$emit('close')"></button>
    </div>
</template>

<script setup>
defineProps({
        type: {
            type: String,
            default: "info"
        },
        closable: {
            type: Boolean,
            default: false,
        }
    });

defineEmits(['close']);
</script>


<style scoped>

</style>