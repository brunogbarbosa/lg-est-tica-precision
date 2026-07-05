import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const WA = "https://wa.me/message/TMQD6AGCLOILK1";
const IG = "https://instagram.com/resultados_lgestetica";

const IMG = {
  lips1: "/__l5e/assets-v1/e76d9fa0-6a9d-48e5-bfa8-7e09e70a1de2/image.png",
  skin:  "/__l5e/assets-v1/1d8630bb-6f05-44e3-913f-ec0af92cdea7/image-2.png",
  gloss1:"/__l5e/assets-v1/b5979fb2-e247-4868-85ec-dff4f872e214/image-3.png",
  gloss2:"/__l5e/assets-v1/5ff752b4-2880-4273-a0d5-798fb2186156/image-4.png",
  port1: "/__l5e/assets-v1/f67036f6-f58b-4b38-92cb-0c469bae95f2/image-5.png",
  port2: "/__l5e/assets-v1/d4569c90-622b-4167-900e-3cbeeb1c5337/image-6.png",
  gloss3:"/__l5e/assets-v1/5fa989aa-6812-4640-8f21-a98290c6a275/image-7.png",
};

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50" style={{ background: "rgba(245,241,234,0.85)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--line-soft)" }}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14 h-[78px] grid grid-cols-3 items-center">
        <a href="#top" className="flex items-center gap-3 justify-self-start">
          <span className="serif-i text-[26px]" style={{ color: "var(--wine)" }}>Letícia Gomes</span>
        </a>
        <nav className="hidden md:flex items-center justify-center gap-10 eyebrow" style={{ color: "var(--ink-soft)" }}>
          <a href="#filosofia" className="hover:opacity-60 transition-opacity">Filosofia</a>
          <a href="#assinatura" className="hover:opacity-60 transition-opacity">Assinatura</a>
          <a href="#servicos" className="hover:opacity-60 transition-opacity">Serviços</a>
          <a href="#galeria" className="hover:opacity-60 transition-opacity">Galeria</a>
        </nav>
        <a
          href={WA}
          target="_blank"
          rel="noreferrer"
          className="justify-self-end eyebrow inline-flex items-center gap-2 border px-5 py-3 rounded-full transition-colors hover:text-white"
          style={{ borderColor: "var(--ink)", color: "var(--ink)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--ink)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <span>Reservar</span>
          <span>→</span>
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative pt-[78px]">
      <div className="grid lg:grid-cols-[1.05fr_1fr] min-h-[92vh]">
        {/* Left — editorial type */}
        <div className="relative flex flex-col justify-between px-8 lg:px-16 py-14 lg:py-20" style={{ background: "var(--ivory)" }}>
          <div className="flex items-center gap-4">
            <span className="w-10 h-px" style={{ background: "var(--wine)" }} />
            <span className="eyebrow" style={{ color: "var(--wine)" }}>Estética Clínica · Araxá MG</span>
          </div>

          <div>
            <h1 className="serif leading-[0.92] tracking-tight" style={{ fontSize: "clamp(64px, 9.5vw, 148px)", color: "var(--ink)" }}>
              A ciência
              <br />
              da beleza,
              <br />
              <span className="serif-i" style={{ color: "var(--wine)" }}>refinada.</span>
            </h1>
            <p className="mt-10 max-w-md text-[15px] leading-[1.7]" style={{ color: "var(--ink-soft)" }}>
              Protocolos autorais em estética facial conduzidos pela enfermeira esteta Letícia Gomes — resultados naturais, discretos e duradouros, no coração de Araxá.
            </p>
            <div className="mt-10 flex items-center gap-8">
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                className="eyebrow inline-flex items-center gap-3 px-7 py-4 rounded-full text-white transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--ink)" }}
              >
                Agendar consulta <span>→</span>
              </a>
              <a href="#assinatura" className="eyebrow" style={{ color: "var(--ink)" }}>
                Nosso ritual ↓
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-10 border-t" style={{ borderColor: "var(--line)" }}>
            <div>
              <div className="serif text-[42px] leading-none" style={{ color: "var(--wine)" }}>08+</div>
              <div className="mt-2 eyebrow" style={{ color: "var(--mid)" }}>Anos de prática</div>
            </div>
            <div>
              <div className="serif text-[42px] leading-none" style={{ color: "var(--wine)" }}>612594</div>
              <div className="mt-2 eyebrow" style={{ color: "var(--mid)" }}>Coren · MG</div>
            </div>
            <div>
              <div className="serif text-[42px] leading-none" style={{ color: "var(--wine)" }}>1:1</div>
              <div className="mt-2 eyebrow" style={{ color: "var(--mid)" }}>Atendimento</div>
            </div>
          </div>
        </div>

        {/* Right — portrait */}
        <div className="relative overflow-hidden" style={{ background: "var(--bone)" }}>
          <img
            src={IMG.port2}
            alt="Letícia Gomes"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "50% 20%" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(23,18,20,0) 55%, rgba(23,18,20,0.35) 100%)" }} />
          <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between text-white">
            <div>
              <div className="eyebrow opacity-80">Enfermeira Esteta</div>
              <div className="serif-i text-[28px] mt-1">Letícia Gomes</div>
            </div>
            <a href={IG} target="_blank" rel="noreferrer" className="eyebrow underline underline-offset-4 opacity-80 hover:opacity-100">
              @resultados_lgestetica
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = ["Hydra Gloss", "◆", "Hydra Lips", "◆", "Skinbooster", "◆", "Limpeza Profunda", "◆", "Skincare Clínico", "◆", "Protocolos Autorais", "◆"];
  const row = [...items, ...items, ...items, ...items];
  return (
    <section className="py-6 border-y overflow-hidden" style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
      <div className="flex marquee-track whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className={`px-8 ${t === "◆" ? "text-[10px]" : "serif-i text-[26px]"}`} style={{ color: t === "◆" ? "var(--wine)" : "var(--ink)" }}>
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FILOSOFIA ---------------- */
function Filosofia() {
  return (
    <section id="filosofia" className="py-32 lg:py-40" style={{ background: "var(--ivory)" }}>
      <div className="max-w-[1200px] mx-auto px-8 lg:px-14">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          <div className="fade-up">
            <span className="eyebrow" style={{ color: "var(--wine)" }}>— Filosofia</span>
          </div>
          <div className="fade-up">
            <p className="serif text-[36px] lg:text-[52px] leading-[1.15] tracking-tight" style={{ color: "var(--ink)" }}>
              Acredito que a beleza mais poderosa é <span className="serif-i" style={{ color: "var(--wine)" }}>a que já existe em você</span> — revelada com técnica, tempo e cuidado.
            </p>
            <div className="mt-14 grid sm:grid-cols-3 gap-10">
              {[
                { n: "01", t: "Diagnóstico", d: "Cada tratamento começa por uma leitura clínica da sua pele." },
                { n: "02", t: "Protocolo", d: "Ativos, doses e cadência desenhados para os seus objetivos." },
                { n: "03", t: "Acompanhamento", d: "Revisão contínua para resultados que amadurecem com você." },
              ].map((s) => (
                <div key={s.n}>
                  <div className="serif-i text-[22px]" style={{ color: "var(--wine)" }}>{s.n}</div>
                  <div className="mt-3 text-[15px] font-medium" style={{ color: "var(--ink)" }}>{s.t}</div>
                  <div className="mt-2 text-[14px] leading-[1.6]" style={{ color: "var(--mid)" }}>{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ASSINATURA (Hydra Gloss featured) ---------------- */
function Assinatura() {
  return (
    <section id="assinatura" className="py-28 lg:py-36" style={{ background: "var(--paper)" }}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <div className="fade-up order-2 lg:order-1 relative">
          <div className="absolute -top-6 -left-6 eyebrow" style={{ color: "var(--wine)" }}>N.º 01 · Assinatura</div>
          <div className="relative overflow-hidden rounded-[6px]" style={{ aspectRatio: "4 / 5" }}>
            <img src={IMG.gloss2} alt="Hydra Gloss" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center" }} />
          </div>
        </div>
        <div className="fade-up order-1 lg:order-2">
          <span className="eyebrow" style={{ color: "var(--wine)" }}>Tratamento Assinatura</span>
          <h2 className="mt-5 serif text-[64px] lg:text-[92px] leading-[0.95] tracking-tight" style={{ color: "var(--ink)" }}>
            Hydra <span className="serif-i" style={{ color: "var(--wine)" }}>Gloss</span>
          </h2>
          <p className="mt-8 text-[16px] leading-[1.75] max-w-lg" style={{ color: "var(--ink-soft)" }}>
            Hidratação profunda, brilho vivo e definição sutil para os lábios. Um ritual desenhado para devolver saúde e luminosidade sem alterar seus traços — o toque que se tornou marca registrada da clínica.
          </p>
          <ul className="mt-10 divide-y" style={{ borderColor: "var(--line)" }}>
            {[
              ["Duração", "45 minutos"],
              ["Recuperação", "Imediata"],
              ["Resultado", "Progressivo · 7 a 14 dias"],
              ["Indicação", "Todos os tipos de pele"],
            ].map(([k, v]) => (
              <li key={k} className="flex items-center justify-between py-4 border-b" style={{ borderColor: "var(--line-soft)" }}>
                <span className="eyebrow" style={{ color: "var(--mid)" }}>{k}</span>
                <span className="serif-i text-[20px]" style={{ color: "var(--ink)" }}>{v}</span>
              </li>
            ))}
          </ul>
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 eyebrow px-7 py-4 rounded-full text-white"
            style={{ background: "var(--wine)" }}
          >
            Reservar Hydra Gloss <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICOS (list) ---------------- */
function Servicos() {
  const items = [
    { n: "02", t: "Hydra Lips", d: "Preenchimento com foco em hidratação, contorno e resultado natural.", img: IMG.lips1 },
    { n: "03", t: "Limpeza de Pele Profunda", d: "Higienização clínica com extração cuidadosa e renovação da textura.", img: IMG.skin },
    { n: "04", t: "Skincare Personalizado", d: "Rotina desenhada para o seu tipo de pele, guiada por ativos científicos.", img: IMG.gloss3 },
    { n: "05", t: "Consulta & Diagnóstico", d: "Leitura clínica completa para desenhar o seu protocolo assinatura.", img: IMG.port1 },
  ];
  return (
    <section id="servicos" className="py-28 lg:py-36" style={{ background: "var(--ivory)" }}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <div className="fade-up flex items-end justify-between mb-16 gap-8 flex-wrap">
          <div>
            <span className="eyebrow" style={{ color: "var(--wine)" }}>— O menu</span>
            <h2 className="mt-4 serif text-[52px] lg:text-[80px] leading-[0.95] tracking-tight" style={{ color: "var(--ink)" }}>
              Serviços <span className="serif-i" style={{ color: "var(--wine)" }}>autorais</span>
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-[1.7]" style={{ color: "var(--mid)" }}>
            Cada tratamento é conduzido em atendimento individual, com protocolos ajustados à leitura da sua pele no momento da consulta.
          </p>
        </div>

        <ul>
          {items.map((s, i) => (
            <li
              key={s.n}
              className="group fade-up border-t last:border-b relative overflow-hidden"
              style={{ borderColor: "var(--line)" }}
            >
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                className="grid grid-cols-[64px_1fr_auto] items-center gap-8 py-8 lg:py-10 px-2 transition-colors"
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--paper)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <span className="serif-i text-[22px]" style={{ color: "var(--wine)" }}>{s.n}</span>
                <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-8">
                  <span className="serif text-[32px] lg:text-[44px] leading-none" style={{ color: "var(--ink)" }}>{s.t}</span>
                  <span className="text-[14px] max-w-md" style={{ color: "var(--mid)" }}>{s.d}</span>
                </div>
                <span className="eyebrow flex items-center gap-3" style={{ color: "var(--ink)" }}>
                  Reservar <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
              {/* hover thumb */}
              <div className="pointer-events-none absolute right-40 top-1/2 -translate-y-1/2 w-[160px] h-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block">
                <img src={s.img} alt="" className="w-full h-full object-cover rounded-[4px] shadow-2xl" />
              </div>
              {i === 0 && null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- GALERIA (results) ---------------- */
function Galeria() {
  const items = [
    { src: IMG.gloss1, cat: "Hydra Gloss", cap: "Definição & brilho" },
    { src: IMG.gloss2, cat: "Hydra Gloss", cap: "Hidratação profunda" },
    { src: IMG.gloss3, cat: "Hydra Gloss", cap: "Contorno natural" },
    { src: IMG.lips1,  cat: "Hydra Lips",  cap: "Resultado imediato" },
    { src: IMG.skin,   cat: "Limpeza de Pele", cap: "Textura renovada" },
    { src: IMG.port1,  cat: "Ritual",      cap: "No estúdio · Araxá" },
  ];
  return (
    <section id="galeria" className="py-28 lg:py-36" style={{ background: "var(--bone)" }}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <div className="fade-up flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <span className="eyebrow" style={{ color: "var(--wine)" }}>— Portfólio</span>
            <h2 className="mt-4 serif text-[52px] lg:text-[80px] leading-[0.95] tracking-tight" style={{ color: "var(--ink)" }}>
              Resultados <span className="serif-i" style={{ color: "var(--wine)" }}>reais</span>
            </h2>
          </div>
          <a href={IG} target="_blank" rel="noreferrer" className="eyebrow underline underline-offset-4" style={{ color: "var(--ink)" }}>
            Ver mais no Instagram →
          </a>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {items.map((it, i) => {
            const layouts = [
              "col-span-12 md:col-span-7 aspect-[4/5]",
              "col-span-12 md:col-span-5 aspect-[4/5]",
              "col-span-6 md:col-span-4 aspect-[3/4]",
              "col-span-6 md:col-span-4 aspect-[3/4]",
              "col-span-12 md:col-span-4 aspect-[3/4]",
              "col-span-12 aspect-[16/7]",
            ];
            return (
              <figure key={i} className={`fade-up relative overflow-hidden rounded-[4px] ${layouts[i]}`} style={{ background: "var(--paper)" }}>
                <img src={it.src} alt={it.cap} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-[1.04]" style={{ objectPosition: "center" }} />
                <figcaption className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between text-white" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(23,18,20,0.55) 100%)" }}>
                  <span className="serif-i text-[22px]">{it.cap}</span>
                  <span className="eyebrow opacity-90">{it.cat}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CITAÇÃO ---------------- */
function Quote() {
  return (
    <section className="py-32" style={{ background: "var(--wine)", color: "var(--ivory)" }}>
      <div className="max-w-[1000px] mx-auto px-8 text-center">
        <div className="serif-i text-[8vw] leading-none opacity-30" style={{ fontSize: "clamp(80px, 12vw, 180px)" }}>“</div>
        <p className="serif text-[30px] lg:text-[44px] leading-[1.2] mt-[-30px]">
          Ciência e cuidado <span className="serif-i">guiando resultados naturais.</span>
        </p>
        <div className="mt-10 eyebrow opacity-80">Letícia Gomes · Coren 612594 MG</div>
      </div>
    </section>
  );
}

/* ---------------- DEPOIMENTOS ---------------- */
function Depoimentos() {
  const items = [
    { t: "Resultado natural e duradouro. A Letícia entende o que combina com o seu rosto — a experiência inteira parece de outro nível.", n: "Rafaela C.", c: "Araxá · MG" },
    { t: "Fiz limpeza de pele e o skincare clínico. Minha pele nunca esteve tão bem — sinto e vejo a diferença todos os dias.", n: "Isabela M.", c: "Araxá · MG" },
    { t: "Tinha receio de tratar os lábios. Ela conduziu tudo com tanta calma e clareza que virei cliente para sempre.", n: "Camila R.", c: "Uberaba · MG" },
  ];
  return (
    <section className="py-28 lg:py-36" style={{ background: "var(--ivory)" }}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <div className="fade-up mb-16">
          <span className="eyebrow" style={{ color: "var(--wine)" }}>— Vozes</span>
          <h2 className="mt-4 serif text-[52px] lg:text-[80px] leading-[0.95] tracking-tight" style={{ color: "var(--ink)" }}>
            Quem viveu, <span className="serif-i" style={{ color: "var(--wine)" }}>voltou.</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {items.map((d, i) => (
            <blockquote key={i} className="fade-up p-10 border" style={{ borderColor: "var(--line)", background: "var(--paper)" }}>
              <div className="serif-i text-[46px] leading-none" style={{ color: "var(--wine)" }}>“</div>
              <p className="mt-4 serif text-[22px] leading-[1.4]" style={{ color: "var(--ink)" }}>{d.t}</p>
              <footer className="mt-8 pt-6 border-t flex items-center justify-between" style={{ borderColor: "var(--line-soft)" }}>
                <span className="eyebrow" style={{ color: "var(--ink)" }}>{d.n}</span>
                <span className="text-[12px]" style={{ color: "var(--mid)" }}>{d.c}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA / CONTATO ---------------- */
function CTA() {
  return (
    <section id="contato" className="relative py-32 lg:py-40 overflow-hidden" style={{ background: "var(--ink)" }}>
      <div className="absolute inset-0 opacity-30">
        <img src={IMG.port1} alt="" className="w-full h-full object-cover" style={{ objectPosition: "50% 25%", filter: "grayscale(0.3)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(23,18,20,0.85), rgba(23,18,20,0.75))" }} />
      </div>
      <div className="relative max-w-[1000px] mx-auto px-8 text-center text-white">
        <span className="eyebrow" style={{ color: "var(--nude)" }}>— Agende sua consulta</span>
        <h2 className="mt-6 serif text-[56px] lg:text-[92px] leading-[0.95] tracking-tight">
          A sua próxima <br />
          <span className="serif-i" style={{ color: "var(--nude)" }}>versão começa aqui.</span>
        </h2>
        <p className="mt-8 max-w-lg mx-auto text-[15px] leading-[1.75]" style={{ color: "rgba(245,241,234,0.75)" }}>
          Estúdio em Araxá · MG. Atendimento individual, protocolos personalizados, agenda com vagas limitadas por semana.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="eyebrow inline-flex items-center gap-3 px-8 py-4 rounded-full"
            style={{ background: "var(--ivory)", color: "var(--ink)" }}
          >
            Reservar pelo WhatsApp <span>→</span>
          </a>
          <a
            href={IG}
            target="_blank"
            rel="noreferrer"
            className="eyebrow inline-flex items-center gap-3 px-8 py-4 rounded-full border"
            style={{ borderColor: "rgba(245,241,234,0.4)", color: "var(--ivory)" }}
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer style={{ background: "var(--ivory)" }} className="pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <div className="grid lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="serif-i text-[42px]" style={{ color: "var(--wine)" }}>Letícia Gomes</div>
            <p className="mt-4 max-w-sm text-[14px] leading-[1.7]" style={{ color: "var(--mid)" }}>
              Estética clínica autoral em Araxá · MG. Enfermeira esteta · Coren 612594.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-4" style={{ color: "var(--ink)" }}>Navegação</div>
            <ul className="space-y-2 text-[14px]" style={{ color: "var(--mid)" }}>
              <li><a href="#filosofia">Filosofia</a></li>
              <li><a href="#assinatura">Assinatura</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#galeria">Galeria</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-4" style={{ color: "var(--ink)" }}>Contato</div>
            <ul className="space-y-2 text-[14px]" style={{ color: "var(--mid)" }}>
              <li><a href={WA} target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href={IG} target="_blank" rel="noreferrer">Instagram</a></li>
              <li>Araxá · MG</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-4" style={{ color: "var(--ink)" }}>Credencial</div>
            <ul className="space-y-2 text-[14px]" style={{ color: "var(--mid)" }}>
              <li>Coren 612594 MG</li>
              <li>Enfermeira Esteta</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t flex items-center justify-between text-[11px] eyebrow" style={{ borderColor: "var(--line)", color: "var(--mid)" }}>
          <span>© 2025 Letícia Gomes Estética Clínica</span>
          <span>Araxá · Minas Gerais</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- WHATSAPP FLOAT ---------------- */
function Whats() {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center transition-transform hover:scale-105"
      style={{ background: "var(--wine)", width: 58, height: 58, borderRadius: 999, boxShadow: "0 10px 40px rgba(74,29,46,0.35)" }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="var(--ivory)">
        <path d="M20.52 3.48A11.9 11.9 0 0012.02 0C5.42 0 .04 5.37.04 12c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.62A11.94 11.94 0 0012.02 24C18.62 24 24 18.63 24 12c0-3.19-1.24-6.19-3.48-8.52zm-8.5 18.32a9.8 9.8 0 01-5-1.37l-.36-.21-3.68.96.98-3.58-.23-.37A9.79 9.79 0 012.24 12C2.24 6.6 6.63 2.2 12.02 2.2c2.61 0 5.06 1.02 6.9 2.86a9.72 9.72 0 012.88 6.94c0 5.4-4.39 9.8-9.78 9.8zm5.63-7.35c-.31-.16-1.83-.9-2.11-1s-.49-.16-.7.16-.8 1-.98 1.22c-.18.21-.36.24-.67.08-.31-.16-1.3-.48-2.48-1.54a9.27 9.27 0 01-1.71-2.13c-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.51-.52-.7-.53h-.6c-.21 0-.54.08-.83.39-.29.31-1.09 1.07-1.09 2.6s1.11 3.02 1.27 3.23c.16.21 2.2 3.37 5.34 4.72.75.32 1.33.52 1.78.66.75.24 1.43.21 1.97.13.6-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.37z"/>
      </svg>
    </a>
  );
}

function Home() {
  useReveal();
  return (
    <div>
      <Nav />
      <Hero />
      <Marquee />
      <Filosofia />
      <Assinatura />
      <Servicos />
      <Galeria />
      <Quote />
      <Depoimentos />
      <CTA />
      <Footer />
      <Whats />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
