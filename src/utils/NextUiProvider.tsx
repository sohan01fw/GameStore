// app/providers.tsx
"use client";

import { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
export function NextUiProviders({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="white">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  ) : (
    <></>
  );
}
