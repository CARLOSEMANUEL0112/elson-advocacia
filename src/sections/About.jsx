import { lawyerData } from '../data/data';
import { CheckCircle2, ArrowRight } from 'lucide-react';


export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-[#07182D] relative overflow-hidden">
      
      {/* Linha decorativa subtil no topo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 1. TEXTO PRIMEIRO NO HTML: No telemóvel aparece em cima, no PC vai para a direita */}
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-left">
            
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 py-1.5 px-4 rounded-full border border-[#C5A059]/20 inline-block">
              Sobre o Escritório
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight font-serif leading-tight">
              Compromisso e dedicação com <span className="bg-gradient-to-r from-[#C5A059] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent italic">quem mais precisa</span>
            </h2>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Com atuação focada em <strong className="text-slate-100 font-semibold">{lawyerData.city}</strong> e toda a região, o escritório do <strong className="text-slate-100 font-semibold">{lawyerData.name}</strong> nasceu com a missão de defender os direitos dos segurados do INSS com total seriedade, ética e rigor técnico.
            </p>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Sabemos o quanto a burocracia previdenciária pode ser exaustiva e desgastante. Por isso, oferecemos um atendimento próximo, humanizado e transparente, acompanhando cada etapa do seu processo de forma personalizada.
            </p>

            {/* Lista de Diferenciais com Ícones Dourados */}
            <div className="pt-2 space-y-3.5">
              <div className="flex items-center gap-3 text-slate-200 text-sm sm:text-base">
                <div className="w-6 h-6 rounded-full bg-[#C5A059]/10 flex items-center justify-center border border-[#C5A059]/30 shrink-0 shadow-inner">
                  <CheckCircle2 size={16} className="text-[#D4AF37]" />
                </div>
                <span>Atendimento humanizado, presencial e 100% online</span>
              </div>

              <div className="flex items-center gap-3 text-slate-200 text-sm sm:text-base">
                <div className="w-6 h-6 rounded-full bg-[#C5A059]/10 flex items-center justify-center border border-[#C5A059]/30 shrink-0 shadow-inner">
                  <CheckCircle2 size={16} className="text-[#D4AF37]" />
                </div>
                <span>Análise minuciosa de documentos e histórico do INSS</span>
              </div>

              <div className="flex items-center gap-3 text-slate-200 text-sm sm:text-base">
                <div className="w-6 h-6 rounded-full bg-[#C5A059]/10 flex items-center justify-center border border-[#C5A059]/30 shrink-0 shadow-inner">
                  <CheckCircle2 size={16} className="text-[#D4AF37]" />
                </div>
                <span>Acompanhamento estratégico do início ao fim do pedido</span>
              </div>
            </div>

            {/* Botão de Ação Destacado */}
            <div className="pt-4">
              <a
                href={`https://wa.me/${lawyerData?.whatsapp || ''}?text=Olá,%20Dr.%20Elson!%20Li%20sobre%20o%20escritório%20e%20gostaria%20de%20conversar%20sobre%20o%20meu%20caso.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C5A059] hover:bg-[#D4AF37] text-[#07182D] font-bold px-8 py-4 rounded-xl shadow-xl shadow-[#C5A059]/20 text-base transition-all duration-300 hover:scale-[1.02] active:scale-95 group/btn"
              >
                <span>Falar Diretamente com o Dr. Elson</span>
                <ArrowRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform stroke-[2.5]" />
              </a>
            </div>

          </div>

          {/* 2. FOTO SEGUNDA NO HTML: No telemóvel fica abaixo do texto, no PC vai para a esquerda */}
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1 flex justify-center">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              
              {/* Glow dourado de fundo */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#C5A059]/30 to-[#D4AF37]/10 rounded-3xl blur-2xl opacity-40 group-hover:opacity-75 transition duration-700" />

              {/* Moldura de Luxo */}
              <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/30 hover:border-[#C5A059]/60 transition-all duration-500 shadow-2xl bg-[#051222]/90 backdrop-blur-sm">
                <img 
                  src={lawyerData.aboutImage} 
                  alt={lawyerData.name}
                  className="w-full h-[420px] sm:h-[500px] object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
                />
                
                {/* Degradê na base com o Nome */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#07182D] via-[#07182D]/90 to-transparent p-6 pt-16 text-center">
                  <h3 className="text-2xl font-bold font-serif text-slate-100 tracking-wide">{lawyerData.name}</h3>
                  <div className="w-10 h-[2px] bg-[#C5A059] mx-auto mt-2 opacity-80" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}