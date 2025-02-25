import { createRouter, createWebHistory } from "vue-router";
import TaskList from "./views/TaskList.vue";
import CompletedTasks from "./views/CompletedTasks.vue";

const routes = [
  { path: "/", component: TaskList },
  { path: "/completed", component: CompletedTasks },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
