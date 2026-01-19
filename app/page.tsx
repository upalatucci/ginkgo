import CountDown from "@/components/CountDown/CountDown";
import Daimoku from "@/components/Daimoku";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import { getLatestArticle } from "@/lib/articles";

export default async function Home() {
  const article = getLatestArticle();

  return (
    <>
      <Hero />
      <CountDown />
      <Features />
      <Daimoku />
      {article && (
        <ArticleCard
          title={article.title}
          summary={article.summary}
          slug={article.slug}
          date={article.date}
        />
      )}
      {/* <Brands />
      <Testimonials />
      <Blog />
      <Contact /> */}
    </>
  );
}
