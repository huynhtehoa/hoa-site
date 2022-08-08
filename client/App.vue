<template>
  <div class="bg-white text-black dark:bg-slate-800 dark:text-white">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import applyThemeMode from '~/helpers/applyThemeMode';

onBeforeMount(() => applyThemeMode());
</script>
