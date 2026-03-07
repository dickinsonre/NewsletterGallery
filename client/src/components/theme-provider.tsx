import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";
type ColorScheme = "water" | "forest" | "sunset" | "ocean" | "lavender" | "classic" | "darkmode" | "epa" | "uf" | "osu" | "auburn";

export const colorSchemes: Record<ColorScheme, { name: string; primary: string; gradient: string; preview: string }> = {
  water: {
    name: "Water Blue",
    primary: "210 100% 50%",
    gradient: "linear-gradient(135deg, #e0d5f0 0%, #c8b8e8 25%, #b0a0e0 50%, #98a0e8 75%, #a0b0f0 100%)",
    preview: "bg-gradient-to-br from-purple-200 via-blue-200 to-blue-300"
  },
  forest: {
    name: "Forest Green",
    primary: "142 70% 35%",
    gradient: "linear-gradient(135deg, #d4e8d0 0%, #a8d4a0 25%, #7cc07a 50%, #5aab58 75%, #4a9048 100%)",
    preview: "bg-gradient-to-br from-green-200 via-green-300 to-emerald-400"
  },
  sunset: {
    name: "Sunset Orange",
    primary: "25 95% 50%",
    gradient: "linear-gradient(135deg, #fce4d6 0%, #f8c8a8 25%, #f5a070 50%, #e87040 75%, #d85030 100%)",
    preview: "bg-gradient-to-br from-orange-200 via-orange-300 to-red-400"
  },
  ocean: {
    name: "Deep Ocean",
    primary: "200 80% 45%",
    gradient: "linear-gradient(135deg, #cce8f0 0%, #98d0e8 25%, #60b8e0 50%, #3098c8 75%, #1878a8 100%)",
    preview: "bg-gradient-to-br from-cyan-200 via-cyan-300 to-blue-500"
  },
  lavender: {
    name: "Lavender Dreams",
    primary: "270 60% 55%",
    gradient: "linear-gradient(135deg, #f0e0f8 0%, #e0c0f0 25%, #c8a0e0 50%, #b080d0 75%, #9860c0 100%)",
    preview: "bg-gradient-to-br from-purple-200 via-purple-300 to-violet-400"
  },
  classic: {
    name: "Classic Gray",
    primary: "220 15% 50%",
    gradient: "linear-gradient(135deg, #f0f0f2 0%, #e0e0e5 25%, #c8c8d0 50%, #b0b0b8 75%, #9898a0 100%)",
    preview: "bg-gradient-to-br from-gray-200 via-gray-300 to-slate-400"
  },
  darkmode: {
    name: "Dark Mode",
    primary: "220 15% 60%",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #1a1a2e 75%, #0a0a1a 100%)",
    preview: "bg-gradient-to-br from-slate-800 via-slate-900 to-gray-950"
  },
  epa: {
    name: "EPA",
    primary: "207 80% 38%",
    gradient: "linear-gradient(135deg, #d0e4f0 0%, #1a6eaa 25%, #0b5394 50%, #003f72 75%, #002d52 100%)",
    preview: "bg-gradient-to-br from-blue-300 via-blue-600 to-blue-900"
  },
  uf: {
    name: "UF Gators",
    primary: "22 100% 50%",
    gradient: "linear-gradient(135deg, #FA4616 0%, #e03e10 25%, #003087 50%, #002070 75%, #FA4616 100%)",
    preview: "bg-gradient-to-br from-orange-500 via-blue-800 to-orange-500"
  },
  osu: {
    name: "OSU Buckeyes",
    primary: "0 100% 30%",
    gradient: "linear-gradient(135deg, #BB0000 0%, #9e0000 25%, #666666 50%, #9e0000 75%, #BB0000 100%)",
    preview: "bg-gradient-to-br from-red-700 via-gray-500 to-red-700"
  },
  auburn: {
    name: "Auburn Tigers",
    primary: "18 100% 35%",
    gradient: "linear-gradient(135deg, #DD550C 0%, #c44a0a 25%, #03244d 50%, #c44a0a 75%, #DD550C 100%)",
    preview: "bg-gradient-to-br from-orange-600 via-blue-950 to-orange-600"
  }
};

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultColorScheme?: ColorScheme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  colorScheme: ColorScheme;
  setTheme: (theme: Theme) => void;
  setColorScheme: (colorScheme: ColorScheme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  colorScheme: "water",
  setTheme: () => null,
  setColorScheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultColorScheme = "water",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    () => (localStorage.getItem(`${storageKey}-color`) as ColorScheme) || defaultColorScheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const scheme = colorSchemes[colorScheme];
    root.style.setProperty("--primary", scheme.primary);
    if (colorScheme === "darkmode") {
      root.classList.remove("light");
      root.classList.add("dark");
    }
  }, [colorScheme]);

  const value = {
    theme,
    colorScheme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    setColorScheme: (colorScheme: ColorScheme) => {
      localStorage.setItem(`${storageKey}-color`, colorScheme);
      setColorScheme(colorScheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
