import Box from '../system/box'

function setHTML({ html, ...props }) {
  return {
    ...props,
    dangerouslySetInnerHTML: { __html: html }
  }
}

const Markdown = Box.as('section')
  .with({ flexDirection: 'column' })
  .with(setHTML)

export default Markdown
