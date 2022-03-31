<template>
  <nav>
    <div>
      <p>hey there... displayName here</p>
      <p class="email">Currently logged in as ... email</p>
    </div>
    <div class="error">{{ error }}</div>
    <button @click="handleLogout">log out</button>
  </nav>
</template>

<script>
import { useLogout } from "../composibles/useLogout";

export default {
  setup() {
    const { error, logout } = useLogout();
    const handleLogout = async () => {
      console.log("now logging out");
      await logout();
      if (!error.value) {
        console.log("successfully logged out");
      }
    };

    return { handleLogout, error };
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