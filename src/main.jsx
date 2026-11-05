import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

const root = document.getElementById('root')
// Idioma pelo endereço: /en/ = inglês, qualquer outro = português
const lang = window.location.pathname.startsWith('/en') ? 'en' : 'pt'

// No site publicado, o HTML já vem pronto do build (pré-renderizado): só ativamos o React.
// No "npm run dev", a página começa vazia e o React monta tudo.
if (root.hasChildNodes() && !root.innerHTML.includes('<!--app-->')) {
  hydrateRoot(root, <App lang={lang} />)
} else {
  createRoot(root).render(<App lang={lang} />)
}
