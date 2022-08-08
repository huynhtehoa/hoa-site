<!-- Custom html a tag for reusability -->
<template>
  <a
    :href="url"
    target="_blank"
    rel="noreferrer noopener"
    class=" underline text-emerald-600 decoration-emerald-400 dark:text-teal-500 dark:decoration-teal-300"
  >
    {{ text }}
  </a>
</template>

<script setup lang="ts">
defineProps<{
  url: string,
  text: string
}>();
</script>
