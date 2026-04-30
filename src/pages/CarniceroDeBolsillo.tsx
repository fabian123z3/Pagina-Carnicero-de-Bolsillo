import { useEffect, useRef, useState } from 'react'
import {
  Beef,
  BookOpen,
  Brain,
  ChefHat,
  Download,
  Flame,
  Gamepad2,
  Heart,
  Lightbulb,
  Map,
  MessageCircle,
  Play,
  Puzzle,
  Search,
  ShieldCheck,
  Star,
  Trophy,
  Zap,
  Mail,
  Coffee,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Menu,
  X,
  ShoppingBag,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const playStoreUrl =
  'https://play.google.com/store/apps/details?id=com.carnicerodebolsillo.app&hl=es_CL'

/* ─── Navbar ────────────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Características', href: '#features' },
    { label: 'Cortes', href: '#cortes' },
    { label: 'Juegos', href: '#juegos' },
    { label: 'Chat IA', href: '#ia' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[#E8774A] flex items-center justify-center text-white shadow-lg shadow-[#E8774A]/30">
            <ChefHat className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg text-[#1F2937] tracking-tight">
            Carnicero de Bolsillo
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6B7280]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#E8774A] transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href={playStoreUrl} target="_blank" rel="noreferrer">
            <Button size="sm" className="rounded-full px-5">
              <Download className="w-4 h-4 mr-1.5" />
              Descargar
            </Button>
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-xl hover:bg-[#E8774A]/10 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          {mobileOpen ? <X className="w-6 h-6 text-[#1F2937]" /> : <Menu className="w-6 h-6 text-[#1F2937]" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-[#E8774A]/10 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-sm font-medium text-[#1F2937] hover:text-[#E8774A] transition"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href={playStoreUrl} target="_blank" rel="noreferrer" className="block pt-2">
            <Button className="w-full rounded-full">
              <Download className="w-4 h-4 mr-2" />
              Descargar en Google Play
            </Button>
          </a>
        </div>
      )}
    </nav>
  )
}

/* ─── Phone Mockup ──────────────────────────────────────────────────────── */
function PhoneMockup() {
  const [screen, setScreen] = useState(0)
  const screens = [
    {
      label: 'Inicio',
      content: (
        <div className="flex flex-col h-full bg-[#F5E6D3]">
          <div className="bg-[#E8774A] px-4 py-5 rounded-b-3xl shadow-md">
            <div className="flex items-center gap-2 mb-1">
              <ChefHat className="w-5 h-5 text-white" />
              <p className="text-white font-bold text-base">Carnicero de Bolsillo</p>
            </div>
            <p className="text-white/90 text-xs">Tu guía personal de cortes y recetas</p>
          </div>
          <div className="flex-1 p-4 space-y-3">
            <p className="text-[#1F2937] font-bold text-sm">¿Qué necesitas hoy?</p>
            <div className="h-14 rounded-2xl bg-[#E8774A] w-full flex items-center px-4 gap-3 shadow-md">
              <Search className="w-5 h-5 text-white/80" />
              <span className="text-white font-bold text-sm">Ver Todos los Cortes</span>
            </div>
            <div className="h-24 rounded-2xl bg-white border-2 border-[#E8774A]/30 w-full flex items-center px-4 gap-3 shadow-sm">
              <Map className="w-6 h-6 text-[#E8774A]" />
              <div>
                <span className="text-[#1F2937] font-bold text-sm block">Diagrama de Cortes</span>
                <span className="text-[#6B7280] text-[10px]">Visualiza cada corte</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-20 rounded-xl bg-white p-3 shadow-sm border border-[#E8774A]/10 flex flex-col justify-between">
                <Flame className="w-5 h-5 text-[#E8774A]" />
                <span className="text-[#1F2937] text-[10px] font-bold">Recetas Top</span>
              </div>
              <div className="h-20 rounded-xl bg-white p-3 shadow-sm border border-[#E8774A]/10 flex flex-col justify-between">
                <MessageCircle className="w-5 h-5 text-[#E8774A]" />
                <span className="text-[#1F2937] text-[10px] font-bold">Chat IA</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: 'Cortes',
      content: (
        <div className="flex flex-col h-full bg-[#F5E6D3]">
          <div className="bg-[#E8774A] px-4 py-4 rounded-b-3xl">
            <p className="text-white font-bold text-sm">Todos los Cortes</p>
            <p className="text-white/80 text-xs">21+ cortes de vacuno</p>
          </div>
          <div className="flex-1 p-3 space-y-2 overflow-hidden">
            {['Abastero', 'Lomo Vetado', 'Filete', 'Plateada', 'Asado de Tira'].map((corte) => (
              <div
                key={corte}
                className="flex items-center gap-3 rounded-xl bg-white p-2.5 shadow-sm border border-[#E8774A]/5"
              >
                <div className="w-9 h-9 rounded-lg bg-[#E8774A]/10 flex items-center justify-center">
                  <Beef className="w-5 h-5 text-[#E8774A]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#1F2937] text-xs font-bold">{corte}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#E8774A]" />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: 'Chat',
      content: (
        <div className="flex flex-col h-full bg-[#F5E6D3] p-3 gap-2">
          <div className="flex items-center gap-2 pb-2 border-b border-[#E8774A]/10">
            <div className="w-8 h-8 rounded-full bg-[#E8774A] flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-[#1F2937] font-bold text-xs">Carnicero IA</p>
              <p className="text-green-600 text-[9px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                En línea
              </p>
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <div className="bg-white rounded-2xl rounded-tl-sm p-3 border border-[#E8774A]/10 max-w-[85%]">
              <p className="text-[#1F2937] text-[10px] leading-relaxed">
                ¡Hola! Soy tu Carnicero de Bolsillo. ¿En qué puedo ayudarte?
              </p>
            </div>
            <div className="bg-[#E8774A] rounded-2xl rounded-tr-sm p-3 max-w-[85%] ml-auto">
              <p className="text-white text-[10px] leading-relaxed">
                ¿Qué corte recomiendas para parrilla?
              </p>
            </div>
            <div className="bg-white rounded-2xl rounded-tl-sm p-3 border border-[#E8774A]/10 max-w-[90%]">
              <p className="text-[#1F2937] text-[10px] leading-relaxed">
                Para parrilla te recomiendo el abastero o el lomo vetado. ¡Perfectos para el carbón!
              </p>
            </div>
          </div>
          <div className="h-8 rounded-full bg-white border border-[#E8774A]/10 flex items-center px-3 gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E8774A] animate-pulse" />
            <span className="text-[#6B7280] text-[9px]">Escribiendo...</span>
          </div>
        </div>
      ),
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => setScreen((p) => (p + 1) % screens.length), 3500)
    return () => clearInterval(interval)
  }, [screens.length])

  return (
    <div className="relative mx-auto w-[260px] h-[520px] rounded-[2.5rem] border-[8px] border-[#1e293b] bg-white shadow-2xl shadow-black/30 overflow-hidden animate-float">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[24px] bg-[#1e293b] rounded-b-2xl z-20" />
      <div className="w-full h-full transition-all duration-700">{screens[screen].content}</div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {screens.map((_, i) => (
          <button
            key={i}
            onClick={() => setScreen(i)}
            className={cn(
              'h-1.5 rounded-full transition-all duration-300',
              i === screen ? 'w-4 bg-[#E8774A]' : 'w-1.5 bg-[#1F2937]/30'
            )}
            aria-label={`Pantalla ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

/* ─── SectionTitle ──────────────────────────────────────────────────────── */
function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  centered?: boolean
}) {
  return (
    <div className={cn('mb-12', centered && 'text-center')}>
      <Badge variant="outline" className="mb-3 rounded-full px-3 py-1 text-[11px] tracking-wide uppercase">
        {eyebrow}
      </Badge>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-3 text-base sm:text-lg text-[#6B7280] max-w-2xl', centered && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

/* ─── FeatureCard ───────────────────────────────────────────────────────── */
function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <Card className="group relative overflow-hidden hover:-translate-y-1.5 transition-transform duration-300">
      <CardHeader className="pb-3">
        <div className="w-11 h-11 rounded-xl bg-[#E8774A]/10 flex items-center justify-center mb-3 group-hover:bg-[#E8774A] group-hover:text-white transition-colors duration-300">
          <Icon className="w-5 h-5 text-[#E8774A] group-hover:text-white transition-colors duration-300" />
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

/* ─── ChatDemo ──────────────────────────────────────────────────────────── */
function ChatDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const messages = [
    { text: '¿Qué corte usar para una parrillada de 6 personas?', type: 'in' as const, delay: 0 },
    { text: 'Para 6 personas te recomiendo 1.5kg de abastero o punta de ganso. Son jugosos y rendidores.', type: 'out' as const, delay: 500 },
    { text: '¿Y si quiero algo más económico?', type: 'in' as const, delay: 1000 },
    { text: 'El asado carnicero es tu mejor opción: sabor intenso, buen precio y perfecto para parrilla.', type: 'out' as const, delay: 1500 },
  ]

  return (
    <div ref={ref} className="space-y-3">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={cn(
            'flex max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm transition-all duration-700',
            msg.type === 'in'
              ? 'bg-white border border-[#E8774A]/10 rounded-tl-sm text-[#1F2937]'
              : 'bg-[#E8774A] rounded-tr-sm text-white ml-auto'
          )}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transitionDelay: `${msg.delay}ms`,
          }}
        >
          {msg.text}
        </div>
      ))}
    </div>
  )
}

/* ─── Main Page ─────────────────────────────────────────────────────────── */
export default function CarniceroDeBolsillo() {
  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#E8774A]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-[#ff9f7a]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="space-y-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E8774A]/15 px-4 py-1.5 text-xs font-semibold text-[#E8774A] shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8774A] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8774A]" />
                </span>
                Disponible en Google Play
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold leading-[1.05] text-[#1F2937] tracking-tight">
                Tu guía personal{' '}
                <span className="text-gradient">de cortes y recetas</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#6B7280] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Descubre más de 21 cortes de vacuno, recetas paso a paso, juega para aprender y
                resuelve tus dudas con el Carnicero IA.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a href={playStoreUrl} target="_blank" rel="noreferrer">
                  <Button size="lg" className="rounded-full shadow-xl shadow-[#E8774A]/25">
                    <Download className="w-5 h-5 mr-2" />
                    Descargar en Google Play
                  </Button>
                </a>
                <a href="#features">
                  <Button variant="outline" size="lg" className="rounded-full">
                    Conocer más
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </a>
              </div>

              <div className="flex items-center gap-5 justify-center lg:justify-start text-xs text-[#6B7280] font-medium">
                <span className="flex items-center gap-1.5">
                  <Beef className="w-4 h-4 text-[#E8774A]" />
                  21+ Cortes de vacuno
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#E8774A]" />
                  Recetas chilenas
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#E8774A]" />
                  Chat IA incluido
                </span>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <PhoneMockup />

              <div className="absolute -bottom-4 -right-2 lg:right-0 glass rounded-2xl p-3 shadow-2xl animate-float hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8774A]/10 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-[#E8774A]" />
                </div>
                <div>
                  <p className="text-[#1F2937] text-xs font-bold">Logro desbloqueado</p>
                  <p className="text-[#6B7280] text-[10px]">Primer Corte · +50 XP</p>
                </div>
              </div>

              <div
                className="absolute top-10 -left-2 lg:left-4 glass rounded-2xl p-3 shadow-2xl animate-float hidden sm:flex items-center gap-2"
                style={{ animationDelay: '1.5s' }}
              >
                <Flame className="w-5 h-5 text-[#E8774A]" />
                <div>
                  <p className="text-[#1F2937] text-xs font-bold">Racha activa</p>
                  <p className="text-[#E8774A] text-[10px] font-bold">7 días</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ──────────────────────────────────────────────────────── */}
      <div className="border-y border-[#E8774A]/10 bg-white/50 overflow-hidden py-4">
        <div className="flex animate-marquee whitespace-nowrap gap-10 text-sm text-[#8C6A55] font-semibold">
          {Array.from({ length: 2 }).map((_, gi) => (
            <div key={gi} className="flex gap-10 items-center">
              <span className="flex items-center gap-2"><Beef className="w-4 h-4 text-[#E8774A]" /> 21+ Cortes de Vacuno</span>
              <span className="text-[#E8774A]">•</span>
              <span className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-[#E8774A]" /> Recetas Paso a Paso</span>
              <span className="text-[#E8774A]">•</span>
              <span className="flex items-center gap-2"><Map className="w-4 h-4 text-[#E8774A]" /> Diagrama de Cortes</span>
              <span className="text-[#E8774A]">•</span>
              <span className="flex items-center gap-2"><Brain className="w-4 h-4 text-[#E8774A]" /> Chat IA Carnicero</span>
              <span className="text-[#E8774A]">•</span>
              <span className="flex items-center gap-2"><Gamepad2 className="w-4 h-4 text-[#E8774A]" /> Juegos Educativos</span>
              <span className="text-[#E8774A]">•</span>
              <span className="flex items-center gap-2"><Trophy className="w-4 h-4 text-[#E8774A]" /> Sistema de Logros</span>
              <span className="text-[#E8774A]">•</span>
              <span className="flex items-center gap-2"><Flame className="w-4 h-4 text-[#E8774A]" /> Rachas de Aprendizaje</span>
              <span className="text-[#E8774A]">•</span>
              <span className="flex items-center gap-2"><Lightbulb className="w-4 h-4 text-[#E8774A]" /> Tip del Carnicero</span>
              <span className="text-[#E8774A]">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section id="features" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Características"
            title="Todo lo que necesitas para dominar la carne"
            subtitle="Desde el corte perfecto hasta la receta ideal, Carnicero de Bolsillo te acompaña en cada paso."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard
              icon={Beef}
              title="Catálogo de cortes"
              description="Más de 21 cortes de vacuno chilenos con imágenes, usos, técnicas y consejos prácticos."
            />
            <FeatureCard
              icon={BookOpen}
              title="Recetas guiadas"
              description="Prepara cazuela de vacuno, carne mechada, bistec a lo pobre y otras recetas tradicionales."
            />
            <FeatureCard
              icon={Map}
              title="Diagrama interactivo"
              description="Visualiza cada corte en el diagrama de la vaca para entender de dónde viene."
            />
            <FeatureCard
              icon={MessageCircle}
              title="Chat IA Carnicero"
              description="Pregunta lo que quieras sobre cortes, cocción y porciones. Impulsado por DeepSeek."
            />
            <FeatureCard
              icon={Gamepad2}
              title="Juegos educativos"
              description="Quiz Maestro, Memoria Express, Corta Carne y Rompecabezas para aprender jugando."
            />
            <FeatureCard
              icon={Heart}
              title="Favoritos y contacto"
              description="Guarda tus cortes preferidos, comparte recetas y escríbenos cuando quieras."
            />
          </div>
        </div>
      </section>

      {/* ── Cortes ───────────────────────────────────────────────────────── */}
      <section id="cortes" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Cortes"
            title="Los cortes más populares"
            subtitle="Explora nuestro catálogo completo de más de 21 cortes de vacuno chilenos."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Abastero', tag: 'Parrilla', icon: Flame },
              { name: 'Lomo Vetado', tag: 'Premium', icon: Star },
              { name: 'Filete', tag: 'Tierno', icon: Heart },
              { name: 'Plateada', tag: 'Tradicional', icon: ShieldCheck },
              { name: 'Asado de Tira', tag: 'Clásico', icon: Beef },
              { name: 'Punta de Ganso', tag: 'Jugoso', icon: Zap },
              { name: 'Osobuco', tag: 'Guiso', icon: ChefHat },
              { name: 'Huachalomo', tag: 'Versátil', icon: ShoppingBag },
            ].map((corte, i) => (
              <Card key={i} className="group overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#E8774A]/10 flex items-center justify-center group-hover:bg-[#E8774A] transition-colors duration-300">
                      <corte.icon className="w-5 h-5 text-[#E8774A] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <Badge variant="outline" className="rounded-full text-[10px]">
                      {corte.tag}
                    </Badge>
                  </div>
                  <CardTitle className="text-base">{corte.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Descubre usos, técnicas y recetas para este corte.
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Juegos ───────────────────────────────────────────────────────── */}
      <section id="juegos" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Aprende Jugando"
            title="Juegos educativos para convertirte en experto"
            subtitle="La gamificación hace que aprender sobre cortes y recetas sea divertido."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                name: 'Quiz Maestro',
                desc: 'Demuestra lo que sabes sobre cortes, técnicas y curiosidades de la carne.',
                icon: Brain,
                color: 'bg-blue-500',
                light: 'bg-blue-500/10 text-blue-600',
              },
              {
                name: 'Memoria Express',
                desc: 'Encuentra pares de cartas con imágenes de cortes y preparaciones.',
                icon: Zap,
                color: 'bg-emerald-500',
                light: 'bg-emerald-500/10 text-emerald-600',
              },
              {
                name: 'Corta Carne',
                desc: 'Simulador interactivo donde aprendes a cortar correctamente cada pieza.',
                icon: Gamepad2,
                color: 'bg-red-500',
                light: 'bg-red-500/10 text-red-600',
              },
              {
                name: 'Rompecabezas',
                desc: 'Arma puzzles con fotos de cortes premium y platillos terminados.',
                icon: Puzzle,
                color: 'bg-purple-500',
                light: 'bg-purple-500/10 text-purple-600',
              },
            ].map((juego, i) => (
              <Card key={i} className="group relative overflow-hidden border-0 shadow-lg hover:-translate-y-1.5 transition-transform duration-300">
                <div className={cn('h-2 w-full', juego.color)} />
                <CardHeader className="pb-3">
                  <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center mb-3', juego.light)}>
                    <juego.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-base">{juego.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{juego.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chat IA ──────────────────────────────────────────────────────── */}
      <section id="ia" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative rounded-3xl border border-[#E8774A]/10 bg-[#F5E6D3] p-8 sm:p-12 lg:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8774A]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="rounded-full px-3 py-1 text-[11px] tracking-wide uppercase">
                  Inteligencia Artificial
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
                  Habla con el Carnicero IA
                </h2>
                <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed">
                  Nuestro chat impulsado por DeepSeek responde todas tus dudas sobre cortes, cocción,
                  porciones y maridajes. Un experto chileno de confianza en tu bolsillo.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Cortes recomendados',
                    'Tiempos de cocción',
                    'Puntos de término',
                    'Maridajes',
                    'Porciones',
                    'Consejos prácticos',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white border border-[#E8774A]/10 px-3 py-1 text-xs font-medium text-[#6B7280]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ChatDemo />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mitos ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Mitos y Realidades"
            title="La verdad sobre la carne"
            subtitle="Aprende la realidad detrás de las creencias más comunes."
          />
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                mito: 'La carne roja es mala para la salud',
                realidad:
                  'La carne roja magra, consumida con moderación, es una excelente fuente de proteínas, hierro, zinc y vitamina B12.',
              },
              {
                mito: 'Lavar la carne antes de cocinarla la limpia',
                realidad:
                  'Lavar la carne cruda puede propagar bacterias por tu cocina. La cocción a la temperatura adecuada es lo único que elimina las bacterias.',
              },
              {
                mito: 'Sellar la carne retiene los jugos',
                realidad:
                  'Sellar crea una costra deliciosa por la reacción de Maillard, pero no "sella" los jugos. La jugosidad depende de la temperatura correcta.',
              },
            ].map((item, i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-lg">
                <CardHeader className="pb-3 bg-red-50/50">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-500">Mito</span>
                  </div>
                  <CardTitle className="text-sm">{item.mito}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 bg-green-50/30">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-green-600">Realidad</span>
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.realidad}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tip del Carnicero ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative rounded-3xl border-2 border-dashed border-[#E8774A]/30 bg-[#F5E6D3] p-8 sm:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8774A]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-[#E8774A]/10 flex items-center justify-center shrink-0">
                <Lightbulb className="w-8 h-8 text-[#E8774A]" />
              </div>
              <div className="flex-1">
                <Badge variant="outline" className="rounded-full px-3 py-1 text-[11px] tracking-wide uppercase mb-2">
                  Tip del Carnicero
                </Badge>
                <p className="text-lg sm:text-xl text-[#1F2937] font-medium leading-relaxed">
                  Antes de tirar la carne a la parrilla, déjala reposar a temperatura ambiente por al menos
                  30 minutos. ¡Quedará mucho más jugosa!
                </p>
                <p className="text-xs text-[#6B7280] mt-3">Nuevo consejo todos los días en la app.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Logros / Stats ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Gamificación"
            title="Gana XP, desbloquea logros y mantén tu racha"
            subtitle="Cada interacción suma. Aprende, juega, cocina y sube de nivel."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
            {[
              { name: 'Primer Corte', desc: 'Visualiza tu primer corte', xp: 50 },
              { name: 'Chef Novato', desc: 'Completa tu primera receta', xp: 100 },
              { name: 'Maestro Parrillero', desc: 'Domina 10 recetas a la parrilla', xp: 500 },
              { name: 'Sabio Carnicero', desc: '50 preguntas correctas en el Quiz', xp: 750 },
              { name: 'Racha de Fuego', desc: '7 días seguidos usando la app', xp: 300 },
            ].map((logro, i) => (
              <Card key={i} className="text-center border-0 shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <CardHeader className="pb-2">
                  <div className="mx-auto w-12 h-12 rounded-2xl bg-[#E8774A]/10 flex items-center justify-center mb-2">
                    <Trophy className="w-6 h-6 text-[#E8774A]" />
                  </div>
                  <CardTitle className="text-sm">{logro.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-[#6B7280] mb-3">{logro.desc}</p>
                  <Badge className="rounded-full text-[10px]">+{logro.xp} XP</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { label: 'XP Acumulado', value: '12.5K+', icon: Zap },
              { label: 'Logros Disponibles', value: '25+', icon: Trophy },
              { label: 'Racha Máxima', value: '30 días', icon: Flame },
            ].map((stat) => (
              <Card key={stat.label} className="flex items-center gap-4 p-5 border-0 shadow-md">
                <div className="w-12 h-12 rounded-2xl bg-[#E8774A]/10 flex items-center justify-center shrink-0">
                  <stat.icon className="w-6 h-6 text-[#E8774A]" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-[#1F2937]">{stat.value}</p>
                  <p className="text-xs text-[#6B7280]">{stat.label}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative rounded-3xl border border-[#E8774A]/10 bg-[#F5E6D3] p-8 sm:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8774A]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative grid sm:grid-cols-2 gap-10 items-center">
              <div className="space-y-5">
                <Badge variant="outline" className="rounded-full px-3 py-1 text-[11px] tracking-wide uppercase">
                  Contacto y Apoyo
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937] tracking-tight">
                  ¿Tienes dudas o ideas?
                </h2>
                <p className="text-[#6B7280] leading-relaxed">
                  Escríbenos a <span className="font-bold text-[#E8774A]">carnicerobolsillo@gmail.com</span>,
                  comparte tus recetas o apoya el proyecto para que sigamos creciendo.
                </p>
                <ul className="space-y-2 text-sm text-[#6B7280]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E8774A] shrink-0 mt-0.5" />
                    Envía tus recetas y videos para aparecer en la app
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E8774A] shrink-0 mt-0.5" />
                    Sugerencias de nuevos cortes y funciones
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E8774A] shrink-0 mt-0.5" />
                    Soporte directo por email
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <a href="mailto:carnicerobolsillo@gmail.com" className="w-full">
                  <Button size="lg" className="w-full rounded-xl">
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar Correo
                  </Button>
                </a>
                <a
                  href="https://buymeacoffee.com/carnicerobolsillo"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" size="lg" className="w-full rounded-xl">
                    <Coffee className="w-5 h-5 mr-2" />
                    Donar un Café
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Final ────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E8774A] via-[#ff9f7a] to-[#E8774A] p-10 sm:p-16 text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
            <div className="relative space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                ¿Listo para convertirte en experto?
              </h2>
              <p className="text-white/90 max-w-xl mx-auto text-lg leading-relaxed">
                Descarga Carnicero de Bolsillo gratis y empieza a dominar el arte de la carne hoy mismo.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href={playStoreUrl} target="_blank" rel="noreferrer">
                  <Button
                    size="lg"
                    className="rounded-full bg-white text-[#E8774A] hover:bg-white/90 shadow-xl"
                  >
                    <Play className="w-5 h-5 mr-2 fill-current" />
                    Descargar en Google Play
                  </Button>
                </a>
              </div>
              <p className="text-white/70 text-xs font-medium">Versión 6.0.4 · Android 8.0+ · Gratis</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#E8774A]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#E8774A] flex items-center justify-center text-white">
                <ChefHat className="w-4 h-4" />
              </div>
              <span className="font-bold text-[#1F2937]">Carnicero de Bolsillo</span>
            </div>
            <p className="text-xs text-[#6B7280] text-center">
              &copy; {new Date().getFullYear()} Carnicero de Bolsillo. Hecho con{' '}
              <Heart className="w-3 h-3 inline text-[#E8774A] fill-current" /> para los amantes de la carne.
            </p>
            <div className="flex items-center gap-4 text-xs text-[#6B7280]">
              <a href={playStoreUrl} target="_blank" rel="noreferrer" className="hover:text-[#E8774A] transition-colors">
                Google Play
              </a>
              <a href="mailto:carnicerobolsillo@gmail.com" className="hover:text-[#E8774A] transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
