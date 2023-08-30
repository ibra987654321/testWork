import Vue from "vue";
import Router from "vue-router";
import landing from "@/pages/landing";

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "landing",
        components: { default: landing},

    },
]

const router = new Router({
    base: process.env.BASE_URL,
    routes,
})


export default router
