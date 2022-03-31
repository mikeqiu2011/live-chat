<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
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
  components: { Navbar },
};
</script>

<style>
</style>