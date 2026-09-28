import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChefHat,
  CircleHelp,
  Flame,
  Gamepad2,
  Heart,
  MapPin,
  Search,
  Sparkles,
  Utensils,
} from "lucide-react";
import { cn } from "@/lib/utils";

const demos = [
  {
    etiqueta: "Explora cortes",
    antetitulo: "01 / ENCUENTRA TU CORTE",
    icono: MapPin,
  },
  {
    etiqueta: "Sigue una receta",
    antetitulo: "02 / COCINA PASO A PASO",
    icono: Utensils,
  },
  {
    etiqueta: "Aprende jugando",
    antetitulo: "03 / PON A PRUEBA LO QUE SABES",
    icono: Gamepad2,
  },
];

const cortes = [
  { nombre: "Abastero", uso: "Parrilla y olla", tag: "Rendidor" },
  { nombre: "Lomo vetado", uso: "Parrilla", tag: "Muy jugoso" },
  { nombre: "Plateada", uso: "Cocción lenta", tag: "Tradicional" },
];

export function DemoInteractivaAplicacion() {
  const [demoActivo, establecerDemoActivo] = useState(0);
  const [corteActivo, establecerCorteActivo] = useState(0);
  const [pasoReceta, establecerPasoReceta] = useState(1);
  const [respuesta, establecerRespuesta] = useState<string | null>(null);
  const [busqueda, establecerBusqueda] = useState("");
  const entradaBusqueda = useRef<HTMLInputElement>(null);

  const textoBusqueda = busqueda
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es-CL");
  const cortesFiltrados = cortes.filter((corte) =>
    `${corte.nombre} ${corte.uso} ${corte.tag}`
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("es-CL")
      .includes(textoBusqueda),
  );

  useEffect(() => {
    const temporizador = window.setInterval(
      () => establecerDemoActivo((actual) => (actual + 1) % demos.length),
      8000,
    );
    return () => window.clearInterval(temporizador);
  }, []);

  useEffect(() => {
    const atajoBusqueda = (evento: KeyboardEvent) => {
      if (
        (evento.metaKey || evento.ctrlKey) &&
        evento.key.toLowerCase() === "k"
      ) {
        evento.preventDefault();
        entradaBusqueda.current?.focus();
      }
    };
    window.addEventListener("keydown", atajoBusqueda);
    return () => window.removeEventListener("keydown", atajoBusqueda);
  }, []);

  const seleccionarDemo = (indice: number) => {
    establecerDemoActivo(indice);
    establecerRespuesta(null);
  };

  return (
    <section id="demo" className="demo-section section-pad">
      <div className="site-container">
        <div className="demo-heading">
          <p className="antetitulo">
            <Sparkles size={14} /> ASÍ SE USA
          </p>
          <h2>
            Aprende mirando.
            <br />
            <em>Explora tocando.</em>
          </h2>
          <p>
            Una muestra interactiva de lo que encontrarás dentro de la app.
            Prueba cada experiencia aquí mismo.
          </p>
        </div>

        <div className="demo-shell">
          <div className="demo-sidebar">
            <div className="demo-brandline">
              <span className="brand-mark small">
                <ChefHat size={19} />
              </span>
              <span>
                Carnicero
                <br />
                de Bolsillo
              </span>
            </div>
            <p className="demo-side-etiqueta">TU GUÍA DE CARNICERÍA</p>
            <div
              className="demo-tabs"
              role="tablist"
              aria-label="Demos de la aplicación"
            >
              {demos.map((demo, indice) => {
                const Icon = demo.icono;
                return (
                  <button
                    key={demo.etiqueta}
                    className={cn(
                      "demo-tab",
                      demoActivo === indice && "active",
                    )}
                    role="tab"
                    aria-selected={demoActivo === indice}
                    onClick={() => seleccionarDemo(indice)}
                  >
                    <Icon size={18} strokeWidth={1.8} />
                    <span>{demo.etiqueta}</span>
                    <ArrowRight className="tab-arrow" size={15} />
                  </button>
                );
              })}
            </div>
            <div className="demo-tip">
              <Flame size={16} />
              <span>Ideas sencillas, sabor de verdad.</span>
            </div>
          </div>

          <div className="demo-workspace" role="tabpanel">
            <div className="demo-topbar">
              <div>
                <span className="demo-live-dot" /> VISTA PREVIA INTERACTIVA
              </div>
              <span className="demo-platform">Web · Móvil · Tablet</span>
            </div>

            {demoActivo === 0 && (
              <div className="demo-content demo-corte-view" key="cuts">
                <div className="demo-copy">
                  <p className="antetitulo">{demos[0].antetitulo}</p>
                  <h3>
                    Elige el corte.
                    <br />
                    <em>Nosotros te orientamos.</em>
                  </h3>
                  <label className="demo-search">
                    <Search size={16} />
                    <input
                      ref={entradaBusqueda}
                      aria-label="Buscar corte en la demostración"
                      value={busqueda}
                      onChange={(evento) =>
                        establecerBusqueda(evento.target.value)
                      }
                      placeholder="Busca un corte"
                    />
                    <span>⌘ K</span>
                  </label>
                  <div className="corte-options">
                    {cortesFiltrados.map((corte) => {
                      const indice = cortes.findIndex(
                        (elemento) => elemento.nombre === corte.nombre,
                      );
                      return (
                        <button
                          key={corte.nombre}
                          onClick={() => establecerCorteActivo(indice)}
                          className={cn(
                            "corte-opcion",
                            corteActivo === indice && "selected",
                          )}
                        >
                          <span className="corte-opcion-icono">
                            <Utensils size={17} />
                          </span>
                          <span className="corte-opcion-copy">
                            <strong>{corte.nombre}</strong>
                            <small>{corte.uso}</small>
                          </span>
                          <ArrowRight size={15} />
                        </button>
                      );
                    })}
                    {cortesFiltrados.length === 0 && (
                      <p className="demo-empty" role="status">
                        No encontramos ese corte. Prueba con otro nombre o
                        preparación.
                      </p>
                    )}
                  </div>
                </div>
                <div className="corte-visual-card">
                  <div className="corte-image-wrap">
                    <img
                      src="/images/cortes-vacuno.png"
                      alt="Diagrama ilustrado de los cortes del vacuno"
                    />
                  </div>
                  <div className="corte-detail-card">
                    <div>
                      <span className="detail-kicker">CORTE SELECCIONADO</span>
                      <h4>{cortes[corteActivo].nombre}</h4>
                      <p>{cortes[corteActivo].uso}</p>
                    </div>
                    <span className="corte-tag">
                      <Heart size={12} /> {cortes[corteActivo].tag}
                    </span>
                  </div>
                  <span className="corte-note">
                    <MapPin size={13} /> Explora su ubicación en el vacuno
                  </span>
                </div>
              </div>
            )}

            {demoActivo === 1 && (
              <div className="demo-content demo-receta-view" key="receta">
                <div className="receta-visual">
                  <img
                    src="/images/platillo.png"
                    alt="Plato de carne con verduras"
                  />
                  <span className="receta-chip">
                    <ChefHat size={13} /> RECETA GUIADA
                  </span>
                </div>
                <div className="receta-instructions">
                  <p className="antetitulo">{demos[1].antetitulo}</p>
                  <h3>
                    Carne mechada
                    <br />
                    <em>que queda en su punto.</em>
                  </h3>
                  <p className="receta-meta">
                    <span>
                      <Flame size={14} /> Fácil
                    </span>
                    <span>·</span>
                    <span>90 min</span>
                    <span>·</span>
                    <span>4 porciones</span>
                  </p>
                  <div className="receta-progress">
                    <span style={{ width: `${(pasoReceta / 4) * 100}%` }} />
                  </div>
                  <div className="receta-paso">
                    <span className="paso-number">PASO {pasoReceta} / 4</span>
                    <p>
                      {
                        [
                          "Sella la carne por todos sus lados en una olla caliente.",
                          "Agrega cebolla, zanahoria, ajo y tus aliños favoritos.",
                          "Cubre con caldo y cocina tapado hasta que esté blanda.",
                          "Desmecha, sirve con su jugo y disfruta en familia.",
                        ][pasoReceta - 1]
                      }
                    </p>
                  </div>
                  <div className="receta-controls">
                    <button
                      className="receta-back"
                      onClick={() =>
                        establecerPasoReceta((paso) => Math.max(1, paso - 1))
                      }
                      aria-label="Paso anterior"
                    >
                      <ArrowLeft size={17} />
                    </button>
                    <button
                      className="receta-next"
                      onClick={() =>
                        establecerPasoReceta((paso) => (paso % 4) + 1)
                      }
                    >
                      {pasoReceta === 4 ? "Volver a empezar" : "Siguiente paso"}{" "}
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {demoActivo === 2 && (
              <div className="demo-content demo-quiz-view" key="quiz">
                <div className="quiz-art">
                  <div className="quiz-burst">
                    <Gamepad2 size={46} />
                  </div>
                  <span className="quiz-floating quiz-floating-one">
                    +50 XP
                  </span>
                  <span className="quiz-floating quiz-floating-two">
                    <Sparkles size={15} /> ¡Buen trabajo!
                  </span>
                  <span className="quiz-ribbon">APRENDE JUGANDO</span>
                </div>
                <div className="quiz-question">
                  <p className="antetitulo">{demos[2].antetitulo}</p>
                  <div className="quiz-count">
                    <span>QUIZ CARNICERO</span>
                    <span>
                      01 <i>/ 05</i>
                    </span>
                  </div>
                  <h3>¿Qué corte es conocido por su marmoleo y jugosidad?</h3>
                  <div className="quiz-answers">
                    {["Lomo vetado", "Posta negra", "Osobuco"].map((opcion) => {
                      const esCorrecta = opcion === "Lomo vetado";
                      const estaElegida = respuesta === opcion;
                      return (
                        <button
                          key={opcion}
                          onClick={() => establecerRespuesta(opcion)}
                          className={cn(
                            "quiz-respuesta",
                            estaElegida &&
                              (esCorrecta ? "correct" : "incorrect"),
                          )}
                        >
                          <span className="quiz-radio">
                            {estaElegida &&
                              (esCorrecta ? <Check size={13} /> : "×")}
                          </span>
                          {opcion}
                          {estaElegida && esCorrecta && (
                            <span className="quiz-xp">+50 XP</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  <p
                    className={cn("quiz-feedback", respuesta && "shown")}
                    aria-live="polite"
                  >
                    {respuesta ? (
                      respuesta === "Lomo vetado" ? (
                        "¡Exacto! Su marmoleo aporta sabor y jugosidad."
                      ) : (
                        "Casi. Prueba con otra respuesta."
                      )
                    ) : (
                      <>
                        <CircleHelp size={13} /> Selecciona una respuesta para
                        probar
                      </>
                    )}
                  </p>
                </div>
              </div>
            )}
            <div className="demo-bottomline">
              <span>DEMO ILUSTRATIVA · LOS DATOS REALES ESTÁN EN LA APP</span>
              <div>
                {demos.map((demo, indice) => (
                  <button
                    key={demo.etiqueta}
                    onClick={() => seleccionarDemo(indice)}
                    aria-label={`Ver demo: ${demo.etiqueta}`}
                    className={cn(
                      "demo-dot",
                      demoActivo === indice && "active",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
