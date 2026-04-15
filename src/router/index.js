import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Spells from "../components/SpellGallery.vue";
import Monsters from "../components/MonsterGallery.vue";
import Favorites from "../components/Favorites.vue";

const routes = [
    { path: "/", component: Home},
    { path: "/spells", component: Spells},
    { path: "/monsters", component: Monsters},
    { path: "/favorites", component: Favorites},
];

export default createRouter ({
    history: createWebHistory(),
    routes,
})