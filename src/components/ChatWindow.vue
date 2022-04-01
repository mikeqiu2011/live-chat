<template>
  <div v-if="error" class="error">{{ error }}</div>
  <div class="messages" v-if="docs" ref="messages">
    <div v-for="doc in formatedDocuments" :key="doc.id" class="single">
      <span class="created-at">{{ doc.createdAt }}</span>
      <span class="name">{{ doc.name }}:</span>
      <span class="message">{{ doc.message }}</span>
    </div>
  </div>
</template>

<script>
import { useCollection } from "../composibles/useCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "@vue/runtime-core";
export default {
  setup() {
    const { docs, error } = useCollection("message");

    const formatedDocuments = computed(() => {
      if (docs.value) {
        return docs.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });

    //auto scroll to bottom of new messages
    const messages = ref(null);

    onUpdated(() => {
      console.log("chat window updated");
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return { docs, error, formatedDocuments, messages };
  },
};
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>