import { Tool } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Github, Code, Copy, Check } from "lucide-react";
import { useState } from "react";

interface ToolCardProps {
  tool: Tool;
}

const languageColors: Record<string, string> = {
  Python: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Ruby: "bg-red-500/20 text-red-400 border-red-500/30",
  JavaScript: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  SQL: "bg-green-500/20 text-green-400 border-green-500/30",
  JSON: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

const statusColors: Record<string, string> = {
  stable: "bg-green-500/20 text-green-600 dark:text-green-400",
  beta: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400",
  alpha: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
};

export function ToolCard({ tool }: ToolCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(tool.codePreview);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-all" data-testid={`tool-card-${tool.id}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Badge variant="outline" className={languageColors[tool.language]}>
                {tool.language}
              </Badge>
              <Badge variant="secondary" className={statusColors[tool.status]}>
                {tool.status}
              </Badge>
              <span className="text-xs text-muted-foreground">v{tool.version}</span>
            </div>
            <h3 className="font-serif font-semibold text-lg leading-tight" data-testid={`tool-title-${tool.id}`}>
              {tool.title}
            </h3>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-2">{tool.description}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Code className="w-3 h-3" /> Code Preview
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-7 px-2 text-xs"
              data-testid={`button-copy-${tool.id}`}
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 mr-1" /> Copied
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 mr-1" /> Copy
                </>
              )}
            </Button>
          </div>
          <pre className="bg-background/80 rounded-md p-3 text-xs overflow-x-auto border border-border">
            <code className="text-foreground/80">{tool.codePreview}</code>
          </pre>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-4">
          {tool.categories.map((cat) => (
            <Badge key={cat} variant="outline" className="text-xs">
              {cat}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2 mt-4">
          {tool.downloadUrl && (
            <Button size="sm" className="flex-1" asChild data-testid={`button-download-${tool.id}`}>
              <a href={tool.downloadUrl} download>
                <Download className="w-4 h-4 mr-1" /> Download
              </a>
            </Button>
          )}
          {tool.githubUrl && (
            <Button size="sm" variant="outline" className="flex-1" asChild data-testid={`button-github-${tool.id}`}>
              <a href={tool.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-1" /> View Source
              </a>
            </Button>
          )}
          {!tool.downloadUrl && !tool.githubUrl && (
            <Button size="sm" variant="secondary" className="flex-1" onClick={handleCopy} data-testid={`button-copy-code-${tool.id}`}>
              <Copy className="w-4 h-4 mr-1" /> Copy Code
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
