import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Home = () => {
  const featuredArticles = articles.slice(0, 6);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-6 bg-success text-success-foreground">
            ✨ Atualizado Diariamente com as Últimas Tendências
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">
            Inteligência Artificial no Brasil
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Descubra as <strong>tendências mais quentes de 2025</strong>, ferramentas revolucionárias e 
            oportunidades de negócio que estão transformando o mercado brasileiro de IA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild className="cta-button">
              <Link to="/artigos">Explorar Artigos Completos</Link>
            </Button>
            <Button asChild className="cta-button-secondary">
              <a href="https://lovable.dev/?via=marcelo-barbosa" target="_blank" rel="noopener noreferrer">
                Criar Seu App com IA
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Artigos Especializados</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-cta mb-2">100%</div>
              <div className="text-muted-foreground">Foco em Oportunidades</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-success mb-2">2025</div>
              <div className="text-muted-foreground">Tendências Atualizadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <CTASection
        title="🚀 Multiplique Sua Renda com Ferramentas de IA"
        description="Ganhe R$ 20 e muito mais com nossos parceiros financeiros. PagBank, PicPay e Banco Neon com benefícios exclusivos!"
        buttonText="Aproveite Esta Oferta Agora"
        href="https://renda-boost.lovable.app"
        variant="primary"
      />

      {/* Featured Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Artigos Mais Lidos sobre IA em 2025
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conteúdo profundo e estratégico para você dominar as tecnologias que estão 
              revolucionando o mercado brasileiro.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredArticles.map((article) => (
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
          
          <div className="text-center">
            <Button asChild className="cta-button-secondary">
              <Link to="/artigos">Ver Todos os Artigos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
      <CTASection
        title="💻 Crie Aplicativos e Sites com IA em Segundos"
        description="Descubra as plataformas mais avançadas para desenvolvimento NoCode. Lovable, Readdy IA e Manus IA."
        buttonText="Clique Aqui e Garante Já"
        href="https://lovable.dev/?via=marcelo-barbosa"
        variant="secondary"
      />

      {/* Trending Topics */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Temas em Alta: IA 2025
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">🤖 Agentes Autônomos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sistemas de IA que operam independentemente, tomando decisões complexas sem supervisão humana.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">🎨 IA Generativa</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Criação automática de conteúdo, arte, código e vídeos com qualidade profissional.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">🛡️ IA Ética (XAI)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Transparência e responsabilidade em algoritmos para construir confiança e compliance.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">💼 IA nos Negócios</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Transformação digital através de chatbots, automação e análise preditiva avançada.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section 3 */}
      <CTASection
        title="🎓 Transforme Sua Carreira com Educação Online"
        description="Fórmula Negócio Online do Alex Vargas. Milhares já mudaram de vida. Comece do zero e construa seu império digital!"
        buttonText="Aproveite Esta Oferta Agora"
        href="https://go.hotmart.com/E11195793E"
        variant="primary"
      />

      {/* Newsletter/Tools Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ferramentas IA Recomendadas
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            As melhores plataformas para você começar a usar IA hoje mesmo
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>🚀 Desenvolvimento Rápido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Crie aplicações completas em minutos, não meses.
                </p>
                <div className="space-y-2">
                  <Button asChild className="w-full cta-button-secondary">
                    <a href="https://lovable.dev/?via=marcelo-barbosa" target="_blank" rel="noopener noreferrer">
                      Lovable - Desenvolvimento Web
                    </a>
                  </Button>
                  <Button asChild className="w-full cta-button-secondary">
                    <a href="https://readdy.ai/invite/Abq8XgpzJGtX" target="_blank" rel="noopener noreferrer">
                      Readdy IA - SaaS NoCode
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>💰 Oportunidades Financeiras</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Maximize seus ganhos com estratégias comprovadas.
                </p>
                <div className="space-y-2">
                  <Button asChild className="w-full cta-button">
                    <a href="https://renda-boost.lovable.app" target="_blank" rel="noopener noreferrer">
                      Renda Boost - Ganhe R$ 20+
                    </a>
                  </Button>
                  <Button asChild className="w-full cta-button">
                    <a href="https://go.hotmart.com/E11195793E?ap=305a" target="_blank" rel="noopener noreferrer">
                      Fórmula Negócio Online
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;