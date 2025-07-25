"use client"

import type React from "react"
import { lightTheme, darkTheme, typography, spacing, borderRadius } from "../../utils/tokens"

export interface AlertProps {
  /** Alert content */
  children: React.ReactNode
  /** Alert variant */
  variant?: "info" | "success" | "warning" | "error"
  /** Alert title */
  title?: string
  /** Whether alert can be dismissed */
  dismissible?: boolean
  /** Dismiss handler */
  onDismiss?: () => void
  /** Theme */
  theme?: "light" | "dark"
}

const Alert: React.FC<AlertProps> = ({
  children,
  variant = "info",
  title,
  dismissible = false,
  onDismiss,
  theme = "light",
  ...props
}) => {
  const currentTheme = theme === "light" ? lightTheme : darkTheme

  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return {
          backgroundColor: currentTheme.background.positive.tertiary,
          borderColor: currentTheme.border.positive.tertiary,
          color: currentTheme.text.positive.default,
          iconColor: currentTheme.text.positive.default,
        }
      case "warning":
        return {
          backgroundColor: currentTheme.background.warning.tertiary,
          borderColor: currentTheme.border.warning.tertiary,
          color: currentTheme.text.warning.default,
          iconColor: currentTheme.text.warning.default,
        }
      case "error":
        return {
          backgroundColor: currentTheme.background.danger.tertiary,
          borderColor: currentTheme.border.danger.tertiary,
          color: currentTheme.text.danger.default,
          iconColor: currentTheme.text.danger.default,
        }
      default: // info
        return {
          backgroundColor: currentTheme.background.brand.tertiary,
          borderColor: currentTheme.border.brand.tertiary,
          color: currentTheme.text.brand.default,
          iconColor: currentTheme.text.brand.default,
        }
    }
  }

  const getIcon = () => {
    switch (variant) {
      case "success":
        return "✓"
      case "warning":
        return "⚠"
      case "error":
        return "✕"
      default:
        return "ℹ"
    }
  }

  const variantStyles = getVariantStyles()

  const alertStyles = {
    display: "flex",
    alignItems: "flex-start",
    gap: spacing[300],
    padding: spacing[400],
    borderRadius: borderRadius[200],
    border: `1px solid ${variantStyles.borderColor}`,
    backgroundColor: variantStyles.backgroundColor,
    color: variantStyles.color,
    fontFamily: typography.bodyBase.fontFamily,
    fontSize: typography.bodyBase.fontSize,
    lineHeight: typography.bodyBase.lineHeight,
  }

  const iconStyles = {
    color: variantStyles.iconColor,
    fontSize: "16px",
    fontWeight: "bold",
    flexShrink: 0,
    marginTop: "2px",
  }

  const contentStyles = {
    flex: 1,
  }

  const titleStyles = {
    fontWeight: typography.bodyStrong.fontWeight,
    marginBottom: spacing[100],
    margin: 0,
  }

  const dismissButtonStyles = {
    background: "none",
    border: "none",
    color: variantStyles.color,
    cursor: "pointer",
    padding: spacing[100],
    marginTop: "-4px",
    marginRight: "-4px",
    borderRadius: borderRadius[100],
    fontSize: "16px",
    lineHeight: 1,
    opacity: 0.7,
    transition: "opacity 0.2s ease-in-out",
    "&:hover": {
      opacity: 1,
    },
  }

  return (
    <div style={alertStyles} role="alert" {...props}>
      <span style={iconStyles}>{getIcon()}</span>
      <div style={contentStyles}>
        {title && <div style={titleStyles}>{title}</div>}
        <div>{children}</div>
      </div>
      {dismissible && (
        <button style={dismissButtonStyles} onClick={onDismiss} aria-label="Dismiss alert">
          ×
        </button>
      )}
    </div>
  )
}

export default Alert
