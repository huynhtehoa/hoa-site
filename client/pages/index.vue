<template>
  <div class="pt-48">
    <h1>Hi,</h1>
    <div class="pt-8">
      I'm <b>Hoa</b>, casually called <link-tag text="Bông" url="https://translate.google.com/?sl=vi&tl=en&text=hoa&op=translate&hl=en" />.
      <br>
      Welcome to my place. This is where I jot down any random ideas, stories, and knowledge that I find interesting.
      <br>
      <br>
      You can get to know more about me through
      <span
        v-for="({ name, url }, index) in socialMedias"
        :key="name"
      >
        <span v-if="index !== socialMedias.length - 1">
          <link-tag :text="name" :url="url" />,
        </span>
        <span v-else>
          and <link-tag :text="name" :url="url" />.
        </span>
      </span>
      <br>
      Have something interesting to share? Post your own
      <link-tag
        text="here"
        url="https://github.com/huynhtehoa/random-shit#posting-and-contribution"
      />.
    </div>
  </div>
</template>

<script setup lang="ts">
const socialMedias = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/huynhtehoa/',
  },
  {
    name: 'Github',
    url: 'https://github.com/huynhtehoa/',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/huynhtehoa/',
  },
];
</script>
