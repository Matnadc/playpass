<template>
    <nav class="navbar-expand-lg fw-light text-uppercase">
        <div class="container-md collapse navbar-collapse">
            <ul class="navbar-nav justify-content-between w-100 align-items-center py-4">
                <li class="navbar-nav gap-3">
                    <li class="nav-item"><router-link to="/games" class="nav-link">Juegos</router-link></li>
                    <li class="nav-item"><router-link to="/faq" class="nav-link">Preguntas Frecuentes</router-link></li>
                    <li class="nav-item"><router-link to="/about" class="nav-link">Quiénes somos</router-link></li>
                </li>
                <li class="nav-item" id="logo"><router-link to="/" class="nav-link"><img src="./../img/playpass-logo.png" alt="#"></router-link></li>
                <li class="navbar-nav gap-3">
                    <li class="nav-item"><router-link to="/chat" class="nav-link">Chat</router-link></li>
                    <li class="nav-item"><router-link to="/join" class="nav-link fw-bold btn btn-primary rounded-0 px-3">Unite Ahora</router-link></li>
                    <li class="nav-item"><router-link to="/login" class="nav-link">Iniciar Sesión</router-link></li>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
}
</script>

<style scoped>
    ul>#logo{
        flex:1;
    }
</style>