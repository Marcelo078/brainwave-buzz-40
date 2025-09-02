import { useParams, Navigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { articles } from "@/data/articles";

const Article = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="article-content">
        {/* Article Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Badge className="bg-success text-success-foreground">
              {article.category}
            </Badge>
            <span className="text-muted-foreground">{article.readTime} de leitura</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{article.publishDate}</span>
          </div>
          
          <h1 className="mb-6">{article.title}</h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {article.description}
          </p>
        </header>

        {/* First CTA */}
        <CTASection
          title="🚀 Acelere Seus Resultados com IA"
          description="Descubra as ferramentas que estão revolucionando o mercado. Ganhe tempo e multiplique seus resultados!"
          buttonText="Aproveite Esta Oferta Agora"
          href="https://lovable.dev/?via=marcelo-barbosa"
          variant="primary"
        />

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ 
            __html: article.content
              .replace(/\n/g, '<br>')
              .replace(/#{1}\s(.+)/g, '<h1>$1</h1>')
              .replace(/#{2}\s(.+)/g, '<h2>$1</h2>')
              .replace(/#{3}\s(.+)/g, '<h3>$1</h3>')
              .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
              .replace(/- (.+)/g, '<li>$1</li>')
              .replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>')
          }}
        />

        {/* Mid-article CTA */}
        <CTASection
          title="💰 Transforme Seu Conhecimento em Renda"
          description="Aprenda estratégias comprovadas para monetizar IA. Fórmula Negócio Online com milhares de casos de sucesso!"
          buttonText="Clique Aqui e Garanta Já"
          href="https://go.hotmart.com/E11195793E?ap=305a"
          variant="secondary"
        />

        {/* Keywords */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-lg font-semibold mb-4">Palavras-chave:</h3>
          <div className="flex flex-wrap gap-2">
            {article.keywords.map((keyword, index) => (
              <Badge key={index} variant="outline">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <CTASection
          title="🔥 Últimas Oportunidades de 2025"
          description="Não fique para trás! Acesse as melhores ferramentas e estratégias para dominar a era da IA."
          buttonText="Aproveite Esta Oferta Agora"
          href="https://renda-boost.lovable.app"
          variant="primary"
        />

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Perguntas Frequentes sobre {article.category}</h2>
          
          <div className="space-y-4 mt-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Como começar com {article.category.toLowerCase()}?</h3>
              <p>O primeiro passo é entender os conceitos fundamentais e escolher as ferramentas certas. Este artigo fornece um guia completo para iniciantes.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Qual o investimento necessário?</h3>
              <p>Os investimentos variam conforme a aplicação, mas muitas ferramentas oferecem versões gratuitas para começar. Empresas típicas investem entre R$ 5.000 a R$ 50.000 inicialmente.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Quais as principais oportunidades de carreira?</h3>
              <p>O mercado de IA está em expansão, com salários entre R$ 6.000 a R$ 30.000 mensais para profissionais especializados. As áreas mais promissoras incluem desenvolvimento, consultoria e gestão de projetos.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Como minha empresa pode implementar essas tecnologias?</h3>
              <p>Recomendamos começar com projetos piloto, investir em capacitação da equipe e buscar parcerias com fornecedores especializados. O retorno sobre investimento típico ocorre em 6-18 meses.</p>
            </div>
          </div>
        </section>
      </article>
      
      <Footer />
    </div>
  );
};

export default Article;