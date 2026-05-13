import { GitHubRepo } from "@/lib/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, GitFork, Calendar, Code } from "lucide-react";
import { motion } from "framer-motion";

interface RepoCardProps {
  repo: GitHubRepo;
  index: number;
}

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/30",
  JavaScript: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30",
  Python: "bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30",
  Ruby: "bg-red-500/20 text-red-700 dark:text-red-400 border-red-500/30",
  C: "bg-gray-500/20 text-gray-700 dark:text-gray-400 border-gray-500/30",
  HTML: "bg-orange-500/20 text-orange-700 dark:text-orange-400 border-orange-500/30",
  Fortran: "bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-500/30",
  Pascal: "bg-teal-500/20 text-teal-700 dark:text-teal-400 border-teal-500/30",
  "AGS Script": "bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 border-indigo-500/30",
};

export function RepoCard({ repo, index }: RepoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
    >
      <Card className="h-full flex flex-col group hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card hover:border-primary/30">
        <CardContent className="flex-grow p-5">
          <div className="flex items-start justify-between gap-2 mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              {repo.fork ? (
                <Badge variant="outline" className="text-xs px-2 py-0.5 gap-1 font-normal text-muted-foreground">
                  <GitFork className="w-3 h-3" /> Fork
                </Badge>
              ) : (
                <Badge variant="outline" className="text-xs px-2 py-0.5 font-normal bg-primary/10 text-primary border-primary/30">
                  Original
                </Badge>
              )}
              {repo.language && (
                <Badge variant="outline" className={`text-xs px-2 py-0.5 gap-1 font-normal ${languageColors[repo.language] || "bg-muted/50 text-muted-foreground"}`}>
                  <Code className="w-3 h-3" />
                  {repo.language}
                </Badge>
              )}
            </div>
            {repo.stars > 0 && (
              <div className="flex items-center gap-1 text-xs text-yellow-600 dark:text-yellow-400 flex-shrink-0">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="font-medium">{repo.stars}</span>
              </div>
            )}
          </div>

          <h3 className="text-base font-serif font-semibold leading-snug mb-2 text-foreground group-hover:text-primary transition-colors break-words">
            {repo.name}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
            {repo.description || "No description available."}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {repo.categories.slice(0, 2).map((cat) => (
              <Badge key={cat} variant="outline" className="text-xs px-2 py-0.5 font-normal">
                {cat}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>Updated {repo.updatedAt}</span>
          </div>
        </CardContent>

        <CardFooter className="p-5 pt-0">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
          >
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
              View on GitHub <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
