import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { articles } from "@/data/articles";

const ArticleList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", ...Array.from(new Set(articles.map(article => article.category)))];
  
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Todos os Artigos sobre IA
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore nossa biblioteca completa de conteúdo sobre Inteligência Artificial. 
            Mais de 20 artigos especializados para turbinar seus conhecimentos.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="max-w-md mx-auto">
            <Input
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-lg"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  selectedCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-primary/10'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA Mid-page */}
        <CTASection
          title="🔥 Não Perca as Melhores Oportunidades de 2025"
          description="Descubra como ganhar dinheiro online com estratégias comprovadas. Milhares já transformaram suas vidas!"
          buttonText="Clique Aqui e Garanta Já"
          href="https://go.hotmart.com/E11195793E"
          variant="primary"
        />

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.description}
              slug={article.slug}
              readTime={article.readTime}
              category={article.category}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-4">Nenhum artigo encontrado</h3>
            <p className="text-muted-foreground mb-6">
              Tente ajustar sua busca ou filtros para encontrar o conteúdo desejado.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Todos");
              }}
              className="cta-button-secondary"
            >
              Limpar Filtros
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <CTASection
          title="💻 Crie Seus Próprios Aplicativos com IA"
          description="Use as ferramentas mais avançadas para desenvolvimento sem código. Readdy IA, Manus IA e muito mais!"
          buttonText="Aproveite Esta Oferta Agora"
          href="https://readdy.ai/invite/Abq8XgpzJGtX"
          variant="secondary"
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default ArticleList;