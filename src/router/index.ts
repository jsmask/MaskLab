import { createRouter, createWebHashHistory } from 'vue-router';

export const routes = [{
    path: "/img2gif",
    name: "Img2gif",
    component: () => import("@/views/Img2Gif.vue"),
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", redirect: "/home" },
        {
            path: "/home",
            name: "home",
            component: () => import("@/views/Home.vue")
        },
        ...routes
    ]
});

export default router;