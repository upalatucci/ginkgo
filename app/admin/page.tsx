import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getAdminData } from "@/lib/adminData";
import Link from "next/link";

export default async function AdminPage() {
  const session = await auth();

  if (!session) return redirect("/login");

  const data = await getAdminData();

  const sectionClass =
    "rounded-xl border border-body-color/20 bg-white p-6 shadow-sm";
  const titleClass = "mb-4 text-lg font-semibold text-primary border-b border-body-color/30 pb-2";
  const dateClass = "text-xs text-gray-500 mt-1";

  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px]">
      <div className="container max-w-4xl px-4">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold text-black md:text-4xl">
            Pannello admin
          </h1>
          <Link
            href="/"
            className="text-sm font-medium text-primary hover:underline"
          >
            ← Torna alla home
          </Link>
        </div>

        <div className="space-y-8">
          {/* Daimoku total */}
          <div className={sectionClass}>
            <h2 className={titleClass}>Daimoku (totale)</h2>
            <p className="text-2xl font-semibold text-primary">
              {data.daimoku.toLocaleString()}
            </p>
          </div>

          {/* Obiettivi */}
          <div className={sectionClass}>
            <h2 className={titleClass}>
              Obiettivi ({data.goals.length})
            </h2>
            {data.goals.length === 0 ? (
              <p className="text-gray-500">Nessun obiettivo inserito.</p>
            ) : (
              <ul className="space-y-2">
                {data.goals.map((goal, i) => (
                  <li
                    key={i}
                    className="rounded-md bg-cream/60 px-3 py-2 text-gray-800"
                  >
                    {goal}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Domande */}
          <div className={sectionClass}>
            <h2 className={titleClass}>Domande ({data.domande.length})</h2>
            {data.domande.length === 0 ? (
              <p className="text-gray-500">Nessuna domanda inserita.</p>
            ) : (
              <ul className="space-y-2">
                {data.domande.map((domanda, i) => (
                  <li
                    key={i}
                    className="rounded-md bg-cream/60 px-3 py-2 text-gray-800"
                  >
                    {domanda}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Dialoghi */}
          <div className={sectionClass}>
            <h2 className={titleClass}>Dialoghi ({data.dialoghi.length})</h2>
            {data.dialoghi.length === 0 ? (
              <p className="text-gray-500">Nessun dialogo inserito.</p>
            ) : (
              <ul className="space-y-4">
                {data.dialoghi.map((entry, i) => (
                  <li
                    key={i}
                    className="rounded-md border border-body-color/10 bg-cream/40 p-4"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-semibold text-primary">
                        {entry.numero} Daimoku
                      </span>
                      <span className={dateClass}>
                        {new Date(entry.data).toLocaleString("it-IT")}
                      </span>
                    </div>
                    {entry.nota && (
                      <p className="mt-2 text-gray-700">{entry.nota}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Canzone contributi */}
          <div className={sectionClass}>
            <h2 className={titleClass}>
              Contributi canzone ({data.canzone.length})
            </h2>
            {data.canzone.length === 0 ? (
              <p className="text-gray-500">Nessun contributo inserito.</p>
            ) : (
              <ul className="space-y-4">
                {data.canzone.map((entry, i) => (
                  <li
                    key={i}
                    className="rounded-md border border-body-color/10 bg-cream/40 p-4"
                  >
                    <p className="whitespace-pre-wrap text-gray-800">
                      {entry.testo}
                    </p>
                    <span className={dateClass}>
                      {new Date(entry.data).toLocaleString("it-IT")}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
