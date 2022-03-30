<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      placeholder="display name"
      required
      v-model="displayName"
    />
    <input type="email" placeholder="email" required v-model="email" />
    <input type="password" placeholder="password" required v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
    <!-- password is {{ password }} -->
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useSignup } from "../composibles/useSignup";

export default {
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const { error, signUp } = useSignup();

    const handleSubmit = async () => {
      console.log(displayName.value, email.value, password.value);
      await signUp(email.value, password.value, displayName.value);
      console.log("user signed up");
    };

    return { displayName, email, password, handleSubmit, error };
  },
};
</script>

<style>
</style>