import type React from "react"
import { lightTheme, darkTheme, typography, spacing, borderRadius } from "../../utils/tokens"

export interface BadgeProps {
  /** Badge content */
  children: React.ReactNode
  /** Badge variant */
  variant?: "default" | "brand" | "positive" | "warning" | "danger" | "neutral"
  /** Badge size */
  size?: "small" | "medium" | "large"
  /** Badge style */
  style?: "filled" | "outlined" | "soft"
  /** Theme */
  theme?: "light" | "dark"
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "medium",
  style = "filled",
  theme = "light",
  ...props
}) => {
  const currentTheme = theme === "light" ? lightTheme : darkTheme

  const getVariantStyles = () => {
    const variants = {
      default: {
        filled: {
          backgroundColor: currentTheme.background.default.tertiary,
          color: currentTheme.text.default.default,
          border: "none",
        },
        outlined: {
          backgroundColor: "transparent",
          color: currentTheme.text.default.default,
          border: `1px solid ${currentTheme.border.default.default}`,
        },
        soft: {
          backgroundColor: currentTheme.background.default.secondary,
          color: currentTheme.text.default.default,
          border: "none",
        },
      },
      brand: {
        filled: {
          backgroundColor: currentTheme.background.brand.default,
          color: currentTheme.text.brand.onBrand,
          border: "none",
        },
        outlined: {
          backgroundColor: "transparent",
          color: currentTheme.text.brand.default,
          border: `1px solid ${currentTheme.border.brand.default}`,
        },
        soft: {
          backgroundColor: currentTheme.background.brand.tertiary,
          color: currentTheme.text.brand.default,
          border: "none",
        },
      },
      positive: {
        filled: {
          backgroundColor: currentTheme.background.positive.default,
          color: currentTheme.text.positive.onPositive,
          border: "none",
        },
        outlined: {
          backgroundColor: "transparent",
          color: currentTheme.text.positive.default,
          border: `1px solid ${currentTheme.border.positive.default}`,
        },
        soft: {
          backgroundColor: currentTheme.background.positive.tertiary,
          color: currentTheme.text.positive.default,
          border: "none",
        },
      },
      warning: {
        filled: {
          backgroundColor: currentTheme.background.warning.default,
          color: currentTheme.text.warning.onWarning,
          border: "none",
        },
        outlined: {
          backgroundColor: "transparent",
          color: currentTheme.text.warning.default,
          border: `1px solid ${currentTheme.border.warning.default}`,
        },
        soft: {
          backgroundColor: currentTheme.background.warning.tertiary,
          color: currentTheme.text.warning.default,
          border: "none",
        },
      },
      danger: {
        filled: {
          backgroundColor: currentTheme.background.danger.default,
          color: currentTheme.text.danger.onDanger,
          border: "none",
        },
        outlined: {
          backgroundColor: "transparent",
          color: currentTheme.text.danger.default,
          border: `1px solid ${currentTheme.border.danger.default}`,
        },
        soft: {
          backgroundColor: currentTheme.background.danger.tertiary,
          color: currentTheme.text.danger.default,
          border: "none",
        },
      },
      neutral: {
        filled: {
          backgroundColor: currentTheme.background.default.tertiary,
          color: currentTheme.text.default.default,
          border: "none",
        },
        outlined: {
          backgroundColor: "transparent",
          color: currentTheme.text.default.secondary,
          border: `1px solid ${currentTheme.border.default.secondary}`,
        },
        soft: {
          backgroundColor: currentTheme.background.default.secondary,
          color: currentTheme.text.default.secondary,
          border: "none",
        },
      },
    }

    return variants[variant][style]
  }

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return {
          padding: `${spacing[50]} ${spacing[200]}`,
          fontSize: typography.bodySmall.fontSize,
          fontWeight: typography.bodyStrong.fontWeight,
          minHeight: "20px",
        }
      case "large":
        return {
          padding: `${spacing[200]} ${spacing[400]}`,
          fontSize: typography.bodyBase.fontSize,
          fontWeight: typography.bodyStrong.fontWeight,
          minHeight: "32px",
        }
      default: // medium
        return {
          padding: `${spacing[100]} ${spacing[300]}`,
          fontSize: typography.bodySmall.fontSize,
          fontWeight: typography.bodyStrong.fontWeight,
          minHeight: "24px",
        }
    }
  }

  const baseStyles = {
    fontFamily: typography.bodyBase.fontFamily,
    borderRadius: borderRadius.full,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap" as const,
    textAlign: "center" as const,
    lineHeight: 1,
    ...getSizeStyles(),
    ...getVariantStyles(),
  }

  return (
    <span style={baseStyles} {...props}>
      {children}
    </span>
  )
}

export default Badge
