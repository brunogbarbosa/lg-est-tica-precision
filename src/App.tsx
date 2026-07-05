import { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";

const WA = "https://wa.me/message/TMQD6AGCLOILK1";

const IMG = {
  hydraLips: "/__l5e/assets-v1/e76d9fa0-6a9d-48e5-bfa8-7e09e70a1de2/image.png",
  limpeza: "/__l5e/assets-v1/1d8630bb-6f05-44e3-913f-ec0af92cdea7/image-2.png",
  gloss1: "/__l5e/assets-v1/b5979fb2-e247-4868-85ec-dff4f872e214/image-3.png",
  gloss2: "/__l5e/assets-v1/5ff752b4-2880-4273-a0d5-798fb2186156/image-4.png",
  leticia1: "/__l5e/assets-v1/f67036f6-f58b-4b38-92cb-0c469bae95f2/image-5.png",
  leticia2: "/__l5e/assets-v1/d4569c90-622b-4167-900e-3cbeeb1c5337/image-6.png",
  gloss3: "/__l5e/assets-v1/5fa989aa-6812-4640-8f21-a98290c6a275/image-7.png",
};

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("in"), i * 60);
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

function useCounter(target: number, ref: React.RefObject<HTMLElement | null>) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const dur = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            setV(Math.floor(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target, ref]);
  return v;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const link = "text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--mid)] hover:text-[color:var(--rose)] transition-colors cursor-pointer";
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        background: "rgba(255,255,255,0.85)",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "border-color .3s",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[76px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div
            className="w-11 h-11 flex items-center justify-center font-extrabold text-[color:var(--rose)]"
            style={{ background: "var(--rose-dim)", borderRadius: 8, fontSize: 18 }}
          >
            LG
          </div>
          <div className="leading-tight">
            <div className="font-bold text-[12px] uppercase tracking-[0.15em] text-[color:var(--graphite)]">
              LETÍCIA GOMES
            </div>
            <div className="text-[10px] text-[color:var(--muted)]">
              ESTÉTICA CLÍNICA · ARAXÁ MG
            </div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          <a href="#sobre" className={link}>Sobre</a>
          <a href="#servicos" className={link}>Serviços</a>
          <a href="#resultados" className={link}>Resultados</a>
          <a href="#contato" className={link}>Contato</a>
        </nav>
        <a
          href={WA}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full font-bold text-[12px] uppercase tracking-wider text-white transition-all hover:brightness-110"
          style={{ background: "var(--rose)" }}
        >
          Agendar
        </a>
        <button className="md:hidden text-[color:var(--graphite)]" onClick={() => setOpen(!open)} aria-label="menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-3 bg-white border-t" style={{ borderColor: "var(--line)" }}>
          <a href="#sobre" onClick={() => setOpen(false)} className={link}>Sobre</a>
          <a href="#servicos" onClick={() => setOpen(false)} className={link}>Serviços</a>
          <a href="#resultados" onClick={() => setOpen(false)} className={link}>Resultados</a>
          <a href="#contato" onClick={() => setOpen(false)} className={link}>Contato</a>
          <a href={WA} target="_blank" rel="noreferrer" className="mt-2 inline-flex justify-center px-5 py-2.5 rounded-full font-bold text-[12px] uppercase text-white" style={{ background: "var(--rose)" }}>Agendar</a>
        </div>
      )}
    </header>
  );
}

function BeforeAfterMini({ before, after, tag }: { before: string; after: string; tag?: string }) {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(232,100,138,0.10)] bg-white">
      <div className="grid grid-rows-2 h-full">
        <div className="relative">
          <img src={before} alt="antes" className="w-full h-full object-cover" style={{ objectPosition: "center" }} />
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider" style={{ background: "white", color: "var(--rose)", border: "1px solid var(--rose)" }}>Antes</span>
        </div>
        <div className="relative">
          <img src={after} alt="depois" className="w-full h-full object-cover" style={{ objectPosition: "center" }} />
          <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider text-white" style={{ background: "var(--rose)" }}>Depois</span>
        </div>
      </div>
      {tag && (
        <span
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
          style={{ background: "var(--rose)" }}
        >
          {tag}
        </span>
      )}
    </div>
  );
}

function Hero() {
  const r1 = useRef<HTMLSpanElement>(null);
  const r2 = useRef<HTMLSpanElement>(null);
  const n1 = useCounter(565, r1);
  const n2 = useCounter(100, r2);
  return (
    <section id="top" className="relative pt-[76px]">
      <div className="grid lg:grid-cols-[52%_48%]">
        <div className="px-6 lg:px-16 py-16 lg:py-28">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-widest"
            style={{ background: "var(--rose-dim)", color: "var(--rose)", border: "1px solid var(--rose)" }}
          >
            ✦ Coren 612594 MG · Araxá MG
          </span>
          <h1
            className="mt-6 font-extrabold text-[color:var(--graphite)]"
            style={{ fontSize: "clamp(52px,7vw,96px)", lineHeight: 0.88, letterSpacing: "-0.02em" }}
          >
            Resultados
            <br />
            que você{" "}
            <span style={{ color: "var(--rose)" }}>vê e sente.</span>
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed max-w-lg" style={{ color: "var(--mid)" }}>
            Ciência e cuidado guiando tratamentos faciais em Araxá. Especialista em Hydra Gloss e estética de precisão.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="px-9 py-4 rounded-full text-white font-bold text-[13px] uppercase tracking-wider transition-all hover:brightness-110"
              style={{ background: "var(--rose)" }}
            >
              Agendar agora
            </a>
            <a href="#resultados" className="font-semibold text-[13px]" style={{ color: "var(--rose)" }}>
              Ver resultados ↓
            </a>
          </div>
          <div className="mt-10 flex items-center gap-8">
            <div>
              <div className="font-extrabold text-[28px] text-[color:var(--graphite)]">
                <span ref={r1}>{n1}</span>+
              </div>
              <div className="text-[11px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>seguidoras</div>
            </div>
            <div className="w-px h-10" style={{ background: "var(--rose)" }} />
            <div>
              <div className="font-extrabold text-[28px] text-[color:var(--graphite)]">
                <span ref={r2}>{n2}</span>+
              </div>
              <div className="text-[11px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>procedimentos</div>
            </div>
            <div className="w-px h-10" style={{ background: "var(--rose)" }} />
            <div>
              <div className="font-extrabold text-[18px]" style={{ color: "var(--rose)" }}>Coren</div>
              <div className="text-[11px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>612594 MG</div>
            </div>
          </div>
        </div>

        <div
          className="p-6 lg:p-10"
          style={{ background: "var(--blush)", borderBottomLeftRadius: 48 }}
        >
          <div className="grid grid-cols-2 gap-4 h-full min-h-[520px]">
            <BeforeAfterMini before={IMG.gloss1} after={IMG.gloss2} tag="Hydra Gloss" />
            <BeforeAfterMini before={IMG.hydraLips} after={IMG.gloss3} tag="Hydra Lips" />
            <BeforeAfterMini before={IMG.gloss2} after={IMG.gloss3} />
            <BeforeAfterMini before={IMG.limpeza.replace("image-2","image-2")} after={IMG.limpeza} tag="Limpeza" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProofStrip() {
  return (
    <section style={{ background: "var(--rose)" }} className="py-8">
      <div className="border-y border-white/30 py-4">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-center gap-3 text-center text-white">
          <span className="font-serif-i text-[26px] md:text-[28px]">Ciência e cuidado</span>
          <span className="opacity-60">·</span>
          <span className="font-bold text-[20px] md:text-[22px]">guiando resultados naturais.</span>
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="py-24 lg:py-32" style={{ background: "var(--off)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[55%_45%] gap-14 items-center">
        <div className="fade-up">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.3em]" style={{ color: "var(--rose)" }}>
            Quem sou eu
          </div>
          <h2 className="mt-5 leading-[1.05]">
            <span className="font-serif-i text-[44px] lg:text-[52px] text-[color:var(--graphite)]">e por que você pode</span>
            <br />
            <span className="font-extrabold text-[44px] lg:text-[52px]" style={{ color: "var(--rose)" }}>confiar em mim.</span>
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed max-w-xl" style={{ color: "var(--mid)" }}>
            Letícia Gomes, enfermeira esteta (Coren 612594 MG), especialista em estética clínica em Araxá há anos, com foco em protocolos baseados em ciência e resultados naturais e reais.
          </p>
          <ul className="mt-8 space-y-3">
            {["Coren 612594 MG", "Protocolos científicos", "Resultados naturais"].map((t) => (
              <li key={t} className="flex items-center gap-3 font-semibold text-[15px]" style={{ color: "var(--graphite)" }}>
                <span style={{ color: "var(--rose)" }}>→</span> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="fade-up relative">
          <div className="relative rounded-[24px] bg-white shadow-[0_30px_80px_rgba(232,100,138,0.15)] overflow-hidden">
            <img
              src={IMG.leticia1}
              alt="Letícia Gomes"
              className="w-full object-cover"
              style={{ objectPosition: "top center", minHeight: 460, maxHeight: 620 }}
            />
            <span
              className="absolute bottom-5 left-5 px-3.5 py-1.5 rounded-full text-[11px] font-bold text-white"
              style={{ background: "var(--rose)" }}
            >
              Letícia Gomes · Estética Clínica
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  size,
  featured,
  bg,
  icon,
  title,
  desc,
  tag,
  badge,
}: {
  size: "lg" | "sm";
  featured?: boolean;
  bg?: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  tag: string;
  badge?: string;
}) {
  return (
    <div
      className={`fade-up rounded-3xl p-8 lg:p-10 transition-all duration-[350ms] hover:-translate-y-1 ${size === "lg" ? "lg:col-span-3" : "lg:col-span-2"}`}
      style={{
        background: bg || "var(--off)",
        border: featured ? "1px solid var(--rose)" : "1px solid var(--line)",
        boxShadow: "0 2px 0 rgba(0,0,0,0)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 20px 60px rgba(232,100,138,0.12)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 0 rgba(0,0,0,0)")}
    >
      <div className="flex items-start justify-between">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: "white", border: "1px solid var(--line)", color: "var(--rose)" }}
        >
          {icon}
        </div>
        {badge && (
          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold text-white uppercase tracking-wider" style={{ background: "var(--rose)" }}>
            {badge}
          </span>
        )}
      </div>
      <h3 className={`mt-6 font-bold text-[color:var(--graphite)] ${size === "lg" ? "text-[26px]" : "text-[19px]"}`}>{title}</h3>
      <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "var(--mid)" }}>{desc}</p>
      <span
        className="inline-block mt-6 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
        style={{ background: "var(--rose-dim)", color: "var(--rose)", border: "1px solid var(--rose)" }}
      >
        {tag}
      </span>
    </div>
  );
}

function Servicos() {
  const Ico = ({ d }: { d: string }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="fade-up mb-14">
          <span className="font-serif-i text-[42px] lg:text-[52px]" style={{ color: "var(--mid)" }}>nossos</span>{" "}
          <span className="font-extrabold text-[52px] lg:text-[64px] text-[color:var(--graphite)] tracking-tight">SERVIÇOS</span>
        </div>
        <div className="grid lg:grid-cols-5 gap-6">
          <ServiceCard
            size="lg"
            featured
            bg="var(--rose-dim)"
            badge="Destaque"
            tag="Hydra Gloss"
            title="Hydra Gloss"
            desc="O procedimento mais procurado da clínica. Hidratação profunda, brilho natural e definição para lábios visivelmente mais saudáveis, sem alterar traços."
            icon={<Ico d="M12 3c3 4 5 7 5 10a5 5 0 1 1-10 0c0-3 2-6 5-10z" />}
          />
          <ServiceCard
            size="sm"
            tag="Protocolo Clínico"
            title="Limpeza de Pele Profunda"
            desc="Higienização profissional que remove impurezas, cravos e renova a textura da pele com conforto."
            icon={<Ico d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0zM8 12h8M12 8v8" />}
          />
          <ServiceCard
            size="sm"
            tag="Skincare"
            title="Skincare Personalizado"
            desc="Protocolo desenhado para o seu tipo de pele, com ativos científicos e resultados consistentes."
            icon={<Ico d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />}
          />
          <ServiceCard
            size="lg"
            bg="var(--blush)"
            tag="Hydra Lips"
            title="Hydra Lips"
            desc="Preenchimento labial com foco em hidratação e resultado natural. Lábios mais lisos, definidos e saudáveis, sem exageros."
            icon={<Ico d="M4 12c2-3 5-4 8-4s6 1 8 4c-2 3-5 4-8 4s-6-1-8-4z" />}
          />
        </div>
      </div>
    </section>
  );
}

function Resultados() {
  const cards = [
    { before: IMG.hydraLips.split("Hydra")[0] || IMG.hydraLips, after: IMG.hydraLips, name: "Hydra Lips", src: IMG.hydraLips },
    { name: "Hydra Gloss", src: IMG.gloss1 },
    { name: "Hydra Gloss", src: IMG.gloss2 },
    { name: "Hydra Gloss", src: IMG.gloss3 },
    { name: "Limpeza de Pele", src: IMG.limpeza },
    { name: "Hydra Lips", src: IMG.hydraLips },
  ];
  return (
    <section id="resultados" className="py-24 lg:py-32" style={{ background: "var(--blush)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="fade-up mb-14">
          <span className="font-extrabold text-[54px] lg:text-[72px] text-[color:var(--graphite)] tracking-tight">RESULTADOS</span>{" "}
          <span className="font-serif-i text-[44px] lg:text-[56px]" style={{ color: "var(--rose)" }}>reais.</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="fade-up rounded-[20px] overflow-hidden bg-white shadow-[0_10px_40px_rgba(232,100,138,0.10)]">
              <div className="relative">
                <img src={c.src} alt={c.name} className="w-full h-[420px] object-cover" style={{ objectPosition: "center" }} />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider" style={{ background: "var(--rose)" }}>
                  Hydra Gloss
                </span>
              </div>
              <div className="p-5">
                <div className="font-semibold text-[12px] uppercase tracking-wider text-[color:var(--graphite)]">{c.name}</div>
                <div className="text-[11px] mt-1" style={{ color: "var(--muted)" }}>Hydra Gloss LG Estética</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Depoimentos() {
  const items = [
    { t: "Hydra Gloss perfeito! Resultado natural, durou muito mais do que eu esperava. Letícia é incrível.", n: "Rafaela C.", c: "Araxá" },
    { t: "Fiz limpeza de pele e o protocolo de skincare. Minha pele nunca esteve tão bem. Profissional demais!", n: "Isabela M.", c: "Araxá" },
    { t: "Sempre tive medo de procedimentos nos lábios. A Letícia passou tanta segurança que nem senti. Amei!", n: "Camila R.", c: "MG" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="fade-up mb-14">
          <span className="font-serif-i text-[42px] lg:text-[52px] text-[color:var(--graphite)]">quem veio,</span>{" "}
          <span className="font-extrabold text-[42px] lg:text-[52px]" style={{ color: "var(--rose)" }}>VOLTOU.</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((d, i) => (
            <div
              key={i}
              className="fade-up rounded-3xl p-8"
              style={{ background: "var(--off)", border: "1px solid var(--line)" }}
            >
              <div className="font-bold text-[14px]" style={{ color: "var(--rose)" }}>★★★★★</div>
              <p className="mt-4 italic text-[15px] leading-relaxed text-[color:var(--graphite)]">"{d.t}"</p>
              <div className="mt-6 font-bold text-[13px] uppercase tracking-widest" style={{ color: "var(--rose)" }}>{d.n}</div>
              <div className="text-[12px]" style={{ color: "var(--muted)" }}>{d.c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section id="contato" className="relative py-28 lg:py-36 overflow-hidden" style={{ background: "var(--graphite)" }}>
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(232,100,138,0.14) 0%, transparent 65%)",
        }}
      />
      <div className="relative max-w-3xl mx-auto text-center px-6">
        <span
          className="inline-flex px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-widest"
          style={{ background: "var(--rose-dim)", color: "var(--rose)", border: "1px solid var(--rose)" }}
        >
          Agendamentos pelo link
        </span>
        <h2 className="mt-6 leading-[1.05]">
          <span className="text-white font-normal text-[38px] lg:text-[48px]">Quer estar com a pele</span>
          <br />
          <span className="font-extrabold text-[52px] lg:text-[64px]" style={{ color: "var(--rose)" }}>perfeita?</span>
        </h2>
        <p className="mt-6 text-[16px]" style={{ color: "var(--muted)" }}>
          Consulta sem compromisso. Protocolos personalizados para o seu tipo de pele em Araxá, MG.
        </p>
        <a
          href={WA}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-10 px-13 py-4 rounded-full font-bold text-[14px] uppercase tracking-wider text-white transition-all duration-300"
          style={{ background: "var(--rose)", padding: "18px 52px" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "var(--rose)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "var(--rose)"; e.currentTarget.style.color = "white"; }}
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--graphite)", borderTop: "1px solid var(--line)" }} className="py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 flex items-center justify-center font-extrabold text-white" style={{ background: "var(--rose)", borderRadius: 8, fontSize: 18 }}>LG</div>
            <div className="font-bold text-[15px]">Letícia Gomes</div>
          </div>
          <p className="mt-4 text-[13px]" style={{ color: "var(--muted)" }}>
            Estética Clínica · Araxá MG · Coren 612594
          </p>
        </div>
        <div className="flex flex-col gap-2 text-[13px]" style={{ color: "var(--muted)" }}>
          <a href="#sobre" className="hover:text-white">Sobre</a>
          <a href="#servicos" className="hover:text-white">Serviços</a>
          <a href="#resultados" className="hover:text-white">Resultados</a>
          <a href="#contato" className="hover:text-white">Contato</a>
        </div>
        <div className="text-[13px]" style={{ color: "var(--muted)" }}>
          <a href="https://instagram.com/resultados_lgestetica" target="_blank" rel="noreferrer" className="block hover:text-white">
            @resultados_lgestetica
          </a>
          <a href={WA} target="_blank" rel="noreferrer" className="block mt-2 hover:text-white">
            WhatsApp
          </a>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t text-center text-[11px]" style={{ borderColor: "var(--line)", color: "var(--muted)" }}>
        © 2025 Letícia Gomes Estética Clínica · Coren 612594 MG · Araxá
      </div>
    </footer>
  );
}

function WhatsFloat() {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center wa-pulse transition-transform hover:scale-110"
      style={{ background: "var(--rose)", width: 58, height: 58, borderRadius: 999 }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M20.52 3.48A11.9 11.9 0 0012.02 0C5.42 0 .04 5.37.04 12c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.62A11.94 11.94 0 0012.02 24C18.62 24 24 18.63 24 12c0-3.19-1.24-6.19-3.48-8.52zM12.02 21.8a9.8 9.8 0 01-5-1.37l-.36-.21-3.68.96.98-3.58-.23-.37A9.79 9.79 0 012.24 12C2.24 6.6 6.63 2.2 12.02 2.2c2.61 0 5.06 1.02 6.9 2.86a9.72 9.72 0 012.88 6.94c0 5.4-4.39 9.8-9.78 9.8zm5.63-7.35c-.31-.16-1.83-.9-2.11-1s-.49-.16-.7.16-.8 1-.98 1.22c-.18.21-.36.24-.67.08-.31-.16-1.3-.48-2.48-1.54a9.27 9.27 0 01-1.71-2.13c-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.51-.52-.7-.53h-.6c-.21 0-.54.08-.83.39-.29.31-1.09 1.07-1.09 2.6s1.11 3.02 1.27 3.23c.16.21 2.2 3.37 5.34 4.72.75.32 1.33.52 1.78.66.75.24 1.43.21 1.97.13.6-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.37z"/>
      </svg>
    </a>
  );
}

function Home() {
  useReveal();
  return (
    <div>
      <Navbar />
      <Hero />
      <SocialProofStrip />
      <Sobre />
      <Servicos />
      <Resultados />
      <Depoimentos />
      <CTAFinal />
      <Footer />
      <WhatsFloat />
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
