<template>
    <section class="py-5 container-md">
        <h1 class="text-center mb-3">Iniciar Sesión</h1>
        <div>
            <AlertNotification v-if="status.text !== ''" :type="status.type">
                {{ status.text }}
            </AlertNotification>
            <form action="#" @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control rounded-0" placeholder="mail@example.com" id="email"
                        name="email" v-model="user.email">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input type="password" class="form-control rounded-0" id="password" name="password"
                        v-model="user.password">
                </div>
                <button type="submit" class="btn btn-primary rounded-0">Ingresar</button>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useNotification from '../composition/useNotification';
import AlertNotification from "../components/AlertNotification.vue";
import { AUTH_ERROR_MESSAGES, login } from '../services/auth';

const router = useRouter();
const { user, status, handleSubmit } = useLoginForm();

function useLoginForm() {
    const user = ref({
        email: "",
        password: "",
    });

    const { status } = useNotification();

    function handleSubmit(){
        login({
            ...user.value,
        })
        .then(() => {
            status.value = {
                type: "success",
                text: "Sesión iniciada con éxito.",
            };
            router.push({
                path: "/profile"
            });
        })
        .catch(err => {
            status.value = {
                type: "danger",
                text: AUTH_ERROR_MESSAGES[err.code] || err.code,
            }
        });
    }
    return { user, status, handleSubmit };
}

</script>


<style scoped>
h1 {
    font-size: 4rem;
}
</style>