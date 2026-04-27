// hooks/useNavDropdown.ts
import { useState, useRef, useEffect } from "react";

export function useNavDropdown() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpenKey(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (key: string) =>
    setOpenKey((prev) => (prev === key ? null : key));

  return { openKey, toggle, ref };
}
