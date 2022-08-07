<!-- Custom html a tag for reusability -->
<template>
  <a
    :href="url"
    target="_blank"
    rel="noreferrer noopener"
    class="text-emerald-600 decoration-emerald-400 underline"
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
