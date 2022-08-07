<template>
  <div class="text-right space-x-6">
    <Nuxt-Link
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
      class="decoration-emerald-400 decoration-2 underline-offset-4 hover:underline"
      active-class="underline"
    >
      {{ route.name }}
    </Nuxt-Link>
  </div>
</template>

<script setup lang="ts">
import routes from '~/helpers/routes';
</script>
