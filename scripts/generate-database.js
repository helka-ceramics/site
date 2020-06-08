const pt = require('path')
const fg = require('fast-glob')
const fs = require('fs/promises')
const fm = require('front-matter')
const marked = require('marked')

const DB_FILE = pt.resolve('db.json')

async function parseMD(file) {
  const content = await fs.readFile(file, 'utf-8')
  const { attributes, body } = fm(content)
  return { file, meta: attributes, body: marked(body) }
}

async function main() {
  const db = {}

  const files = await fg('content/**/*.md')
  const content = await Promise.all(files.map(parseMD))

  content.forEach(({ file, meta, body }) => {
    db[pt.relative('content', file)] = { meta, body }
  })

  await fs.writeFile(DB_FILE, JSON.stringify(db, null, '  '))
}

module.exports = main()
