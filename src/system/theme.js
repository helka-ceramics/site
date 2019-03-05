import React from 'react'
import { ThemeContext } from '@emotion/core'

export const spacing = 8

export const breakpoints = {}

export const colors = {}

export default props => (
  <ThemeContext.Provider {...props} value={{ spacing, breakpoints, colors }} />
)
