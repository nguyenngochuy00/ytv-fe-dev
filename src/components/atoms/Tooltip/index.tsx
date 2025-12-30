"use client";

import { useState, useRef, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface TooltipProps {
  children: ReactNode;
  content: string;
}

export function Tooltip({ children, content }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ left: 0, top: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const updatePosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        left: rect.left + rect.width / 2,
        top: rect.bottom + 8, // 8px spacing below
      });
    }
  };

  const handleMouseEnter = () => {
    updatePosition();
    setIsVisible(true);
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVisible(false)}
        className="relative inline-block max-w-full"
      >
        {children}
      </div>
      {mounted &&
        isVisible &&
        createPortal(
          <div
            className="fixed z-9999 px-4 py-3 bg-black/60 text-white text-[13px] font-medium rounded-lg shadow-2xl pointer-events-none animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200 max-w-[280px] text-center leading-normal"
            style={{
              left: coords.left,
              top: coords.top,
              transform: "translate(-50%, 0)",
            }}
          >
            {content}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-black/60" />
          </div>,
          document.body
        )}
    </>
  );
}
