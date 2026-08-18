import { useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, Database, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenArchitectModal: () => void;
  onExploreCapacities: () => void;
}

export default function Hero({ onOpenArchitectModal, onExploreCapacities }: HeroProps) {
  const { language, t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Animação Geométrica Arquitetural em Branco (Adaptada do sistema 3D das outras páginas)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let mouseX = width * 0.7;
    let mouseY = height * 0.45;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let time = 0;

    // Molduras geométricas arquiteturais em branco (com diferentes rotações, espessuras e pontilhados)
    const whiteFrames = [
      { baseSize: 180, speed: 0.0028, width: 1.4, opacity: 0.35, dash: [], hasCorners: true },
      { baseSize: 290, speed: -0.0018, width: 1.1, opacity: 0.25, dash: [8, 12], hasCorners: false },
      { baseSize: 420, speed: 0.0022, width: 1.5, opacity: 0.28, dash: [], hasCorners: true },
      { baseSize: 580, speed: -0.0015, width: 1.1, opacity: 0.20, dash: [14, 18], hasCorners: true },
      { baseSize: 760, speed: 0.0012, width: 1.2, opacity: 0.16, dash: [], hasCorners: false },
      { baseSize: 980, speed: -0.0009, width: 1.0, opacity: 0.12, dash: [20, 24], hasCorners: true },
      { baseSize: 1220, speed: 0.0006, width: 1.0, opacity: 0.08, dash: [], hasCorners: false },
    ];

    // Nós luminosos em branco que percorrem as trajetórias
    const whiteNodes = Array.from({ length: 14 }, (_, i) => ({
      frameIndex: i % whiteFrames.length,
      progress: i / 14,
      speed: 0.0009 + (i % 4) * 0.0005,
      size: 2.2 + (i % 3) * 0.8,
    }));

    const drawCorners = (x: number, y: number, size: number, angle: number, opacity: number) => {
      const half = size / 2;
      const cornerLen = Math.min(20, size * 0.15);

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 1.5})`;
      ctx.lineWidth = 1.8;
      ctx.beginPath();

      // Top-Left
      ctx.moveTo(-half, -half + cornerLen);
      ctx.lineTo(-half, -half);
      ctx.lineTo(-half + cornerLen, -half);

      // Top-Right
      ctx.moveTo(half - cornerLen, -half);
      ctx.lineTo(half, -half);
      ctx.lineTo(half, -half + cornerLen);

      // Bottom-Right
      ctx.moveTo(half, half - cornerLen);
      ctx.lineTo(half, half);
      ctx.lineTo(half - cornerLen, half);

      // Bottom-Left
      ctx.moveTo(-half + cornerLen, half);
      ctx.lineTo(-half, half);
      ctx.lineTo(-half, half - cornerLen);

      ctx.stroke();
      ctx.restore();
    };

    const render = () => {
      time += 0.01;

      // Suavização do mouse com parallax
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      ctx.clearRect(0, 0, width, height);

      // Centro ótico da animação posicionado na área direita do Hero
      const centerX = width * 0.65 + ((mouseX - width * 0.65) * 0.05);
      const centerY = height * 0.45 + ((mouseY - height * 0.45) * 0.05);

      // 1. Glow Radial em Luz Branca Suave
      const whiteGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        30,
        centerX,
        centerY,
        width * 0.55
      );
      whiteGlow.addColorStop(0, 'rgba(255, 255, 255, 0.12)');
      whiteGlow.addColorStop(0.4, 'rgba(255, 255, 255, 0.05)');
      whiteGlow.addColorStop(0.8, 'rgba(255, 255, 255, 0.01)');
      whiteGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = whiteGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Renderização das Molduras Geométricas Arquiteturais em Branco
      whiteFrames.forEach((frame) => {
        const breathing = Math.sin(time * 0.8 + frame.baseSize) * 6;
        const currentSize = frame.baseSize + breathing;
        const angle = time * frame.speed;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle);

        ctx.strokeStyle = `rgba(255, 255, 255, ${frame.opacity})`;
        ctx.lineWidth = frame.width;
        ctx.setLineDash(frame.dash);

        // Retângulo com cantos levemente arredondados
        const half = currentSize / 2;
        const radius = Math.min(14, currentSize * 0.08);

        ctx.beginPath();
        ctx.moveTo(-half + radius, -half);
        ctx.lineTo(half - radius, -half);
        ctx.quadraticCurveTo(half, -half, half, -half + radius);
        ctx.lineTo(half, half - radius);
        ctx.quadraticCurveTo(half, half, half - radius, half);
        ctx.lineTo(-half + radius, half);
        ctx.quadraticCurveTo(-half, half, -half, half - radius);
        ctx.lineTo(-half, -half + radius);
        ctx.quadraticCurveTo(-half, -half, -half + radius, -half);
        ctx.closePath();
        ctx.stroke();

        ctx.restore();

        // Cantos reforçados
        if (frame.hasCorners) {
          drawCorners(centerX, centerY, currentSize, angle, frame.opacity);
        }
      });

      // 3. Renderização dos Nós Luminosos em Branco
      whiteNodes.forEach((node) => {
        node.progress = (node.progress + node.speed) % 1;
        const frame = whiteFrames[node.frameIndex];
        const angle = time * frame.speed;
        const half = (frame.baseSize + Math.sin(time * 0.8 + frame.baseSize) * 6) / 2;

        const perimeter = half * 8;
        const currentDist = node.progress * perimeter;

        let localX = 0;
        let localY = 0;

        if (currentDist < half * 2) {
          localX = -half + currentDist;
          localY = -half;
        } else if (currentDist < half * 4) {
          localX = half;
          localY = -half + (currentDist - half * 2);
        } else if (currentDist < half * 6) {
          localX = half - (currentDist - half * 4);
          localY = half;
        } else {
          localX = -half;
          localY = half - (currentDist - half * 6);
        }

        const rotatedX = localX * Math.cos(angle) - localY * Math.sin(angle);
        const rotatedY = localX * Math.sin(angle) + localY * Math.cos(angle);

        const finalX = centerX + rotatedX;
        const finalY = centerY + rotatedY;

        ctx.save();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(finalX, finalY, node.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-[96vh] lg:min-h-[102vh] flex items-center pt-36 sm:pt-44 lg:pt-52 pb-24 sm:pb-28 lg:pb-36 overflow-hidden bg-[#00173D]"
    >
      {/* 1. Imagem de Fundo Fotográfica Nítida */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/hero_tech_team_1787055403623.jpg" 
          alt="Liderança e Arquitetura Comercial Tecnológica"
          className="w-full h-full object-cover object-[center_30%] lg:object-[68%_35%] scale-100 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        
        {/* Gradiente Lateral Suave (Legibilidade à esquerda e nitidez fotográfica à direita) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001438] via-[#001D4E]/85 via-45% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001230] via-transparent to-[#001944]/40" />
      </div>

      {/* 2. Animação de Fundo Arquitetural Adaptada para o Branco */}
      <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full opacity-60 mix-blend-screen"
        />
      </div>

      {/* 3. Conteúdo Principal da Página Inicial */}
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 w-full relative z-10">
        <div className="max-w-3xl text-left space-y-7 sm:space-y-8 pt-4 sm:pt-8 lg:pt-10">
          
          {/* Headline com Texto 100% em Branco Gradiente Animado (Sem vermelho e azul) */}
          <h1 className="text-3xl sm:text-5xl md:text-[52px] lg:text-[60px] font-light leading-[1.14] tracking-tight bg-gradient-to-r from-white via-white/60 to-white bg-clip-text text-transparent animate-text-shimmer select-none">
            {language === 'pt' ? (
              'A arquitetura comercial por trás de empresas que querem crescer.'
            ) : (
              'The commercial architecture powering high-growth enterprises.'
            )}
          </h1>

          {/* Subheadline Reduzida, Leve e Confortável */}
          <p className="text-xs sm:text-sm lg:text-[16px] text-blue-100/90 font-light leading-relaxed max-w-2xl tracking-normal">
            {t.hero.subtitle}
          </p>

          {/* Botões de Ação com Estilo Limpo e Sofisticado */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              id="btn-hero-talk-architect"
              onClick={onOpenArchitectModal}
              className="bg-white hover:bg-slate-100 text-[#002D7A] hover:text-[#001D53] px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 text-[#002D7A]" />
            </button>

            <button
              id="btn-hero-explore-capacities"
              onClick={onExploreCapacities}
              className="bg-white/5 hover:bg-white/15 text-white px-8 py-4 rounded-full text-xs sm:text-sm font-light tracking-wide transition-all duration-200 border border-white/40 hover:border-white/70 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs"
            >
              <span>{language === 'pt' ? 'Saber mais' : 'Learn more'}</span>
            </button>
          </div>

          {/* Indicadores de Engenharia & Confiança Enterprise */}
          <div className="pt-10 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-blue-100/80">
            <div className="flex items-center gap-2 font-light">
              <ShieldCheck className="w-4 h-4 text-white/90 shrink-0" />
              <span>{t.hero.sla}</span>
            </div>
            <div className="flex items-center gap-2 font-light">
              <Database className="w-4 h-4 text-white/90 shrink-0" />
              <span>{t.hero.governance}</span>
            </div>
            <div className="flex items-center gap-2 font-light">
              <Cpu className="w-4 h-4 text-white/90 shrink-0" />
              <span>{t.hero.multiplatform}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
