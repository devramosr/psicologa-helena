// Usado só no build: gera o HTML de cada idioma (npm run build).
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { profissional, site, conteudo } from './data.js'

export const idiomas = Object.keys(conteudo)

// Dados estruturados (schema.org) para o Google.
// Só entram quando site.url está preenchido, para não publicar os dados fictícios do modelo de demonstração.
function dadosEstruturados(lang) {
  if (!site.url) return null
  const url = site.url.replace(/\/+$/, '')
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: profissional.nome,
    description: conteudo[lang].meta.descricaoCurta,
    url: url + (lang === 'pt' ? '/' : `/${lang}/`),
    image: url + (lang === 'pt' ? '/og.png' : `/og-${lang}.png`),
    telephone: '+' + profissional.whatsapp,
    address: {
      '@type': 'PostalAddress',
      addressLocality: profissional.cidade.split(', ').pop(),
      addressCountry: 'BR',
    },
  }
}

export function render(lang) {
  return { html: renderToString(<App lang={lang} />), jsonld: dadosEstruturados(lang), meta: conteudo[lang].meta, site }
}
