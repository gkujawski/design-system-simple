"use client"

import type React from "react"
import { lightTheme, darkTheme, typography, spacing, borderRadius, shadows } from "../../utils/tokens"

export interface ButtonProps {
  /** Button contents */
  children: React.ReactNode
  /** Button variant */
  variant?: "primary" | "secondary" | "tertiary" | "danger" | "warning" | "positive"
  /** Button size */
  size?: "small" | "medium" | "large"
  /** Disabled state */
  disabled?: boolean
  /** Full width */
  fullWidth?: boolean
  /** Loading state */
  loading?: boolean
  /** Click handler */
  onClick?: () => void
  /** Button type */
  type?: "button" | "submit" | "reset"
  /** Theme */
  theme?: "light" | "dark"
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  fullWidth = false,
  loading = false,
  onClick,
  type = "button",
  theme = "light",
  ...props
}) => {
  const currentTheme = theme === "light" ? lightTheme : darkTheme

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: disabled ? currentTheme.background.disabled.default : currentTheme.background.brand.default,
          color: disabled ? currentTheme.text.disabled.default : currentTheme.text.brand.onBrand,
          border: `1px solid ${disabled ? currentTheme.border.disabled.default : currentTheme.border.brand.default}`,
          "&:hover:not(:disabled)": {
            backgroundColor: currentTheme.background.brand.hover,
          },
        }
      case "secondary":
        return {
          backgroundColor: disabled
            ? currentTheme.background.disabled.default
            : currentTheme.background.brand.secondary,
          color: disabled ? currentTheme.text.disabled.default : currentTheme.text.brand.default,
          border: `1px solid ${disabled ? currentTheme.border.disabled.default : currentTheme.border.brand.secondary}`,
          "&:hover:not(:disabled)": {
            backgroundColor: currentTheme.background.brand.secondaryHover,
          },
        }
      case "tertiary":
        return {
          backgroundColor: "transparent",
          color: disabled ? currentTheme.text.disabled.default : currentTheme.text.brand.default,
          border: `1px solid ${disabled ? currentTheme.border.disabled.default : currentTheme.border.brand.tertiary}`,
          "&:hover:not(:disabled)": {
            backgroundColor: currentTheme.background.brand.tertiary,
          },
        }
      case "danger":
        return {
          backgroundColor: disabled ? currentTheme.background.disabled.default : currentTheme.background.danger.default,
          color: disabled ? currentTheme.text.disabled.default : currentTheme.text.danger.onDanger,
          border: `1px solid ${disabled ? currentTheme.border.disabled.default : currentTheme.border.danger.default}`,
          "&:hover:not(:disabled)": {
            backgroundColor: currentTheme.background.danger.hover,
          },
        }
      case "warning":
        return {
          backgroundColor: disabled
            ? currentTheme.background.disabled.default
            : currentTheme.background.warning.default,
          color: disabled ? currentTheme.text.disabled.default : currentTheme.text.warning.onWarning,
          border: `1px solid ${disabled ? currentTheme.border.disabled.default : currentTheme.border.warning.default}`,
          "&:hover:not(:disabled)": {
            backgroundColor: currentTheme.background.warning.hover,
          },
        }
      case "positive":
        return {
          backgroundColor: disabled
            ? currentTheme.background.disabled.default
            : currentTheme.background.positive.default,
          color: disabled ? currentTheme.text.disabled.default : currentTheme.text.positive.onPositive,
          border: `1px solid ${disabled ? currentTheme.border.disabled.default : currentTheme.border.positive.default}`,
          "&:hover:not(:disabled)": {
            backgroundColor: currentTheme.background.positive.hover,
          },
        }
      default:
        return {}
    }
  }

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return {
          padding: `${spacing[200]} ${spacing[300]}`,
          fontSize: typography.bodySmall.fontSize,
          fontWeight: typography.bodySmall.fontWeight,
          minHeight: "32px",
        }
      case "large":
        return {
          padding: `${spacing[400]} ${spacing[600]}`,
          fontSize: typography.bodyLarge.fontSize,
          fontWeight: typography.bodyLarge.fontWeight,
          minHeight: "48px",
        }
      default: // medium
        return {
          padding: `${spacing[300]} ${spacing[400]}`,
          fontSize: typography.bodyBase.fontSize,
          fontWeight: typography.bodyBase.fontWeight,
          minHeight: "40px",
        }
    }
  }

  const baseStyles = {
    fontFamily: typography.bodyBase.fontFamily,
    borderRadius: borderRadius[200],
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 0.2s ease-in-out",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing[200],
    textDecoration: "none",
    outline: "none",
    boxShadow: shadows[100],
    width: fullWidth ? "100%" : "auto",
    opacity: disabled ? 0.6 : 1,
    "&:focus-visible": {
      outline: `2px solid ${currentTheme.border.brand.default}`,
      outlineOffset: "2px",
    },
  }

  const combinedStyles = {
    ...baseStyles,
    ...getSizeStyles(),
    ...getVariantStyles(),
  }

  return (
    <button type={type} disabled={disabled || loading} onClick={onClick} style={combinedStyles} {...props}>
      {loading && <span>⏳</span>}
      {children}
    </button>
  )
}

export default Button
