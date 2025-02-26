<template>
  <div class="container">
    <div class="login-card">
      <!-- Logo Section -->
      <div class="logo-container">
        <img src="../assets/vip-logo.png" alt="VIP Tutors" class="logo" />
      </div>

      <!-- Form Section -->
      <div class="login-content">
        <h2>Task Manager</h2>
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
          <button @click="addTask" class="login-button">Add Task</button>
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
