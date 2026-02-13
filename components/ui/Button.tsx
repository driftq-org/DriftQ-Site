import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "focus-visible:ring-emerald-300/40 focus-visible:ring-offset-[#05070c]";

const styles = {
  primary:
    "bg-emerald-300 text-zinc-950 hover:bg-emerald-200 shadow-soft",

  secondary:
    "border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20",

  ghost:
    "bg-transparent text-white/90 hover:bg-white/10 hover:text-white",
} as const;

const Button = (props: Props) => {
  const variant = props.variant ?? "primary";
  const cls = `${base} ${styles[variant]} ${props.className ?? ""}`;

  if (props.href) {
    return (
      <Link href={props.href} className={cls}>
        {props.children}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} className={cls} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
