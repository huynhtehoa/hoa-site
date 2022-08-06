<template>
  <div>
    {{ counter }}
    <button @click="increment">
      Increment
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const counter = ref<number>(0);
const increment = (): number => counter.value++;
</script>
