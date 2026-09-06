"use client";

import React, { useState } from "react";
import { Highlight, type PrismTheme } from "prism-react-renderer";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// Custom DTech dark-crimson syntax theme
export const dtechCodeTheme: PrismTheme = {
  plain: {
    color: "#F2EDE9",
    backgroundColor: "#0B0808",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#68615D",
        fontStyle: "italic",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#9C9490",
      },
    },
    {
      types: ["property", "tag", "boolean", "number", "constant", "symbol", "deleted"],
      style: {
        color: "#FF525E",
      },
    },
    {
      types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
      style: {
        color: "#F2EDE9",
      },
    },
    {
      types: ["operator", "entity", "url"],
      style: {
        color: "#C81E3A",
      },
    },
    {
      types: ["atrule", "attr-value", "keyword"],
      style: {
        color: "#FF3B47",
        fontWeight: "bold",
      },
    },
    {
      types: ["function", "class-name"],
      style: {
        color: "#FFFFFF",
        fontWeight: "600",
      },
    },
    {
      types: ["regex", "important", "variable"],
      style: {
        color: "#E2D9D2",
      },
    },
  ],
};

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({
  code,
  language,
  showLineNumbers = true,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className={cn("relative group/code text-xs sm:text-sm font-mono bg-[#0B0808]", className)}>
      {/* Floating Copy Button */}
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copiar código al portapapeles"
        className="absolute top-3 right-3 z-10 px-2.5 py-1.5 bg-[#181211]/90 border border-[#2E2220] rounded-none text-xs text-[#9C9490] hover:text-[#F2EDE9] hover:border-[#FF3B47]/50 hover:bg-[#221715] flex items-center gap-1.5 transition-all cursor-pointer backdrop-blur-sm shadow-md"
      >
        {copied ? (
          <>
            <Check size={13} className="text-[#00E676]" />
            <span className="text-[#00E676]">Copiado</span>
          </>
        ) : (
          <>
            <Copy size={13} />
            <span>Copiar</span>
          </>
        )}
      </button>

      {/* Syntax Highlighting Container */}
      <Highlight theme={dtechCodeTheme} code={code.trim()} language={language}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className="p-5 overflow-x-auto font-mono text-xs sm:text-[13px] leading-[1.65] selection:bg-[#C81E3A] selection:text-[#F2EDE9]"
            style={{ ...style, backgroundColor: "transparent" }}
          >
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              return (
                <div key={i} {...lineProps} className="table-row">
                  {showLineNumbers && (
                    <span className="table-cell select-none text-right pr-5 text-[#4A3E3B] font-mono text-xs">
                      {i + 1}
                    </span>
                  )}
                  <span className="table-cell">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
