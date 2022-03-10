import {createRouter, createWebHistory }  from 'vue-router';

import ContactList from '../components/ContactList';
import AddContact from '../components/AddContact';

const routes = [
    {
        name: 'ContactList',
        path: '/',
        component: ContactList
    },
    {
        name: 'AddContact',
        path: '/add_contacts',
        component: AddContact
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export  default  router;
