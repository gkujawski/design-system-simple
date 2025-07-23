import type { Meta, StoryObj } from "@storybook/react"
import Typography from "./Typography"

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Typography component for consistent text styling across the application. Supports all typography variants from the design system.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "titleHero",
        "titlePage",
        "subtitle",
        "heading",
        "subheading",
        "bodyLarge",
        "bodyBase",
        "bodySmall",
        "bodyStrong",
        "bodyCode",
      ],
      description: "Typography variant from design system",
    },
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "div", "code"],
      description: "HTML element to render",
    },
    color: {
      control: { type: "select" },
      options: ["default", "secondary", "tertiary", "brand", "positive", "warning", "danger", "disabled"],
      description: "Text color variant",
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Text alignment",
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
type Story = StoryObj<typeof Typography>

export const TitleHero: Story = {
  args: {
    children: "Hero Title",
    variant: "titleHero",
  },
}

export const TitlePage: Story = {
  args: {
    children: "Page Title",
    variant: "titlePage",
  },
}

export const Subtitle: Story = {
  args: {
    children: "This is a subtitle",
    variant: "subtitle",
  },
}

export const Heading: Story = {
  args: {
    children: "Section Heading",
    variant: "heading",
  },
}

export const Subheading: Story = {
  args: {
    children: "Subheading text",
    variant: "subheading",
  },
}

export const BodyLarge: Story = {
  args: {
    children: "This is large body text for emphasis or introductory content.",
    variant: "bodyLarge",
  },
}

export const BodyBase: Story = {
  args: {
    children: "This is the standard body text used for most content.",
    variant: "bodyBase",
  },
}

export const BodySmall: Story = {
  args: {
    children: "This is small body text for captions or secondary information.",
    variant: "bodySmall",
  },
}

export const BodyStrong: Story = {
  args: {
    children: "This is strong body text for emphasis.",
    variant: "bodyStrong",
  },
}

export const BodyCode: Story = {
  args: {
    children: 'const example = "code text";',
    variant: "bodyCode",
  },
}

export const BrandColor: Story = {
  args: {
    children: "This text uses brand color",
    color: "brand",
  },
}

export const PositiveColor: Story = {
  args: {
    children: "This text uses positive color",
    color: "positive",
  },
}

export const WarningColor: Story = {
  args: {
    children: "This text uses warning color",
    color: "warning",
  },
}

export const DangerColor: Story = {
  args: {
    children: "This text uses danger color",
    color: "danger",
  },
}

export const CenterAligned: Story = {
  args: {
    children: "This text is center aligned",
    align: "center",
  },
}

export const DarkTheme: Story = {
  args: {
    children: "This text is in dark theme",
    theme: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Typography variant="titleHero">Hero Title</Typography>
      <Typography variant="titlePage">Page Title</Typography>
      <Typography variant="subtitle">Subtitle</Typography>
      <Typography variant="heading">Heading</Typography>
      <Typography variant="subheading">Subheading</Typography>
      <Typography variant="bodyLarge">Large body text</Typography>
      <Typography variant="bodyBase">Base body text</Typography>
      <Typography variant="bodySmall">Small body text</Typography>
      <Typography variant="bodyStrong">Strong body text</Typography>
      <Typography variant="bodyCode">Code text</Typography>
    </div>
  ),
}

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Typography color="default">Default color text</Typography>
      <Typography color="secondary">Secondary color text</Typography>
      <Typography color="tertiary">Tertiary color text</Typography>
      <Typography color="brand">Brand color text</Typography>
      <Typography color="positive">Positive color text</Typography>
      <Typography color="warning">Warning color text</Typography>
      <Typography color="danger">Danger color text</Typography>
      <Typography color="disabled">Disabled color text</Typography>
    </div>
  ),
}
