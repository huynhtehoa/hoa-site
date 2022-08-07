<template>
  <div class="text-right space-x-2">
    <Nuxt-Link
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
    >
      {{ route.name }}
    </Nuxt-Link>
  </div>
</template>

<script setup lang="ts">
import routes from '~/helpers/routes';
</script>
