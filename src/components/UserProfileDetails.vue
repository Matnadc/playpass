<template>
    <dl class="mb-3">
        <dt>Email</dt>
        <dd>{{ user.email }}</dd>

        <dt>Nombre de usuario</dt>
        <dd>
            <span class="badge bg-primary">
                <template v-if="user.displayName">{{ user.displayName }}</template>
                <template v-else>No especificado</template>
            </span>
        </dd>
    </dl>
</template>

<script setup>
defineProps({
    user: {
        type: Object,
    }
});
</script>