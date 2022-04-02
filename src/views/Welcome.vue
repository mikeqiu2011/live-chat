<template>
  <div class="welcome container">
    <p>welcome</p>
    <div v-if="showSignup">
      <h2>Sign up the chatroom</h2>
      <SignupForm @signedup="enterChat" />
      <p>
        already have an account?
        <span @click="showSignup = false">Log in</span> instead
      </p>
    </div>
    <div v-else>
      <h2>Login to the chatroom</h2>
      <LoginForm @login="enterChat" />
      <p>
        No account yet?
        <span @click="showSignup = true">Sign up</span> instead
      </p>
    </div>

    <!-- <button @click="handleClick">Sign up</button> -->
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  setup() {
    const showSignup = ref(false);
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: "Chatroom" });
    };

    return { showSignup, enterChat };
  },
  components: { SignupForm, LoginForm },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}

.welcome span {
  cursor: pointer;
  color: orange;
  font-weight: bold;
  text-decoration: underline;
}
</style>