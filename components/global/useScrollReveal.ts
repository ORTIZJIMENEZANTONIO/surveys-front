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
          const children = group.querySelectorAll(".ao-scroll");

          children.forEach((child, index) => {
            (child as HTMLElement).style.transitionDelay = `${index * 120}ms`;
            child.classList.add("visible");
          });

          observer.unobserve(group);
        });
      },
      {
        threshold: 0.15, // cuando el 15% del grupo es visible
      }
    );

    groups.forEach((group) => observer.observe(group));

    return () => observer.disconnect();
  }, []);
}
