<template>
    <section class="py-5">
        <h1 class="text-center mb-3">Registrarme</h1>
        <div class="px-5">
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
                    <input type="password" class="form-control rounded-0" id="password" name="password" v-model="user.password">
                </div>
                <button type="submit" class="btn btn-primary rounded-0">Ingresar</button>
            </form>
        </div>
    </section>
</template>

<script>
import { AUTH_ERROR_MESSAGES, register } from '../services/auth.js';
import AlertNotification from '../components/AlertNotification.vue';

export default {
    name: "Register",
    data: () => ({
        user: {
            email: "",
            password: "",
        },
        status: {
            type: "success",
            text: "",
        }
    }),
    methods: {
        handleSubmit() {
            register({ ...this.user })
                .then(() => {
                this.status = {
                    ...this.status,
                    type: "success",
                    text: "Cuenta creada correctamente."
                };
            })
                .catch((err) => {
                this.status = {
                    type: "danger",
                    text: AUTH_ERROR_MESSAGES[err.code] || err.code,
                };
            });
        }
    },
    components: { AlertNotification }
}
</script>


<style scoped>
h1 {
    font-size: 4rem;
}
</style>