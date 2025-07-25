"use client"

import type React from "react"
import { lightTheme, darkTheme, spacing, borderRadius, shadows } from "../../utils/tokens"

export interface CardProps {
  /** Card content */
  children: React.ReactNode
  /** Card variant */
  variant?: "default" | "elevated" | "outlined"
  /** Card padding */
  padding?: "none" | "small" | "medium" | "large"
  /** Whether card is interactive */
  interactive?: boolean
  /** Click handler for interactive cards */
  onClick?: () => void
  /** Theme */
  theme?: "light" | "dark"
  /** Custom className */
  className?: string
}

const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  padding = "medium",
  interactive = false,
  onClick,
  theme = "light",
  className,
  ...props
}) => {
  const currentTheme = theme === "light" ? lightTheme : darkTheme

  const getVariantStyles = () => {
    switch (variant) {
      case "elevated":
        return {
          backgroundColor: currentTheme.background.default.default,
          border: "none",
          boxShadow: shadows[300],
        }
      case "outlined":
        return {
          backgroundColor: currentTheme.background.default.default,
          border: `1px solid ${currentTheme.border.default.default}`,
          boxShadow: "none",
        }
      default:
        return {
          backgroundColor: currentTheme.background.default.secondary,
          border: "none",
          boxShadow: shadows[100],
        }
    }
  }

  const getPaddingStyles = () => {
    switch (padding) {
      case "none":
        return { padding: 0 }
      case "small":
        return { padding: spacing[400] }
      case "large":
        return { padding: spacing[800] }
      default: // medium
        return { padding: spacing[600] }
    }
  }

  const baseStyles = {
    borderRadius: borderRadius[200],
    transition: "all 0.2s ease-in-out",
    cursor: interactive ? "pointer" : "default",
    outline: "none",
    ...getVariantStyles(),
    ...getPaddingStyles(),
  }

  const interactiveStyles = interactive
    ? {
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: variant === "elevated" ? shadows[400] : shadows[200],
        },
        "&:focus-visible": {
          outline: `2px solid ${currentTheme.border.brand.default}`,
          outlineOffset: "2px",
        },
      }
    : {}

  const combinedStyles = {
    ...baseStyles,
    ...interactiveStyles,
  }

  const Component = interactive ? "button" : "div"

  return (
    <Component onClick={interactive ? onClick : undefined} style={combinedStyles} className={className} {...props}>
      {children}
    </Component>
  )
}

export default Card
