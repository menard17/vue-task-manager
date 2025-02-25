<template>
  <div class="container">
    <div class="login-card">
      <div class="logo-container">
        <img src="/logo.png" alt="VIP Tutors" class="logo" />
      </div>
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

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(to bottom right, #e0f2ff, #4a90e2);
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
.login-card {
  background: white;
  padding: 0;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  width: 700px;
  overflow: hidden;
}
.logo-container {
  background: #f4f4f4;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.logo {
  width: 140px;
}
.login-content {
  padding: 2rem;
  flex: 2;
}
h2 {
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  font-size: 1rem;
}
.forgot-password {
  text-align: right;
  font-size: 0.9rem;
}
.forgot-password a {
  color: #ff9800;
  text-decoration: none;
  font-weight: bold;
}
.captcha-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 6px;
}
.captcha {
  height: 40px;
}
.captcha-refresh {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
.login-button {
  background: #001f5b;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
}
.login-button:hover {
  background: #000d3b;
}
.register {
  margin-top: 15px;
  font-size: 0.9rem;
}
.register a {
  color: #ff9800;
  font-weight: bold;
  text-decoration: none;
}
</style>
