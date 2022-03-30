<template>
  <h1 class="welcome container">welcome to chat room app</h1>
  <SignupForm />
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
export default {
  components: { SignupForm },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
</style>