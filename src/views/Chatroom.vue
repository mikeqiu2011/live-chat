<template>
  <div class="container">
    <Navbar @logout="handleLogout" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
export default {
  setup() {
    const router = useRouter();
    const handleLogout = () => {
      router.push({ name: "Welcome" });
    };

    return { handleLogout };
  },
  components: { Navbar },
};
</script>

<style>
</style>