# Post your own sharing

>Some technical steps are required. I am still planning on making posting friendlier

If you have not set up already, be sure to check it [here](https://github.com/huynhtehoa/random-shit#setup).

1. Make sure to branch from the latest `master`

    ```bash
    git pull origin master # or whatever might work for you

    git checkout -b [post_title]
    ```

2. Create a post in `content/posts` directory

      ```bash
      touch content/posts/[post-title.md]
      ```

    - Unfarmiliar with **markdown syntax**? Check [here](https://www.markdownguide.org/basic-syntax)
    - Your images go to `assets/images/posts/[post_title]/[post_title_image_name.png]`. E.g. `my_post_title_thumbnail.png`
    - Feeling extra? Try [Nuxt Content MDC](https://content.nuxtjs.org/guide/writing/mdc)

3. Commit, push, and create a Pull Request
