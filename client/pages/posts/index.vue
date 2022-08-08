<template>
  <div>
    all posts go here
  </div>
</template>

<script setup lang="ts">
import { useHead, navigateTo } from '#imports';

useHead({
  title: 'Hoa | Posts',
});

const navigateToPost = (path: string) => {
  navigateTo(path);
};
</script>
