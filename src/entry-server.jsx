// Usado só no build: gera o HTML de cada idioma (npm run build).
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { site, conteudo } from './data.js'

export const idiomas = Object.keys(conteudo)

export function render(lang) {
  return { html: renderToString(<App lang={lang} />), jsonld: null, meta: conteudo[lang].meta, site }
}
