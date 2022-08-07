# Hi

This is my playground and note sharing place. Feel free to [share your note as well](#posting)!

Visit <https://hoahuynh.me>

## Posting and contribution

### Setup

*For nerd: There is only a `client` now, which is built around [Nuxt 3](https://v3.nuxtjs.org/), [Nuxt Content](https://content.nuxtjs.org/), and [Tailwindcss](https://tailwindcss.com/).*

1. Clone and install

    ```bash
    git clone https://github.com/huynhtehoa/random-shit.git

    cd random-shit/client

    pnpm install --shamefully-hoist
    ```

2. Install [`eslint` extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (this is for `vscode`, it varies for different editors)

3. Start the development server on <http://localhost:3000>

    ```bash
    pnpm dev
    ```

### Posting

If there is anything you find interesting and want to share it, you can create a post following below steps:

1. Make sure to branch from the lastest `master`

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

### Contribution

Your feedback is very much appreciated. Feel free to create a discussion or any PRs for improvements

## Roadmap

- [ ] Start!!!???

- [ ] Rename this repo

- [ ] Style

- [ ] Add a post pls?

- [ ] Build a server for Reddit-like comment system (thinking `nodejs`, `postgresql`, `prisma` just to overkill)

- [ ] Docker, Jest test, CI/CD, proper hosting just to over-overkill everything

- [ ] CDN??

- [ ] Something fun
