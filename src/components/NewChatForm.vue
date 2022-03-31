<template>
  <form>
    <textarea
      placeholder="type a msg and hit enter to send"
      v-model="message"
      @keypress.enter.prevent="handleSend"
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { timestamp, db } from "../firebase/config";
import { getUser } from "../composibles/getUser";
import { useCollection } from "../composibles/useCollection";
export default {
  setup() {
    const message = ref("");
    const user = getUser(); // shall not use {user}
    const { error, addDoc } = useCollection("message");

    const handleSend = async () => {
      const chat = {
        message: message.value,
        name: user.value.displayName,
        createdAt: timestamp(),
      };

      await addDoc(chat);

      if (!error.value) {
        message.value = "";
        console.log("message sent");
      }
    };

    return { handleSend, message, error };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>