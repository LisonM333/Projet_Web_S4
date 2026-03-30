import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Spells from "../components/SpellGallery.vue"
import Monsters from "../components/MonsterGallery.vue"

const routes = [
    { path: "/", component: Home},
    { path: "/spells", component: Spells},
    { path: "/monsters", component: Monsters},
];

export default createRouter ({
    history: createWebHistory(),
    routes,
})