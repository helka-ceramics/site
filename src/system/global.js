import React from 'react'
import { Global as EmotionGlobal } from '@emotion/core'

const styles = {
  'html, body': {
    margin: 0,
    padding: 0
  },

  'html *': {
    boxSizing: 'border-box'
  }
}

const Global = () => <EmotionGlobal styles={styles} />

export default Global
