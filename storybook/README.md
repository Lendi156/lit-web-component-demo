# Cyberpunk UI Storybook

Storybook documents and previews the React wrappers exported by `@edts/cyberpunk-ui`.
Every component has stories for its available variants or states, with controls and
component-specific explanations in the Docs tab.

From the monorepo root:

```sh
npm run dev:storybook
```

The Storybook workspace builds `cyberpunk-ui` before starting, so its package export
is available from a clean checkout. To generate a static Storybook site:

```sh
npm run build:storybook
```
