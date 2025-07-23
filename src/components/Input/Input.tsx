"use client"

import type React from "react"
import { lightTheme, darkTheme, typography, spacing, borderRadius } from "../../utils/tokens"

export interface InputProps {
  /** Input label */
  label?: string
  /** Input placeholder */
  placeholder?: string
  /** Input value */
  value?: string
  /** Input type */
  type?: "text" | "email" | "password" | "number" | "tel" | "url"
  /** Input size */
  size?: "small" | "medium" | "large"
  /** Input state */
  state?: "default" | "error" | "warning" | "success"
  /** Disabled state */
  disabled?: boolean
  /** Required field */
  required?: boolean
  /** Helper text */
  helperText?: string
  /** Error message */
  errorMessage?: string
  /** Full width */
  fullWidth?: boolean
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /** Focus handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  /** Blur handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  /** Theme */
  theme?: "light" | "dark"
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  type = "text",
  size = "medium",
  state = "default",
  disabled = false,
  required = false,
  helperText,
  errorMessage,
  fullWidth = false,
  onChange,
  onFocus,
  onBlur,
  theme = "light",
  ...props
}) => {
  const currentTheme = theme === "light" ? lightTheme : darkTheme

  const getStateStyles = () => {
    switch (state) {
      case "error":
        return {
          borderColor: currentTheme.border.danger.default,
          "&:focus": {
            borderColor: currentTheme.border.danger.default,
            outline: `2px solid ${currentTheme.border.danger.tertiary}`,
          },
        }
      case "warning":
        return {
          borderColor: currentTheme.border.warning.default,
          "&:focus": {
            borderColor: currentTheme.border.warning.default,
            outline: `2px solid ${currentTheme.border.warning.tertiary}`,
          },
        }
      case "success":
        return {
          borderColor: currentTheme.border.positive.default,
          "&:focus": {
            borderColor: currentTheme.border.positive.default,
            outline: `2px solid ${currentTheme.border.positive.tertiary}`,
          },
        }
      default:
        return {
          borderColor: disabled ? currentTheme.border.disabled.default : currentTheme.border.default.default,
          "&:focus": {
            borderColor: currentTheme.border.brand.default,
            outline: `2px solid ${currentTheme.border.brand.tertiary}`,
          },
        }
    }
  }

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return {
          padding: `${spacing[200]} ${spacing[300]}`,
          fontSize: typography.bodySmall.fontSize,
          minHeight: "32px",
        }
      case "large":
        return {
          padding: `${spacing[400]} ${spacing[400]}`,
          fontSize: typography.bodyLarge.fontSize,
          minHeight: "48px",
        }
      default: // medium
        return {
          padding: `${spacing[300]} ${spacing[400]}`,
          fontSize: typography.bodyBase.fontSize,
          minHeight: "40px",
        }
    }
  }

  const inputStyles = {
    fontFamily: typography.bodyBase.fontFamily,
    backgroundColor: disabled ? currentTheme.background.disabled.default : currentTheme.background.default.default,
    color: disabled ? currentTheme.text.disabled.default : currentTheme.text.default.default,
    border: "1px solid",
    borderRadius: borderRadius[200],
    width: fullWidth ? "100%" : "auto",
    transition: "all 0.2s ease-in-out",
    outline: "none",
    "&::placeholder": {
      color: currentTheme.text.default.tertiary,
    },
    ...getSizeStyles(),
    ...getStateStyles(),
  }

  const labelStyles = {
    fontFamily: typography.bodyBase.fontFamily,
    fontSize: typography.bodySmall.fontSize,
    fontWeight: typography.bodyStrong.fontWeight,
    color: currentTheme.text.default.default,
    marginBottom: spacing[100],
    display: "block",
  }

  const helperTextStyles = {
    fontFamily: typography.bodyBase.fontFamily,
    fontSize: typography.bodySmall.fontSize,
    color: state === "error" ? currentTheme.text.danger.default : currentTheme.text.default.secondary,
    marginTop: spacing[100],
  }

  const containerStyles = {
    display: "flex",
    flexDirection: "column" as const,
    width: fullWidth ? "100%" : "auto",
  }

  return (
    <div style={containerStyles}>
      {label && (
        <label style={labelStyles}>
          {label}
          {required && <span style={{ color: currentTheme.text.danger.default }}> *</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        required={required}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        style={inputStyles}
        {...props}
      />
      {(helperText || errorMessage) && (
        <span style={helperTextStyles}>{state === "error" ? errorMessage : helperText}</span>
      )}
    </div>
  )
}

export default Input
