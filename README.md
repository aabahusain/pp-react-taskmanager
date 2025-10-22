# PP Task Manager

Lightweight React + TypeScript project created as a learning playground to explore React hooks, Context API, and basic component patterns.

## Goals
- Learn and practice React hooks (useState, useEffect, custom hooks).
- Learn Context API for global state (theme).
- Build simple reusable components for tasks input and list.
- Familiarize with TypeScript types in a React app.

## What you'll find here
- App entry and provider wiring: [src/main.tsx](src/main.tsx) which mounts the app and wraps it with the [`ThemeProvider`](src/context/ThemeContext.tsx).
- Theme context implementation and hook: [`ThemeProvider`](src/context/ThemeContext.tsx) and [`useTheme`](src/context/ThemeContext.tsx).
- Theme types: [`ThemeContextType`](src/types/theme.ts) and `themeType`: [src/types/theme.ts](src/types/theme.ts).
- Core UI: [src/App.tsx](src/App.tsx) using the [`useTheme`](src/context/ThemeContext.tsx) hook.
- Task logic: custom hook [`useTasks`](src/hooks/useTasks.tsx).
- Small components: [src/components/TaskInput.tsx](src/components/TaskInput.tsx) and [src/components/TaskList.tsx](src/components/TaskList.tsx).
- Styling: [src/App.css](src/App.css) and [src/index.css](src/index.css).

## Tech stack
- React + TypeScript
- Vite (see [vite.config.ts](vite.config.ts))
- ESLint configuration in the repo root

## Project structure (key files)
- [src/main.tsx](src/main.tsx) — app bootstrap and provider setup (uses [`ThemeProvider`](src/context/ThemeContext.tsx))
- [src/App.tsx](src/App.tsx) — main UI that consumes [`useTheme`](src/context/ThemeContext.tsx)
- [src/context/ThemeContext.tsx](src/context/ThemeContext.tsx) — Context, provider, and `useTheme` hook
- [src/types/theme.ts](src/types/theme.ts) — theme-related TypeScript types
- [src/hooks/useTasks.tsx](src/hooks/useTasks.tsx) — custom hook for task state
- [src/components/TaskInput.tsx](src/components/TaskInput.tsx) — task creation UI
- [src/components/TaskList.tsx](src/components/TaskList.tsx) — task listing UI

## How to run
Install dependencies and run the dev server:

```sh
npm install
npm run dev
```

Open the app at the address printed by Vite.

## Recommended learning steps
1. Read [src/context/ThemeContext.tsx](src/context/ThemeContext.tsx) to understand how context and custom hooks work (`useTheme`).
2. Inspect [src/hooks/useTasks.tsx](src/hooks/useTasks.tsx) to see a pattern for encapsulating task state and effects.
3. Modify [src/components/TaskInput.tsx](src/components/TaskInput.tsx) and [src/components/TaskList.tsx](src/components/TaskList.tsx) to add features (edit, delete, persist).
4. Experiment with TypeScript types in [src/types/theme.ts](src/types/theme.ts) and extend them for tasks and users.

## Notes
- The app is intentionally small — focus is on experimenting and learning.
- Theme state is persisted via localStorage in the theme context (see [src/context/ThemeContext.tsx](src/context/ThemeContext.tsx)).

## References
- App entry: [src/main.tsx](src/main.tsx)
- Main UI: [src/App.tsx](src/App.tsx)
- Theme exports: [`useTheme`](src/context/ThemeContext.tsx), [`ThemeProvider`](src/context/ThemeContext.tsx)
- Types: [src/types/theme.ts](src/types/theme.ts)
- Hooks & components: [src/hooks/useTasks.tsx](src/hooks/useTasks.tsx), [src/components/TaskInput.tsx](src/components/TaskInput.tsx), [src/components/TaskList.tsx](src/components/TaskList.tsx)

Have fun learning and iterating!