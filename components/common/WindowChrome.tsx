"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ChromeTab {
  id: string;
  label: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

interface WindowChromeProps {
  title?: string;
  tabs?: ChromeTab[];
  activeTabId?: string;
  onTabChange?: (tabId: string) => void;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function WindowChrome({
  title,
  tabs,
  activeTabId,
  onTabChange,
  actions,
  children,
  className,
  contentClassName,
}: WindowChromeProps) {
  return (
    <div
      className={cn(
        "w-full rounded-md border border-[#C81E3A]/25 bg-[#14100F] shadow-[0_16px_45px_rgba(0,0,0,0.85),0_0_24px_rgba(200,30,58,0.14)] overflow-hidden transition-all duration-300 hover:border-[#FF3B47]/45 group/chrome",
        className
      )}
    >
      {/* Chrome Window Header Bar */}
      <div className="bg-[#0F0C0B] border-b border-[#241C1A] px-4 py-3 flex items-center justify-between gap-4 select-none">
        {/* Left: 3 macOS-style dots in subdued grays (no competitive red) */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#3E3432] group-hover/chrome:bg-[#524543] transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#2E2725] group-hover/chrome:bg-[#403634] transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#221C1B] group-hover/chrome:bg-[#332A28] transition-colors" />
        </div>

        {/* Center: File tabs or window title */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 no-scrollbar">
          {tabs && tabs.length > 0 ? (
            tabs.map((tab) => {
              const isActive = activeTabId === tab.id;
              const TabIcon = tab.icon;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onTabChange?.(tab.id)}
                  className={cn(
                    "px-3 py-1 text-xs font-mono rounded-none flex items-center gap-2 transition-all cursor-pointer",
                    isActive
                      ? "bg-[#1C1514] text-[#F2EDE9] border-b border-[#FF3B47] font-semibold"
                      : "text-[#9C9490] hover:text-[#F2EDE9] hover:bg-[#161110]"
                  )}
                >
                  {TabIcon && <TabIcon size={13} className={isActive ? "text-[#FF3B47]" : "text-[#9C9490]"} />}
                  <span>{tab.label}</span>
                </button>
              );
            })
          ) : (
            title && (
              <span className="text-xs font-mono text-[#9C9490] tracking-wider truncate">
                {title}
              </span>
            )
          )}
        </div>

        {/* Right: Custom action badges or copy buttons */}
        <div className="flex items-center gap-2 shrink-0 text-xs font-mono">
          {actions}
        </div>
      </div>

      {/* Main Window Content */}
      <div className={cn("relative w-full", contentClassName)}>
        {children}
      </div>
    </div>
  );
}
