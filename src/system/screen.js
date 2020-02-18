import React, { useState, useEffect } from 'react'
import Box from './box'

// set the size of the component as window.innerHeight after first render
const DynamicHeight = props => {
  const [height, setHeight] = useState('100vh') // 100vh is fucked on mobile

  useEffect(() => {
    let updateHeight = () => setHeight(window.innerHeight + 'px')

    setTimeout(updateHeight, 0)
    window.addEventListener('resize', updateHeight)

    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  return <div {...props} style={{ height }} />
}

const Screen = Box.as(DynamicHeight).with({
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  overflow: 'auto'
})

export default Screen
