// Design Tokens - Complete token system from design tokens JSON
// =============================================================

// Color Primitives
export const colorPrimitives = {
  // Brand Colors
  brand: {
    100: "#F5F5F5",
    200: "#E6E6E6",
    300: "#D9D9D9",
    400: "#B3B3B3",
    500: "#757575",
    600: "#444444",
    700: "#383838",
    800: "#2C2C2C",
    900: "#1E1E1E",
    1000: "#111111",
  },
  brandB: {
    100: "#F5F5F5",
    200: "#E6E6E6",
    300: "#D9D9D9",
    400: "#B3B3B3",
    500: "#757575",
    600: "#444444",
    700: "#383838",
    800: "#770000",
    900: "#1E1E1E",
    1000: "#111111",
  },
  // Gray Scale
  gray: {
    100: "#F5F5F5",
    200: "#E6E6E6",
    300: "#D9D9D9",
    400: "#B3B3B3",
    500: "#757575",
    600: "#444444",
    700: "#383838",
    800: "#2C2C2C",
    900: "#1E1E1E",
    1000: "#111111",
  },
  // Slate
  slate: {
    100: "#F3F3F3",
    200: "#E3E3E3",
    300: "#CDCDCD",
    400: "#B2B2B2",
    500: "#949494",
    600: "#767676",
    700: "#5A5A5A",
    800: "#434343",
    900: "#303030",
    1000: "#242424",
  },
  // Semantic Colors
  green: {
    100: "#EBFFEE",
    200: "#CFF7D3",
    300: "#AFF4C6",
    400: "#85E0A3",
    500: "#14AE5C",
    600: "#009951",
    700: "#008043",
    800: "#02542D",
    900: "#024023",
    1000: "#062D1B",
  },
  red: {
    100: "#FEE9E7",
    200: "#FDD3D0",
    300: "#FCB3AD",
    400: "#F4776A",
    500: "#EC221F",
    600: "#C00F0C",
    700: "#900B09",
    800: "#690807",
    900: "#4D0B0A",
    1000: "#300603",
  },
  yellow: {
    100: "#FFFBEB",
    200: "#FFF1C2",
    300: "#FFE8A3",
    400: "#E8B931",
    500: "#E5A000",
    600: "#BF6A02",
    700: "#975102",
    800: "#682D03",
    900: "#522504",
    1000: "#401B01",
  },
  pink: {
    100: "#FCF1FD",
    200: "#FAE1FA",
    300: "#F5C0EF",
    400: "#F19EDC",
    500: "#EA3FB8",
    600: "#D732A8",
    700: "#BA2A92",
    800: "#8A226F",
    900: "#57184A",
    1000: "#3F1536",
  },
  // Alpha Colors
  black: {
    100: "#0C0C0D0D",
    200: "#0C0C0D1A",
    300: "#0C0C0D33",
    400: "#0C0C0D66",
    500: "#0C0C0DB3",
    600: "#0C0C0DCC",
    700: "#0C0C0DD9",
    800: "#0C0C0DE6",
    900: "#0C0C0DF2",
    1000: "#0C0C0D",
  },
  white: {
    100: "#FFFFFF0D",
    200: "#FFFFFF1A",
    300: "#FFFFFF33",
    400: "#FFFFFF66",
    500: "#FFFFFFB3",
    600: "#FFFFFFCC",
    700: "#FFFFFFD9",
    800: "#FFFFFFE6",
    900: "#FFFFFFF2",
    1000: "#FFFFFF",
  },
} as const

// Typography Tokens
export const fontFamilies = {
  sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  serif: '"Noto Serif", Georgia, serif',
  mono: '"Roboto Mono", "SF Mono", Monaco, Inconsolata, "Roboto Mono", "Droid Sans Mono", "Liberation Mono", Menlo, Courier, monospace',
} as const

export const fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
} as const

export const fontSizes = {
  scale01: "0.75rem", // 12px
  scale02: "0.875rem", // 14px
  scale03: "1rem", // 16px
  scale04: "1.25rem", // 20px
  scale05: "1.5rem", // 24px
  scale06: "2rem", // 32px
  scale07: "2.5rem", // 40px
  scale08: "3rem", // 48px
  scale09: "4rem", // 64px
  scale10: "4.5rem", // 72px
} as const

export const lineHeights = {
  tight: 1.2,
  normal: 1.4,
  relaxed: 1.6,
  loose: 1.8,
} as const

export const typography = {
  titleHero: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.scale10,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: "-0.03em",
  },
  titlePage: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.scale08,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.scale06,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.tight,
  },
  heading: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.scale05,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.tight,
    letterSpacing: "-0.02em",
  },
  subheading: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.scale04,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.tight,
  },
  bodyLarge: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.scale04,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.normal,
  },
  bodyBase: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.scale03,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.normal,
  },
  bodySmall: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.scale02,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.normal,
  },
  bodyStrong: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.scale03,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
  },
  bodyCode: {
    fontFamily: fontFamilies.mono,
    fontSize: fontSizes.scale03,
    fontWeight: fontWeights.regular,
    lineHeight: 1,
  },
} as const

// Spacing Tokens
export const spacing = {
  0: "0",
  50: "0.125rem", // 2px
  100: "0.25rem", // 4px
  150: "0.375rem", // 6px
  200: "0.5rem", // 8px
  300: "0.75rem", // 12px
  400: "1rem", // 16px
  600: "1.5rem", // 24px
  800: "2rem", // 32px
  1200: "3rem", // 48px
  1600: "4rem", // 64px
  2400: "6rem", // 96px
  4000: "10rem", // 160px
} as const

export const borderRadius = {
  none: "0",
  100: "0.25rem", // 4px
  200: "0.5rem", // 8px
  400: "1rem", // 16px
  full: "9999px",
} as const

export const shadows = {
  none: "none",
  100: "0 1px 4px rgba(12, 12, 13, 0.05)",
  200: "0 1px 4px rgba(12, 12, 13, 0.05), 0 1px 4px rgba(12, 12, 13, 0.1)",
  300: "0 4px 4px -1px rgba(12, 12, 13, 0.05), 0 4px 4px -1px rgba(12, 12, 13, 0.1)",
  400: "0 4px 4px -4px rgba(12, 12, 13, 0.05), 0 16px 32px -4px rgba(12, 12, 13, 0.1)",
  500: "0 4px 4px -4px rgba(12, 12, 13, 0.05), 0 16px 16px -8px rgba(12, 12, 13, 0.1)",
  600: "0 16px 32px -8px rgba(12, 12, 13, 0.4)",
} as const

export const zIndex = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const

// Semantic Color Tokens for Light Theme
export const lightTheme = {
  background: {
    default: {
      default: colorPrimitives.white[1000],
      hover: colorPrimitives.gray[100],
      secondary: colorPrimitives.gray[100],
      secondaryHover: colorPrimitives.gray[200],
      tertiary: colorPrimitives.gray[300],
      tertiaryHover: colorPrimitives.gray[400],
    },
    brand: {
      default: colorPrimitives.brand[800],
      hover: colorPrimitives.brand[900],
      secondary: colorPrimitives.brand[200],
      secondaryHover: colorPrimitives.brand[300],
      tertiary: colorPrimitives.brand[100],
      tertiaryHover: colorPrimitives.brand[200],
    },
    positive: {
      default: colorPrimitives.green[500],
      hover: colorPrimitives.green[600],
      secondary: colorPrimitives.green[200],
      secondaryHover: colorPrimitives.green[300],
      tertiary: colorPrimitives.green[100],
      tertiaryHover: colorPrimitives.green[200],
    },
    warning: {
      default: colorPrimitives.yellow[400],
      hover: colorPrimitives.yellow[500],
      secondary: colorPrimitives.yellow[200],
      secondaryHover: colorPrimitives.yellow[300],
      tertiary: colorPrimitives.yellow[100],
      tertiaryHover: colorPrimitives.yellow[200],
    },
    danger: {
      default: colorPrimitives.red[500],
      hover: colorPrimitives.red[600],
      secondary: colorPrimitives.red[200],
      secondaryHover: colorPrimitives.red[300],
      tertiary: colorPrimitives.red[100],
      tertiaryHover: colorPrimitives.red[200],
    },
    disabled: {
      default: colorPrimitives.brand[300],
    },
  },
  text: {
    default: {
      default: colorPrimitives.gray[900],
      secondary: colorPrimitives.gray[500],
      tertiary: colorPrimitives.gray[400],
    },
    brand: {
      default: colorPrimitives.brand[800],
      secondary: colorPrimitives.brand[600],
      tertiary: colorPrimitives.brand[500],
      onBrand: colorPrimitives.brand[100],
    },
    positive: {
      default: colorPrimitives.green[800],
      secondary: colorPrimitives.green[600],
      tertiary: colorPrimitives.green[500],
      onPositive: colorPrimitives.green[100],
    },
    warning: {
      default: colorPrimitives.yellow[900],
      secondary: colorPrimitives.yellow[700],
      tertiary: colorPrimitives.yellow[600],
      onWarning: colorPrimitives.yellow[1000],
    },
    danger: {
      default: colorPrimitives.red[700],
      secondary: colorPrimitives.red[600],
      tertiary: colorPrimitives.red[500],
      onDanger: colorPrimitives.red[100],
    },
    disabled: {
      default: colorPrimitives.brand[400],
    },
  },
  border: {
    default: {
      default: colorPrimitives.gray[300],
      secondary: colorPrimitives.gray[500],
      tertiary: colorPrimitives.gray[700],
    },
    brand: {
      default: colorPrimitives.brand[800],
      secondary: colorPrimitives.brand[600],
      tertiary: colorPrimitives.brand[500],
    },
    positive: {
      default: colorPrimitives.green[800],
      secondary: colorPrimitives.green[600],
      tertiary: colorPrimitives.green[500],
    },
    warning: {
      default: colorPrimitives.yellow[900],
      secondary: colorPrimitives.yellow[700],
      tertiary: colorPrimitives.yellow[600],
    },
    danger: {
      default: colorPrimitives.red[700],
      secondary: colorPrimitives.red[600],
      tertiary: colorPrimitives.red[500],
    },
    disabled: {
      default: colorPrimitives.brand[400],
    },
  },
} as const

// Dark Theme
export const darkTheme = {
  background: {
    default: {
      default: colorPrimitives.gray[900],
      hover: colorPrimitives.gray[700],
      secondary: colorPrimitives.gray[800],
      secondaryHover: colorPrimitives.gray[900],
      tertiary: colorPrimitives.gray[600],
      tertiaryHover: colorPrimitives.gray[700],
    },
    brand: {
      default: colorPrimitives.brand[100],
      hover: colorPrimitives.brand[300],
      secondary: colorPrimitives.brand[600],
      secondaryHover: colorPrimitives.brand[500],
      tertiary: colorPrimitives.brand[600],
      tertiaryHover: colorPrimitives.brand[800],
    },
    positive: {
      default: colorPrimitives.green[700],
      hover: colorPrimitives.green[800],
      secondary: colorPrimitives.green[800],
      secondaryHover: colorPrimitives.green[900],
      tertiary: colorPrimitives.green[900],
      tertiaryHover: colorPrimitives.green[1000],
    },
    warning: {
      default: colorPrimitives.yellow[400],
      hover: colorPrimitives.yellow[500],
      secondary: colorPrimitives.yellow[800],
      secondaryHover: colorPrimitives.yellow[900],
      tertiary: colorPrimitives.yellow[900],
      tertiaryHover: colorPrimitives.yellow[1000],
    },
    danger: {
      default: colorPrimitives.red[600],
      hover: colorPrimitives.red[700],
      secondary: colorPrimitives.red[800],
      secondaryHover: colorPrimitives.red[900],
      tertiary: colorPrimitives.red[900],
      tertiaryHover: colorPrimitives.red[1000],
    },
    disabled: {
      default: colorPrimitives.brand[700],
    },
  },
  text: {
    default: {
      default: colorPrimitives.white[1000],
      secondary: colorPrimitives.white[500],
      tertiary: colorPrimitives.white[400],
    },
    brand: {
      default: colorPrimitives.brand[100],
      secondary: colorPrimitives.brand[300],
      tertiary: colorPrimitives.brand[400],
      onBrand: colorPrimitives.brand[900],
    },
    positive: {
      default: colorPrimitives.green[200],
      secondary: colorPrimitives.green[400],
      tertiary: colorPrimitives.green[600],
      onPositive: colorPrimitives.green[100],
    },
    warning: {
      default: colorPrimitives.yellow[200],
      secondary: colorPrimitives.yellow[400],
      tertiary: colorPrimitives.yellow[600],
      onWarning: colorPrimitives.yellow[1000],
    },
    danger: {
      default: colorPrimitives.red[200],
      secondary: colorPrimitives.red[400],
      tertiary: colorPrimitives.red[500],
      onDanger: colorPrimitives.red[100],
    },
    disabled: {
      default: colorPrimitives.brand[500],
    },
  },
  border: {
    default: {
      default: colorPrimitives.gray[600],
      secondary: colorPrimitives.gray[500],
      tertiary: colorPrimitives.gray[400],
    },
    brand: {
      default: colorPrimitives.brand[100],
      secondary: colorPrimitives.brand[300],
      tertiary: colorPrimitives.brand[400],
    },
    positive: {
      default: colorPrimitives.green[200],
      secondary: colorPrimitives.green[400],
      tertiary: colorPrimitives.green[600],
    },
    warning: {
      default: colorPrimitives.yellow[200],
      secondary: colorPrimitives.yellow[400],
      tertiary: colorPrimitives.yellow[600],
    },
    danger: {
      default: colorPrimitives.red[200],
      secondary: colorPrimitives.red[400],
      tertiary: colorPrimitives.red[500],
    },
    disabled: {
      default: colorPrimitives.brand[600],
    },
  },
} as const

// Breakpoints
export const breakpoints = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1200px",
} as const

// Export types
export type Theme = "light" | "dark"

// (no additional re-exports needed – all tokens are already defined above)
