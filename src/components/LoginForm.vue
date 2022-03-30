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
import { useRouter } from "vue-router";

export default {
  setup(props, context) {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const { error, signIn } = useSignIn();

    const handleSubmit = async () => {
      console.log(email.value, password.value);
      const res = await signIn(email.value, password.value);

      if (!error.value) {
        context.emit("login");
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style>
</style>