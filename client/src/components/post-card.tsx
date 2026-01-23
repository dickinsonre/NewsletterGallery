import { LinkedInPost } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MessageSquare, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface PostCardProps {
  post: LinkedInPost;
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
    >
      <Card className="h-full flex flex-col group hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card hover:border-primary/30">
        <CardContent className="flex-grow p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="flex items-center gap-1 text-xs text-muted-foreground font-medium">
              <MessageSquare className="w-3 h-3" />
              LinkedIn Post
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
          </div>
          
          <h3 className="text-lg font-serif font-semibold leading-snug mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
            {post.description}
          </p>
          
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.categories.map((cat) => (
              <Badge key={cat} variant="outline" className="text-xs px-2 py-0.5 font-normal">
                {cat}
              </Badge>
            ))}
          </div>
          
          <Button 
            asChild 
            variant="outline" 
            size="sm"
            className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
            data-testid="button-open-post"
          >
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              View Post <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
