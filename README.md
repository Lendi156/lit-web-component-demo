# Lit Web Component Demo

This repository brings together the Cyberpunk UI component library, framework
demos, and Storybook in one npm-workspaces monorepo. Run the commands below
from the repository root unless noted otherwise.

## Projects

| Workspace | Purpose |
| --- | --- |
| `cyberpunk-ui` | Shared UI library built with Lit, including React wrappers |
| `react-dashboard` | React dashboard using the shared UI library |
| `vue-dashboard` | Vue dashboard using the shared UI library |
| `angular-dashboard` | Angular dashboard using the shared UI library |
| `storybook` | Storybook documentation and component previews |
| `example` | Standalone examples using Lit |

The dashboards and Storybook consume `@edts/cyberpunk-ui` through npm
workspaces. Build the library before starting a consumer that does not build it
automatically.

## Requirements

- Node.js and npm

The Angular workspace specifies npm `10.8.2` as its package manager. Use a
compatible npm version if working on that workspace.

## Install

Install dependencies for all workspaces from the root:

```sh
npm install
```

Run this after cloning the repository, and again when workspace dependencies
change. You do not need to install each workspace separately.

## Run a project

Build the shared component library first when launching React or Vue from a
clean checkout:

```sh
npm run build:cyberpunk-ui
```

Then start the project you want:

```sh
npm run dev:cyberpunk-ui
npm run dev:react-dashboard
npm run dev:vue-dashboard
npm run dev:angular-dashboard
npm run dev:storybook
npm run dev:example
```

Each command starts only that workspace. Vite-based projects print their local
URL in the terminal. The Angular dashboard runs at `http://localhost:4200/`,
and Storybook runs at `http://localhost:6006/`. Angular and Storybook build the
shared library automatically before starting.

## Build

Build an individual project with its root script:

```sh
npm run build:cyberpunk-ui
npm run build:react-dashboard
npm run build:vue-dashboard
npm run build:angular-dashboard
npm run build:storybook
```

The Angular and Storybook build scripts build the shared UI library first.
There is no root build-all script currently.

## Work on a workspace

Run a workspace's npm script directly from the root with npm's workspace
selector. For example:

```sh
npm run build --workspace=react-dashboard
npm run test --workspace=angular-dashboard
```

For the shared library, its workspace name is `@edts/cyberpunk-ui`:

```sh
npm run build --workspace=@edts/cyberpunk-ui
```

Add dependencies from the root by targeting the workspace, for example:

```sh
npm install some-package --workspace=react-dashboard
```

## Repository layout

Each project keeps its own source files and `package.json`. The root
`package.json` declares the workspaces and provides convenience scripts for
common development and build commands. Generated output and installed
dependencies are excluded from Git by the root `.gitignore`.
