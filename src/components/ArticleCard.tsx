import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ArticleCardProps {
  title: string;
  description: string;
  slug: string;
  readTime: string;
  category: string;
}

const ArticleCard = ({ title, description, slug, readTime, category }: ArticleCardProps) => {
  return (
    <Card className="hover-lift">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <span className="trust-badge">{category}</span>
          <span className="text-sm text-muted-foreground">{readTime}</span>
        </div>
        <CardTitle className="text-xl hover:text-primary transition-colors">
          <Link to={`/artigo/${slug}`}>{title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4">
          {description}
        </CardDescription>
        <Link 
          to={`/artigo/${slug}`}
          className="inline-flex items-center text-primary hover:text-primary-hover font-medium"
        >
          Ler artigo completo →
        </Link>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;