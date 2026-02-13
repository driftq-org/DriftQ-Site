"use client";

import React from "react";

const extractText = (node: React.ReactNode): string => {
  if (node === null || node === undefined || typeof node === "boolean") {
    return "";
  }

  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map((child) => extractText(child)).join("");
  }

  if (React.isValidElement(node)) {
    const props = node.props as { children?: React.ReactNode };
    return extractText(props.children);
  }

  return "";
};

const fallbackCopy = (text: string): boolean => {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";

  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
};

type CodeBlockProps = React.ComponentPropsWithoutRef<"pre"> & {
  codeClassName?: string;
  copyText?: string;
};

const CodeBlock = (props: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);
  const resetTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const { children, className, codeClassName, copyText, ...preProps } = props;

  const textToCopy = React.useMemo(() => {
    const value = copyText ?? extractText(children);
    return value.replace(/\n$/, "");
  }, [children, copyText]);

  const isPrimitive = typeof children === "string" || typeof children === "number";
  const renderedChildren = isPrimitive
    ? <code className={codeClassName}>{children}</code>
    : children;

  const handleCopy = async () => {
    if (!textToCopy) {
      return;
    }

    let ok = false;

    try {
      await navigator.clipboard.writeText(textToCopy);
      ok = true;
    } catch {
      ok = fallbackCopy(textToCopy);
    }

    if (!ok) {
      return;
    }

    setCopied(true);

    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }

    resetTimerRef.current = setTimeout(() => {
      setCopied(false);
    }, 1400);
  };

  return (
    <pre
      {...preProps}
      className={[
        "relative",
        "[&_code]:block [&_code]:w-full [&_code]:whitespace-pre",
        "[&_code]:!bg-transparent [&_code]:!p-0 [&_code]:!m-0 [&_code]:!text-inherit",
        "[&_code]:!shadow-none [&_code]:!border-0 [&_code]:!rounded-none",
        className,
        "!pr-16"
      ].filter(Boolean).join(" ")}
    >
      <button
        type="button"
        onClick={handleCopy}
        disabled={!textToCopy}
        aria-label="Copy code to clipboard"
        className={[
          "absolute right-2 top-2 z-10 rounded-md border border-white/15 bg-black/45 px-2 py-1",
          "text-[10px] font-semibold uppercase tracking-wide text-white/85 transition hover:bg-black/65",
          "disabled:cursor-not-allowed disabled:opacity-40"
        ].join(" ")}
      >
        {copied ? "Copied" : "Copy"}
      </button>

      {renderedChildren}
    </pre>
  );
};

export default CodeBlock;
