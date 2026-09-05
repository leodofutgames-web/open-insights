import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-camisas.jpg";
import camisa1 from "@/assets/camisa-1.jpg";
import camisa2 from "@/assets/camisa-2.jpg";
import camisa3 from "@/assets/camisa-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Camisa 12 | Camisas de Futebol Premium" },
      {
        name: "description",
        content:
          "Camisas de futebol versão jogador e torcedor, tecido premium e envio para todo o Brasil. Monte seu manto com nome e número.",
      },
      { property: "og:title", content: "Camisa 12 | Camisas de Futebol Premium" },
      {
        property: "og:description",
        content: "Mantos de time com acabamento premium, personalização e frete grátis acima de R$ 299.",
      },
    ],
  }),
  component: Index,
});

const camisas = [
  { nome: "Manto Ouro Verde", time: "Edição Nacional", preco: "R$ 249", img: camisa1 },
  { nome: "Listrado Rubro-Negro", time: "Edição Clássica", preco: "R$ 279", img: camisa2 },
  { nome: "Branca Real", time: "Edição Away", preco: "R$ 229", img: camisa3 },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-black tracking-[0.2em] uppercase">Camisa 12</span>
          <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#colecao" className="transition-colors hover:text-foreground">Coleção</a>
            <a href="#qualidade" className="transition-colors hover:text-foreground">Qualidade</a>
            <a href="#contato" className="transition-colors hover:text-foreground">Contato</a>
          </nav>
          <a
            href="#colecao"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Comprar
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Camisa de futebol exposta em estádio à noite"
          width={1600}
          height={1008}
          className="h-[560px] w-full object-cover md:h-[640px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-muted-foreground">
              Temporada 25/26
            </p>
            <h1 className="mt-4 max-w-xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Vista o manto.<br />Sinta o jogo.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Camisas versão jogador e torcedor, tecido leve com tecnologia de secagem rápida.
              Personalize com seu nome e número.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#colecao"
                className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Ver coleção
              </a>
              <a
                href="#qualidade"
                className="rounded-full border border-border px-7 py-3 text-sm font-semibold transition-colors hover:bg-accent"
              >
                Nossa qualidade
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 text-center md:grid-cols-4">
          {[
            ["Frete grátis", "acima de R$ 299"],
            ["Até 12x", "sem juros"],
            ["Troca fácil", "em 30 dias"],
            ["+40 mil", "torcedores atendidos"],
          ].map(([t, s]) => (
            <div key={t}>
              <p className="text-base font-bold">{t}</p>
              <p className="text-sm text-muted-foreground">{s}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="colecao" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">Coleção em destaque</h2>
        <p className="mt-2 text-muted-foreground">Modelos mais pedidos da temporada.</p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {camisas.map((c) => (
            <article
              key={c.nome}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl"
            >
              <img
                src={c.img}
                alt={c.nome}
                loading="lazy"
                width={900}
                height={1100}
                className="aspect-[9/11] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <h3 className="font-bold">{c.nome}</h3>
                  <p className="text-sm text-muted-foreground">{c.time}</p>
                </div>
                <span className="text-lg font-black">{c.preco}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="qualidade" className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          {[
            ["Tecido premium", "Poliéster com furos de ventilação e toque leve, igual ao usado em campo."],
            ["Personalização", "Nome, número e patch de campeonato aplicados com precisão."],
            ["Entrega rápida", "Despacho em até 24h e rastreio para todo o Brasil."],
          ].map(([t, d]) => (
            <div key={t}>
              <h3 className="text-xl font-bold">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">Garanta o seu manto</h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Fale com a gente e receba as novidades da próxima coleção em primeira mão.
        </p>
        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="seu@email.com"
            className="flex-1 rounded-full border border-input bg-background px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Quero novidades
          </button>
        </form>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © 2026 Camisa 12. Todos os direitos reservados.
      </footer>
    </div>
  );
}
