import React from 'react'
import { ThemeContext } from '@emotion/core'

export const spacing = 8

export const breakpoints = {}

export const sizes = {
  S: 12
}

export const Theme = props => (
  <ThemeContext.Provider {...props} value={{ spacing, breakpoints, sizes }} />
)

export default Theme
