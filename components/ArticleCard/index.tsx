import Link from "next/link";

interface ArticleCardProps {
  title: string;
  summary: string;
  slug: string;
  date?: string;
}

const ArticleCard = ({ title, summary, slug, date }: ArticleCardProps) => {
  return (
    <section className="bg-cream py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] rounded-lg bg-white p-8 shadow-lg">
              <div className="mb-4">
                <h2 className="mb-2 text-2xl font-bold text-black sm:text-3xl">
                  Ultime notizie
                </h2>
              </div>
              
              <div className="border-t border-body-color border-opacity-10 pt-6">
                <h3 className="mb-3 text-xl font-bold text-black hover:text-primary sm:text-2xl">
                  <Link href={`/news/${slug}`}>
                    {title}
                  </Link>
                </h3>
                
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  {summary}
                </p>
                
                <div className="flex items-center justify-between">
                  {date && (
                    <span className="text-sm text-body-color">
                      {new Date(date).toLocaleDateString("it-IT", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  )}
                  <Link
                    href={`/news/${slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Leggi di più
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleCard;
