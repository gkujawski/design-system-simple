"use client"

import type { Meta, StoryObj } from "@storybook/react"
import Card from "./Card"
import { typography } from "../../tokens"

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible card component for grouping related content. Supports different variants, padding options, and interactive states.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "elevated", "outlined"],
      description: "Visual variant of the card",
    },
    padding: {
      control: { type: "select" },
      options: ["none", "small", "medium", "large"],
      description: "Internal padding of the card",
    },
    interactive: {
      control: { type: "boolean" },
      description: "Whether the card is clickable and shows hover effects",
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
type Story = StoryObj<typeof Card>

const SampleContent = () => (
  <div>
    <h3 style={{ margin: "0 0 8px 0", ...typography.heading }}>Card Title</h3>
    <p style={{ margin: "0 0 16px 0", ...typography.bodyBase }}>
      This is some sample content inside the card. It demonstrates how the card component works with different content.
    </p>
    <div style={{ display: "flex", gap: "8px" }}>
      <span
        style={{
          padding: "4px 8px",
          backgroundColor: "#e6f3ff",
          borderRadius: "4px",
          fontSize: "12px",
          color: "#0066cc",
        }}
      >
        Tag 1
      </span>
      <span
        style={{
          padding: "4px 8px",
          backgroundColor: "#f0f9ff",
          borderRadius: "4px",
          fontSize: "12px",
          color: "#0891b2",
        }}
      >
        Tag 2
      </span>
    </div>
  </div>
)

export const Default: Story = {
  args: {
    children: <SampleContent />,
  },
}

export const Elevated: Story = {
  args: {
    children: <SampleContent />,
    variant: "elevated",
  },
}

export const Outlined: Story = {
  args: {
    children: <SampleContent />,
    variant: "outlined",
  },
}

export const Interactive: Story = {
  args: {
    children: <SampleContent />,
    interactive: true,
  },
}

export const SmallPadding: Story = {
  args: {
    children: <SampleContent />,
    padding: "small",
  },
}

export const LargePadding: Story = {
  args: {
    children: <SampleContent />,
    padding: "large",
  },
}

export const NoPadding: Story = {
  args: {
    children: (
      <div style={{ padding: "24px" }}>
        <SampleContent />
      </div>
    ),
    padding: "none",
  },
}

export const DarkTheme: Story = {
  args: {
    children: <SampleContent />,
    theme: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Card variant="default">
        <div style={{ width: "200px" }}>
          <h4 style={{ margin: "0 0 8px 0" }}>Default</h4>
          <p style={{ margin: 0, fontSize: "14px" }}>Default card variant</p>
        </div>
      </Card>
      <Card variant="elevated">
        <div style={{ width: "200px" }}>
          <h4 style={{ margin: "0 0 8px 0" }}>Elevated</h4>
          <p style={{ margin: 0, fontSize: "14px" }}>Elevated card variant</p>
        </div>
      </Card>
      <Card variant="outlined">
        <div style={{ width: "200px" }}>
          <h4 style={{ margin: "0 0 8px 0" }}>Outlined</h4>
          <p style={{ margin: 0, fontSize: "14px" }}>Outlined card variant</p>
        </div>
      </Card>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}

export const InteractiveCards: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Card variant="elevated" interactive onClick={() => alert("Card 1 clicked!")}>
        <div style={{ width: "200px" }}>
          <h4 style={{ margin: "0 0 8px 0" }}>Interactive Card 1</h4>
          <p style={{ margin: 0, fontSize: "14px" }}>Click me to see the interaction</p>
        </div>
      </Card>
      <Card variant="outlined" interactive onClick={() => alert("Card 2 clicked!")}>
        <div style={{ width: "200px" }}>
          <h4 style={{ margin: "0 0 8px 0" }}>Interactive Card 2</h4>
          <p style={{ margin: 0, fontSize: "14px" }}>I'm also clickable!</p>
        </div>
      </Card>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}
