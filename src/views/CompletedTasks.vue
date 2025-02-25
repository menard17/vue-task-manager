// src/views/CompletedTasks.vue
<template>
  <div class="container">
    <div class="task-card">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Completed Tasks</h2>
      <nav class="navbar">
        <router-link to="/" class="nav-link">All Tasks</router-link>
        <router-link to="/completed" class="nav-link"
          >Completed Tasks</router-link
        >
      </nav>

      <ul class="task-list">
        <li
          v-for="(task, index) in completedTasks"
          :key="index"
          class="task-item"
        >
          <span class="completed-task">{{ task.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useTaskStore } from "../store";

const store = useTaskStore();
const completedTasks = computed(() =>
  store.tasks.filter((task) => task.completed)
);
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(to bottom right, #a0d8ff, #4a90e2);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.task-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 400px;
}
.navbar {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}
.nav-link {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}
.task-list {
  list-style: none;
  padding: 0;
}
.task-item {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
.completed-task {
  text-decoration: line-through;
  color: gray;
  font-weight: bold;
}
</style>
