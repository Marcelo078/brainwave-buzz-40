export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  category: string;
  readTime: string;
  keywords: string[];
  publishDate: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Agentes de IA e Sistemas Autônomos: A Revolução da Inteligência Independente em 2025",
    description: "Descubra como os agentes de IA autônomos estão transformando indústrias inteiras e criando novas oportunidades de negócio no Brasil.",
    slug: "agentes-ia-sistemas-autonomos-2025",
    category: "Agentes de IA",
    readTime: "8 min",
    keywords: ["agentes de IA", "sistemas autônomos", "IA independente", "automação inteligente"],
    publishDate: "2025-01-02",
    content: "# Agentes de IA e Sistemas Autônomos: A Revolução da Inteligência Independente em 2025\n\nA inteligência artificial está evoluindo rapidamente, e uma das tendências mais fascinantes de 2025 são os **agentes de IA autônomos**. Estes sistemas revolucionários operam de forma independente, tomando decisões complexas sem intervenção humana constante.\n\n## O Que São Agentes de IA Autônomos?\n\nOs agentes de IA são sistemas computacionais que **percebem seu ambiente**, **processam informações** e **executam ações** para atingir objetivos específicos. Diferentemente dos chatbots tradicionais, estes agentes possuem capacidade de aprendizado contínuo e adaptação dinâmica."
  },
  {
    id: "2", 
    title: "IA Generativa e Criação de Conteúdo: Como Revolucionar Sua Produtividade em 2025",
    description: "Explore as mais poderosas ferramentas de IA generativa para criar conteúdo de alta qualidade, desde textos até vídeos profissionais.",
    slug: "ia-generativa-criacao-conteudo-2025",
    category: "IA Generativa",
    readTime: "10 min",
    keywords: ["IA generativa", "criação de conteúdo", "ChatGPT", "produtividade"],
    publishDate: "2025-01-03",
    content: "# IA Generativa e Criação de Conteúdo: Como Revolucionar Sua Produtividade em 2025\n\nA **inteligência artificial generativa** está transformando radicalmente a forma como criamos conteúdo. Em 2025, essas ferramentas não são mais apenas assistentes - são **parceiros criativos** que multiplicam nossa capacidade produtiva."
  },
  {
    id: "3",
    title: "Ética e IA Explicável (XAI): Construindo Confiança na Era da Inteligência Artificial", 
    description: "Entenda como a IA explicável está moldando o futuro da tecnologia responsável e as oportunidades para profissionais éticos.",
    slug: "etica-ia-explicavel-xai-2025",
    category: "Ética em IA",
    readTime: "9 min",
    keywords: ["IA explicável", "XAI", "ética em IA", "transparência algorítmica"],
    publishDate: "2025-01-04",
    content: "# Ética e IA Explicável (XAI): Construindo Confiança na Era da Inteligência Artificial\n\nA medida que a **inteligência artificial** se torna ubíqua em nossas vidas, uma questão fundamental emerge: **como podemos confiar em sistemas que não compreendemos completamente?** A resposta está na **IA Explicável (XAI)** e no desenvolvimento ético de tecnologias inteligentes."
  }
];