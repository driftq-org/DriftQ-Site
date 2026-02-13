import Link from "next/link";
import React from "react";
import CodeBlock from "@/components/ui/CodeBlock";

export const mdxComponents = {
  a: (props: any) => {
    const href: string | undefined = props?.href;
    const isExternal = typeof href === "string" && href.startsWith("http");

    const cls =
      "underline underline-offset-4 decoration-white/20 hover:decoration-emerald-200/60 " +
      "text-emerald-200 hover:text-emerald-100";

    if (href && isExternal) {
      // keep any existing className but ensure readable defaults
      return (
        <a
          {...props}
          className={[cls, props.className].filter(Boolean).join(" ")}
          target="_blank"
          rel="noreferrer"
        />
      );
    }

    if (href) {
      return (
        <Link
          href={href}
          className={[cls, props.className].filter(Boolean).join(" ")}
        >
          {props.children}
        </Link>
      );
    }

    return <a {...props} className={[cls, props.className].filter(Boolean).join(" ")} />;
  },

  pre: ({ children, ...props }: React.ComponentPropsWithoutRef<"pre">) => (
    <CodeBlock {...props}>{children}</CodeBlock>
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
        className={["rounded border border-white/10 bg-white/5 px-1 py-0.5 text-white/90", className].filter(Boolean).join(" ")}
      />
    );
  }
} as const;
