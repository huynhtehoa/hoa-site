<template>
  <div>
    <content-list
      v-slot="{ list }"
      path="/posts"
    >
      <post-block
        v-for="post in list"
        :key="post._path"
        :post="post"
      />
    </content-list>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports';

useHead({
  title: 'Hoa | Posts',
});
</script>
