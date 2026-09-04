"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium font-sans transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#FF3B47] focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer";

    const sizeStyles = {
      sm: "px-3.5 py-1.5 text-xs rounded-sm gap-2",
      md: "px-5 py-2.5 text-sm rounded-sm gap-2.5",
      lg: "px-7 py-3.5 text-base rounded-sm gap-3",
    };

    const variantStyles = {
      primary:
        "bg-[#C81E3A] hover:bg-[#FF3B47] text-[#F2EDE9] shadow-[0_0_20px_rgba(200,30,58,0.25)] hover:shadow-[0_0_28px_rgba(255,59,71,0.4)] border border-[#FF3B47]/30 active:scale-[0.98]",
      secondary:
        "bg-[#1A1614] hover:bg-[#241E1C] text-[#F2EDE9] border border-[#C81E3A]/30 hover:border-[#FF3B47]/60 shadow-[0_0_15px_rgba(200,30,58,0.1)] active:scale-[0.98]",
      ghost:
        "bg-transparent hover:bg-[#1A1614] text-[#9C9490] hover:text-[#F2EDE9] border border-transparent hover:border-[#C81E3A]/20 active:scale-[0.98]",
    };

    const combinedClassName = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    if (href) {
      return (
        <a href={href} className={combinedClassName}>
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              <span>Procesando</span>
            </span>
          ) : (
            children
          )}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>Procesando</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
