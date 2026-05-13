import { GitHubRepo } from "@/lib/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, GitFork, Calendar, Code } from "lucide-react";
import { motion } from "framer-motion";
import swmm5Cover from "@assets/repo_swmm5_cover.png";
import icmCover from "@assets/repo_icm_cover.png";
import rubyCover from "@assets/repo_ruby_cover.png";
import aiCover from "@assets/repo_ai_cover.png";
import historyCover from "@assets/repo_history_cover.png";
import codeCover from "@assets/repo_code_cover.png";
import dataCover from "@assets/repo_data_cover.png";
import githubCover from "@assets/repo_github_cover.png";

interface RepoCardProps {
  repo: GitHubRepo;
  index: number;
}

function getRepoImage(repo: GitHubRepo): string {
  const cats = repo.categories;
  if (cats.includes("Ruby Scripting")) return rubyCover;
  if (cats.includes("AI/ML")) return aiCover;
  if (cats.includes("History")) return historyCover;
  if (cats.includes("SQL/Data") && !cats.includes("SWMM5") && !cats.includes("ICM InfoWorks")) return dataCover;
  if (cats.includes("Code Analysis") && !cats.includes("SWMM5") && !cats.includes("ICM InfoWorks")) return codeCover;
  if (cats.includes("ICM InfoWorks")) return icmCover;
  if (cats.includes("SWMM5")) return swmm5Cover;
  return githubCover;
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
  const coverImage = getRepoImage(repo);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
      className="h-full"
    >
      <Card className="h-full flex flex-col group hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card hover:border-primary/30 overflow-hidden">
        {/* Cover image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted flex-shrink-0">
          <img
            src={coverImage}
            alt={repo.categories[0] || "GitHub repo"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Overlay badges */}
          <div className="absolute top-2 left-2 flex gap-1.5 flex-wrap">
            {repo.fork ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-black/50 text-white backdrop-blur-sm">
                <GitFork className="w-2.5 h-2.5" /> Fork
              </span>
            ) : (
              <span className="inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/80 text-primary-foreground backdrop-blur-sm">
                Original
              </span>
            )}
          </div>
          {repo.stars > 0 && (
            <div className="absolute top-2 right-2 flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-black/50 text-yellow-300 backdrop-blur-sm">
              <Star className="w-2.5 h-2.5 fill-current" />
              {repo.stars}
            </div>
          )}
        </div>

        <CardContent className="flex-grow p-4">
          {/* Language badge */}
          {repo.language && (
            <div className="mb-2">
              <Badge variant="outline" className={`text-xs px-2 py-0.5 gap-1 font-normal ${languageColors[repo.language] || "bg-muted/50 text-muted-foreground"}`}>
                <Code className="w-3 h-3" />
                {repo.language}
              </Badge>
            </div>
          )}

          <h3 className="text-sm font-serif font-semibold leading-snug mb-1.5 text-foreground group-hover:text-primary transition-colors break-words">
            {repo.name}
          </h3>

          <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 mb-3">
            {repo.description || "No description available."}
          </p>

          <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>Updated {repo.updatedAt}</span>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full gap-2 text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
          >
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
              View on GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
