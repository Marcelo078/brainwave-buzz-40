import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-primary">IA Brasil</div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/artigos" className="text-foreground hover:text-primary transition-colors">
            Artigos
          </Link>
          <Link to="/tendencias" className="text-foreground hover:text-primary transition-colors">
            Tendências
          </Link>
          <Link to="/ferramentas" className="text-foreground hover:text-primary transition-colors">
            Ferramentas
          </Link>
          <Link to="/oportunidades" className="text-foreground hover:text-primary transition-colors">
            Oportunidades
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild className="cta-button-secondary">
            <a href="https://lovable.dev/?via=marcelo-barbosa" target="_blank" rel="noopener noreferrer">
              Criar com IA
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;