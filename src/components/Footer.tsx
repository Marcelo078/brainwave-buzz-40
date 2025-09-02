import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">IA Brasil</h3>
            <p className="text-muted-foreground">
              Portal completo sobre Inteligência Artificial no Brasil. 
              Tendências, ferramentas e oportunidades de negócio.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Categorias</h4>
            <div className="space-y-2">
              <Link to="/categoria/ia-generativa" className="block text-muted-foreground hover:text-primary">
                IA Generativa
              </Link>
              <Link to="/categoria/agentes-ia" className="block text-muted-foreground hover:text-primary">
                Agentes de IA
              </Link>
              <Link to="/categoria/etica-ia" className="block text-muted-foreground hover:text-primary">
                Ética em IA
              </Link>
              <Link to="/categoria/negocios-ia" className="block text-muted-foreground hover:text-primary">
                IA nos Negócios
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Ferramentas Recomendadas</h4>
            <div className="space-y-2">
              <a href="https://lovable.dev/?via=marcelo-barbosa" target="_blank" rel="noopener noreferrer" 
                 className="block text-muted-foreground hover:text-primary">
                Lovable - Desenvolvimento
              </a>
              <a href="https://readdy.ai/invite/Abq8XgpzJGtX" target="_blank" rel="noopener noreferrer"
                 className="block text-muted-foreground hover:text-primary">
                Readdy IA - Códigos
              </a>
              <a href="https://manus.im/invitation/NNBGIDNC6MTV" target="_blank" rel="noopener noreferrer"
                 className="block text-muted-foreground hover:text-primary">
                Manus IA - Aplicativos
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Recursos</h4>
            <div className="space-y-2">
              <a href="https://renda-boost.lovable.app" target="_blank" rel="noopener noreferrer"
                 className="block text-muted-foreground hover:text-primary">
                Renda Boost
              </a>
              <a href="https://go.hotmart.com/E11195793E" target="_blank" rel="noopener noreferrer"
                 className="block text-muted-foreground hover:text-primary">
                Fórmula Negócio Online
              </a>
              <a href="https://hostinger.com.br?REFERRALCODE=1W8MARCELJCB" target="_blank" rel="noopener noreferrer"
                 className="block text-muted-foreground hover:text-primary">
                Hospedagem Hostinger
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 IA Brasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;