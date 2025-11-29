"use client";

import useScrollReveal from "./useScrollReveal";

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useScrollReveal();
  return <>{children}</>;
}
