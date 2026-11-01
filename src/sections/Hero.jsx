import { lawyerData } from '../data/data';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#07182D] overflow-hidden pt-28 lg:pt-36 pb-10 sm:pb-16 lg:pb-20">
      
      {/* Fundo Geral Azul-Marinho */}
      <div className="absolute inset-0 z-0 bg-[#07182D]" />

      {/* Conteúdo Principal Dividido em 2 Colunas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna da Esquerda: Textos e Botões */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left order-first">
            
            {/* Título Principal Impactante */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.12]">
                Seu futuro merece <br />
                <span className="bg-gradient-to-r from-[#C5A059] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent italic font-serif">
                  segurança e atenção.
                </span>
              </h1>
              
              <p className="text-base sm:text-xl font-medium text-[#D4AF37] tracking-wide">
                Especialistas em Direito Previdenciário e Benefícios do INSS
              </p>
            </div>

            {/* Descrição Ética */}
            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed font-normal max-w-xl">
              Atendimento jurídico com responsabilidade, transparência e atenção às necessidades de cada cliente. Compromisso com uma atuação ética, cuidadosa e individualizada.
            </p>

            {/* Botões Lado a Lado */}
            <div className="pt-1 flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center">
              <a
                href={`https://wa.me/${lawyerData?.whatsapp || '5589981059793'}?text=Olá,%20Dr.%20Elson!%20Gostaria%20de%20uma%20consultoria.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#C5A059] hover:bg-[#D4AF37] text-[#07182D] font-bold px-7 py-4 rounded-xl shadow-xl shadow-[#C5A059]/20 text-base transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
              >
                <span>Entrar em contato</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-slate-800/50 text-slate-200 font-semibold px-8 py-4 rounded-xl border border-slate-600/80 hover:border-[#C5A059]/60 text-base transition-all duration-300 backdrop-blur-md"
              >
                <span>Áreas de atuação</span>
              </a>
            </div>

            {/* Selo/Garantia na Base */}
            <div className="pt-1 flex items-center gap-3 text-xs sm:text-sm text-slate-300">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center border border-[#C5A059]/30 shrink-0">
                <ShieldCheck size={16} className="text-[#D4AF37]" />
              </div>
              <span>Atuação estratégica e sigilo absoluto em todas as etapas</span>
            </div>

          </div>

          {/* Coluna da Direita: Imagem com Efeito Visual Sofisticado */}
          <div className="lg:col-span-5 relative order-last mt-2 lg:mt-0 group">
            
            {/* Tracinhos Decorativos Superiores (Desktop) */}
            <div className="absolute -top-5 right-0 w-20 h-[1px] bg-gradient-to-l from-[#C5A059]/60 to-transparent hidden sm:block" />
            <div className="absolute -top-5 right-0 w-[1px] h-10 bg-gradient-to-b from-[#C5A059]/60 to-transparent hidden sm:block" />
            
            {/* Tracinhos Decorativos Inferiores (Desktop) */}
            <div className="absolute -bottom-5 left-0 w-20 h-[1px] bg-gradient-to-r from-[#C5A059]/60 to-transparent hidden sm:block" />
            <div className="absolute -bottom-5 left-0 w-[1px] h-10 bg-gradient-to-t from-[#C5A059]/60 to-transparent hidden sm:block" />

            {/* Efeito de Brilho de Fundo Dinâmico (Glow Effect) */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#C5A059]/30 to-[#D4AF37]/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-700 pointer-events-none" />

            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/40 shadow-2xl bg-[#07182D] p-1.5 aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5] flex items-center justify-center transition-all duration-500 group-hover:border-[#C5A059]">
                
                {/* Imagem com Efeito Zoom Suave ao Passar o Rato e Brilho Controlado */}
                <img 
                  src={lawyerData?.heroImage || "https://i.pinimg.com/736x/01/07/83/010783d383408b3d5b27b201fc6bbafc.jpg"} 
                  alt="Estátua da Justiça" 
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105 filter contrast-[1.05]"
                />

                {/* Gradiente Interno Suave na Base da Foto para Integrar ao Fundo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07182D]/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}