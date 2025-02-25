<template>
  <div>
    <h1 class="text-2xl font-bold text-center mb-4">Task List</h1>
    <div class="flex gap-2 mb-4">
      <input
        v-model="newTask"
        class="border p-2 flex-1 rounded"
        placeholder="New Task"
      />
      <button
        @click="addNewTask"
        class="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </div>
    <ul>
      <li
        v-for="(task, index) in tasks"
        :key="index"
        class="flex items-center justify-between p-2 bg-gray-100 rounded mb-2"
      >
        <span :class="{ 'line-through text-gray-500': task.completed }">{{
          task.title
        }}</span>
        <div>
          <button
            v-if="!task.completed"
            @click="markTaskDone(index)"
            class="bg-green-500 text-white px-2 py-1 rounded"
          >
            Done
          </button>
          <button
            @click="deleteTask(index)"
            class="bg-red-500 text-white px-2 py-1 rounded ml-2"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../store";

const store = useTaskStore();
const tasks = store.tasks;
const newTask = ref("");

const addNewTask = () => {
  if (newTask.value.trim()) {
    store.addTask(newTask.value.trim());
    newTask.value = "";
  }
};

const markTaskDone = (index) => {
  store.markAsDone(index);
};

const deleteTask = (index) => {
  store.deleteTask(index);
};
</script>
