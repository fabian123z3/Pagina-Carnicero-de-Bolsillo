import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Beef,
  ChefHat,
  Menu,
  X,
} from "lucide-react";
import { DemoInteractivaAplicacion } from "@/components/DemoInteractivaAplicacion";

const urlAplicacion = "https://carnicero-de-bolsillo-app-kohl.vercel.app";
const urlGooglePlay =
  "https://play.google.com/store/apps/details?id=com.carnicerodebolsillo.app&hl=es_CL";

function Marca() {
  return (
    <a
      className="marca"
      href="#inicio"
      aria-label="Carnicero de Bolsillo, inicio"
    >
      <span>
        <ChefHat size={20} />
      </span>
      <strong>
        Carnicero <i>de Bolsillo</i>
      </strong>
    </a>
  );
}

function Navegacion() {
  const [abierto, establecerAbierto] = useState(false);
  return (
    <header className="cabecera">
      <nav className="contenedor navegacion" aria-label="Navegación principal">
        <Marca />
        <div className="enlaces-navegacion">
          <a href="#explorar">Explorar</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#app">La aplicación</a>
        </div>
        <a
          className="boton boton-nav"
          href={urlAplicacion}
          target="_blank"
          rel="noreferrer"
        >
          Abrir la app <ArrowUpRight size={16} />
        </a>
        <button
          className="boton-menu"
          type="button"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
          onClick={() => establecerAbierto(!abierto)}
        >
          {abierto ? <X /> : <Menu />}
        </button>
        {abierto && (
          <div className="menu-movil">
            <a onClick={() => establecerAbierto(false)} href="#explorar">
              Explorar
            </a>
            <a onClick={() => establecerAbierto(false)} href="#como-funciona">
              Cómo funciona
            </a>
            <a onClick={() => establecerAbierto(false)} href="#app">
              La aplicación
            </a>
            <a
              className="boton boton-primario"
              href={urlAplicacion}
              target="_blank"
              rel="noreferrer"
            >
              Abrir la app <ArrowRight size={16} />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default function CarniceroDeBolsillo() {
  return (
    <div className="sitio" id="inicio">
      <Navegacion />
      <main>
        <section className="portada">
          <div className="contenedor portada-cuadricula">
            <div className="portada-texto">
              <span className="etiqueta">
                <span /> UNA GUÍA CERCANA PARA TU COCINA
              </span>
              <h1>
                Elegir bien
                <br />
                también se <em>aprende.</em>
              </h1>
              <p>
                Descubre cortes, encuentra ideas para cocinar y gana confianza
                cada vez que te toque elegir en la carnicería.
              </p>
              <div className="acciones-portada">
                <a
                  className="boton boton-primario"
                  href={urlAplicacion}
                  target="_blank"
                  rel="noreferrer"
                >
                  Conocer la aplicación <ArrowRight size={17} />
                </a>
                <a className="enlace-sutil" href="#explorar">
                  Mira qué puedes hacer <ArrowDown size={15} />
                </a>
              </div>
              <div className="portada-nota">
                <span>🥩</span>
                <p>
                  <strong>Sin complicaciones.</strong>
                  <br />
                  Desde el teléfono o computador.
                </p>
              </div>
            </div>
            <div className="portada-imagen">
              <img
                src="/images/platillo.png"
                alt="Plato casero de carne con verduras"
              />
              <div className="burbuja burbuja-corte">
                <span>
                  <Beef size={18} />
                </span>
                <p>
                  Una buena elección<strong>parte por conocer</strong>
                </p>
              </div>
              <div className="burbuja burbuja-receta">
                <span>🍲</span>
                <p>
                  Ideas para cocinar<small>con lo que tienes a mano</small>
                </p>
              </div>
              <span className="sello-circular">
                HECHO PARA
                <br />
                DISFRUTAR ✳
              </span>
            </div>
          </div>
          <div className="portada-franja">
            <div className="contenedor franja-contenido">
              <span>LO ESENCIAL, SIN VUELTAS</span>
              <span>
                CORTES <i>·</i> RECETAS <i>·</i> APRENDIZAJE
              </span>
              <a href="#explorar">
                Descubre <ArrowDown size={14} />
              </a>
            </div>
          </div>
        </section>

        <section className="explorar seccion" id="explorar">
          <div className="contenedor explorar-cuadricula">
            <div className="explorar-arte">
              <div className="arte-marco">
                <span className="arte-etiqueta">GUÍA DE CORTES · CHILE</span>
                <img
                  src="/images/cortes-vacuno.png"
                  alt="Ilustración con cortes de vacuno"
                />
                <div className="arte-pie">
                  <span>21+ piezas por descubrir</span>
                  <span>↗</span>
                </div>
              </div>
              <span className="arte-nota">
                Cada corte tiene
                <br />
                su momento.
              </span>
            </div>
            <div className="explorar-texto">
              <span className="etiqueta">01 / CONOCE LO QUE ELIGES</span>
              <h2>
                Del mesón
                <br />a tu mesa, <em>con confianza.</em>
              </h2>
              <p>
                ¿Parrilla, olla u horno? Encuentra el corte que mejor acompaña
                tu plan, conoce de dónde viene y aprende a sacarle partido.
              </p>
              <ul>
                <li>
                  <span>01</span>Encuentra su ubicación en el vacuno
                </li>
                <li>
                  <span>02</span>Compara cortes según su preparación
                </li>
                <li>
                  <span>03</span>Guarda tus favoritos para después
                </li>
              </ul>
              <a
                className="enlace-verde"
                href={urlAplicacion}
                target="_blank"
                rel="noreferrer"
              >
                Explorar todos los cortes <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="demostracion" id="como-funciona">
          <div className="contenedor">
            <div className="encabezado-demo">
              <div>
                <span className="etiqueta">02 / PRUÉBALO AQUÍ MISMO</span>
                <h2>
                  Un vistazo.
                  <br />
                  <em>Manos a la obra.</em>
                </h2>
              </div>
              <p>
                Explora una muestra interactiva: elige un corte, sigue una
                receta o pon a prueba lo que sabes.
              </p>
            </div>
            <DemoInteractivaAplicacion />
          </div>
        </section>

        <section className="app-destacada seccion" id="app">
          <div className="contenedor app-panel">
            <div className="app-icono">
              <ChefHat size={31} />
            </div>
            <div className="app-texto">
              <span className="etiqueta">TU PRÓXIMO PASO</span>
              <h2>
                Todo esto,
                <br />
                <em>en tu bolsillo.</em>
              </h2>
              <p>
                Abre la experiencia completa desde el navegador o llévala
                contigo en el teléfono.
              </p>
              <div className="acciones-app">
                <a
                  className="boton boton-claro"
                  href={urlAplicacion}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir aplicación web <ArrowRight size={17} />
                </a>
                <a
                  className="enlace-app"
                  href={urlGooglePlay}
                  target="_blank"
                  rel="noreferrer"
                >
                  Descargar en Google Play <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
            <div className="app-beneficios">
              <div>
                <span>01</span>
                <p>
                  <strong>Explora a tu ritmo</strong>
                  <small>Sin instalar para probarla en web.</small>
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  <strong>Aprende algo nuevo</strong>
                  <small>Cortes, recetas y desafíos cortitos.</small>
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  <strong>Úsala donde quieras</strong>
                  <small>En móvil, tablet o computador.</small>
                </p>
              </div>
            </div>
            <span className="app-grafismo" aria-hidden="true">
              ✳
            </span>
          </div>
        </section>
      </main>
      <footer className="pie">
        <div className="contenedor pie-principal">
          <Marca />
          <span>Buenos cortes. Mejores momentos.</span>
          <div>
            <a href="mailto:carnicerobolsillo@gmail.com">Contacto</a>
            <a href="/Politica-de-Privacidad">Privacidad</a>
          </div>
        </div>
        <div className="contenedor pie-final">
          <span>© {new Date().getFullYear()} Carnicero de Bolsillo</span>
          <span>HECHO CON SABOR EN CHILE ♥</span>
        </div>
      </footer>
    </div>
  );
}
