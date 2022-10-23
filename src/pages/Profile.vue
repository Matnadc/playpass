<template>
    <section>
        <!-- TODO: cambiar el cerrar sesión para que esté acá -->
        <h1 class="mb-3">Mi perfil</h1>
        <AlertNotification v-if="status.text !== ''" :type="status.type" closable @close="handleCloseAlert">
            {{ status.text }}
        </AlertNotification>
        <dl class="mb-3">
            <dt>Email</dt>
            <dd>{{ user.email }}</dd>

            <dt>Nombre de usuario</dt>
            <dd>
                <span class="badge bg-primary">
                    <template v-if="user.name">{{ user.name }}</template>
                    <template v-else>No especificado</template>
                </span>
            </dd>
        </dl>
    </section>
    <div class="separator my-4"></div>
    <section>
        <h2>Editar mis datos</h2>
        <form action="#" method="post" @submit.prevent="handleProfileUpdate">
            <div class="mb-3">
                <label for="name" class="form-label">Nombre de usuario</label>
                <input type="text" id="name" name="name" class="form-control rounded-0" v-model="form.name">
            </div>
            <button type="submit" class="btn btn-primary rounded-0">Actualizar</button>
        </form>
    </section>
</template>

<script>
import { subscribeToAuthChanges, updateUserProfile } from '../services/auth';
import AlertNotification from '../components/AlertNotification.vue';

export default {
    name: "Profile",
    data: () => ({
        form: {
            name: "",
        },
        user: {
            id: null,
            email: null,
            name: null,
        },
        status: {
            type: "success",
            text: "",
        },
        unsubscribeFn: () => { }
    }),
    methods: {
        handleProfileUpdate() {
            updateUserProfile({ name: this.form.name })
                .then(() => {
                this.status = {
                    ...this.status,
                    type: "success",
                    text: "El perfil se actualizó correctamente."
                };
            })
                .catch((err) => {
                this.status = {
                    type: "danger",
                    text: err,
                };
            });
        },
        handleCloseAlert() {
            this.status.text = "";
        }

    },
    mounted() {
        this.unsubscribeFn = subscribeToAuthChanges(newUserData => this.user = newUserData);
        this.form.name = this.user.name;
    },
    unmounted() {
        this.unsubscribeFn();
    },
    components: { AlertNotification }
}
</script>

<style scoped>

</style>