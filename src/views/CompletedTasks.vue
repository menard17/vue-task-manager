<template>
  <div>
    <h1 class="text-2xl font-bold text-center mb-4">Completed Tasks</h1>
    <ul>
      <li
        v-for="(task, index) in completedTasks"
        :key="index"
        class="p-2 bg-gray-200 rounded mb-2"
      >
        <span class="line-through text-gray-500">{{ task.title }}</span>
      </li>
    </ul>
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
