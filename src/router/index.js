import Vue from "vue";
import Router from "vue-router";
import landing from "@/pages/landing";
import Profile from "@/pages/Profile";
import TheCard from "@/components/TheModels/TheCard";

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "landing",
        components: { default: landing},

    },
    {
        path: "/profile",
        name: "profile",
        components: { default: Profile, content: TheCard},

    },
    // {
    //     path: "/login",
    //     name: "login",
    //     components: { default: Login },
    //     props: {
    //         header: { colorOnScroll: 400 },
    //     },
    // },
    // {
    //     path: "/profile",
    //     name: "profile",
    //     meta: {auth: true},
    //     components: {default: Profile, header: StarterNavbar, footer: MainFooter},
    //     props: {
    //         header: {colorOnScroll: 100},
    //         footer: {backgroundColor: "black"},
    //     },
    // },
    // {
    //     path: "/testing",
    //     name: "testing",
    //     meta: {auth: true},
    //     components: { default: Testing,header: StarterNavbar, footer: MainFooter },
    //     props: {
    //         header: { colorOnScroll: 100 },
    //         footer: { backgroundColor: "black" },
    //     },
    // },
    // {
    //     path: "/video",
    //     name: "video",
    //     meta: {auth: true},
    //     components: { default: Video,header: StarterNavbar, footer: MainFooter },
    //     props: {
    //         header: { colorOnScroll: 100 },
    //         footer: { backgroundColor: "black" },
    //     },
    // },
]

const router = new Router({
    base: process.env.BASE_URL,
    routes,
})
// if (getToken()) {
//     const exp = parseJwt(getToken()).exp
//     const cur = Math.floor(Date.now() / 1000)
//     if (cur >= exp) {
//         removeToken()
//     }
// }

// router.beforeEach((to, from, next) => {
//     const requireAuth = to.matched.some(record => record.meta.auth)
//     const currentUser = getToken()
//
//     if (requireAuth && !currentUser) {
//         next('/login')
//     } else {
//         next()
//     }
// })


export default router