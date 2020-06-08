const footerGuard = (state) => [state?.footer.content]

const Footer = ({ guard }) => ({
  innerHTML: guard(footerGuard, (v) => v)
})

export default Footer
