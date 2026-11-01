import { lawyerData } from '../data/data';
import { ShieldCheck, Stethoscope, HeartHandshake, Users, Baby, FileSearch, ArrowRight } from 'lucide-react';

export function Services() {
  const iconMap = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
    Stethoscope: <Stethoscope className="w-6 h-6 text-[#D4AF37]" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#D4AF37]" />,
    Users: <Users className="w-6 h-6 text-[#D4AF37]" />,
    Baby: <Baby className="w-6 h-6 text-[#D4AF37]" />,
    FileSearch: <FileSearch className="w-6 h-6 text-[#D4AF37]" />
  };

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-[#051222] relative overflow-hidden">
      
      {/* Linha decorativa subtil de brilho no topo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 py-1.5 px-4 rounded-full border border-[#C5A059]/20 inline-block">
            Como posso ajudar
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Áreas de Atuação em <span className="bg-gradient-to-r from-[#C5A059] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent font-serif italic">Direito Previdenciário</span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Prestamos assessoria técnica e especializada no INSS e na Justiça com foco total na segurança jurídica do cliente.
          </p>

          {/* Divisor ornamental central */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <div className="w-16 h-[1px] bg-[#C5A059]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <div className="w-16 h-[1px] bg-[#C5A059]/40" />
          </div>
        </div>

        {/* Grelha de Cartões com Alinhamento Perfeito e Altura Uniforme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {lawyerData.services.map((service, index) => (
            <div 
              key={service.id || index}
              className="group relative bg-[#081B33] hover:bg-[#0B2238] rounded-2xl p-8 sm:p-10 border border-[#C5A059]/20 hover:border-[#C5A059]/60 transition-all duration-500 shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C5A059]/10 flex flex-col justify-between overflow-hidden h-full"
            >
              {/* Brilho superior sofisticado no hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Bloco Superior (Ícone, Título e Descrição) */}
              <div className="space-y-6">
                
                {/* Ícone */}
                <div className="w-14 h-14 rounded-xl bg-[#C5A059]/10 flex items-center justify-center border border-[#C5A059]/20 group-hover:scale-110 group-hover:bg-[#C5A059]/25 group-hover:border-[#C5A059]/50 transition-all duration-300 shadow-inner">
                  {iconMap[service.icon] || <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />}
                </div>

                {/* Título e Descrição */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-100 group-hover:text-[#F3E5AB] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

              </div>

              {/* Rodapé do Card com o Botão Perfeitamente Alinhado */}
              <div className="pt-6 mt-8 border-t border-slate-700/60 group-hover:border-[#C5A059]/30 transition-colors">
                <a 
                  href={`https://wa.me/${lawyerData?.whatsapp || ''}?text=Olá,%20Dr.%20Elson!%20Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-[#07182D] hover:bg-[#C5A059] text-[#C5A059] hover:text-[#07182D] font-bold text-sm border border-[#C5A059]/30 hover:border-[#C5A059] transition-all duration-300 shadow-md group/btn"
                >
                  <span>Tirar dúvida</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1.5 transition-transform duration-300 stroke-[2.5]" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}