<template>
  <div class="text-right space-x-6">
    <nuxt-link
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
      class="decoration-2 decoration-emerald-400 underline-offset-4 hover:underline dark:decoration-teal-300"
      active-class="underline"
    >
      {{ route.name }}
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import routes from '~/helpers/routes';
</script>
