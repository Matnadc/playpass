import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Games from "../pages/Games.vue";
import Support from "../pages/Support.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import MyProfile from "../pages/MyProfile.vue";
import UserProfile from "../pages/UserProfile.vue";
import PrivateChat from "../pages/PrivateChat.vue";
import Join from "../pages/Join.vue";
import AdminPanel from "../pages/AdminPanel.vue";
import { subscribeToAuthChanges } from "../services/auth";

const routes = [
    {
        component: Home,
        path: "/",
    },
    {
        component: Games,
        path: "/games",
    },
    {
        component: Join,
        path: "/join",
    },
    {
        component: Support,
        path: "/support",
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
        component: MyProfile,
        path: "/profile",
        meta: {
            requiresAuth: true,
        }
    },
    {
        component: UserProfile,
        path: "/user/:id",
        meta: {
            requiresAuth: true,
        }
    },
    {
        component: PrivateChat,
        path: "/user/:id/chat",
        meta: {
            requiresAuth: true,
        }
    },
    {
        component: AdminPanel,
        path: "/admin",
        meta: {
            requiresAuth: true,
        }
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