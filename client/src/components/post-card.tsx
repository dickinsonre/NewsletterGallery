import { LinkedInPost } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MessageSquare } from "lucide-react";
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col group hover:shadow-lg transition-all duration-300 border-none bg-card/50 backdrop-blur-sm hover:bg-card">
        <CardContent className="flex-grow p-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-medium tracking-wide uppercase">
            <MessageSquare className="w-3 h-3" />
            <span>LinkedIn Post</span>
            <span className="ml-auto">{post.date}</span>
          </div>
          <h3 className="text-xl font-serif font-medium leading-tight mb-3 text-foreground group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
            {post.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.categories.map((cat) => (
              <Badge key={cat} variant="secondary" className="text-xs px-2 py-0.5 font-normal">
                {cat}
              </Badge>
            ))}
          </div>
          <Button 
            asChild 
            variant="outline" 
            className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border-primary/20 hover:border-primary"
            data-testid="button-open-post"
          >
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              View Post <ExternalLink className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
