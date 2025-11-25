import { Document } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface DocumentCardProps {
  document: Document;
  index: number;
}

export function DocumentCard({ document, index }: DocumentCardProps) {
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
            src={document.imageUrl} 
            alt={document.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 z-20 bg-background/90 backdrop-blur px-3 py-1 text-xs font-serif tracking-wider rounded-full shadow-sm">
            {document.pages} PAGES
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-medium tracking-wide uppercase">
            <FileText className="w-3 h-3" />
            <span>Technical Document</span>
          </div>
          <h3 className="text-xl font-serif font-medium leading-tight mb-3 text-foreground group-hover:text-primary transition-colors">
            {document.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {document.description}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button 
            asChild 
            variant="outline" 
            className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border-primary/20 hover:border-primary"
            data-testid="button-open-document"
          >
            <a href={document.link} target="_blank" rel="noopener noreferrer">
              View Document <ExternalLink className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
