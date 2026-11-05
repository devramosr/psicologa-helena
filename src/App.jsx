import { profissional as p, temas, passos, faq, conteudo } from './data.js'

const wa = (texto) => `https://wa.me/${p.whatsapp}?text=${encodeURIComponent(texto)}`

// Seletor de idioma: cada idioma é uma página própria (/ e /en/)
function Idiomas({ lang, rotulo }) {
  return (
    <nav className="idioma" aria-label={rotulo}>
      <a href="/" lang="pt-BR" hrefLang="pt-BR" title="Português" aria-current={lang === 'pt' ? 'true' : undefined}>PT</a>
      <a href="/en/" lang="en" hrefLang="en" title="English" aria-current={lang === 'en' ? 'true' : undefined}>EN</a>
    </nav>
  )
}

export default function App({ lang = 'pt' }) {
  const c = conteudo[lang] || conteudo.pt
  const ui = c.ui

  return (
    <>
      <header className="topo">
        <div className="container topo-in">
          <a className="marca" href="#inicio">{p.nome}</a>
          <div className="topo-direita">
            <nav aria-label={ui.navAria}>
              <a href="#temas">{ui.nav.temas}</a>
              <a href="#como-funciona">{ui.nav.como}</a>
              <a href="#duvidas">{ui.nav.duvidas}</a>
            </nav>
            <Idiomas lang={lang} rotulo={ui.idiomaAria} />
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">{ui.titulo} · {p.crp}</p>
              <h1>{ui.heroTitulo}</h1>
              <p className="lead">{ui.heroLead.replace('{abordagem}', ui.abordagem).replace('{cidade}', p.cidade)}</p>
              <a className="btn btn-primario" href={wa(ui.msg)} target="_blank" rel="noreferrer">
                {ui.btnAgendar}
              </a>
              <p className="nota">{ui.nota}</p>
            </div>
            <div className="retrato" aria-hidden="true">
              <svg viewBox="0 0 240 280" role="img" aria-label="">
                <circle cx="120" cy="140" r="112" fill="var(--folha)" />
                <circle cx="120" cy="108" r="38" fill="var(--areia)" />
                <path d="M46 250c6-52 38-80 74-80s68 28 74 80z" fill="var(--petroleo)" />
                <path d="M170 60c20 6 34 22 38 44-22-2-38-14-38-44z" fill="var(--petroleo)" opacity="0.35" />
                <path d="M52 70c-16 8-24 22-26 40 20-4 30-16 26-40z" fill="var(--petroleo)" opacity="0.35" />
              </svg>
              <span className="legenda">{ui.legenda}</span>
            </div>
          </div>
        </section>

        <section className="secao" id="temas">
          <div className="container">
            <h2>{ui.temasTitulo}</h2>
            <ul className="temas">
              {temas.map((t) => <li key={t.pt}>{t[lang]}</li>)}
            </ul>
          </div>
        </section>

        <section className="secao fundo" id="como-funciona">
          <div className="container">
            <h2>{ui.comoTitulo}</h2>
            <ol className="passos">
              {passos.map((s, i) => (
                <li key={s.pt.t}>
                  <span className="num">{i + 1}</span>
                  <h3>{s[lang].t}</h3>
                  <p>{s[lang].d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="secao" id="duvidas">
          <div className="container estreito">
            <h2>{ui.faqTitulo}</h2>
            {faq.map((f) => (
              <details key={f.pt.p}>
                <summary>{f[lang].p}</summary>
                <p>{f[lang].r}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="chamada">
          <div className="container chamada-in">
            <h2>{ui.chamadaTitulo}</h2>
            <p>{ui.chamadaTexto}</p>
            <a className="btn btn-claro" href={wa(ui.msg)} target="_blank" rel="noreferrer">
              {ui.btnWhats}
            </a>
            <p className="tel">{p.whatsappTexto}</p>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="container">
          <span>{p.nome} · {ui.titulo} · {p.crp}</span>
          <span>{ui.demo}</span>
        </div>
      </footer>
    </>
  )
}
