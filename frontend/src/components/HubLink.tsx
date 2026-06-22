interface HubLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function HubLink({ href, children, className = '' }: HubLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex min-w-[280px] items-center justify-center rounded-xl border border-white/10 bg-gradient-to-r from-amber-500 to-orange-600 px-10 py-4 text-center text-lg font-semibold tracking-wide text-white shadow-lg shadow-amber-500/20 transition-all duration-200 hover:border-amber-500/30 hover:from-amber-400 hover:to-orange-500 active:scale-[0.98] glass glow-amber sm:min-w-[320px] ${className}`}
    >
      {children}
    </a>
  );
}
