import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home"
import About from "../views/About"
import Contact from "../views/Contact"
import Code from "../views/Code"
import Profile from "../views/Profile"


Vue.use(VueRouter)

const routes = [
    {
        path : "/",
        name : "home",
        component : Home
    },
    {
        path : "/about",
        name : "about",
        component : About
    },
    {
        path : "/contact",
        name : "contact",
        component : Contact
    },
    {
        path : "/code",
        name : "code",
        component : Code
    },
    {
        path : "/profile/:name",
        name : "profile",
        component : Profile
    },
    
]

const router = new VueRouter({
    mode : "history",
    routes
})

export default router