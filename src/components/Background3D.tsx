import { useEffect, useRef } from 'react';

export default function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width * 0.5;
    let mouseY = height * 0.4;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let time = 0;

    // Define architectural square frames and rectangular contour lines
    const squareFrames = [
      { baseSize: 160, speed: 0.003, width: 1.5, color: 'rgba(125, 211, 252, 0.38)', dash: [], hasCorners: true },
      { baseSize: 260, speed: -0.002, width: 1.2, color: 'rgba(147, 197, 253, 0.32)', dash: [10, 14], hasCorners: false },
      { baseSize: 380, speed: 0.0025, width: 1.8, color: 'rgba(56, 189, 248, 0.35)', dash: [], hasCorners: true },
      { baseSize: 520, speed: -0.0018, width: 1.2, color: 'rgba(186, 230, 253, 0.36)', dash: [16, 20], hasCorners: true },
      { baseSize: 680, speed: 0.0015, width: 1.4, color: 'rgba(96, 165, 250, 0.28)', dash: [], hasCorners: false },
      { baseSize: 860, speed: -0.0012, width: 1.0, color: 'rgba(56, 189, 248, 0.24)', dash: [24, 26], hasCorners: true },
      { baseSize: 1060, speed: 0.0009, width: 1.2, color: 'rgba(147, 197, 253, 0.20)', dash: [], hasCorners: false },
      { baseSize: 1280, speed: -0.0007, width: 1.0, color: 'rgba(125, 211, 252, 0.16)', dash: [32, 32], hasCorners: true },
      { baseSize: 1540, speed: 0.0005, width: 1.0, color: 'rgba(186, 230, 253, 0.12)', dash: [], hasCorners: false },
    ];

    // Secondary architectural square clusters
    const secondarySquares = [
      { offsetX: 0.80, offsetY: 0.22, baseSize: 160, speed: 0.004, color: 'rgba(125, 211, 252, 0.32)', isDashed: false },
      { offsetX: 0.80, offsetY: 0.22, baseSize: 280, speed: -0.0025, color: 'rgba(147, 197, 253, 0.26)', isDashed: true },
      { offsetX: 0.80, offsetY: 0.22, baseSize: 420, speed: 0.0018, color: 'rgba(186, 230, 253, 0.20)', isDashed: false },
      { offsetX: 0.16, offsetY: 0.76, baseSize: 200, speed: 0.0035, color: 'rgba(96, 165, 250, 0.28)', isDashed: false },
      { offsetX: 0.16, offsetY: 0.76, baseSize: 360, speed: -0.002, color: 'rgba(56, 189, 248, 0.22)', isDashed: true },
    ];

    // Square perimeter nodes
    const squareNodes = Array.from({ length: 16 }, (_, i) => ({
      frameIndex: i % squareFrames.length,
      progress: i / 16,
      speed: 0.0008 + (i % 4) * 0.0004,
      size: 2.5 + (i % 3) * 1.0,
    }));

    const render = () => {
      time += 0.01;

      // Smooth mouse parallax easing
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.5 + ((mouseX - width * 0.5) * 0.06);
      const centerY = height * 0.42 + ((mouseY - height * 0.42) * 0.06);

      // 1. Ambient Soft Radial Glow Spheres in Light Blues
      const ambientGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        40,
        centerX,
        centerY,
        width * 0.65
      );
      ambientGlow.addColorStop(0, 'rgba(125, 211, 252, 0.14)');
      ambientGlow.addColorStop(0.35, 'rgba(96, 165, 250, 0.08)');
      ambientGlow.addColorStop(0.7, 'rgba(147, 197, 253, 0.03)');
      ambientGlow.addColorStop(1, 'rgba(247, 247, 245, 0)');

      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, width, height);

      // Secondary top-right ambient glow
      const trGlow = ctx.createRadialGradient(
        width * 0.85,
        height * 0.2,
        20,
        width * 0.85,
        height * 0.2,
        width * 0.4
      );
      trGlow.addColorStop(0, 'rgba(186, 230, 253, 0.12)');
      trGlow.addColorStop(1, 'rgba(247, 247, 245, 0)');
      ctx.fillStyle = trGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Main Concentric Square & Rectangular Frames (Quadrados e Desfocados)
      squareFrames.forEach((frame, idx) => {
        const pulse = Math.sin(time * 1.4 + idx * 0.6) * 6;
        const currentSize = frame.baseSize + pulse;
        const rotationAngle = time * frame.speed * 6;
        const halfSize = currentSize / 2;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotationAngle);

        // Desfoque suave e brilho nas linhas quadradas
        ctx.shadowColor = 'rgba(125, 211, 252, 0.45)';
        ctx.shadowBlur = 9;

        ctx.strokeStyle = frame.color;
        ctx.lineWidth = frame.width;
        if (frame.dash.length > 0) {
          ctx.setLineDash(frame.dash);
        } else {
          ctx.setLineDash([]);
        }

        // Desenhar quadrado concêntrico
        ctx.strokeRect(-halfSize, -halfSize, currentSize, currentSize);

        // Cantoneiras / marcadores arquiteturais nos 4 cantos do quadrado
        if (frame.hasCorners) {
          const cornerLen = Math.min(14, halfSize * 0.2);
          ctx.setLineDash([]);
          ctx.strokeStyle = 'rgba(147, 197, 253, 0.45)';
          ctx.lineWidth = frame.width + 0.8;

          // Canto Superior Esquerdo
          ctx.beginPath();
          ctx.moveTo(-halfSize + cornerLen, -halfSize);
          ctx.lineTo(-halfSize, -halfSize);
          ctx.lineTo(-halfSize, -halfSize + cornerLen);
          ctx.stroke();

          // Canto Superior Direito
          ctx.beginPath();
          ctx.moveTo(halfSize - cornerLen, -halfSize);
          ctx.lineTo(halfSize, -halfSize);
          ctx.lineTo(halfSize, -halfSize + cornerLen);
          ctx.stroke();

          // Canto Inferior Esquerdo
          ctx.beginPath();
          ctx.moveTo(-halfSize + cornerLen, halfSize);
          ctx.lineTo(-halfSize, halfSize);
          ctx.lineTo(-halfSize, halfSize - cornerLen);
          ctx.stroke();

          // Canto Inferior Direito
          ctx.beginPath();
          ctx.moveTo(halfSize - cornerLen, halfSize);
          ctx.lineTo(halfSize, halfSize);
          ctx.lineTo(halfSize, halfSize - cornerLen);
          ctx.stroke();
        }

        // Linhas de retículo / cruzamentos arquiteturais em alguns quadrados
        if (idx === 1 || idx === 3 || idx === 5) {
          ctx.setLineDash([4, 8]);
          ctx.strokeStyle = 'rgba(186, 230, 253, 0.25)';
          ctx.lineWidth = 1;

          // Marcação em cruz central
          ctx.beginPath();
          ctx.moveTo(-halfSize - 8, 0);
          ctx.lineTo(-halfSize + 8, 0);
          ctx.moveTo(halfSize - 8, 0);
          ctx.lineTo(halfSize + 8, 0);
          ctx.moveTo(0, -halfSize - 8);
          ctx.lineTo(0, -halfSize + 8);
          ctx.moveTo(0, halfSize - 8);
          ctx.lineTo(0, halfSize + 8);
          ctx.stroke();
        }

        ctx.restore();
      });

      // 3. Secondary Floating Square Clusters
      secondarySquares.forEach((sec, i) => {
        const secX = width * sec.offsetX + ((mouseX - width * 0.5) * 0.04);
        const secY = height * sec.offsetY + ((mouseY - height * 0.5) * 0.04);
        const currentSize = sec.baseSize + Math.cos(time + i) * 4;
        const half = currentSize / 2;

        ctx.save();
        ctx.translate(secX, secY);
        ctx.rotate(time * sec.speed * 5);

        ctx.shadowColor = 'rgba(186, 230, 253, 0.4)';
        ctx.shadowBlur = 8;

        ctx.strokeStyle = sec.color;
        ctx.lineWidth = 1.2;
        ctx.setLineDash(sec.isDashed ? [8, 12] : []);

        // Quadrado secundário
        ctx.strokeRect(-half, -half, currentSize, currentSize);

        // Subquadrado interior
        ctx.setLineDash([]);
        ctx.strokeStyle = 'rgba(125, 211, 252, 0.35)';
        ctx.lineWidth = 1;
        ctx.strokeRect(-half * 0.6, -half * 0.6, currentSize * 0.6, currentSize * 0.6);

        ctx.restore();
      });

      // 4. Floating Nodes moving along Square Perimeters
      squareNodes.forEach((node) => {
        const frame = squareFrames[node.frameIndex];
        node.progress = (node.progress + node.speed) % 1;
        const size = frame.baseSize + Math.sin(time * 1.4 + node.frameIndex) * 6;
        const half = size / 2;
        const perimeter = size * 4;
        const dist = node.progress * perimeter;

        let nx = 0;
        let ny = 0;

        if (dist < size) {
          // Top edge: left to right
          nx = -half + dist;
          ny = -half;
        } else if (dist < size * 2) {
          // Right edge: top to bottom
          nx = half;
          ny = -half + (dist - size);
        } else if (dist < size * 3) {
          // Bottom edge: right to left
          nx = half - (dist - size * 2);
          ny = half;
        } else {
          // Left edge: bottom to top
          nx = -half;
          ny = half - (dist - size * 3);
        }

        const rotationAngle = time * frame.speed * 6;
        const cos = Math.cos(rotationAngle);
        const sin = Math.sin(rotationAngle);

        const finalX = centerX + (nx * cos - ny * sin);
        const finalY = centerY + (nx * sin + ny * cos);

        ctx.save();
        ctx.shadowColor = 'rgba(125, 211, 252, 0.65)';
        ctx.shadowBlur = 10;

        // Ponto quadrado luminoso
        ctx.fillStyle = 'rgba(56, 189, 248, 0.85)';
        ctx.fillRect(finalX - node.size / 2, finalY - node.size / 2, node.size, node.size);

        // Borda de marcação externa quadrada
        ctx.strokeStyle = 'rgba(186, 230, 253, 0.5)';
        ctx.lineWidth = 1;
        ctx.setLineDash([]);
        ctx.strokeRect(finalX - (node.size + 4) / 2, finalY - (node.size + 4) / 2, node.size + 4, node.size + 4);

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      id="canvas-background-container"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      <canvas
        id="architectural-square-grid-canvas"
        ref={canvasRef}
        className="w-full h-full block"
        style={{ 
          opacity: 0.90,
          filter: 'blur(1.5px)' // Desfoque suave nas linhas quadradas de fundo
        }}
      />
    </div>
  );
}
