<template>
    <section>
        <h1 class="mb-3">
            <template v-if="user.displayName">{{ user.displayName }}</template>
            <template v-else>{{ user.email }}</template>
        </h1>
        <UserProfileDetails :user="user"/>
    </section>
</template>

<script setup>
import UserProfileDetails from '../components/UserProfileDetails.vue';

const user = { };

</script>