<template>
    <Loader v-if="isLoading" />
    <section v-else class="container-md">
        <h1 class="mb-3">
            <template v-if="user.displayName">{{ user.displayName }}</template>
            <template v-else>{{ user.email }}</template>
        </h1>
        <UserProfileDetails :user="user" />
        <router-link :to="`/user/${user.id}/chat`" class="btn btn-primary rounded-0">
            Iniciar Chat Privado Con {{ user.displayName || user.email }}
        </router-link>
    </section>
</template>

<script setup>
import UserProfileDetails from '../components/UserProfileDetails.vue';
import { useRoute } from "vue-router";
import { useUserProfile } from "../composition/useUserProfile.js";
import Loader from '../components/Loader.vue';

const route = useRoute();
const { user, isLoading } = useUserProfile();
</script>