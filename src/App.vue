<template>
    <header>
        <NavBar />
    </header>
    <main class="container-md py-3">
        <router-view />
    </main>

    <Footer />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
    name: "App",
    components: { Footer, NavBar }
}
</script>