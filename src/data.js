// Troque estes dados para adaptar o site a outro profissional.
// O site tem duas versões: português (endereço /) e inglês (endereço /en/).
//  - Dados iguais nos dois idiomas: `profissional` e `site`.
//  - Textos: dentro de `pt:` e `en:` (em cada tema, passo e pergunta) e em `conteudo.pt` / `conteudo.en`.

export const profissional = {
  nome: 'Helena Duarte',
  crp: 'CRP 06/000000', // use o registro real do cliente
  cidade: 'Pinheiros, São Paulo',
  whatsapp: '5511999999999', // DDI + DDD + número, só dígitos
  whatsappTexto: '(11) 99999-9999',
}

// Endereço final do site (ex.: 'https://helena-duarte.vercel.app'), sem barra no fim.
// Com ele preenchido, o build inclui link canônico, hreflang, imagem de prévia e sitemap.
export const site = { url: '' }

export const temas = [
  { pt: 'Ansiedade e estresse no trabalho', en: 'Anxiety and work stress' },
  { pt: 'Autoestima e autoconhecimento', en: 'Self-esteem and self-knowledge' },
  { pt: 'Relacionamentos e comunicação', en: 'Relationships and communication' },
  { pt: 'Transições de carreira e de vida', en: 'Career and life transitions' },
  { pt: 'Organização da rotina e hábitos', en: 'Routine and habit organization' },
  { pt: 'Orientação para pais e cuidadores', en: 'Guidance for parents and caregivers' },
]

export const passos = [
  {
    pt: { t: 'Conversa inicial', d: 'Um contato de 20 minutos, sem custo, para você conhecer meu jeito de trabalhar e tirar dúvidas.' },
    en: { t: 'Initial conversation', d: 'A free 20-minute chat so you can get to know how I work and ask questions.' },
  },
  {
    pt: { t: 'Primeira sessão', d: 'Entendemos juntos o que trouxe você até aqui e definimos objetivos realistas.' },
    en: { t: 'First session', d: 'Together we understand what brought you here and set realistic goals.' },
  },
  {
    pt: { t: 'Acompanhamento', d: 'Sessões semanais de 50 minutos, online ou presenciais, com revisão periódica do processo.' },
    en: { t: 'Ongoing support', d: 'Weekly 50-minute sessions, online or in person, with regular reviews of the process.' },
  },
]

export const faq = [
  {
    pt: { p: 'As sessões são online ou presenciais?', r: 'Das duas formas. O atendimento online usa uma plataforma segura de vídeo; o presencial acontece no consultório em Pinheiros.' },
    en: { p: 'Are sessions online or in person?', r: 'Both. Online sessions use a secure video platform; in-person sessions take place at the office in Pinheiros.' },
  },
  {
    pt: { p: 'Quanto tempo dura a terapia?', r: 'Depende dos seus objetivos. Reavaliamos o processo juntos a cada poucos meses, e a decisão de continuar é sempre sua.' },
    en: { p: 'How long does therapy last?', r: 'It depends on your goals. We review the process together every few months, and the decision to continue is always yours.' },
  },
  {
    pt: { p: 'Qual o valor da sessão?', r: 'R$ 180 por sessão de 50 minutos. Pagamento por Pix ou cartão, com recibo para reembolso do plano de saúde.' },
    en: { p: 'How much is a session?', r: 'R$ 180 per 50-minute session. Payment by Pix or card, with a receipt for health-plan reimbursement.' },
  },
  {
    pt: { p: 'Como funciona o sigilo?', r: 'Tudo o que é conversado nas sessões é protegido pelo sigilo profissional, conforme o Código de Ética do psicólogo.' },
    en: { p: 'How does confidentiality work?', r: 'Everything discussed in sessions is protected by professional confidentiality, in line with the psychologist’s Code of Ethics.' },
  },
  {
    pt: { p: 'E se eu precisar remarcar?', r: 'Sem problema, avisando com 24 horas de antecedência.' },
    en: { p: 'What if I need to reschedule?', r: 'No problem, as long as you let me know 24 hours in advance.' },
  },
]

export const conteudo = {
  pt: {
    meta: {
      titulo: 'Helena Duarte · Psicóloga clínica em Pinheiros, São Paulo',
      descricao: 'Psicoterapia individual para adultos, online e presencial em Pinheiros, São Paulo. Agende uma conversa inicial pelo WhatsApp. Site de demonstração com dados fictícios.',
      descricaoCurta: 'Um espaço de escuta para organizar o que pesa. Site de demonstração.',
      locale: 'pt_BR',
      hreflang: 'pt-BR',
    },
    ui: {
      navAria: 'Principal',
      idiomaAria: 'Idioma',
      nav: { temas: 'Temas', como: 'Como funciona', duvidas: 'Dúvidas' },
      titulo: 'Psicóloga clínica',
      abordagem: 'Terapia Cognitivo-Comportamental',
      heroTitulo: 'Um espaço de escuta para organizar o que pesa.',
      heroLead: 'Psicoterapia individual para adultos, com a abordagem de {abordagem}. Atendimento online e presencial em {cidade}.',
      btnAgendar: 'Agendar conversa inicial',
      nota: 'A conversa inicial de 20 minutos não tem custo.',
      legenda: 'Ilustração. Troque pela foto do profissional.',
      temasTitulo: 'Com o que posso ajudar',
      comoTitulo: 'Como funciona',
      faqTitulo: 'Perguntas frequentes',
      chamadaTitulo: 'Pronta para o primeiro passo?',
      chamadaTexto: 'Responderei sua mensagem em até um dia útil.',
      btnWhats: 'Chamar no WhatsApp',
      msg: 'Olá, Helena! Gostaria de agendar a conversa inicial. Quais horários você tem disponíveis?',
      demo: 'Site de demonstração com dados fictícios.',
    },
  },
  en: {
    meta: {
      titulo: 'Helena Duarte · Clinical psychologist in Pinheiros, São Paulo',
      descricao: 'Individual psychotherapy for adults, online and in person in Pinheiros, São Paulo. Book an initial conversation on WhatsApp. Demo site with fictional data.',
      descricaoCurta: 'A space to listen and sort out what weighs on you. Demo site.',
      locale: 'en_US',
      hreflang: 'en',
    },
    ui: {
      navAria: 'Main',
      idiomaAria: 'Language',
      nav: { temas: 'Topics', como: 'How it works', duvidas: 'FAQ' },
      titulo: 'Clinical psychologist',
      abordagem: 'Cognitive Behavioral Therapy',
      heroTitulo: 'A space to listen and sort out what weighs on you.',
      heroLead: 'Individual psychotherapy for adults, using {abordagem}. Online and in-person sessions in {cidade}.',
      btnAgendar: 'Book an initial conversation',
      nota: 'The 20-minute initial conversation is free of charge.',
      legenda: 'Illustration. Replace it with the professional’s photo.',
      temasTitulo: 'What I can help with',
      comoTitulo: 'How it works',
      faqTitulo: 'Frequently asked questions',
      chamadaTitulo: 'Ready for the first step?',
      chamadaTexto: 'I will reply to your message within one business day.',
      btnWhats: 'Chat on WhatsApp',
      msg: 'Hi, Helena! I would like to book the initial conversation. Which times do you have available?',
      demo: 'Demo site with fictional data.',
    },
  },
}
