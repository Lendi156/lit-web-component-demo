# Angular Cyberpunk Dashboard

Angular implementation of the Cyberpunk UI dashboard, using the shared
`@edts/cyberpunk-ui` custom elements.

From the monorepo root, start the app with:

```bash
npm run dev:angular-dashboard
```

The dashboard is served at `http://localhost:4200/`. Build the UI package and
Angular app for production with:

```bash
npm run build:angular-dashboard
```

The app registers the UI package in `src/main.ts` and configures Angular to
recognize its `cyberpunk-*` custom elements. The modal and drawer are bound to
Angular component state and close from their close button, Escape key, or
backdrop.
