import {createRouter, createWebHistory }  from 'vue-router';

import ContactList from '@/components/ContactList';
import AddContact from '@/components/AddContact';
import EditContact from '@/components/EditContact';

const routes = [
    {
        name: 'ContactList',
        path: '/',
        component: ContactList
    },
    {
        name: 'AddContact',
        path: '/add_contact',
        component: AddContact
    },
    {
        name: 'EditContact',
        //path: '/edit_contact',
        path: '/contact/edit/:id?',
        component: EditContact
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export  default  router;
