import type { Meta, StoryObj } from "@storybook/react"
import Badge from "./Badge"

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile badge component for displaying status, categories, or counts. Available in multiple variants, sizes, and styles.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "brand", "positive", "warning", "danger", "neutral"],
      description: "Color variant of the badge",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Size of the badge",
    },
    style: {
      control: { type: "select" },
      options: ["filled", "outlined", "soft"],
      description: "Visual style of the badge",
    },
    theme: {
      control: { type: "select" },
      options: ["light", "dark"],
      description: "Theme variant",
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: "Default",
  },
}

export const Brand: Story = {
  args: {
    children: "Brand",
    variant: "brand",
  },
}

export const Positive: Story = {
  args: {
    children: "Success",
    variant: "positive",
  },
}

export const Warning: Story = {
  args: {
    children: "Warning",
    variant: "warning",
  },
}

export const Danger: Story = {
  args: {
    children: "Error",
    variant: "danger",
  },
}

export const Neutral: Story = {
  args: {
    children: "Neutral",
    variant: "neutral",
  },
}

export const Small: Story = {
  args: {
    children: "Small",
    size: "small",
  },
}

export const Large: Story = {
  args: {
    children: "Large",
    size: "large",
  },
}

export const Outlined: Story = {
  args: {
    children: "Outlined",
    style: "outlined",
    variant: "brand",
  },
}

export const Soft: Story = {
  args: {
    children: "Soft",
    style: "soft",
    variant: "brand",
  },
}

export const WithNumbers: Story = {
  args: {
    children: "42",
    variant: "brand",
  },
}

export const DarkTheme: Story = {
  args: {
    children: "Dark Theme",
    variant: "brand",
    theme: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="brand">Brand</Badge>
      <Badge variant="positive">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Error</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Badge size="small" variant="brand">
        Small
      </Badge>
      <Badge size="medium" variant="brand">
        Medium
      </Badge>
      <Badge size="large" variant="brand">
        Large
      </Badge>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}

export const AllStyles: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Badge style="filled" variant="brand">
        Filled
      </Badge>
      <Badge style="outlined" variant="brand">
        Outlined
      </Badge>
      <Badge style="soft" variant="brand">
        Soft
      </Badge>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}

export const StatusBadges: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <span>Order Status:</span>
        <Badge variant="positive" size="small">
          Delivered
        </Badge>
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <span>Payment:</span>
        <Badge variant="warning" size="small">
          Pending
        </Badge>
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <span>Subscription:</span>
        <Badge variant="danger" size="small">
          Expired
        </Badge>
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <span>Notifications:</span>
        <Badge variant="brand" size="small">
          3
        </Badge>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}
