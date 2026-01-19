import Breadcrumb from "@/components/Common/Breadcrumb";
import { getArticleBySlug } from "@/lib/articles";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const article = getArticleBySlug("annuncio");

  return (
    <main className="mt-10">
      <Breadcrumb
        pageName={article?.title || "Articolo"}
      />
      <section className="pt-[80px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12 xl:w-8/12">
              <article className="prose prose-lg max-w-none">
                {children}
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}