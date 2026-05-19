/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Cpu, Zap, ShieldCheck } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Performance Absoluta: Setup Creator & Gamer",
    description: "Desenvolvido para máxima eficiência computacional e renderização gráfica avançada. Um ecossistema completo para quem exige o topo do desempenho sem concessões.",
    image: "/1000030169.jpg",
    link: "https://s.shopee.com.br/3g0d5pzLED",
    bgPos: "50% 100%"
  },
  {
    id: 2,
    title: "Limpeza Autônoma: Philco Smart Robotics",
    description: "Mapeamento inteligente e sucção de alta potência em um design minimalista. Delegue a manutenção do seu espaço com precisão milimétrica e tecnologia de ponta.",
    image: "/1000030171.jpg",
    link: "https://s.shopee.com.br/gN1WUSilu",
    bgPos: "100% 100%"
  },
  {
    id: 3,
    title: "Engenharia Mobile: POCO X-Series",
    description: "Processamento flag-ship com otimização térmica superior. Desenhado para multitarefas extremas e fluidez ininterrupta no seu dia a dia profissional.",
    image: "/1000030174.jpg",
    link: "https://s.shopee.com.br/3g0d67SdO5",
    bgPos: "100% 0%"
  },
  {
    id: 4,
    title: "Ecossistema Integral: Cupertino Flagship",
    description: "A culminação de design em titânio e inteligência artificial embarcada. Uma verdadeira extensão da sua produtividade com integração nativa perfeita.",
    image: "/1000030176.jpg",
    link: "https://s.shopee.com.br/9fHqFEQ2x5",
    bgPos: "50% 0%"
  },
  {
    id: 5,
    title: "Precisão Visual: Mancer Displays 23.8\"",
    description: "Fidelidade de cores cirúrgica e taxas de atualização otimizadas. Expanda sua área de trabalho panorâmica com nitidez cristalina e bordas invisíveis.",
    image: "/1000030178.jpg",
    link: "https://s.shopee.com.br/10zrvNz93C",
    bgPos: "0% 0%"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FCE205] selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl font-display font-bold tracking-widest uppercase flex items-baseline"
          >
            HEXA<span className="text-[#FCE205] ml-[2px]">.</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="hidden md:flex gap-8 text-sm font-medium text-neutral-400"
          >
            <a href="#curadoria" className="hover:text-white transition-colors duration-300">Curadoria</a>
            <a href="#metodologia" className="hover:text-white transition-colors duration-300">Metodologia</a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FCE205]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-8"
          >
            A Vanguarda da Tecnologia, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
              Selecionada.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Nossa equipe de especialistas analisa e cura os equipamentos de mais alta performance do mercado. Eleve seu ecossistema ao padrão premium.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a 
              href="#curadoria" 
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-[#FCE205] transition-all duration-300"
            >
              Explorar Acervo
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      <section id="metodologia" className="py-12 border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-[#FCE205]" />
            <h3 className="font-display font-semibold text-lg">Inspeção Rigorosa</h3>
            <p className="text-neutral-500 text-sm">Cada componente é avaliado sob os mais altos padrões de qualidade do mercado.</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-3">
            <Cpu className="w-6 h-6 text-[#FCE205]" />
            <h3 className="font-display font-semibold text-lg">Performance Extrema</h3>
            <p className="text-neutral-500 text-sm">Selecionamos apenas hardware projetado para entregar resultados sem gargalos.</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-3">
            <Zap className="w-6 h-6 text-[#FCE205]" />
            <h3 className="font-display font-semibold text-lg">Eficiência Comprovada</h3>
            <p className="text-neutral-500 text-sm">Foco absoluto na relação imbatível entre capacidade técnica e produtividade.</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="curadoria" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Curadoria Oficial</h2>
            <div className="w-12 h-1 bg-[#FCE205]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-display font-bold tracking-widest uppercase flex items-baseline">
            HEXA<span className="text-[#FCE205] ml-[2px]">.</span>
          </div>
          <div className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} HEXA Curadoria Tech. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export function ProductCard({ product, index }: { product: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-colors duration-500 h-full"
    >
      <div className="aspect-square relative overflow-hidden bg-[#0a0a0a] flex items-center justify-center border-b border-white/5">
        <div 
          className="w-full h-full filter brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
          style={{
            backgroundImage: `url(/1779160397782.png)`,
            backgroundSize: `300% 200%`, // 3 columns, 2 rows
            backgroundPosition: product.bgPos,
            backgroundRepeat: "no-repeat"
          }}
        />
        {/* Gradient overlays to hide any UI remnants on edges and give a premium feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-transparent to-[#121212]/80 pointer-events-none" />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-semibold mb-4 leading-tight group-hover:text-[#FCE205] transition-colors duration-300">
          {product.title}
        </h3>
        <p className="text-neutral-400 text-sm leading-relaxed mb-8 flex-grow">
          {product.description}
        </p>
        
        <a 
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden w-full group/btn border border-white/20 hover:border-[#FCE205] bg-transparent text-white px-6 py-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300"
        >
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 bg-[#FCE205]/0 group-hover/btn:bg-[#FCE205]/10 group-hover/btn:shadow-[0_0_20px_rgba(252,226,5,0.2)] transition-all duration-500" />
          
          <span className="relative z-10 font-bold uppercase tracking-wider text-[11px] md:text-sm group-hover/btn:text-[#FCE205]">
            Ver Detalhes Oficiais
          </span>
          <ArrowRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:text-[#FCE205] transition-transform duration-300" />
        </a>
      </div>
    </motion.div>
  );
}

