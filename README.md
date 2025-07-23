# Design System - Simple

## Purpose

This repository houses a foundational design system, providing a collection of reusable UI components and design tokens to ensure consistency and efficiency across various projects. It aims to streamline development by offering pre-built, accessible, and customizable elements.

## Background

This project was inspired by the process created by Guilherme Gonzales, who [demonstrated](https://www.youtube.com/watch?v=Z-1KrIrnR8g) it in Product Guru's. Our process used the Simple Design System in Figma as a reference, instead of Untitled UI. We exported the tokens using the variables2json plugin to obtain the base JSON. Then, we attached the file to [v0](https://v0.dev/chat/rYgkdBSIfGi) and wrote the following prompt:

```
Use this JSON to update all components and design tokens. I also need you to distribute the component files into specific directories, in a structure that will be used in Storybook (e.g., /src/components). Important: remember that Storybook uses "stories" to showcase the components in different states. You'll need to create .stories.js, .stories.jsx, .stories.ts, or .stories.tsx files alongside your component files.
```

After six debug builds, we achieved the desired structure. Final dependency fixes were made with a few vibe coding sessions in the Gemini CLI. This way, it is ready to be worked on and polished in the Storybook, a frontend workshop for building UI components and pages in isolation. It helps designers develop and share hard-to-reach states and edge cases without needing to run your whole app. 

## Installation

If this design system were published as a package, you would install it like this:

```bash
npm install @your-org/design-system
```

### Development

#### Prerequisites

*   Node.js 18+
*   npm or yarn

#### Installing dependencies

```bash
npm install
```

#### Run the project

```bash
npm run dev
```

#### Run Storybook

```bash
npm run storybook
```

#### Run tests

```bash
npm test
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Clone the repository

```bash
git clone https://github.com/your-username/design-system-simple.git
cd design-system-simple
```

## Project Structure

The project is structured to separate concerns and facilitate easy navigation:

```
.
├── .storybook/             # Storybook configuration files
├── src/                    # Source code for the design system
│   ├── components/         # Reusable UI components
│   │   └── Card/           # Example component directory
│   │       ├── Card.tsx
│   │       └── Card.stories.tsx
│   │   └── etc....
│   ├── stories/            # General Storybook stories (e.g., Welcome)
│   │   └── Welcome.stories.tsx
│   ├── tokens.ts           # Design tokens (typography, colors, etc.)
│   └── utils/              # Utility functions
├── package.json            # Project dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Available Components

This design system currently includes (e.g.) a `Card` component, demonstrating basic usage and styling. More components will be added over time.

*   **Card:** A flexible container for grouping related content, supporting various visual styles and interactive states.

## Design Tokens

Design tokens are managed primarily through `src/tokens.ts` for direct usage in components and integrated with `tailwind.config.ts` for utility-first styling.

*   e.g. **Typography:** Defined in `src/tokens.ts` for consistent text styles (e.g., `heading`, `bodyBase`).

