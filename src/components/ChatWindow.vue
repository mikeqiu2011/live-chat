<template>
  <div v-for="doc in docs" :key="doc.id">
    {{ doc.message }} - {{ doc.name }} - {{ doc.createdAt }}
  </div>
</template>

<script>
import { useCollection } from "../composibles/useCollection";
export default {
  setup() {
    const { docs, error } = useCollection("message");

    return { docs, error };
  },
};
</script>

<style>
</style>