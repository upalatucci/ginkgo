import CountDown from "@/components/CountDown/CountDown";
import Daimoku from "@/components/Daimoku";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import { getLatestArticle } from "@/lib/articles";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session) return redirect("/login");

  const article = getLatestArticle();

  return (
    <>
      <Hero />
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
