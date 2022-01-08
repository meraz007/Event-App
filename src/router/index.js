import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import EventDetails from '../components/EventDetails.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component:Home
  },
  {
    path: "/event/:id",
    name: "event",
    component:EventDetails
  },

  {
    path: "/about",
    name: "About",
    component: About
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
