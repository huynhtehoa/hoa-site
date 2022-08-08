<template>
  <div
    class="text-left align-items center"
    @click="navigateToPost"
  >
    <img
      :src="post.image.src"
      :alt="post.image.alt"
      height="400"
      width="400"
    >
    <div>
      {{ post.title }}
    </div>
    <div>
      {{ post.description }}
    </div>
    <div>
      {{ standardizeDate(post.date) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { navigateTo } from '#imports';
import standardizeDate from '~/helpers/standardizeDate';

import type Post from '~/types/Post';

const props = defineProps<{
  post: Post
}>();

const navigateToPost = () => {
  navigateTo(props.post._path);
};
</script>
