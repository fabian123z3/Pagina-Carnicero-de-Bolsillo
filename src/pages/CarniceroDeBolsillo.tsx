import { useState, type ReactNode } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Beef,
  BookOpen,
  Check,
  ChefHat,
  ChevronDown,
  Flame,
  Gamepad2,
  Heart,
  Menu,
  MessageCircle,
  Star,
  Search,
  X,
  Zap,
} from 'lucide-react'
import { DemoInteractivaAplicacion } from '@/components/DemoInteractivaAplicacion'

const urlGooglePlay = 'https://play.google.com/store/apps/details?id=com.carnicerodebolsillo.app&hl=es_CL'
const urlAplicacionWeb = 'https://carnicero-de-bolsillo-app-kohl.vercel.app'

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`brand-lockup ${inverse ? 'inverse' : ''}`} href="#inicio" aria-label="Carnicero de Bolsillo, inicio">
      <span className="brand-mark"><ChefHat size={22} strokeWidth={1.8} /></span>
      <span className="brand-name">Carnicero <i>de Bolsillo</i></span>
    </a>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    ['La experiencia', '#experiencia'],
    ['Explora cortes', '#cortes'],
    ['Aprende jugando', '#juegos'],
  ]

  return (
    <header className="site-header">
      <nav className="site-container nav-inner" aria-label="Navegación principal">
        <Brand />
        <div className="nav-links">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <div className="nav-actions">
          <a className="nav-play" href={urlGooglePlay} target="_blank" rel="noreferrer">Google Play <ArrowUpRight size={15} /></a>
          <a className="button button-dark button-small" href={urlAplicacionWeb} target="_blank" rel="noreferrer">Probar la app <ArrowRight size={15} /></a>
        </div>
        <button className="menu-toggle" type="button" aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
        {isOpen && <div className="mobile-menu">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setIsOpen(false)}>{label}</a>)}
          <a href={urlGooglePlay} target="_blank" rel="noreferrer">Descargar en Google Play <ArrowUpRight size={15} /></a>
          <a className="button button-dark" href={urlAplicacionWeb} target="_blank" rel="noreferrer">Abrir app web <ArrowRight size={16} /></a>
        </div>}
      </nav>
    </header>
  )
}

function HeroPreview() {
  const [active, setActive] = useState(0)
  const slides = [
    { name: 'Abastero', detail: 'Ideal para la parrilla', icon: <Flame size={15} /> },
    { name: 'Lomo vetado', detail: 'Jugoso y lleno de sabor', icon: <Star size={15} /> },
    { name: 'Plateada', detail: 'Perfecta para una cocción lenta', icon: <ChefHat size={15} /> },
  ]

  return (
    <div className="hero-visual" aria-label="Vista previa de la aplicación">
      <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      <div className="hero-plate"><img src="/images/platillo.png" alt="Carne mechada con verduras, ilustración de la app" /></div>
      <div className="hero-note note-cut"><span className="note-icon"><Beef size={17} /></span><span><small>HOY EN LA APP</small><strong>{slides[active].name}</strong></span><span className="note-chevron">↗</span></div>
      <div className="hero-note note-tip"><span className="note-icon note-icon-lime"><Zap size={16} /></span><span><small>CONSEJO RÁPIDO</small><strong>{slides[active].detail}</strong></span></div>
      <div className="hero-demo-controls" aria-label="Probar recomendaciones">
        {slides.map((slide, index) => <button key={slide.name} onClick={() => setActive(index)} className={active === index ? 'selected' : ''} aria-label={`Mostrar ${slide.name}`}>{slide.icon}<span>{slide.name}</span></button>)}
      </div>
      <div className="hero-caption"><span className="caption-spark">✳</span> Hecho para disfrutar mejor cada corte</div>
    </div>
  )
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow"><span />{children}</p>
}

export default function CarniceroDeBolsillo() {
  return (
    <div className="site-shell" id="inicio">
      <div className="announcement"><span>CONOCER LA CARNE TAMBIÉN PUEDE SER SIMPLE</span><a href="#demo">Mira cómo funciona <ArrowDown size={13} /></a></div>
      <Navbar />

      <main>
        <section className="hero-section">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="site-container hero-layout">
            <div className="hero-copy">
              <SectionEyebrow>Tu guía para elegir y cocinar mejor</SectionEyebrow>
              <h1>El buen corte.<br /><em>Todo lo demás,</em><br />en tu bolsillo.</h1>
              <p className="hero-lede">Descubre qué corte elegir, cómo prepararlo y por qué cada uno tiene su momento. Una guía práctica, hecha para la cocina de todos los días.</p>
              <div className="hero-actions">
                <a className="button button-lime" href={urlAplicacionWeb} target="_blank" rel="noreferrer">Explorar la app web <ArrowRight size={17} /></a>
                <a className="button button-ghost" href={urlGooglePlay} target="_blank" rel="noreferrer"><span className="play-triangle">▶</span> Disponible en Google Play</a>
              </div>
              <div className="hero-social-proof"><div className="proof-avatars"><span>🥩</span><span>🍳</span><span>🔥</span></div><div><strong>Aprende a tu ritmo</strong><small>En el teléfono, tablet o computador</small></div><span className="proof-divider" /><span className="proof-rating"><Star size={14} fill="currentColor" /> Para curiosos y amantes de la cocina</span></div>
            </div>
            <HeroPreview />
          </div>
          <div className="hero-bottomline"><span>01 — CORTES</span><span>02 — RECETAS</span><span>03 — APRENDIZAJE</span><a href="#experiencia">DESCUBRE LA EXPERIENCIA <ArrowDown size={13} /></a></div>
        </section>

        <section className="intro-strip" id="experiencia">
          <div className="site-container intro-strip-inner">
            <p>DE LA CARNICERÍA<br />A TU COCINA.</p>
            <h2>Menos dudas frente al mesón.<br /><em>Más confianza frente a la sartén.</em></h2>
            <span className="intro-stamp"><ChefHat size={20} /> SABER<br />CAMBIA TODO</span>
          </div>
        </section>

        <DemoInteractivaAplicacion />

        <section className="cuts-section section-pad" id="cortes">
          <div className="site-container cuts-layout">
            <div className="cuts-copy">
              <SectionEyebrow>UNA GUÍA CON SABOR LOCAL</SectionEyebrow>
              <h2>Conoce el corte.<br /><em>Elige con confianza.</em></h2>
              <p>Más de 21 cortes de vacuno, explicados sin vueltas: dónde están, para qué preparaciones sirven y cómo sacarles el mejor provecho.</p>
              <div className="cut-benefits">
                <div><span><Check size={14} /></span><p><strong>Encuentra su origen</strong><small>Ubica cada pieza en el diagrama del vacuno.</small></p></div>
                <div><span><Check size={14} /></span><p><strong>Elige según tu plan</strong><small>Parrilla, olla, horno o una comida rápida.</small></p></div>
                <div><span><Check size={14} /></span><p><strong>Guarda tus favoritos</strong><small>Ten a mano los cortes que más te gustan.</small></p></div>
              </div>
              <a className="text-link" href={urlAplicacionWeb} target="_blank" rel="noreferrer">Explorar los cortes en la app <ArrowRight size={16} /></a>
            </div>
            <div className="cuts-art-card">
              <div className="art-card-top"><span>MAPA DE CORTES</span><span>VACUNO · CHILE</span></div>
              <img src="/images/cortes-vacuno.png" alt="Diagrama de cortes de vacuno, con los nombres de las piezas" />
              <div className="art-card-bottom"><span className="art-dot" /> Toca un corte en la app para conocer más <ArrowUpRight size={15} /></div>
              <span className="art-sticker">21+<small>CORTES</small></span>
            </div>
          </div>
        </section>

        <section className="journey-section section-pad" id="juegos">
          <div className="site-container">
            <div className="journey-heading"><div><SectionEyebrow>APRENDER SE DISFRUTA</SectionEyebrow><h2>Un poco de juego.<br /><em>Mucho más conocimiento.</em></h2></div><p>La cocina se aprende probando. En la app puedes sumar experiencia, guardar lo que te gusta y descubrir algo nuevo cada vez.</p></div>
            <div className="journey-cards">
              <article className="journey-card journey-card-dark"><div className="journey-card-top"><span>01 / DESCUBRE</span><Beef size={19} /></div><div className="journey-card-art cut-card-art"><img src="/images/cortes-vacuno.png" alt="" /></div><h3>Cortes que<br />ahora reconoces.</h3><p>Aprende nombres, ubicaciones y usos con un mapa visual fácil de explorar.</p><a href={urlAplicacionWeb} target="_blank" rel="noreferrer" aria-label="Conocer los cortes"><ArrowUpRight /></a></article>
              <article className="journey-card journey-card-light"><div className="journey-card-top"><span>02 / PREPARA</span><BookOpen size={19} /></div><div className="recipe-mini-art"><img src="/images/platillo.png" alt="" /></div><h3>Recetas que<br />te acompañan.</h3><p>Pasos claros, ingredientes a mano y ese consejo que hace la diferencia.</p><a href={urlAplicacionWeb} target="_blank" rel="noreferrer" aria-label="Ver recetas"><ArrowUpRight /></a></article>
              <article className="journey-card journey-card-lime"><div className="journey-card-top"><span>03 / JUEGA</span><Gamepad2 size={19} /></div><div className="xp-art"><span>+50</span><small>XP</small><i>✳</i><b>✓</b></div><h3>Avanza jugando.<br />Celebra aprendiendo.</h3><p>Quiz, memoria y desafíos para convertir la curiosidad en experiencia.</p><a href={urlAplicacionWeb} target="_blank" rel="noreferrer" aria-label="Probar juegos"><ArrowUpRight /></a></article>
            </div>
          </div>
        </section>

        <section className="chat-preview-section section-pad">
          <div className="site-container chat-preview-layout">
            <div className="chat-preview-copy"><SectionEyebrow>UNA IDEA EN CAMINO</SectionEyebrow><h2>Una pregunta a la vez.<br /><em>El conocimiento, más cerca.</em></h2><p>Estamos preparando la experiencia web del Carnicero IA. Mientras tanto, puedes explorar la app y descubrir cortes, recetas y consejos.</p><a className="button button-outline-dark" href={urlAplicacionWeb} target="_blank" rel="noreferrer">Conocer la app <ArrowRight size={16} /></a><small>La vista previa de conversación es ilustrativa.</small></div>
            <div className="chat-window" aria-label="Vista previa ilustrativa de una conversación">
              <div className="chat-window-head"><span className="chat-avatar"><ChefHat size={17} /></span><span><strong>Carnicero de Bolsillo</strong><small>VISTA PREVIA</small></span><span className="chat-preview-mark"><MessageCircle size={17} /></span></div>
              <div className="chat-date">HOY · 12:45</div>
              <div className="chat-bubble chat-bubble-in">¿Qué corte queda rico a la olla?</div>
              <div className="chat-bubble chat-bubble-out">La plateada queda muy sabrosa con una cocción lenta. También puedes probar con osobuco.</div>
              <div className="chat-prompt-row"><span>¿Qué más te gustaría cocinar?</span><span><ArrowRight size={15} /></span></div>
              <div className="chat-floating-star">✳</div>
            </div>
          </div>
        </section>

        <section className="values-section section-pad">
          <div className="site-container values-layout">
            <div><SectionEyebrow>PARA CADA MOMENTO</SectionEyebrow><h2>Del “¿qué compro?”<br /><em>al “quedó increíble”.</em></h2><p>Una buena decisión empieza con información clara. Carnicero de Bolsillo reúne lo esencial para que elijas y cocines a tu manera.</p></div>
            <div className="value-list">
              <div><span>01</span><span className="value-icon"><Search size={17} /></span><p><strong>Encuentra el corte correcto</strong><small>Filtra, compara y entiende sus usos.</small></p><ArrowUpRight size={18} /></div>
              <div><span>02</span><span className="value-icon"><Flame size={17} /></span><p><strong>Prepara algo rico</strong><small>Recetas simples y consejos para cocinar.</small></p><ArrowUpRight size={18} /></div>
              <div><span>03</span><span className="value-icon"><Heart size={17} /></span><p><strong>Hazla tuya</strong><small>Guarda favoritos y continúa aprendiendo.</small></p><ArrowUpRight size={18} /></div>
            </div>
          </div>
        </section>

        <section className="final-cta-section">
          <div className="site-container final-cta">
            <div className="cta-sunburst" aria-hidden="true">✳</div>
            <div className="final-cta-copy"><SectionEyebrow>EMPIEZA POR LO QUE TE GUSTA</SectionEyebrow><h2>Tu próxima buena idea<br /><em>está a un toque.</em></h2><p>Explora la app gratis desde tu navegador o descárgala en Google Play.</p><div className="hero-actions"><a className="button button-lime" href={urlAplicacionWeb} target="_blank" rel="noreferrer">Abrir la app web <ArrowRight size={17} /></a><a className="button button-ghost" href={urlGooglePlay} target="_blank" rel="noreferrer">Google Play <ArrowUpRight size={16} /></a></div></div>
            <div className="cta-stats"><div><strong>21+</strong><span>cortes por descubrir</span></div><div><strong>∞</strong><span>formas de disfrutar</span></div><span className="cta-rule" /><p>La cocina empieza<br />con una buena elección.</p></div>
          </div>
        </section>

        <section className="faq-section section-pad">
          <div className="site-container faq-layout"><div><SectionEyebrow>ANTES DE ENTRAR</SectionEyebrow><h2>Preguntas<br /><em>frecuentes.</em></h2><p>Lo esencial para empezar a explorar.</p></div><div className="faq-list">
            <details><summary>¿Puedo usar la app desde el navegador?<ChevronDown size={17} /></summary><p>Sí. La versión web se puede abrir desde teléfonos, tablets y computadores; no necesitas instalarla para probarla.</p></details>
            <details><summary>¿Qué voy a encontrar en Carnicero de Bolsillo?<ChevronDown size={17} /></summary><p>Una guía con cortes de vacuno, recetas paso a paso, consejos y juegos para aprender de forma entretenida.</p></details>
            <details><summary>¿La aplicación tiene costo?<ChevronDown size={17} /></summary><p>Puedes explorar la app gratis. Consulta Google Play para ver la información de descarga y compatibilidad.</p></details>
          </div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="site-container footer-main"><Brand inverse /><p>Buenos cortes. Mejores momentos.</p><div><a href={urlGooglePlay} target="_blank" rel="noreferrer">Google Play <ArrowUpRight size={14} /></a><a href="mailto:carnicerobolsillo@gmail.com">Contacto <ArrowUpRight size={14} /></a><a href="/Politica-de-Privacidad">Privacidad <ArrowUpRight size={14} /></a></div></div><div className="site-container footer-bottom"><span>© {new Date().getFullYear()} Carnicero de Bolsillo</span><span>HECHO CON SABOR EN CHILE <span className="footer-heart">♥</span></span></div></footer>

      <a className="floating-app-cta" href={urlAplicacionWeb} target="_blank" rel="noreferrer"><span><ChefHat size={17} /></span> Probar la app <ArrowRight size={15} /></a>
    </div>
  )
}
