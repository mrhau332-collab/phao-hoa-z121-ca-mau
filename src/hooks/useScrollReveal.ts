"use client";

import { useEffect, useRef, RefObject } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * useScrollReveal — attaches IntersectionObserver to an element ref.
 * When the element enters the viewport, adds the "in-view" class (for CSS animation).
 * Removes it when the element leaves if `once` is false.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
): RefObject<T | null> {
  const { threshold = 0.15, rootMargin = "0px 0px -40px 0px", once = true } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("in-view");
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}
