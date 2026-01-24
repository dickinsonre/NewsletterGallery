import { LinkedInArticle, Difficulty } from "@/lib/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock, Calendar, ThumbsUp, ThumbsDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ArticleCardProps {
  article: LinkedInArticle;
  index: number;
}

const difficultyColors: Record<Difficulty, string> = {
  beginner: "bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30",
  intermediate: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30",
  advanced: "bg-red-500/20 text-red-700 dark:text-red-400 border-red-500/30"
};

const difficultyLabels: Record<Difficulty, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced"
};

export function ArticleCard({ article, index }: ArticleCardProps) {
  const [feedback, setFeedback] = useState<"helpful" | "not-helpful" | null>(null);
  
  useEffect(() => {
    const stored = localStorage.getItem(`feedback-article-${article.id}`);
    if (stored) setFeedback(stored as "helpful" | "not-helpful");
  }, [article.id]);
  
  const handleFeedback = (type: "helpful" | "not-helpful") => {
    if (feedback === type) {
      localStorage.removeItem(`feedback-article-${article.id}`);
      setFeedback(null);
    } else {
      localStorage.setItem(`feedback-article-${article.id}`, type);
      setFeedback(type);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
    >
      <Card className="h-full flex flex-col group hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card hover:border-primary/30">
        <CardContent className="flex-grow p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-muted-foreground font-medium">
              Article
            </span>
            <span className={`px-2 py-1 text-xs font-medium rounded border ${difficultyColors[article.difficulty]}`}>
              {difficultyLabels[article.difficulty]}
            </span>
          </div>
          
          <h3 className="text-lg font-serif font-semibold leading-snug mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
            {article.description}
          </p>
          
          <div className="flex flex-wrap gap-1.5 mb-3">
            {article.categories.slice(0, 2).map((cat) => (
              <Badge key={cat} variant="outline" className="text-xs px-2 py-0.5 font-normal">
                {cat}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>
        </CardContent>
        <CardFooter className="p-5 pt-0 flex flex-col gap-3">
          <Button 
            asChild 
            variant="outline" 
            size="sm"
            className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
          >
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              Read on LinkedIn <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </Button>
          <div className="flex items-center justify-center gap-2 w-full">
            <span className="text-xs text-muted-foreground">Helpful?</span>
            <button
              onClick={() => handleFeedback("helpful")}
              className={`p-1.5 rounded-md transition-all ${feedback === "helpful" ? "bg-green-500/20 text-green-600" : "hover:bg-muted text-muted-foreground"}`}
              data-testid={`feedback-helpful-article-${article.id}`}
            >
              <ThumbsUp className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handleFeedback("not-helpful")}
              className={`p-1.5 rounded-md transition-all ${feedback === "not-helpful" ? "bg-red-500/20 text-red-600" : "hover:bg-muted text-muted-foreground"}`}
              data-testid={`feedback-not-helpful-article-${article.id}`}
            >
              <ThumbsDown className="w-3.5 h-3.5" />
            </button>
            {feedback && <span className="text-xs text-muted-foreground ml-1">Thanks!</span>}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
