// npm run build: gera o site em dist/ já com o HTML pronto (carrega rápido e o conteúdo aparece mesmo sem JavaScript).
// 1) build normal do site  2) build do "servidor" só para gerar o HTML  3) uma página por idioma, com o SEO de cada um
//    português em dist/index.html (endereço /)  e  inglês em dist/en/index.html (endereço /en/)
import { build } from 'vite'
import { readFile, writeFile, rm, mkdir } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const raiz = process.cwd()

await build({ logLevel: 'warn' })
await build({ logLevel: 'warn', build: { ssr: 'src/entry-server.jsx', outDir: 'dist-ssr', emptyOutDir: true } })

const { render, idiomas } = await import(pathToFileURL(path.join(raiz, 'dist-ssr/entry-server.js')).href)

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const caminho = (l) => (l === 'pt' ? '/' : `/${l}/`)
const imagem = (l) => (l === 'pt' ? '/og.png' : `/og-${l}.png`)

const modelo = await readFile(path.join(raiz, 'dist/index.html'), 'utf8')
if (!modelo.includes('<!--app-->') || !modelo.includes('<!--seo')) throw new Error('index.html sem os marcadores <!--app--> e <!--seo-->')

const metas = {}
let url = ''
for (const l of idiomas) {
  const r = render(l)
  metas[l] = r.meta
  url = (r.site.url || '').replace(/\/+$/, '')
}

for (const l of idiomas) {
  const { html, jsonld, meta } = render(l)
  const seo = []
  if (url) {
    seo.push(`<link rel="canonical" href="${esc(url + caminho(l))}" />`)
    for (const o of idiomas) seo.push(`<link rel="alternate" hreflang="${metas[o].hreflang}" href="${esc(url + caminho(o))}" />`)
    seo.push(`<link rel="alternate" hreflang="x-default" href="${esc(url + caminho('pt'))}" />`)
    seo.push(`<meta property="og:url" content="${esc(url + caminho(l))}" />`)
    seo.push(`<meta property="og:image" content="${esc(url + imagem(l))}" />`)
    seo.push(`<meta property="og:image:width" content="1200" />`)
    seo.push(`<meta property="og:image:height" content="630" />`)
    seo.push(`<meta name="twitter:image" content="${esc(url + imagem(l))}" />`)
  }
  for (const o of idiomas) if (o !== l) seo.push(`<meta property="og:locale:alternate" content="${metas[o].locale}" />`)
  // "<" escapado para o JSON nunca fechar a tag <script> por engano
  if (jsonld) seo.push(`<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, '\\u003c')}</script>`)

  let pagina = modelo
    .replace('<html lang="pt-BR">', `<html lang="${meta.hreflang}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.titulo)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(meta.descricao)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(meta.titulo)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(meta.descricaoCurta)}$2`)
    .replace(/(<meta property="og:locale" content=")[^"]*(")/, `$1${meta.locale}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(meta.titulo)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(meta.descricaoCurta)}$2`)
    .replace('<!--app-->', () => html)
    .replace(/<!--seo[\s\S]*?-->/, () => seo.join('\n    '))

  const destino = path.join(raiz, 'dist', l === 'pt' ? '' : l, 'index.html')
  await mkdir(path.dirname(destino), { recursive: true })
  await writeFile(destino, pagina)
}

// robots.txt e sitemap.xml
const robots = ['User-agent: *', 'Allow: /']
if (url) {
  robots.push('', `Sitemap: ${url}/sitemap.xml`)
  const hoje = new Date().toISOString().slice(0, 10)
  const alternativas = idiomas.map((o) => `    <xhtml:link rel="alternate" hreflang="${metas[o].hreflang}" href="${esc(url + caminho(o))}"/>`).join('\n')
  const itens = idiomas.map((l) => `  <url>\n    <loc>${esc(url + caminho(l))}</loc>\n${alternativas}\n    <lastmod>${hoje}</lastmod>\n  </url>`).join('\n')
  await writeFile(
    path.join(raiz, 'dist/sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${itens}\n</urlset>\n`,
  )
}
await writeFile(path.join(raiz, 'dist/robots.txt'), robots.join('\n') + '\n')

await rm(path.join(raiz, 'dist-ssr'), { recursive: true, force: true })
console.log('Site gerado em dist/: ' + idiomas.map((l) => caminho(l)).join(' e ') + (url ? ` (${url})` : ' (sem endereço final: preencha site.url em src/data.js)'))
