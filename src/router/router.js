import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Chat from "../pages/Chat.vue";

const routes = [
    {
        component: Home,
        path: "/",
    },
    {
        component: Chat,
        path: "/chat",
    }
    // TODO: Login - Signin
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;