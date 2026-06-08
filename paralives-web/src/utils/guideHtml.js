/** Strip HTML and build URL-safe ids for in-page anchors */
export function slugifyHeading(text) {
  return String(text)
    .replace(/<[^>]+>/g, '')
    .trim()
    .toLowerCase()
    .replace(/&amp;/g, 'and')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export function extractGuideAnchors(html) {
  if (!html) return []
  const anchors = []
  const seen = new Set()
  const re = /<h2[^>]*>(.*?)<\/h2>/gi
  let match
  while ((match = re.exec(html)) !== null) {
    const label = match[1].replace(/<[^>]+>/g, '').trim()
    if (!label) continue
    let id = slugifyHeading(label)
    if (seen.has(id)) {
      let n = 2
      while (seen.has(`${id}-${n}`)) n += 1
      id = `${id}-${n}`
    }
    seen.add(id)
    anchors.push({ id, label })
  }
  return anchors
}

export function injectGuideHeadingIds(html) {
  if (!html) return ''
  const seen = new Set()
  return html.replace(/<h2(\s[^>]*)?>(.*?)<\/h2>/gi, (full, attrs, inner) => {
    const label = inner.replace(/<[^>]+>/g, '').trim()
    if (!label) return full
    if (attrs && /\bid\s*=/.test(attrs)) return full

    let id = slugifyHeading(label)
    if (seen.has(id)) {
      let n = 2
      while (seen.has(`${id}-${n}`)) n += 1
      id = `${id}-${n}`
    }
    seen.add(id)

    const attrStr = attrs ? attrs.trim() : ''
    return `<h2 id="${id}"${attrStr ? ` ${attrStr}` : ''}>${inner}</h2>`
  })
}
