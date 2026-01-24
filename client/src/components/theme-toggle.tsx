import { Moon, Sun, Palette, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme, colorSchemes } from "@/components/theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme, colorScheme, setColorScheme } = useTheme();

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-9 h-9"
        data-testid="button-theme-toggle"
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="w-9 h-9" data-testid="button-color-scheme">
            <Palette className="h-4 w-4" />
            <span className="sr-only">Color scheme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {(Object.keys(colorSchemes) as Array<keyof typeof colorSchemes>).map((key) => (
            <DropdownMenuItem
              key={key}
              onClick={() => setColorScheme(key)}
              className="flex items-center gap-3 cursor-pointer"
              data-testid={`color-scheme-${key}`}
            >
              <div className={`w-5 h-5 rounded-full ${colorSchemes[key].preview}`} />
              <span className="flex-grow">{colorSchemes[key].name}</span>
              {colorScheme === key && <Check className="w-4 h-4 text-primary" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
