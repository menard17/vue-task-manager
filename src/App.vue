<template>
  <div class="flex items-center justify-center min-h-screen bg-blue-100">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <nav class="flex justify-between mb-4 text-blue-500">
        <router-link to="/">All Tasks</router-link>
        <router-link to="/completed">Completed Tasks</router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<script setup></script>
