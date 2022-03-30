<template>
  <div class="signup">
    <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="email" required v-model="email" />
      <input
        type="password"
        placeholder="password"
        required
        v-model="password"
      />
      <button>Log in</button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(email.value, password.value);
    };

    return { email, password, handleSubmit };
  },
};
</script>

<style>
</style>