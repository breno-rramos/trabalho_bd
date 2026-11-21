
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Scissors,
  Settings,
  Bell,
  Plus,
  ArrowUpRight,
  Clock3,
  ChevronRight,
  Search,
  Menu,
  CalendarCheck,
  UserRound,
  Sparkles,
} from "lucide-react";

const menu = [
  { name: "Visão geral", icon: LayoutDashboard, href: "#inicio" },
  { name: "Agendamentos", icon: CalendarDays, href: "#agendamentos" },
  { name: "Clientes", icon: Users, href: "#clientes" },
  { name: "Serviços", icon: Scissors, href: "#servicos" },
];

const cards = [
  {
    title: "Agendamentos",
    description: "Horários registrados",
    icon: CalendarCheck,
  },
  {
    title: "Clientes",
    description: "Clientes cadastrados",
    icon: UserRound,
  },
  {
    title: "Serviços",
    description: "Serviços disponíveis",
    icon: Scissors,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111110] text-[#F3F0EA]">

      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 z-20 hidden h-screen w-64 border-r border-white/[0.07] bg-[#171715] px-5 py-7 lg:flex lg:flex-col">

        <div className="mb-12 flex items-center gap-3 px-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C6A477] text-[#171715]">
            <Scissors size={23} />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-[0.12em]">
              BARBER
            </h1>
            <p className="text-[10px] tracking-[0.3em] text-[#C6A477]">
              STUDIO
            </p>
          </div>
        </div>

        <p className="mb-4 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
          Menu principal
        </p>

        <nav className="space-y-2">
          {menu.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                index === 0
                  ? "bg-[#C6A477] font-semibold text-[#171715]"
                  : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              <item.icon size={18} />
              {item.name}
            </a>
          ))}
        </nav>

        <div className="mt-auto">
          <a
            href="#configuracoes"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/[0.05] hover:text-white"
          >
            <Settings size={18} />
            Configurações
          </a>

          <div className="mt-5 rounded-2xl border border-white/[0.08] bg-[#20201D] p-4">
            <Sparkles size={20} className="mb-3 text-[#C6A477]" />
            <p className="text-sm font-semibold">
              Barber Studio
            </p>
            <p className="mt-1 text-xs leading-relaxed text-gray-500">
              Seu espaço para gerenciar a barbearia.
            </p>
          </div>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="lg:ml-64">

        {/* HEADER */}
        <header className="sticky top-0 z-10 flex h-[76px] items-center justify-between border-b border-white/[0.07] bg-[#111110]/95 px-5 backdrop-blur-xl md:px-9">

          <div className="flex items-center gap-3">
            <button
              aria-label="Menu"
              className="text-gray-400 lg:hidden"
            >
              <Menu size={22} />
            </button>

            <div>
              <p className="text-xs text-gray-500">
                Barber Studio / Painel
              </p>
              <h2 className="text-sm font-semibold">
                Visão geral
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="Pesquisar"
              className="rounded-xl border border-white/[0.08] p-2.5 text-gray-400 transition hover:bg-white/[0.05]"
            >
              <Search size={18} />
            </button>

            <button
              aria-label="Notificações"
              className="rounded-xl border border-white/[0.08] p-2.5 text-gray-400 transition hover:bg-white/[0.05]"
            >
              <Bell size={18} />
            </button>

            <div className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-[#C6A477]/30 bg-[#C6A477]/10 text-sm font-bold text-[#C6A477]">
              BS
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1450px] space-y-9 p-5 md:p-9">

          {/* BOAS-VINDAS */}
          <section id="inicio" className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px w-7 bg-[#C6A477]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C6A477]">
                  Painel administrativo
                </span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Sua barbearia,
                <br />
                <span className="font-light text-[#C6A477]">
                  sob controle.
                </span>
              </h2>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-500">
                Gerencie seus agendamentos, clientes e serviços
                em um só lugar.
              </p>
            </div>

            <a
              href="#agendamentos"
              className="flex w-fit items-center gap-2 rounded-xl bg-[#C6A477] px-5 py-3 text-sm font-semibold text-[#171715] transition hover:bg-[#D8B88F]"
            >
              <Plus size={18} />
              Consultar agenda
              <ArrowUpRight size={16} />
            </a>
          </section>

          {/* CARDS */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

            {cards.map((card) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-white/[0.07] bg-[#191917] p-5 transition hover:border-[#C6A477]/30"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div className="rounded-xl bg-[#C6A477]/10 p-3 text-[#C6A477]">
                    <card.icon size={21} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-gray-600 transition group-hover:text-[#C6A477]"
                  />
                </div>

                <h3 className="text-3xl font-semibold text-gray-300">
                  —
                </h3>

                <p className="mt-1 text-sm font-medium">
                  {card.title}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {card.description}
                </p>
              </div>
            ))}
          </section>

          {/* AGENDA */}
          <section
            id="agendamentos"
            className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#191917]"
          >
            <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] p-6 sm:flex-row sm:items-center">

              <div>
                <div className="flex items-center gap-2">
                  <CalendarDays size={19} className="text-[#C6A477]" />
                  <h3 className="text-lg font-semibold">
                    Agenda de atendimentos
                  </h3>
                </div>

                <p className="mt-1 text-xs text-gray-500">
                  Seus horários e próximos atendimentos.
                </p>
              </div>

              <span className="w-fit rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-wider text-gray-400">
                Sem dados cadastrados
              </span>
            </div>

            {/* ESTADO VAZIO */}
            <div className="flex min-h-[310px] flex-col items-center justify-center px-6 py-12 text-center">

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C6A477]/20 bg-[#C6A477]/10 text-[#C6A477]">
                <CalendarDays size={29} />
              </div>

              <h4 className="text-base font-semibold">
                Sua agenda está vazia
              </h4>

              <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-500">
                Quando você cadastrar seus primeiros
                agendamentos, eles aparecerão nesta área.
              </p>

              <p className="mt-5 text-xs text-gray-600">
                Nenhum atendimento foi registrado ainda.
              </p>
            </div>
          </section>

          {/* CLIENTES E SERVIÇOS */}
          <section className="grid gap-4 md:grid-cols-2">

            <div
              id="clientes"
              className="rounded-2xl border border-white/[0.07] bg-[#191917] p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <Users size={21} className="text-[#C6A477]" />
                <ChevronRight size={18} className="text-gray-600" />
              </div>

              <h3 className="font-semibold">Clientes</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Os clientes cadastrados serão exibidos aqui.
              </p>
              <p className="mt-4 text-xs text-gray-600">
                Nenhum cliente cadastrado.
              </p>
            </div>

            <div
              id="servicos"
              className="rounded-2xl border border-white/[0.07] bg-[#191917] p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <Scissors size={21} className="text-[#C6A477]" />
                <ChevronRight size={18} className="text-gray-600" />
              </div>

              <h3 className="font-semibold">Serviços</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Gerencie os serviços oferecidos pela barbearia.
              </p>
              <p className="mt-4 text-xs text-gray-600">
                Nenhum serviço cadastrado.
              </p>
            </div>

          </section>

          {/* FOOTER */}
          <footer
            id="configuracoes"
            className="flex flex-col justify-between gap-2 border-t border-white/[0.07] pt-6 text-xs text-gray-600 sm:flex-row"
          >
            <p>Barber Studio · Sistema de gerenciamento</p>
            <p>Desenvolvido com Next.js e Tailwind CSS</p>
          </footer>

        </div>
      </div>
    </main>
  );
}
