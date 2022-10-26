<template>
    <section class="container-md">
        <!-- TODO: cambiar el cerrar sesión para que esté acá -->
        <h1 class="mb-3">Mi perfil</h1>
        <AlertNotification v-if="status.text !== ''" :type="status.type" closable @close="handleCloseAlert">
            {{ status.text }}
        </AlertNotification>
        <UserProfileDetails :user="user"/>
    </section>
    <div class="separator my-4 container-md"></div>
    <section class="container-md mb-4">
        <h2>Editar mis datos</h2>
        <form action="#" method="post" @submit.prevent="handleProfileUpdate">
            <div class="mb-3">
                <label for="displayName" class="form-label">Nombre de usuario</label>
                <input type="text" id="displayName" name="displayName" class="form-control rounded-0"
                    v-model="form.displayName" :disabled="isLoading">
            </div>
            <SubmitButton :isLoading="isLoading">Actualizar datos</SubmitButton>
        </form>
    </section>
</template>

<script setup>
import { updateUserProfile } from '../services/auth';
import AlertNotification from '../components/AlertNotification.vue';
import useAuth from "../composition/useAuth.js";
import useNotification from "../composition/useNotification.js";
import { ref } from 'vue';
import SubmitButton from '../components/SubmitButton.vue';
import UserProfileDetails from '../components/UserProfileDetails.vue';

const { user } = useAuth();
const { form, isLoading, status, handleProfileUpdate, handleCloseAlert } = useProfileForm();

function useProfileForm() {
    const form = ref({ displayName: "" });
    const isLoading = ref(false);
    const { status, close } = useNotification();

    function handleProfileUpdate() {
        isLoading.value = true;
        updateUserProfile({ displayName: form.value.displayName })
            .then(() => {
                isLoading.value = false;
                status.value = {
                    ...status.value,
                    type: "success",
                    text: "El perfil se actualizó correctamente."
                };
            })
            .catch((err) => {
                isLoading.value = true;
                status.value = {
                    type: "danger",
                    text: err,
                };
            });
    };

    return { form, isLoading, status, handleProfileUpdate, handleCloseAlert: close }
}
</script>

<style scoped>

</style>