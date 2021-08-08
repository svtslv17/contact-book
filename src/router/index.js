import { createWebHistory, createRouter } from "vue-router";
import Main from "@/pages/Main.vue";
import ContactPage from "@/pages/ContactPage.vue";
import ContactItem from "@/components/ContactItem.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/contact/:id",
    name: "ContactPage",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
