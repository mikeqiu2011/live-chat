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
      <div class="error">{{ error }}</div>
      <button>Log in</button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useSignIn } from "../composibles/useSignIn";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const { error, signIn } = useSignIn();

    const handleSubmit = async () => {
      console.log(email.value, password.value);
      await signIn(email.value, password.value);
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style>
</style>