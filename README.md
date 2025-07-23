# Design System - Simple

## Purpose

This repository houses a foundational design system, providing a collection of reusable UI components and design tokens to ensure consistency and efficiency across various projects. It aims to streamline development by offering pre-built, accessible, and customizable elements.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/design-system-simple.git
    cd design-system-simple
    ```
2.  **Install dependencies:**
    ```bash
    npm install --legacy-peer-deps
    ```
    *Note: The `--legacy-peer-deps` flag is used to resolve potential peer dependency conflicts.*

3.  **Run Storybook:**
    ```bash
    npm run storybook
    ```
    This will start the Storybook development server, usually accessible at `http://localhost:6006`.

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
│   ├── stories/            # General Storybook stories (e.g., Welcome)
│   │   └── Welcome.stories.tsx
│   ├── tokens.ts           # Design tokens (typography, colors, etc.)
│   └── utils/              # Utility functions
├── package.json            # Project dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

