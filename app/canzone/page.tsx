"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import useCanzone from "@/hooks/useCanzone";

export default function CanzonePage() {
  const [data, addContributo] = useCanzone();
  const [testo, setTesto] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const count = data?.count ?? 0;
  const wordCount = testo.trim().split(/\s+/).filter(Boolean).length;
  const maxWords = 3000;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setIsSubmitting(true);

    try {
      if (!testo.trim()) {
        setError("Inserisci il tuo contributo");
        setIsSubmitting(false);
        return;
      }

      if (wordCount > maxWords) {
        setError(`Il contributo non può superare ${maxWords} parole`);
        setIsSubmitting(false);
        return;
      }

      await addContributo(testo.trim());
      setSuccess(true);
      setTesto("");

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore nel salvataggio");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream pb-0 pt-[120px] md:pt-[140px] xl:pt-[180px] 2xl:pt-[210px]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
            Crea con noi la nuova canzone Ginkgo
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            condividi le tue frasi, poesie e pensieri...
          </p>
        </div>

        {/* Main description box */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-8">
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Contribuisci alla creazione della nuova canzone del gruppo Ginkgo!
            Condividi le tue frasi, poesie, riflessioni o pensieri ispirati ai
            valori di amicizia, speranza e umanità. Ogni parola conta per creare
            insieme qualcosa di speciale che rappresenti il nostro spirito comune.
          </p>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Cosa puoi condividere
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3" />
                <span className="text-gray-700">Frasi significative che ti ispirano</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3" />
                <span className="text-gray-700">Poesie o versi originali</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3" />
                <span className="text-gray-700">Pensieri e riflessioni personali</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3" />
                <span className="text-gray-700">Messaggi di speranza e amicizia</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3" />
                <span className="text-gray-700 italic">
                  (tutto ciò che esprime lo spirito Ginkgo)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contribution status card */}
        <div className="bg-gradient-to-b from-green-400 to-orange-400 rounded-2xl p-8 mb-20 shadow-lg">
          <div className="text-center">
            <p className="text-white font-semibold mb-2 text-sm uppercase tracking-wide">
              Contributi inviati
            </p>
            <div className="text-6xl md:text-8xl font-bold text-white mb-2">
              {count}
            </div>
            <p className="text-white text-sm font-medium">
              frasi, poesie, pensieri
            </p>
          </div>
        </div>
      </div>

      {/* Dark blue section with ginkgo leaves and form */}
      <div className="relative mt-0 bg-secondary pt-4 pb-12 md:pb-16">
        {/* Ginkgo leaves border at top */}
        <div className="absolute top-0 left-0 right-0 w-full h-64 md:h-64 overflow-hidden pointer-events-none">
          <Image
            src="/images/foglie-2.png"
            alt=""
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-bottom opacity-90"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 pt-14 md:pt-20 z-20">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-gray-800 font-semibold text-lg">
                  Condividi il tuo contributo:
                </label>
                <span
                  className={`text-sm font-medium ${
                    wordCount > maxWords ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  {wordCount} / {maxWords} parole
                </span>
              </div>
              <textarea
                value={testo}
                onChange={(e) => setTesto(e.target.value)}
                placeholder="Scrivi qui la tua frase, poesia o pensiero..."
                rows={8}
                className="w-full px-4 py-3 bg-white text-gray-900 placeholder:text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none mb-4"
                disabled={isSubmitting}
              />

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                  Contributo inviato con successo!
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || wordCount > maxWords}
                className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Invio in corso..." : "Invia contributo"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
