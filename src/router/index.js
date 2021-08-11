import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import ContactPage from "@/pages/ContactPage.vue";
const routes = [
  /**
   *  @description Страницы приложения
   * MainPage - Страница со списком контактов
   * ContactPage - Страница контактной информации выбранного контакта
   */
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
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
