import Image from "next/image";
import Link from "next/link";

interface DivinityLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showLink?: boolean;
  theme?: "light" | "dark";
}

const sizes = {
  sm: { width: 140, height: 44, className: "h-9 w-auto" },
  md: { width: 180, height: 56, className: "h-11 w-auto" },
  lg: { width: 220, height: 72, className: "h-12 w-auto sm:h-14" },
};

const markSizes = {
  sm: "max-h-8",
  md: "max-h-9",
  lg: "max-h-10 sm:max-h-11",
};

export function DivinityLogo({
  className = "",
  size = "md",
  showLink = true,
  theme = "light",
}: DivinityLogoProps) {
  const s = sizes[size];
  const markMaxH = markSizes[size];

  const content =
    theme === "dark" ? (
      <span className={`inline-flex items-center gap-3 ${className}`}>
        <span className="flex shrink-0 items-center py-0.5">
          <Image
            src="/logos/divinity-impex-mark.png"
            alt=""
            width={178}
            height={169}
            className={`${markMaxH} w-auto object-contain`}
            priority
            aria-hidden
          />
        </span>
        <span className="min-w-0 leading-none">
          <span className="font-display block text-base font-semibold leading-tight tracking-[0.1em] text-white sm:text-lg">
            DIVINITY IMPEX
          </span>
          <span className="font-accent mt-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-hub-gold-light sm:text-[10px]">
            Global Brands Hub
          </span>
        </span>
      </span>
    ) : (
      <Image
        src="/logos/divinity-impex.png"
        alt="Divinity Impex"
        width={s.width}
        height={s.height}
        className={`${s.className} object-contain object-left ${className}`}
        priority
      />
    );

  if (!showLink) return content;

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center transition-opacity hover:opacity-90"
      aria-label="Divinity Impex home"
    >
      {content}
    </Link>
  );
}
