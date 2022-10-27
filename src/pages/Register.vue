<template>
    <section class="py-5 container-md">
        <h1 class="text-center mb-3">Registrarme</h1>
        <div >
            <AlertNotification v-if="status.text !== ''" :type="status.type">
                {{ status.text }}
            </AlertNotification>
            <form action="#" @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control rounded-0" placeholder="mail@example.com" id="email"
                        name="email" v-model="user.email" :disabled="isLoading">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input type="password" class="form-control rounded-0" id="password" name="password"
                        v-model="user.password" :disabled="isLoading">
                </div>
                <SubmitButton :isLoading="isLoading">Crear cuenta</SubmitButton>
            </form>
        </div>
    </section>
</template>

<script setup>
import { AUTH_ERROR_MESSAGES, register } from '../services/auth.js';
import AlertNotification from '../components/AlertNotification.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import useNotification from '../composition/useNotification';
import SubmitButton from '../components/SubmitButton.vue';

const router = useRouter();
const { user, isLoading, status, handleSubmit } = useRegisterForm();

function useRegisterForm() {
    const user = ref({
        email: "",
        password: "",
    });

    const isLoading = ref(false);

    const { status } = useNotification();

    function handleSubmit() {
        isLoading.value = true;

        register({ ...user.value })
            .then(() => {
                isLoading.value = false;
                status.value = {
                    ...status.value,
                    type: "success",
                    text: "Cuenta creada correctamente.",
                }

                // TODO: Redireccionar a juegos
                router.push("/profile");
            })
            .catch(err => {
                isLoading.value = false;
                status.value = {
                    type: "danger",
                    text: AUTH_ERROR_MESSAGES[err.code] || err.code,
                }
            })
    }

    return { user, isLoading, status, handleSubmit };
}
</script>


<style scoped>
h1 {
    font-size: 4rem;
}
</style>