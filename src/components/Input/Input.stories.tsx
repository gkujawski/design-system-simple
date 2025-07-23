import type { Meta, StoryObj } from "@storybook/react"
import Input from "./Input"

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible input component with various states, sizes, and validation support. Built with design tokens for consistent theming.",
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
      description: "HTML input type",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Size of the input",
    },
    state: {
      control: { type: "select" },
      options: ["default", "error", "warning", "success"],
      description: "Visual state of the input",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the input is disabled",
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the input is required",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Whether the input should take full width",
    },
    theme: {
      control: { type: "select" },
      options: ["light", "dark"],
      description: "Theme variant",
    },
    onChange: { action: "changed" },
    onFocus: { action: "focused" },
    onBlur: { action: "blurred" },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
}

export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    type: "email",
  },
}

export const Required: Story = {
  args: {
    label: "Full Name",
    placeholder: "Enter your full name",
    required: true,
  },
}

export const WithHelperText: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    helperText: "Must be at least 8 characters long",
  },
}

export const ErrorState: Story = {
  args: {
    label: "Email",
    type: "email",
    value: "invalid-email",
    state: "error",
    errorMessage: "Please enter a valid email address",
  },
}

export const WarningState: Story = {
  args: {
    label: "Username",
    value: "user123",
    state: "warning",
    helperText: "Username should not contain numbers",
  },
}

export const SuccessState: Story = {
  args: {
    label: "Email",
    type: "email",
    value: "user@example.com",
    state: "success",
    helperText: "Email is available",
  },
}

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    value: "Cannot edit this",
    disabled: true,
  },
}

export const Small: Story = {
  args: {
    label: "Small Input",
    placeholder: "Small size",
    size: "small",
  },
}

export const Large: Story = {
  args: {
    label: "Large Input",
    placeholder: "Large size",
    size: "large",
  },
}

export const FullWidth: Story = {
  args: {
    label: "Full Width Input",
    placeholder: "This input takes full width",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
}

export const DarkTheme: Story = {
  args: {
    label: "Dark Theme Input",
    placeholder: "Enter text...",
    theme: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "300px" }}>
      <Input label="Small" placeholder="Small input" size="small" />
      <Input label="Medium" placeholder="Medium input" size="medium" />
      <Input label="Large" placeholder="Large input" size="large" />
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "300px" }}>
      <Input label="Default" placeholder="Default state" />
      <Input label="Error" value="invalid@" state="error" errorMessage="Invalid email format" />
      <Input label="Warning" value="test123" state="warning" helperText="Avoid numbers in username" />
      <Input label="Success" value="valid@email.com" state="success" helperText="Email is available" />
      <Input label="Disabled" value="Cannot edit" disabled />
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}
