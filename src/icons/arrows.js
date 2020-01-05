const left =
  'M20.922 24.006l11.969-11.97a1.739 1.739 0 00.51-1.24 1.739 1.739 0 00-.51-1.235l-1.047-1.05A1.739 1.739 0 0030.604 8a1.739 1.739 0 00-1.235.51l-14.26 14.252a1.739 1.739 0 00-.51 1.247 1.739 1.739 0 00.51 1.24l14.248 14.237a1.739 1.739 0 001.24.514 1.739 1.739 0 001.236-.514l1.05-1.047a1.754 1.754 0 000-2.48z'

const right =
  'M27.078 24.006L15.11 12.036a1.739 1.739 0 01-.51-1.24 1.739 1.739 0 01.51-1.235l1.047-1.05A1.739 1.739 0 0117.396 8a1.739 1.739 0 011.235.51l14.26 14.252a1.739 1.739 0 01.51 1.247 1.739 1.739 0 01-.51 1.24L18.643 39.486a1.739 1.739 0 01-1.24.514 1.739 1.739 0 01-1.236-.514l-1.05-1.047a1.754 1.754 0 010-2.48z'

const svg = (path, color) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
    <defs>
      <filter id="shadow" x="-25%" y="-25%" width="150%" height="150%">
        <feDropShadow dx="1.5" dy="1.5" stdDeviation="2"/>
      </filter>
    </defs>
    <path fill="${color}" d="${path}" filter="url(#shadow)" />
  </svg>`

// generate a data-uri for the wanted arrow svg
export default function arrow(isLeft, color = 'black') {
  if (typeof window === 'undefined') return null
  return 'data:image/svg+xml;base64,' + btoa(svg(isLeft ? left : right, color))
}
