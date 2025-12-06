import { LinkedInArticle, Difficulty } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface ArticleCardProps {
  article: LinkedInArticle;
  index: number;
}

const difficultyColors: Record<Difficulty, string> = {
  beginner: "bg-green-500/20 text-green-700 border-green-500/30",
  intermediate: "bg-yellow-500/20 text-yellow-700 border-yellow-500/30",
  advanced: "bg-red-500/20 text-red-700 border-red-500/30"
};

const difficultyLabels: Record<Difficulty, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced"
};

export function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col group hover:shadow-lg transition-all duration-300 border-none bg-card/50 backdrop-blur-sm hover:bg-card">
        <CardHeader className="p-0 overflow-hidden rounded-t-lg relative aspect-[4/3]">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 z-20 bg-background/90 backdrop-blur px-3 py-1 text-xs font-serif tracking-wider rounded-full shadow-sm">
            ARTICLE #{index + 1}
          </div>
          <div className={`absolute top-4 right-4 z-20 px-2 py-1 text-xs font-medium rounded-full border ${difficultyColors[article.difficulty]}`}>
            {difficultyLabels[article.difficulty]}
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-6">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-medium tracking-wide uppercase">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>
          <h3 className="text-xl font-serif font-medium leading-tight mb-3 text-foreground group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">
            {article.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {article.categories.slice(0, 2).map((cat) => (
              <Badge key={cat} variant="secondary" className="text-xs px-2 py-0.5 font-normal">
                {cat}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button 
            asChild 
            variant="outline" 
            className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border-primary/20 hover:border-primary"
          >
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              Read Article <ExternalLink className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
