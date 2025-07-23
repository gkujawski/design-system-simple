import type { Meta, StoryObj } from "@storybook/react"
import Typography from "../components/Typography/Typography"
import Button from "../components/Button/Button"
import Card from "../components/Card/Card"
import Badge from "../components/Badge/Badge"
import { spacing } from "../utils/tokens"

const meta: Meta = {
  title: "Welcome/Design System",
  component: () => (
    <div style={{ padding: spacing[800], maxWidth: "800px", margin: "0 auto" }}>
      <Typography variant="titleHero" align="center" style={{ marginBottom: spacing[600] }}>
        Design System
      </Typography>

      <Typography variant="subtitle" align="center" color="secondary" style={{ marginBottom: spacing[1200] }}>
        A comprehensive design system built with design tokens and Storybook
      </Typography>

      <div style={{ display: "grid", gap: spacing[600], marginBottom: spacing[1200] }}>
        <Card variant="elevated" padding="large">
          <Typography variant="heading" style={{ marginBottom: spacing[400] }}>
            🎨 Design Tokens
          </Typography>
          <Typography variant="bodyBase" style={{ marginBottom: spacing[400] }}>
            Our design system is built on a foundation of design tokens that ensure consistency across all components.
            These tokens define colors, typography, spacing, and other design properties.
          </Typography>
          <div style={{ display: "flex", gap: spacing[200], flexWrap: "wrap" }}>
            <Badge variant="brand" size="small">
              Colors
            </Badge>
            <Badge variant="positive" size="small">
              Typography
            </Badge>
            <Badge variant="warning" size="small">
              Spacing
            </Badge>
            <Badge variant="neutral" size="small">
              Effects
            </Badge>
          </div>
        </Card>

        <Card variant="elevated" padding="large">
          <Typography variant="heading" style={{ marginBottom: spacing[400] }}>
            🧩 Components
          </Typography>
          <Typography variant="bodyBase" style={{ marginBottom: spacing[400] }}>
            All components are built using our design tokens and follow consistent patterns for theming, sizing, and
            interaction states.
          </Typography>
          <div style={{ display: "flex", gap: spacing[300], flexWrap: "wrap" }}>
            <Button size="small">Button</Button>
            <Button variant="secondary" size="small">
              Input
            </Button>
            <Button variant="tertiary" size="small">
              Card
            </Button>
          </div>
        </Card>

        <Card variant="elevated" padding="large">
          <Typography variant="heading" style={{ marginBottom: spacing[400] }}>
            🌙 Dark Mode
          </Typography>
          <Typography variant="bodyBase" style={{ marginBottom: spacing[400] }}>
            Every component supports both light and dark themes out of the box, powered by our semantic color tokens.
          </Typography>
          <div style={{ display: "flex", gap: spacing[300] }}>
            <Button theme="light">Light Theme</Button>
            <Button theme="dark">Dark Theme</Button>
          </div>
        </Card>
      </div>

      <div style={{ textAlign: "center" }}>
        <Typography variant="bodyBase" color="secondary">
          Explore the components in the sidebar to see all available options and configurations.
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Welcome to our comprehensive design system built with design tokens and Storybook.",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
