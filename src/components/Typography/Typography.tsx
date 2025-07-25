import type React from "react"
import { typography, lightTheme, darkTheme } from "../../utils/tokens"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error

export interface TypographyProps {
  /** Text content */
  children: React.ReactNode
  /** Typography variant */
  variant?:
    | "titleHero"
    | "titlePage"
    | "subtitle"
    | "heading"
    | "subheading"
    | "bodyLarge"
    | "bodyBase"
    | "bodySmall"
    | "bodyStrong"
    | "bodyCode"
  /** HTML element to render */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "code"
  /** Text color variant */
  color?: "default" | "secondary" | "tertiary" | "brand" | "positive" | "warning" | "danger" | "disabled"
  /** Text alignment */
  align?: "left" | "center" | "right"
  /** Theme */
  theme?: "light" | "dark"
  /** Custom className */
  className?: string
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "bodyBase",
  as,
  color = "default",
  align = "left",
  theme = "light",
  className,
  ...props
}) => {
  const currentTheme = theme === "light" ? lightTheme : darkTheme

  const getDefaultElement = (): keyof JSX.IntrinsicElements => {
    switch (variant) {
      case "titleHero":
        return "h1"
      case "titlePage":
        return "h1"
      case "subtitle":
        return "h2"
      case "heading":
        return "h3"
      case "subheading":
        return "h4"
      case "bodyCode":
        return "code"
      default:
        return "p"
    }
  }

  const getColorStyles = () => {
    switch (color) {
      case "secondary":
        return { color: currentTheme.text.default.secondary }
      case "tertiary":
        return { color: currentTheme.text.default.tertiary }
      case "brand":
        return { color: currentTheme.text.brand.default }
      case "positive":
        return { color: currentTheme.text.positive.default }
      case "warning":
        return { color: currentTheme.text.warning.default }
      case "danger":
        return { color: currentTheme.text.danger.default }
      case "disabled":
        return { color: currentTheme.text.disabled.default }
      default:
        return { color: currentTheme.text.default.default }
    }
  }

  const Component = as || getDefaultElement()

  const styles = {
    ...typography[variant],
    ...getColorStyles(),
    textAlign: align,
    margin: 0,
  }

  return (
    <Component style={styles} className={className} {...props}>
      {children}
    </Component>
  )
}

export default Typography
