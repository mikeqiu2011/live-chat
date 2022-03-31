<template>
  <nav v-if="user">
    <div>
      <p>hey there... {{ user.displayName }}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <div class="error">{{ error }}</div>
    <button @click="handleLogout">log out</button>
  </nav>
</template>

<script>
import { useLogout } from "../composibles/useLogout";
import { getUser } from "../composibles/getUser";

export default {
  setup() {
    const { error, logout } = useLogout();
    const user = getUser();
    const handleLogout = async () => {
      console.log("now logging out");
      await logout();
      if (!error.value) {
        console.log("successfully logged out");
      }
    };

    return { handleLogout, error, user };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>