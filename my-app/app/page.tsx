import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Users, 
  Star, 
  Menu, 
  X, 
  ChevronRight,
  Globe,
  Lock,
  Cpu
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' ou 'annual'
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              NexusSaaS
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            <a href="#recursos" className="hover:text-white transition-colors">Recursos</a>
            <a href="#beneficios" className="hover:text-white transition-colors">Vantagens</a>
            <a href="#precos" className="hover:text-white transition-colors">Preços</a>
            <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#precos" className="text-sm font-medium text-slate-300 hover:text-white px-4 py-2 transition-colors">
              Entrar
            </a>
            <a 
              href="#precos" 
              className="relative group overflow-hidden rounded-xl p-px font-semibold text-sm shadow-md"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:scale-105"></span>
              <span className="relative block px-5 py-2.5 rounded-[11px] bg-slate-950 text-white transition-colors group-hover:bg-opacity-0">
                Começar Grátis
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
            <a 
              href="#recursos" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 text-slate-300 hover:text-white"
            >
              Recursos
            </a>
            <a 
              href="#beneficios" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 text-slate-300 hover:text-white"
            >
              Vantagens
            </a>
            <a 
              href="#precos" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 text-slate-300 hover:text-white"
            >
              Preços
            </a>
            <a 
              href="#depoimentos" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 text-slate-300 hover:text-white"
            >
              Depoimentos
            </a>
            <div className="pt-4 flex flex-col space-y-3">
              <a 
                href="#precos" 
                onClick={() => setMobileMenuOpen(false)} 
                className="w-full text-center py-2.5 rounded-xl border border-slate-700 text-white font-medium"
              >
                Entrar
              </a>
              <a 
                href="#precos" 
                onClick={() => setMobileMenuOpen(false)} 
                className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-600/30"
              >
                Começar Grátis
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-500/15 blur-[120px] pointer-events-none rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-sm animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span>Versão 3.0 Lançada: Inteligência Artificial Integrada</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-none">
            Escale seu negócio com <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Inteligência</span> e Velocidade
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Automatize fluxos de trabalho, analise dados em tempo real e colabore em equipe com a plataforma all-in-one mais moderna do mercado.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#precos" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold shadow-xl shadow-indigo-600/25 hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Começar 14 dias grátis</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#recursos" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white font-semibold hover:bg-slate-800/80 transition-all flex items-center justify-center"
            >
              Ver Demonstração
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Configuração em 2 minutos</span>
            </div>
          </div>

          {/* Hero Mockup / Dashboard Preview */}
          <div className="mt-16 relative max-w-5xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/50 p-2 sm:p-4 shadow-2xl backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent rounded-2xl pointer-events-none"></div>
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="text-xs text-slate-500 font-mono bg-slate-950/60 px-3 py-1 rounded-md border border-slate-800">
                app.nexus.io/dashboard/analytics
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
                <div className="text-xs text-slate-400 font-medium">Receita Mensal</div>
                <div className="text-2xl font-bold text-white mt-1">R$ 148.420</div>
                <div className="text-xs text-emerald-400 mt-2 flex items-center gap-1 font-semibold">
                  <span>+24.5%</span> este mês
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
                <div className="text-xs text-slate-400 font-medium">Usuários Ativos</div>
                <div className="text-2xl font-bold text-white mt-1">32.890</div>
                <div className="text-xs text-emerald-400 mt-2 flex items-center gap-1 font-semibold">
                  <span>+12.2%</span> novos leads
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
                <div className="text-xs text-slate-400 font-medium">Taxa de Conversão</div>
                <div className="text-2xl font-bold text-white mt-1">4.8%</div>
                <div className="text-xs text-emerald-400 mt-2 flex items-center gap-1 font-semibold">
                  <span>+1.4%</span> otimizado por IA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / LOGOS */}
      <section className="py-12 border-y border-slate-900 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-8">
            Confiado por equipes inovadoras em todo o mundo
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="text-lg font-bold tracking-tighter text-slate-300">VECORP</span>
            <span className="text-lg font-bold tracking-widest text-slate-300">PULSE.IO</span>
            <span className="text-lg font-bold tracking-tight text-slate-300">NEXUS AI</span>
            <span className="text-lg font-bold tracking-wide text-slate-300">CLOUDSCALE</span>
            <span className="text-lg font-bold tracking-tighter text-slate-300">SYNAPSE</span>
          </div>
        </div>
      </section>

      {/* RECURSOS / FEATURES */}
      <section id="recursos" className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">Recursos Poderosos</h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Tudo o que você precisa para acelerar seu crescimento
            </p>
            <p className="mt-4 text-base text-slate-400">
              Desenvolvido com foco em performance e usabilidade extrema para eliminar gargalos operacionais.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Automação Inteligente</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Crie fluxos de trabalho complexos e automações de ponta a ponta sem precisar escrever uma única linha de código.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Analytics em Tempo Real</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Monitore métricas vitais e tome decisões assertivas baseadas em dados atualizados instantaneamente.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-pink-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-pink-600/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Segurança Avançada</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Proteção de ponta a ponta com criptografia de nível bancário e conformidade rigorosa com a LGPD.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Colaboração em Equipe</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Trabalhe simultaneamente com sua equipe em projetos, com controle granular de permissões e histórico.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-600/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">API Global de Alta Performance</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Integre facilmente com qualquer sistema externo usando nossa API REST e Webhooks ultra rápidos.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Assistente IA Nativo</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Deixe nossa inteligência artificial redigir relatórios, responder clientes e otimizar campanhas automaticamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS SECTION */}
      <section id="beneficios" className="py-24 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium mb-6">
              Por que escolher o NexusSaaS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Projetado para economizar seu tempo e impulsionar resultados
            </h2>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              Elimine planilhas complexas e sistemas desconectados. Com o NexusSaaS, sua empresa ganha sinergia total em um único painel intuitivo e altamente responsivo.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Redução de custos operacionais</h4>
                  <p className="text-sm text-slate-400 mt-0.5">Empresas reduzem em até 40% o tempo gasto em tarefas repetitivas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Suporte humanizado 24/7</h4>
                  <p className="text-sm text-slate-400 mt-0.5">Nossa equipe de especialistas está sempre pronta para ajudar quando você precisar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Escalabilidade garantida</h4>
                  <p className="text-sm text-slate-400 mt-0.5">Infraestrutura em nuvem elástica que cresce no mesmo ritmo do seu negócio.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold">
                    NS
                  </div>
                  <div>
                    <div className="text-white font-semibold">Nexus Growth Index</div>
                    <div className="text-xs text-slate-400">Desempenho operacional global</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Otardado
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-400 mb-1">
                    <span>Eficiência de Processos</span>
                    <span className="text-white">96%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[96%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-400 mb-1">
                    <span>Retenção de Clientes</span>
                    <span className="text-white">88%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[88%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-400 mb-1">
                    <span>Produtividade da Equipe</span>
                    <span className="text-white">92%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 w-[92%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="precos" className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">Preços Transparentes</h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Planos feitos para crescer com você
            </p>
            <p className="mt-4 text-base text-slate-400">
              Escolha o plano ideal para sua equipe. Cancele ou mude de plano a qualquer momento sem taxas escondidas.
            </p>

            {/* Toggle Mensal / Anual */}
            <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${billingCycle === 'annual' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                <span>Anual</span>
                <span className="text-[10px] bg-pink-500/20 text-pink-300 px-1.5 py-0.5 rounded font-bold border border-pink-500/30">
                  -20% OFF
                </span>
              </button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Plano Starter */}
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Starter</h3>
                <p className="text-slate-400 text-sm mt-1">Ideal para freelancers e iniciantes.</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">
                    {billingCycle === 'monthly' ? 'R$ 49' : 'R$ 39'}
                  </span>
                  <span className="text-slate-400 ml-2 text-sm">/mês</span>
                </div>

                <ul className="mt-8 space-y-4 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Até 3 usuários ativos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>5 GB de armazenamento em nuvem</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Analytics básico</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-500">
                    <X className="w-4 h-4 text-slate-600 shrink-0" />
                    <span>Suporte prioritário 24/7</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <a 
                  href="#precos" 
                  className="w-full block text-center py-3 px-4 rounded-xl border border-slate-700 text-white font-medium hover:bg-slate-800 transition-colors"
                >
                  Escolher Starter
                </a>
              </div>
            </div>

            {/* Plano Pro (Mais Popular) */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-indigo-950/40 via-slate-900/80 to-slate-900 border-2 border-indigo-500/80 flex flex-col justify-between relative shadow-2xl shadow-indigo-600/10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold uppercase tracking-wider shadow">
                Mais Popular
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">Profissional</h3>
                <p className="text-slate-400 text-sm mt-1">Perfeito para empresas em crescimento rápido.</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">
                    {billingCycle === 'monthly' ? 'R$ 129' : 'R$ 99'}
                  </span>
                  <span className="text-slate-400 ml-2 text-sm">/mês</span>
                </div>

                <ul className="mt-8 space-y-4 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Usuários ilimitados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>100 GB de armazenamento em nuvem</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Analytics avançado e relatórios por IA</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Suporte prioritário 24/7 via Chat</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <a 
                  href="#precos" 
                  className="w-full block text-center py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:opacity-95 transition-all"
                >
                  Começar com Pro
                </a>
              </div>
            </div>

            {/* Plano Enterprise */}
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Enterprise</h3>
                <p className="text-slate-400 text-sm mt-1">Para grandes corporações e alta demanda.</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">
                    {billingCycle === 'monthly' ? 'R$ 349' : 'R$ 279'}
                  </span>
                  <span className="text-slate-400 ml-2 text-sm">/mês</span>
                </div>

                <ul className="mt-8 space-y-4 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Tudo do plano Profissional</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Armazenamento Ilimitado (Cloud)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Gerente de conta dedicado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>SLA de 99.9% garantido em contrato</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <a 
                  href="#precos" 
                  className="w-full block text-center py-3 px-4 rounded-xl border border-slate-700 text-white font-medium hover:bg-slate-800 transition-colors"
                >
                  Contatar Vendas
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="depoimentos" className="py-24 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">Prova Social</h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              O que nossos clientes dizem
            </p>
            <p className="mt-4 text-base text-slate-400">
              Histórias reais de líderes de empresas que transformaram seus resultados usando o NexusSaaS.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  "O NexusSaaS mudou completamente a forma como gerenciamos nossos fluxos de trabalho. A produtividade da equipe aumentou em mais de 50% logo no primeiro mês."
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white text-sm">
                  CM
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Carlos Martins</div>
                  <div className="text-slate-400 text-xs">CEO na TechPulse</div>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  "A inteligência artificial integrada economiza horas preciosas todas as semanas. É como ter um membro extra na equipe cuidando de toda a análise de dados."
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-sm">
                  AR
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Amanda Rocha</div>
                  <div className="text-slate-400 text-xs">COO na Vecorp</div>
                </div>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  "Interface impecável, extremamente rápida e suporte impecável. Recomendo o plano Pro para qualquer negócio que queira escalar sem complicações."
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center font-bold text-white text-sm">
                  RL
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Rafael Lima</div>
                  <div className="text-slate-400 text-xs">Fundador da CloudScale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">Dúvidas Frequentes</h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Tudo o que você precisa saber
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Posso cancelar minha assinatura a qualquer momento?",
                a: "Sim, absolutamente. Você pode cancelar sua assinatura com apenas um clique nas configurações da sua conta, sem taxas ou multas rescisórias."
              },
              {
                q: "Como funciona o período de teste gratuito de 14 dias?",
                a: "Você tem acesso completo a todos os recursos do plano Profissional durante 14 dias sem precisar cadastrar nenhum cartão de crédito."
              },
              {
                q: "Posso mudar de plano posteriormente?",
                a: "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. Os valores serão ajustados proporcionalmente de forma automática."
              },
              {
                q: "Meus dados estão seguros na plataforma?",
                a: "Utilizamos criptografia de ponta a ponta (AES-256) e seguimos rigorosamente todas as diretrizes da LGPD para garantir a total privacidade e segurança dos seus dados."
              }
            ].map((faq, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left font-semibold text-white flex items-center justify-between focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${faqOpen === idx ? 'rotate-90 text-indigo-400' : ''}`} />
                </button>
                {faqOpen === idx && (
                  <div className="px-6 pb-4 text-slate-400 text-sm leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-lg font-bold text-white tracking-tight">NexusSaaS</span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                A plataforma definitiva para automatizar processos, escalar operações e impulsionar equipes de alta performance.
              </p>
              <div className="flex items-center space-x-4 text-slate-400 pt-2">
                <a href="#social" className="hover:text-white transition-colors">Twitter</a>
                <a href="#social" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#social" className="hover:text-white transition-colors">GitHub</a>
                <a href="#social" className="hover:text-white transition-colors">Discord</a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Produto</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#recursos" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#precos" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#recursos" className="hover:text-white transition-colors">Integrações</a></li>
                <li><a href="#recursos" className="hover:text-white transition-colors">Atualizações</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Empresa</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre nós</a></li>
                <li><a href="#carreiras" className="hover:text-white transition-colors">Carreiras <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded font-bold ml-1">We're hiring</span></a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#privacidade" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#termos" className="hover:text-white transition-colors">Termos de Serviço</a></li>
                <li><a href="#seguranca" className="hover:text-white transition-colors">Segurança</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} NexusSaaS Inc. Todos os direitos reservados.</p>
            <p className="mt-4 sm:mt-0 flex items-center gap-1">
              Feito com <span className="text-rose-500">❤️</span> para Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}