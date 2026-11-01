import { lawyerData } from '../data/data';
import { useState } from 'react';
import { Clock, Mail, MapPin, ExternalLink, MessageSquare } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, message } = formData;
    
    // Formata a mensagem para o WhatsApp do Dr. Elson
    const text = `Olá, Dr. Elson! Meu nome é *${name}*.\nTelefone: ${phone}\nE-mail: ${email}\n\n*Resumo do caso:* ${message}`;
    const encodedText = encodeURIComponent(text);
    
    const whatsappUrl = `https://wa.me/${lawyerData?.whatsapp || '5589981059793'}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-[#051222] relative overflow-hidden">
      
      {/* Linha decorativa subtil no topo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 py-1.5 px-4 rounded-full border border-[#C5A059]/20 inline-block">
            Entre em Contato Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight font-serif leading-[1.2]">
            Estamos prontos para entender seu caso e oferecer a melhor <span className="bg-gradient-to-r from-[#C5A059] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent italic">orientação jurídica</span>
          </h2>
        </div>

        {/* Grelha Principal (2 Colunas Equilibradas) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Coluna da Esquerda: Informações de Atendimento e Mapa */}
          <div className="lg:col-span-5 bg-[#081B33] border border-[#C5A059]/20 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <h3 className="text-xl font-bold font-serif text-slate-100 border-b border-slate-700/60 pb-4">
              Informações de Atendimento
            </h3>

            <div className="space-y-5 text-sm text-slate-300">
              
              {/* Horário */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="font-semibold text-slate-100 uppercase text-xs tracking-wider">Horários</p>
                  <p className="text-slate-300 mt-0.5">Seg a Sex, das 07:30 às 19h</p>
                </div>
              </div>

              {/* Instagram com Ícone Oficial em SVG */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-100 uppercase text-xs tracking-wider">Instagram</p>
                  <a href="https://instagram.com/adv.elsonaguiar" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:underline mt-0.5 block font-medium">
                    {lawyerData?.instagram || '@adv.elsonaguiar'}
                  </a>
                </div>
              </div>

              {/* Telefone / WhatsApp Oficial */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.84L2.42 21.58l3.87-1.28C7.9 21.3 9.89 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.78 0-3.44-.54-4.84-1.47l-.35-.23-2.55.84.85-2.48-.23-.37C4.1 14.9 3.5 13.5 3.5 12c0-4.69 3.81-8.5 8.5-8.5s8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5zm4.59-6.32c-.25-.13-1.48-.73-1.71-.82-.23-.09-.4-.13-.57.13-.17.25-.66.82-.81.99-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.39.11-.52.12-.12.25-.31.37-.47.12-.16.16-.27.24-.45.08-.18.04-.34-.02-.47-.07-.13-.57-1.38-.78-1.89-.2-.5-.4-.43-.57-.44-.15-.01-.33-.01-.51-.01-.17 0-.45.06-.68.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.32 3.81.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-100 uppercase text-xs tracking-wider">Telefone / WhatsApp</p>
                  <a 
                    href="https://wa.me/5589981059793?text=Olá,%20Dr.%20Elson!%20Encontrei%20o%20número%20no%20site%20e%20gostaria%20de%20atendimento."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-100 hover:text-[#C5A059] transition-colors mt-0.5 block font-medium"
                  >
                    (89) 98105-9793
                  </a>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-semibold text-slate-100 uppercase text-xs tracking-wider">E-mail</p>
                  <a 
                    href="mailto:elsonfelixdeaguiar@gmail.com"
                    className="text-slate-100 hover:text-[#C5A059] transition-colors mt-0.5 block break-all font-medium"
                  >
                    {lawyerData?.email || 'elsonfelixdeaguiar@gmail.com'}
                  </a>
                </div>
              </div>

            </div>

            {/* Bloco de Localização */}
            <div className="pt-4 border-t border-slate-700/60 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100 text-sm font-serif">{lawyerData?.name || 'Dr. Elson Aguiar'}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{lawyerData?.address || 'Rua Sete de Setembro, N 358, Centro, Avelino Lopes/PI - CEP: 64965000'}</p>
                  </div>
                </div>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs bg-[#C5A059]/10 hover:bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/30 px-2.5 py-1 rounded-md transition-colors inline-flex items-center gap-1 shrink-0 font-medium"
                >
                  <span>Ampliar</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Miniatura do Mapa */}
              <div className="relative rounded-xl overflow-hidden border border-slate-700 h-36 bg-slate-900 shadow-inner">
                <iframe 
                  title="Localização do Escritório"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.583303184596!2d-43.95014312520451!3d-10.133153589979141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x763687465dba759%3A0x8c0a97e50e23d1f4!2sR.%20Sete%20de%20Setembro%2C%20358%2C%20Avelino%20Lopes%20-%20PI%2C%2064965-000!5e0!3m2!1spt-BR!2sbr!4v1793490653294!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>

          </div>

          {/* Coluna da Direita: Formulário */}
          <div className="lg:col-span-7 bg-[#081B33] border border-[#C5A059]/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Nome Completo */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                    Nome Completo
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full bg-[#051222] border border-slate-700/80 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] rounded-xl px-4 py-3.5 text-slate-100 text-sm outline-none transition-all placeholder:text-slate-500"
                  />
                </div>

                {/* Telefone / WhatsApp */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                    Telefone / WhatsApp
                  </label>
                  <input 
                    type="text" 
                    id="phone"
                    name="phone"
                    required
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full bg-[#051222] border border-slate-700/80 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] rounded-xl px-4 py-3.5 text-slate-100 text-sm outline-none transition-all placeholder:text-slate-500"
                  />
                </div>
              </div>

              {/* E-mail */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                  E-mail
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com"
                  className="w-full bg-[#051222] border border-slate-700/80 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] rounded-xl px-4 py-3.5 text-slate-100 text-sm outline-none transition-all placeholder:text-slate-500"
                />
              </div>

              {/* Mensagem / Resumo do Caso */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                  Mensagem / Resumo do Caso
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows="4"
                  required
                  autoComplete="off"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva brevemente como podemos te ajudar..."
                  className="w-full bg-[#051222] border border-slate-700/80 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] rounded-xl px-4 py-3.5 text-slate-100 text-sm outline-none transition-all resize-none placeholder:text-slate-500"
                />
              </div>

              {/* Botão de Envio */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#C5A059] hover:bg-[#D4AF37] text-[#07182D] font-bold px-8 py-4 rounded-xl shadow-xl shadow-[#C5A059]/20 text-base transition-all duration-300 hover:scale-[1.01] active:scale-95 cursor-pointer"
                >
                  <MessageSquare size={20} className="fill-[#07182D]" />
                  <span>Enviar Mensagem via WhatsApp</span>
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}