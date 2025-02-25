<template>
  <div class="container">
    <div class="task-card">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Task Manager</h2>
      <nav class="navbar">
        <router-link to="/" class="nav-link">All Tasks</router-link>
        <router-link to="/completed" class="nav-link"
          >Completed Tasks</router-link
        >
      </nav>

      <div class="task-input">
        <input
          v-model="newTask"
          type="text"
          placeholder="Enter new task"
          class="input-field"
        />
        <button @click="addTask" class="primary-button">Add Task</button>
      </div>

      <ul class="task-list">
        <li v-for="(task, index) in tasks" :key="index" class="task-item">
          <span :class="{ 'completed-task': task.completed }">{{
            task.title
          }}</span>
          <div>
            <button
              v-if="!task.completed"
              @click="markAsDone(index)"
              class="success-button"
            >
              Done
            </button>
            <button @click="deleteTask(index)" class="danger-button">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../store";

const store = useTaskStore();
const newTask = ref("");
const tasks = store.tasks;

const addTask = () => {
  if (newTask.value.trim()) {
    store.addTask(newTask.value.trim());
    newTask.value = "";
  }
};

const markAsDone = (index) => {
  store.markAsDone(index);
};

const deleteTask = (index) => {
  store.deleteTask(index);
};
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
.task-input {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.input-field {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.primary-button {
  background: #0044cc;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
.primary-button:hover {
  background: #0033aa;
}
.success-button {
  background: green;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.danger-button {
  background: red;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5px;
}
.task-list {
  list-style: none;
  padding: 0;
}
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
.completed-task {
  text-decoration: line-through;
  color: gray;
}
</style>
