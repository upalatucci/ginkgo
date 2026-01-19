export interface ArticleMetadata {
  title: string;
  summary: string;
  slug: string;
  date: string;
}

export const articles: ArticleMetadata[] = [
  {
    title: "Annuncio riunione nazionale Giovani Ginkgo",
    summary: "Prima riunione nazionale italiana dei Giovani Ginkgo - 8 febbraio 2026. Siamo felici di annunciarvi che Domenica 8 febbraio 2026, alle ore 10:30, in streaming, avrà luogo la prima riunione nazionale italiana dei Giovani Ginkgo dal titolo 'Senza arrenderci mai costruiamo eterni legami d'amicizia e insieme vinciamo su tutto'",
    slug: "annuncio",
    date: "2026-02-19",
  },
  // Aggiungi qui altri articoli
];

export function getAllArticles(): ArticleMetadata[] {
  return articles.sort((a, b) => b.date.localeCompare(a.date));
}

export function getLatestArticle(): ArticleMetadata | null {
  const sortedArticles = getAllArticles();
  return sortedArticles.length > 0 ? sortedArticles[0] : null;
}

export function getArticleBySlug(slug: string): ArticleMetadata | null {
  return articles.find((article) => article.slug === slug) || null;
}
