<template>
  <div class="container">
    <Navbar />
    <NewChatForm />
    <ChatWindow />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import NewChatForm from "../components/NewChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
import { auth } from "../firebase/config";
export default {
  setup() {
    const router = useRouter();

    auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push({ name: "Welcome" });
      }
    });
  },
  components: { Navbar, NewChatForm, ChatWindow },
};
</script>

<style>
</style>