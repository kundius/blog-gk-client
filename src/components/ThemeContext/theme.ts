import json2mq from 'json2mq'

export interface BreakpointsType {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

export interface MediaQueriesType {
  above: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    xxl: string
  },
  below: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    xxl: string
  },
  mobile: string
  tablet: string
  desktop: string
}

export const breakpoints: BreakpointsType = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1620
}

export const mediaQueries: MediaQueriesType = {
  above: {
    xs: json2mq({ minWidth: breakpoints.xs }),
    sm: json2mq({ minWidth: breakpoints.sm }),
    md: json2mq({ minWidth: breakpoints.md }),
    lg: json2mq({ minWidth: breakpoints.lg }),
    xl: json2mq({ minWidth: breakpoints.xl }),
    xxl: json2mq({ minWidth: breakpoints.xxl })
  },

  below: {
    xs: json2mq({ maxWidth: breakpoints.xs - 1 }),
    sm: json2mq({ maxWidth: breakpoints.sm - 1 }),
    md: json2mq({ maxWidth: breakpoints.md - 1 }),
    lg: json2mq({ maxWidth: breakpoints.lg - 1 }),
    xl: json2mq({ maxWidth: breakpoints.xl - 1 }),
    xxl: json2mq({ maxWidth: breakpoints.xxl - 1 })
  },

  mobile: json2mq({ maxWidth: breakpoints.md - 1 }),
  tablet: json2mq({ minWidth: breakpoints.md, maxWidth: breakpoints.lg }),
  desktop: json2mq({ minWidth: breakpoints.lg })
}

export const theme = {
  defaultTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  media: {
    above: {
      xs: `@media ${mediaQueries.above.xs}`,
      sm: `@media ${mediaQueries.above.sm}`,
      md: `@media ${mediaQueries.above.md}`,
      lg: `@media ${mediaQueries.above.lg}`,
      xl: `@media ${mediaQueries.above.xl}`,
      xxl: `@media ${mediaQueries.above.xxl}`
    },

    below: {
      xs: `@media ${mediaQueries.below.xs}`,
      sm: `@media ${mediaQueries.below.sm}`,
      md: `@media ${mediaQueries.below.md}`,
      lg: `@media ${mediaQueries.below.lg}`,
      xl: `@media ${mediaQueries.below.xl}`,
      xxl: `@media ${mediaQueries.below.xxl}`
    },

    mobile: `@media ${mediaQueries.mobile}`,
    tablet: `@media ${mediaQueries.tablet}`,
    desktop: `@media ${mediaQueries.desktop}`
  }
}
