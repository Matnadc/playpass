<template>
    <nav class="navbar-expand-lg fw-light text-uppercase">
        <div class="container-md text-center py-4 d-flex d-lg-block">
            <router-link to="/" class="nav-link" id="logo"><img src="./../img/playpass-logo.png" alt="#">
            </router-link>

            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
                aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                <font-awesome-icon icon="fa-solid fa-bars" size="2x" />
            </button>
        </div>
        <div class="separator my-1 container-md"></div>
        <div class="container-md collapse navbar-collapse flex-wrap" id="menu">
            <ul class="navbar-nav justify-content-md-between w-100 align-items-end align-items-lg-center py-4">
                <li class="nav-item">
                    <router-link to="/games" class="nav-link">Juegos</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/faq" class="nav-link">Preguntas Frecuentes</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">Quiénes somos</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/join" class="nav-link fw-bold btn btn-primary rounded-0 px-3">Unite Ahora
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/chat" class="nav-link">Chat</router-link>
                </li>
                <template v-if="user.id === null">
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link">Iniciar Sesión</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link">Registrarme</router-link>
                    </li>
                </template>
                <template v-else>
                    <li class="nav-item">
                        <router-link to="/profile" class="nav-link nav-link">Mi perfil</router-link>
                    </li>
                    <form action="#" method="post" @submit.prevent="handleLogout">
                        <button type="submit" class="btn-reset fw-light text-end">Cerrar sesión <span class="">({{
                        user.email
                        }})</span></button>
                    </form>
                </template>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import { logout } from "../services/auth.js";
import useAuth from "../composition/useAuth.js";

const router = useRouter();
const { user } = useAuth();

function handleLogout() {
    logout();
    router.push({
        path: "/games"
    })
} 
</script>

<style scoped>
ul>#logo {
    flex: 1;
}
</style>