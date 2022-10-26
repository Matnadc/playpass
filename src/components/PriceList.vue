<template>
    <ul class="p-0 d-sm-flex gap-2">
        <li v-for="item in pricing"
            class="list-unstyled bg-dark mb-4 p-2 w-100 d-flex flex-column justify-content-between">
            <div class="pb-4">
                <p class="fw-bold fs-4 bg-primary py-2 text-uppercase mb-3 text-center">{{ item.name }}</p>
                <ul>
                    <li v-for="details in item.details" class="mb-3">{{ details }}</li>
                </ul>
            </div>
            <p>Obtener PlayPass {{ item.name }} por AR${{ item.price }}</p>
        </li>
    </ul>
</template>

<script setup>
defineProps({
    pricing: {
        type: Object,
    },
});
</script>