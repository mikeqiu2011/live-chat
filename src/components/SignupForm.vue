<template>
  <div class="signup">
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        placeholder="display name"
        required
        v-model="displayName"
      />
      <input type="email" placeholder="email" required v-model="email" />
      <input
        type="password"
        placeholder="password"
        required
        v-model="password"
      />
      <button>submit</button>
      <!-- password is {{ password }} -->
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(displayName.value, email.value, password.value);
    };

    return { displayName, email, password, handleSubmit };
  },
};
</script>

<style>
</style>