"use client";

import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const groups = document.querySelectorAll("[data-ao-group]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const group = entry.target as HTMLElement;
          const children = group.querySelectorAll<HTMLElement>(".ao-scroll");

          children.forEach((child, index) => {
            // 🚀 PREPARA RENDERIZADO SUAVE
            child.style.willChange = "opacity, transform";

            // 🚀 STAGGER SIN LAG (delay se aplica fuera del frame)
            const delay = index * 120;

            requestAnimationFrame(() => {
              child.style.transitionDelay = `${delay}ms`;
              child.classList.add("visible");
            });
          });

          observer.unobserve(group);
        });
      },
      { threshold: 0.15 }
    );

    groups.forEach((group) => observer.observe(group));

    return () => observer.disconnect();
  }, []);
}
