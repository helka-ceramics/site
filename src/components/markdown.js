import Box from '../system/box'

const Markdown = Box.as('section').with(({ html, ...props }) => ({
  ...props,
  flexDirection: 'column',
  dangerouslySetInnerHTML: { __html: html }
}))

export default Markdown
