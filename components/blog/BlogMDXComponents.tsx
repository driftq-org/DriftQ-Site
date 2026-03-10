import Link from "next/link";
import React from "react";
import CodeBlock from "@/components/ui/CodeBlock";

const anchorCls =
  "font-medium text-emerald-200 underline underline-offset-4 decoration-white/10 " +
  "transition-colors hover:text-emerald-100 hover:decoration-emerald-200/60";

export const blogMdxComponents = {
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2
      {...props}
      className={["mt-16 mb-5 text-3xl font-black tracking-tight text-white", props.className].filter(Boolean).join(" ")}
    />
  ),

  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3
      {...props}
      className={["mt-12 mb-4 text-[1.55rem] font-extrabold tracking-tight text-white", props.className].filter(Boolean).join(" ")}
    />
  ),

  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p
      {...props}
      className={["my-6 text-[1.08rem] leading-8 text-white/88", props.className].filter(Boolean).join(" ")}
    />
  ),

  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul
      {...props}
      className={["my-6 list-disc space-y-2 pl-6 text-white/84 marker:text-emerald-200", props.className].filter(Boolean).join(" ")}
    />
  ),

  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol
      {...props}
      className={["my-6 list-decimal space-y-2 pl-6 text-white/84 marker:text-emerald-200", props.className].filter(Boolean).join(" ")}
    />
  ),

  li: (props: React.ComponentPropsWithoutRef<"li">) => (
    <li
      {...props}
      className={["pl-1 text-[1.06rem] leading-8", props.className].filter(Boolean).join(" ")}
    />
  ),

  strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
    <strong
      {...props}
      className={["font-semibold text-white", props.className].filter(Boolean).join(" ")}
    />
  ),

  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      {...props}
      className={["my-8 rounded-2xl border-l-2 border-emerald-300/60 bg-white/[0.04] px-5 py-4 text-white/78", props.className].filter(Boolean).join(" ")}
    />
  ),

  hr: (props: React.ComponentPropsWithoutRef<"hr">) => (
    <hr {...props} className={["my-12 border-white/10", props.className].filter(Boolean).join(" ")} />
  ),

  a: (props: any) => {
    const href: string | undefined = props?.href;
    const isExternal = typeof href === "string" && href.startsWith("http");

    if (href && isExternal) {
      return (
        <a
          {...props}
          className={[anchorCls, props.className].filter(Boolean).join(" ")}
          target="_blank"
          rel="noreferrer"
        />
      );
    }

    if (href) {
      return (
        <Link href={href} className={[anchorCls, props.className].filter(Boolean).join(" ")}>
          {props.children}
        </Link>
      );
    }

    return <a {...props} className={[anchorCls, props.className].filter(Boolean).join(" ")} />;
  },

  pre: ({ children, ...props }: React.ComponentPropsWithoutRef<"pre">) => (
    <CodeBlock {...props} className={["my-7", props.className].filter(Boolean).join(" ")}>
      {children}
    </CodeBlock>
  ),

  code: (props: React.ComponentPropsWithoutRef<"code">) => {
    const { className, ...rest } = props;
    const isBlockCode = typeof className === "string" && className.trim().length > 0;

    if (isBlockCode) {
      return <code {...rest} className={className} />;
    }

    return (
      <code
        {...rest}
        className={["rounded-md bg-white/8 px-1.5 py-0.5 text-[0.92em] text-zinc-100", className].filter(Boolean).join(" ")}
      />
    );
  }
} as const;
