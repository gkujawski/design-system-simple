import type { Meta, StoryObj } from "@storybook/react"
import Alert from "./Alert"

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Alert component for displaying important messages to users. Supports different variants for various message types.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["info", "success", "warning", "error"],
      description: "Type of alert message",
    },
    dismissible: {
      control: { type: "boolean" },
      description: "Whether the alert can be dismissed",
    },
    theme: {
      control: { type: "select" },
      options: ["light", "dark"],
      description: "Theme variant",
    },
    onDismiss: { action: "dismissed" },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Alert>

export const Info: Story = {
  args: {
    children: "This is an informational message.",
    variant: "info",
  },
}

export const Success: Story = {
  args: {
    children: "Your changes have been saved successfully.",
    variant: "success",
  },
}

export const Warning: Story = {
  args: {
    children: "Please review your information before proceeding.",
    variant: "warning",
  },
}

export const Error: Story = {
  args: {
    children: "An error occurred while processing your request.",
    variant: "error",
  },
}

export const WithTitle: Story = {
  args: {
    title: "Important Notice",
    children: "This alert includes a title to provide additional context.",
    variant: "info",
  },
}

export const Dismissible: Story = {
  args: {
    children: "This alert can be dismissed by clicking the X button.",
    variant: "info",
    dismissible: true,
  },
}

export const LongContent: Story = {
  args: {
    title: "Detailed Information",
    children:
      "This is a longer alert message that demonstrates how the component handles multiple lines of text. It should wrap properly and maintain good readability across different screen sizes.",
    variant: "warning",
    dismissible: true,
  },
}

export const DarkTheme: Story = {
  args: {
    title: "Dark Theme Alert",
    children: "This alert is displayed in dark theme.",
    variant: "success",
    theme: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Alert variant="info" title="Information">
        This is an informational alert.
      </Alert>
      <Alert variant="success" title="Success">
        Operation completed successfully.
      </Alert>
      <Alert variant="warning" title="Warning">
        Please check your input.
      </Alert>
      <Alert variant="error" title="Error">
        Something went wrong.
      </Alert>
    </div>
  ),
}
