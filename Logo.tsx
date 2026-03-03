interface LogoProps {
  variant?: 'light' | 'dark';
  compact?: boolean;
  className?: string;
}

export default function Logo({ variant = 'dark', compact = false, className = '' }: LogoProps) {
  // Horizontal layout to match the standard header logo pattern
  // "THS" (Bold) + "Growth" (Medium) in Space Grotesk
  
  const textColor = variant === 'light' ? 'text-white' : 'text-[#003C8B]';
  const textSize = compact ? 'text-xl' : 'text-2xl';

  return (
    <div className={`flex items-center gap-1.5 font-display tracking-tight leading-none select-none ${className}`}>
      <span className={`font-bold ${textSize} ${textColor}`}>
        THS
      </span>
      <span className={`font-medium ${textSize} ${textColor}`}>
        Growth
      </span>
    </div>
  );
}
