import db from '~/db.json'

export default {
  site: {
    colors: db['gallery.md'].meta.colors
  },

  gallery: {
    index: 0,
    nav: null,
    interval: null,
    pictures: []
  },

  footer: {
    content: db['gallery.md'].body
  }
}
