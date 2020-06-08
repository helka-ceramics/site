const pt = require('path')
const fs = require('fs/promises')
const sharp = require('sharp')

async function processImage(image) {
  const src = pt.resolve('static', image.slice(1))
  const dest = pt.resolve('dist', image.slice(1))

  await fs.mkdir(pt.dirname(dest), { recursive: true })
  await sharp(src).resize(1000, 1000, { fit: 'inside' }).toFile(dest)
}

async function main() {
  const db = require('../db.json')
  const { pictures, mobilePictures } = db['gallery.md'].meta

  const images = [
    ...pictures.map((p) => p.image),
    ...mobilePictures.map((p) => p.image)
  ]

  images.forEach(processImage)
}

module.exports = main()
