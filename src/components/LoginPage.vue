<template>
  <div class="container">
    <div class="login-card">
      <!-- Logo Section -->
      <div class="logo-container">
        <img src="../assets/vip-logo.png" alt="VIP Tutors" class="logo" />
      </div>

      <!-- Form Section -->
      <div class="login-content">
        <h2>Sign in to your account</h2>
        <form @submit.prevent="handleLogin">
          <label>Username / Email Address / Mobile</label>
          <input type="text" v-model="username" required />

          <label>Password</label>
          <input type="password" v-model="password" required />

          <div class="forgot-password">
            <a href="#">Reset Password</a>
          </div>

          <!-- Captcha Section -->
          <div class="captcha-container">
            <img src="/captcha.png" alt="Captcha" class="captcha" />
            <button type="button" class="captcha-refresh">🔄</button>
          </div>

          <label>Enter the characters you see above</label>
          <input type="text" v-model="captcha" required />

          <button type="submit" class="login-button">Login</button>
        </form>
        <p class="register">
          Don't have an account? <a href="#">Create an account</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const username = ref("");
const password = ref("");
const captcha = ref("");

const handleLogin = () => {
  alert(`Logging in with: ${username.value}`);
};
</script>
