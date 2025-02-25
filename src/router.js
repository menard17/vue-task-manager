import { createRouter, createWebHistory } from "vue-router";
import TaskList from "./views/TaskList.vue";
import CompletedTasks from "./views/CompletedTasks.vue";
import LoginPage from "./components/LoginPage.vue";

const routes = [
  { path: "/login", component: LoginPage },
  { path: "/", component: TaskList },
  { path: "/completed", component: CompletedTasks },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
