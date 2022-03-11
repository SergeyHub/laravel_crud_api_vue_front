import { createWebHistory, createRouter } from "vue-router"

import Home from "@/views/Home.vue"
//import ContactList from "../components/ContactList";
//import AddContact from "../components/AddContact";

const routes = [
    /*{
        name: 'ContactList',
        path: '/',
        component: ContactList
    },
    {
        name: 'AddContact',
        path: '/add_contacts',
        component: AddContact
    },*/
    {
        path: "/",
        name: "Home",
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export  default  router;
