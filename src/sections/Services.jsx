import { lawyerData } from '../data/data';
import { useState, useEffect, useRef, useCallback } from 'react';
import { ShieldCheck, Stethoscope, HeartHandshake, Users, Baby, FileSearch, ArrowRight, ChevronLeft, ChevronRight, ChevronDown, CheckCircle2 } from 'lucide-react';

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const servicesList = lawyerData?.services || [];
  const timerRef = useRef(null);
  
  // Referências para detetar o gesto de arrastar no telemóvel (Touch)
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % servicesList.length);
    setExpandedId(null);
  }, [servicesList.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + servicesList.length) % servicesList.length);
    setExpandedId(null);
  }, [servicesList.length]);

  // Gestão inteligente da rotação automática
  useEffect(() => {
    if (isPaused || expandedId !== null || servicesList.length === 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, expandedId, servicesList.length, handleNext]);

  // Funções para detetar o gesto de swipe no telemóvel
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Distância mínima em pixéis para considerar um swipe

    if (distance > minSwipeDistance) {
      // Arrastou para a esquerda -> Próxima pasta
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Arrastou para a direita -> Pasta anterior
      handlePrev();
    }

    // Reset
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const iconMap = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />,
    Stethoscope: <Stethoscope className="w-5 h-5 text-[#D4AF37]" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />,
    Users: <Users className="w-5 h-5 text-[#D4AF37]" />,
    Baby: <Baby className="w-5 h-5 text-[#D4AF37]" />,
    FileSearch: <FileSearch className="w-5 h-5 text-[#D4AF37]" />
  };

  const isExpanded = expandedId === activeIndex;

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-[#051222] relative overflow-hidden">
      
      {/* Linha decorativa subtil no topo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 py-1.5 px-4 rounded-full border border-[#C5A059]/20 inline-block">
            Como posso ajudar
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Áreas de Atuação em <span className="bg-gradient-to-r from-[#C5A059] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent font-serif italic">Direito Previdenciário</span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Prestamos assessoria técnica e especializada no INSS e na Justiça com foco total na segurança jurídica do cliente.
          </p>

          <div className="pt-2 flex items-center justify-center gap-3">
            <div className="w-16 h-[1px] bg-[#C5A059]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <div className="w-16 h-[1px] bg-[#C5A059]/40" />
          </div>
        </div>

        {/* Container Principal Centralizado */}
        <div 
          className="max-w-4xl mx-auto pt-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Barra de Controlo Superior */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-14 px-2 sm:px-4">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-[#C5A059] font-semibold">
              Selecione ou navegue pelas pastas:
            </span>

            <div className="flex items-center gap-3">
              <button 
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-[#081B33] border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-md cursor-pointer"
                aria-label="Anterior"
              >
                <ChevronLeft size={18} />
              </button>

              <span className="text-sm font-mono text-[#D4AF37] px-2 font-semibold">
                {String(activeIndex + 1).padStart(2, '0')} / {String(servicesList.length).padStart(2, '0')}
              </span>

              <button 
                type="button"
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-[#081B33] border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-md cursor-pointer"
                aria-label="Próximo"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Pilha de Pastas 3D com Suporte a Arrastar (Swipe) no Telemóvel */}
          <div 
            className="relative min-h-[440px] sm:min-h-[480px] flex items-center justify-center touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            
            {servicesList.map((service, index) => {
              const offset = (index - activeIndex + servicesList.length) % servicesList.length;
              
              const isActive = offset === 0;
              const isSecond = offset === 1;
              
              if (offset > 2 && servicesList.length > 3) return null;

              return (
                <div
                  key={service.id || index}
                  onClick={() => {
                    setActiveIndex(index);
                    setExpandedId(null);
                  }}
                  style={{
                    zIndex: servicesList.length - offset,
                    transform: isActive 
                      ? 'translateY(0) scale(1) rotateX(0deg)' 
                      : isSecond 
                      ? 'translateY(-28px) scale(0.94) rotateX(2deg)' 
                      : 'translateY(-56px) scale(0.88) rotateX(4deg)',
                    opacity: isActive ? 1 : isSecond ? 0.75 : 0.4,
                  }}
                  className={`absolute inset-0 bg-[#081B33] border rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-700 ease-out cursor-pointer flex flex-col justify-between ${
                    isActive 
                      ? 'border-[#C5A059] shadow-[#C5A059]/20 ring-1 ring-[#C5A059]/40' 
                      : 'border-[#C5A059]/30 hover:border-[#C5A059]/60'
                  }`}
                >
                  {/* Orelha/Aba superior da pasta */}
                  <div className="absolute -top-9 left-6 bg-[#081B33] border-t border-x border-[#C5A059]/60 px-5 py-2.5 rounded-t-xl text-xs sm:text-sm font-serif font-bold text-[#F3E5AB] flex items-center gap-2 shadow-xl">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                    <span>0{index + 1}. {service.title}</span>
                  </div>

                  {/* Brilho superior interno */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

                  {/* Conteúdo da Pasta Ativa */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#C5A059]/15 flex items-center justify-center border border-[#C5A059]/30 shadow-inner">
                        {iconMap[service.icon] || <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />}
                      </div>
                      <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/20">
                        {isActive ? 'Pasta Selecionada' : 'Clique para abrir'}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-100 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>

                    {/* Botão interativo para Expandir Mais Informações */}
                    {isActive && (
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedId(isExpanded ? null : index);
                          }}
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 hover:bg-[#C5A059]/20 px-3.5 py-2 rounded-xl border border-[#C5A059]/30 transition-colors cursor-pointer"
                        >
                          <span>{isExpanded ? 'Ocultar detalhes' : 'Ver mais informações'}</span>
                          <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Caixa de Informações Expandidas */}
                        {isExpanded && (
                          <div className="mt-3 p-4 bg-[#051222] border border-[#C5A059]/30 rounded-xl space-y-2 animate-fadeIn text-xs sm:text-sm text-slate-300">
                            <div className="flex items-center gap-2 text-[#F3E5AB] font-semibold">
                              <CheckCircle2 size={15} className="text-[#C5A059]" />
                              <span>O que avaliamos neste processo:</span>
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                              Análise completa da documentação exigida pelo INSS, verificação de tempo de contribuição, simulação de valores do benefício e acompanhamento jurídico integral em caso de indeferimento administrativo ou judicial.
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Rodapé da Pasta com Botão */}
                  <div className="pt-4 mt-4 border-t border-slate-700/60 flex items-center justify-between">
                    <a 
                      href={`https://wa.me/${lawyerData?.whatsapp || '5589981059793'}?text=Olá,%20Dr.%20Elson!%20Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C5A059] hover:text-[#D4AF37] transition-colors group/link"
                    >
                      <span>Tirar dúvida via WhatsApp</span>
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform stroke-[2.5]" />
                    </a>

                    <span className="text-xs text-slate-400 font-mono">
                      Dr. Elson Aguiar
                    </span>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}