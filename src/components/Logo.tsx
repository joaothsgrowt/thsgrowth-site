interface LogoProps {
  variant?: 'light' | 'dark' | 'brand';
  className?: string;
  height?: number | string;
}

export default function Logo({
  variant = 'brand',
  className = '',
  height = 36
}: LogoProps) {
  // Cor do ícone de acordo com a variante
  const iconColor = variant === 'light' ? '#FFFFFF' : '#1952BE';
  const calculatedHeight = typeof height === 'number' ? `${height}px` : height;

  return (
    <div 
      id="ths-brand-logo-icon"
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ height: calculatedHeight }}
    >
      <svg
        viewBox="0 0 100 120"
        style={{ height: '100%', width: 'auto' }}
        className="block shrink-0 transition-transform duration-200 hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logo THS Growth"
      >
        {/* Paralelogramo Superior */}
        <polygon
          points="40,10 96,10 72,56 16,56"
          fill={iconColor}
        />
        {/* Paralelogramo Inferior */}
        <polygon
          points="26,66 82,66 58,112 2,112"
          fill={iconColor}
        />
      </svg>
    </div>
  );
}
