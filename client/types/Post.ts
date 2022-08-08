import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface Post extends ParsedContent {
  author: string,
  tags: string,
  date: string,
}

export default Post;
