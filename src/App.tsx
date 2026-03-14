import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ExternalLink, Cpu, Activity, X, Info } from 'lucide-react';
import { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const WHATSAPP_LINK = "https://wa.me/995555123456";

const PRODUCTS = [
  {
    id: '2plug',
    title: 'IDEAL FOR GEORGIA (ორბუდიანი)',
    subtitle: 'პროფესიონალური დაცვა',
    image: '/1.png',
    delay: '4 წუთი',
    color: 'emerald',
    description: 'ეს არის მაღალი სიმძლავრის ძაბვის დამცველი მსხვილი ტექნიკისთვის. იცავს ძაბვის მკვეთრი ცვალებადობისგან (180V-240V).',
    fullDescription: 'დანიშნულება: იცავს ტექნიკას ძაბვის მკვეთრი ცვალებადობისგან (მაღალი ან დაბალი ძაბვა). \n\nტექნიკური მახასიათებლები: \nმაქსიმალური დენი: 16A (ამპერი). \nმაქსიმალური სიმძლავრე: 3500 VA (ვატი). \nბუდეების რაოდენობა: 2 როზეტი. \n\nდაცვის დიაპაზონი: \nდაბალი ძაბვა (LOW V): ითიშება 180V-ზე დაბლა. \nმაღალი ძაბვა (HIGH V): ითიშება 240V-ზე მაღლა. \nდაყოვნების დრო (DELAY): 4 წუთი (იდეალურია მაცივრებისთვის და კონდიციონერებისთვის, რათა კომპრესორი არ დაზიანდეს ხშირი ჩართვა-გამორთვით). \nინდიკატორები: აღჭურვილია 4 შუქდიოდით, რომლებიც აჩვენებს მიმდინარე მდგომარეობას.',
    specs: [
      { label: 'დენი', value: '16A' },
      { label: 'სიმძლავრე', value: '3500 VA' },
      { label: 'ბუდეები', value: '2 როზეტი' },
      { label: 'დაცვა', value: '180V-240V' }
    ]
  },
  {
    id: '4plug',
    title: 'ოთხბუდიანი მოდელი (ჩამრთველით)',
    subtitle: 'საოჯახო კომფორტი',
    image: '/2.png',
    delay: '1 წუთი',
    color: 'blue',
    description: 'გათვლილია წვრილ ტექნიკაზე და მოსახერხებელია მრავალი მოწყობილობის ერთდროულად მისაერთებლად.',
    fullDescription: 'ეს მოდელი უფრო მეტად გათვლილია წვრილ ტექნიკაზე და მოსახერხებელია მრავალი მოწყობილობის ერთდროულად მისაერთებლად. \n\nდანიშნულება: სტანდარტული ძაბვის დამცველი და დამაგრძელებელი. \n\nძირითადი მახასიათებლები: \nბუდეების რაოდენობა: 4 როზეტი. \nმართვა: აქვს წითელი ღილაკი (On/Off) კორპუსზე, რაც საშუალებას გაძლევთ ფიზიკურად გათიშოთ დენის მიწოდება კაბელის გამოუღებლად. \n\nფუნქციონალი: მასზე დატანილია სპეციალური ცხრილი, რომელიც მიუთითებს მუშაობის რეჟიმებს: \nწითელი ნათურა: ძაბვა ნორმის ფარგლებს გარეთაა. \nმწვანე ნათურა: დენი მიეწოდება. \nყვითელი ნათურა: დაყოვნების რეჟიმი (Timer). \n\nგამოყენება: საუკეთესოა კომპიუტერული ტექნიკის, ტელევიზორების და აუდიო სისტემებისთვის.',
    specs: [
      { label: 'ბუდეების რაოდენობა', value: '4 როზეტი' },
      { label: 'მართვა', value: 'On/Off' },
      { label: 'დაყოვნება', value: '1 წუთი' },
      { label: 'გამოყენება', value: 'წვრილი ტექნიკა' }
    ]
  }
];

const ElectricBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020617]">
    <div className="absolute inset-0 opacity-50">
      {[...Array(40)].map((_, i) => {
        const startY = Math.random() * 100;
        const duration = 1.5 + Math.random() * 2.5;
        const delay = Math.random() * 5;
        const isEmerald = i % 2 === 0;
        return (
          <motion.div
            key={`h-${i}`}
            initial={{ left: "-20%", top: `${startY}%`, opacity: 0, rotate: (Math.random() - 0.5) * 20 }}
            animate={{ left: "120%", opacity: [0, 1, 1, 0] }}
            transition={{ duration, repeat: Infinity, delay, ease: "linear" }}
            className={cn("absolute h-[2px] w-[300px] blur-[1px]", isEmerald ? "bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]" : "bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]")}
          />
        );
      })}
      {[...Array(20)].map((_, i) => {
        const startX = Math.random() * 100;
        const duration = 2 + Math.random() * 3;
        const delay = Math.random() * 5;
        const isEmerald = i % 2 === 0;
        return (
          <motion.div
            key={`v-${i}`}
            initial={{ top: "-20%", left: `${startX}%`, opacity: 0, rotate: (Math.random() - 0.5) * 10 }}
            animate={{ top: "120%", opacity: [0, 1, 1, 0] }}
            transition={{ duration, repeat: Infinity, delay, ease: "linear" }}
            className={cn("absolute w-[2px] h-[300px] blur-[1px]", isEmerald ? "bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]" : "bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]")}
          />
        );
      })}
    </div>
    <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/15 blur-[180px] rounded-full animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/15 blur-[180px] rounded-full animate-pulse delay-700" />
  </div>
);

const Modal = ({ product, onClose }: { product: typeof PRODUCTS[0], onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-2xl bg-slate-900/90 backdrop-blur-3xl border border-white/15 rounded-[32px] p-6 md:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cn("absolute top-[-20%] right-[-20%] w-[50%] h-[50%] blur-[100px] rounded-full opacity-25", product.color === 'emerald' ? "bg-emerald-500" : "bg-blue-500")} />
        <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all z-[310] group">
          <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
        <div className="relative z-10 flex flex-col gap-5 md:gap-6">
          <div className="flex items-center gap-4">
            <div className={cn("w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center border", product.color === 'emerald' ? "bg-emerald-500/10 border-emerald-500/20" : "bg-blue-500/10 border-blue-500/20")}>
              <Zap className={cn("w-5 h-5 md:w-6 md:h-6", product.color === 'emerald' ? "text-emerald-500" : "text-blue-500")} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white leading-none">{product.title}</h3>
              <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">{product.subtitle}</p>
            </div>
          </div>
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-emerald-500">სრული აღწერილობა</h4>
            <div className="text-[13px] md:text-base text-slate-300 leading-relaxed whitespace-pre-line bg-white/5 p-4 md:p-6 rounded-2xl border border-white/5 h-[250px] md:h-[300px] overflow-y-auto custom-scrollbar">
              {product.fullDescription}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={cn("flex-1 py-3.5 md:py-4 rounded-2xl font-black text-[10px] md:text-sm uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3", product.color === 'emerald' ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20" : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20")}>
              შეიძინე WHATSAPP <ExternalLink className="w-5 h-5" />
            </a>
            <button onClick={onClose} className="px-8 py-3.5 md:py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest transition-all">დახურვა</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProductSection = ({ product, onOpenDetails }: { product: typeof PRODUCTS[0], onOpenDetails: () => void }) => {
  const isEmerald = product.color === 'emerald';
  return (
    <section className="h-screen snap-start flex flex-col items-center justify-center px-4 md:px-6 pt-16 md:pt-24 pb-4 md:pb-8 relative overflow-hidden">
      <div className="max-w-7xl w-full h-full flex flex-col lg:grid lg:grid-cols-2 gap-2 md:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative flex items-center justify-center group flex-none h-[22vh] md:h-[35vh] lg:h-auto w-full lg:flex-1"
        >
          <div className={cn("absolute inset-0 blur-[30px] md:blur-[100px] rounded-full opacity-15 md:opacity-30 group-hover:opacity-50 transition-opacity duration-700", isEmerald ? "bg-emerald-500" : "bg-blue-500")} />
          <motion.img src={product.image} alt={product.title} className="h-full w-auto max-w-[85%] lg:max-w-lg object-contain mix-blend-screen brightness-110 contrast-125 drop-shadow-[0_0_20px_rgba(16,185,129,0.2)] z-10" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col gap-1.5 md:gap-6 w-full flex-1 justify-center items-center lg:items-start text-center lg:text-left overflow-hidden pb-2"
        >
          <div className="space-y-0.5 md:space-y-3">
            <h2 className={cn("text-base md:text-4xl lg:text-6xl font-black tracking-tighter leading-tight", isEmerald ? "text-emerald-400" : "text-blue-400")}>{product.title}</h2>
            <p className="text-[9px] md:text-lg lg:text-xl text-slate-400 font-medium italic border-l-0 lg:border-l-4 lg:pl-6 border-white/10 leading-tight md:leading-relaxed line-clamp-2 md:line-clamp-none">{product.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-1 md:gap-4 w-full max-w-md">
            {product.specs.map((spec, i) => (
              <div key={i} className="glass-card p-1 md:p-4 border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                <p className="text-[5px] md:text-[9px] text-slate-500 uppercase font-black tracking-widest mb-0.5">{spec.label}</p>
                <p className="text-[8px] md:text-base font-bold text-white">{spec.value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-1.5 md:gap-4 mt-1 md:mt-2 w-full max-w-md">
             <button onClick={onOpenDetails} className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-black text-[8px] md:text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"><Info className="w-3 md:w-4 h-3 md:h-4 text-blue-400" /> დეტალურად</button>
             <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={cn("flex-1 w-full py-2 md:py-4 rounded-xl md:rounded-2xl font-black text-[8px] md:text-sm uppercase tracking-widest transition-all shadow-2xl flex items-center justify-center gap-1", isEmerald ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20" : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20")}>ყიდვა <ExternalLink className="w-2.5 h-2.5 md:w-5 md:h-5" /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
  return (
    <div className="h-screen w-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 overflow-hidden">
      <ElectricBackground />
      <header className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 py-2 md:py-3 flex justify-between items-center bg-slate-950/40 backdrop-blur-md border-b border-white/5">
        <div className="flex flex-col">
          <span className="text-lg md:text-xl font-bold tracking-tighter leading-none">IDEAL</span>
          <span className="text-[8px] md:text-[9px] font-black text-emerald-500/70 uppercase tracking-widest mt-0.5">იდეალი</span>
        </div>
        <div className="flex items-center gap-2 md:gap-8">
           <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-emerald-600/90 hover:bg-emerald-500 text-white px-4 md:px-5 py-1.5 md:py-2 rounded-full font-black text-[8px] md:text-[9px] uppercase tracking-widest shadow-xl shadow-emerald-500/10 transition-all flex items-center gap-1.5">WhatsApp <ExternalLink className="w-2.5 h-2.5 md:w-3 md:h-3" /></a>
        </div>
      </header>
      <main className="h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar relative z-10 scroll-pt-[60px] md:scroll-pt-[80px]">
        <section className="h-screen snap-start flex flex-col items-center justify-center px-4 md:px-6 pt-16 md:pt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none" />
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-center z-10 max-w-4xl space-y-2 md:space-y-8">
            <h1 className="text-3xl md:text-6xl lg:text-9xl font-black tracking-tighter leading-none"><span className="text-emerald-500">IDEAL</span> <br /> იდეალი</h1>
            <p className="text-[10px] md:text-xl lg:text-2xl text-slate-400 font-medium leading-relaxed italic px-2">თქვენი ტექნიკის საიმედო მცველი. შექმნილია სპეციалურად <br className="hidden md:block" /> საქართველოს ელექტроქსელისთვის.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-6 pt-1 md:pt-10">
              <div className="flex items-center gap-1 md:gap-4 text-slate-500 uppercase text-[5px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.5em]"><Activity className="w-2 md:w-5 h-2 md:h-5 text-emerald-500" /> 100% რეალური დაცვა</div>
              <div className="w-1 h-1 md:w-2 md:h-2 bg-slate-800 rounded-full hidden md:block" />
              <div className="flex items-center gap-1 md:gap-4 text-slate-500 uppercase text-[5px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.5em]"><Cpu className="w-2 md:w-5 h-2 md:h-5 text-blue-500" /> ინტელექტუალური უსაფრთხოება</div>
            </div>
          </motion.div>
        </section>
        {PRODUCTS.map((product) => (
          <ProductSection key={product.id} product={product} onOpenDetails={() => setSelectedProduct(product)} />
        ))}
        <section className="h-[50vh] md:h-[40vh] snap-start flex flex-col items-center justify-center px-6 bg-slate-900/20 border-t border-white/5">
           <div className="text-center space-y-3 md:space-y-6">
              <div className="flex flex-col items-center justify-center">
                <span className="text-xl md:text-5xl font-black italic leading-none">IDEAL</span>
                <span className="text-[8px] md:text-[10px] font-bold text-emerald-500 tracking-[0.3em] uppercase">იდეალი</span>
              </div>
              <div className="space-y-2">
                <p className="text-[7px] md:text-xs text-slate-500 uppercase tracking-[0.3em] md:tracking-[0.5em] font-black">© 2026 IDEAL PROTECT GEORGIA</p>
                <p className="text-[8px] md:text-[10px] font-black text-slate-600 tracking-widest uppercase opacity-50">powered by phoenix</p>
              </div>
           </div>
        </section>
      </main>
      <AnimatePresence>{selectedProduct && <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}</AnimatePresence>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .glass-card { background: rgba(15, 23, 42, 0.4); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(16, 185, 129, 0.3); border-radius: 10px; }
      `}</style>
    </div>
  );
}
