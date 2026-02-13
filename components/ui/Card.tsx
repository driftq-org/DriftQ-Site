import { ReactNode } from "react";

const Card = (props: { title: string; children: ReactNode }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-soft backdrop-blur">
    <div className="text-sm font-semibold text-white/70">{props.title}</div>
    <div className="mt-3 text-base text-white/90">{props.children}</div>
  </div>
);

export default Card;
