import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Chat from "../pages/Chat.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Profile from "../pages/Profile.vue";
import { subscribeToAuthChanges } from "../services/auth";

const routes = [
    {
        component: Home,
        path: "/",
    },
    {
        component: Chat,
        path: "/chat",
        meta: {
            requiresAuth: true,
        }
    },
    {
        component: Login,
        path: "/login",
    },
    {
        component: Register,
        path: "/register",
    },
    {
        component: Profile,
        path: "/profile",
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

let user = {
    id: null,
    email: null,
};

subscribeToAuthChanges(newData => user = newData);
router.beforeEach((to, from) => {
    if(to.meta.requiresAuth && user.id === null){
        return { path: "/login" }
    }
});

export default router;