import type { Meta, StoryObj } from "@storybook/react"
import Button from "./Button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile button component with multiple variants, sizes, and states. Built with design tokens for consistent theming.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "danger", "warning", "positive"],
      description: "Visual style variant of the button",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Size of the button",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Whether the button should take full width",
    },
    loading: {
      control: { type: "boolean" },
      description: "Whether the button is in loading state",
    },
    theme: {
      control: { type: "select" },
      options: ["light", "dark"],
      description: "Theme variant",
    },
    onClick: { action: "clicked" },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
}

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
}

export const Tertiary: Story = {
  args: {
    children: "Tertiary Button",
    variant: "tertiary",
  },
}

export const Danger: Story = {
  args: {
    children: "Danger Button",
    variant: "danger",
  },
}

export const Warning: Story = {
  args: {
    children: "Warning Button",
    variant: "warning",
  },
}

export const Positive: Story = {
  args: {
    children: "Positive Button",
    variant: "positive",
  },
}

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "small",
  },
}

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "large",
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
}

export const Loading: Story = {
  args: {
    children: "Loading Button",
    loading: true,
  },
}

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
}

export const DarkTheme: Story = {
  args: {
    children: "Dark Theme Button",
    theme: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="positive">Positive</Button>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}
