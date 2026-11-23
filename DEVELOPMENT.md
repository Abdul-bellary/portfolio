# Development Guide

This document provides guidelines and instructions for setting up, developing, and contributing to the **portfolio** project.

---

## 1. Prerequisites

- **Node.js**: `v22.x` (LTS recommended, see [`.nvmrc`](file://.nvmrc))
- **npm**: `v10.x` or later (configured with [`.npmrc`](file://.npmrc))
- **Git**

### Version Management with nvm

If you use `nvm` (Node Version Manager), run:

```bash
nvm use
```

If the specified version is not installed, install it:

```bash
nvm install
```

---

## 2. Getting Started

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   > Running `npm install` automatically initializes Husky Git hooks via the `prepare` script.

---

## 3. Available Scripts

| Command         | Description                                                                                 |
| :-------------- | :------------------------------------------------------------------------------------------ |
| `npm run dev`   | Starts the Next.js development server with Turbopack (defaults to `http://localhost:3000`). |
| `npm run build` | Builds the production-ready optimized application.                                          |
| `npm run start` | Starts the Next.js production server after building.                                        |
| `npm run lint`  | Runs ESLint to check for code quality and syntax issues.                                    |

---

## 4. Git Hooks & Husky

This project uses [Husky](https://typicode.github.io/husky/) to enforce code quality standards before commits are created.

- **Pre-commit Hook**: Automatically runs `npm run lint` prior to committing changes.
- To bypass hooks in an emergency (use sparingly):
  ```bash
  git commit -m "commit message" --no-verify
  ```

---

## 5. Coding Standards & Editor Setup

- **EditorConfig**: Defined in [`.editorconfig`](file://.editorconfig) (2 spaces indentation, UTF-8 charset, LF line endings, trailing whitespace trimmed).
- **Styling**: Tailwind CSS v4 (`@tailwindcss/turbopack`) with styles defined in `app/globals.css`.
- **Framework**: Next.js App Router (located in `app/`).
- **Language**: TypeScript with strict mode enabled.
