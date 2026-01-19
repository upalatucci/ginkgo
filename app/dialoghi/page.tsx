"use client";

import { useState, FormEvent } from "react";
import useDialoghi from "@/hooks/useDialoghi";

export default function DialoghiPage() {
  const [data, addDialoghi] = useDialoghi();
  const [numero, setNumero] = useState("");
  const [nota, setNota] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const count = data?.count ?? 0;
  const target = 1000;
  const progress = Math.min((count / target) * 100, 100);

  const wordCount = nota.trim().split(/\s+/).filter(Boolean).length;
  const maxWords = 3000;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setIsSubmitting(true);

    try {
      const numValue = parseInt(numero);
      if (isNaN(numValue) || numValue < 1 || numValue > 1000) {
        setError("Inserisci un numero valido tra 1 e 1000");
        setIsSubmitting(false);
        return;
      }

      if (wordCount > maxWords) {
        setError(`La nota non può superare ${maxWords} parole`);
        setIsSubmitting(false);
        return;
      }

      await addDialoghi(numValue, nota);
      setSuccess(true);
      setNumero("");
      setNota("");
      
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore nel salvataggio");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50  pb-8 pt-[120px] md:pb-[80px] md:pt-[100px] xl:pb-[100px] xl:pt-[180px] 2xl:pb-[120px] 2xl:pt-[210px] px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">
          1000 dialoghi di amicizia...entro il 2027
        </h1>
        <p className="text-gray-600 text-center mb-8 text-lg">
          inserisci qui il tuo dialogo...
        </p>

        {/* Progress Card */}
        <div className="bg-gradient-to-r from-green-400 to-orange-400 rounded-2xl p-8 mb-8 shadow-lg">
          <div className="text-center">
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              DIALOGHI CARICATI
            </p>
            <div className="text-6xl md:text-8xl font-bold text-white mb-4">
              {count}
            </div>
            <div className="w-full bg-white bg-opacity-30 rounded-full h-2 mb-2">
              <div
                className="bg-white h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-white text-sm font-medium">su {target}</p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-8">
          <form onSubmit={handleSubmit}>
            {/* Number Input */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Inserisci numero dei dialoghi di oggi? Non ti preoccupare puoi sempre caricarne altri...
              </label>
              <input
                type="number"
                min="1"
                max="1000"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Inserisci un numero da 1 a 1000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Note Textarea */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-gray-700 font-medium">
                  Nota:
                </label>
                <span className={`text-sm ${wordCount > maxWords ? 'text-red-500' : 'text-gray-500'}`}>
                  {wordCount} / {maxWords} parole
                </span>
              </div>
              <textarea
                value={nota}
                onChange={(e) => setNota(e.target.value)}
                placeholder="Scrivi qui la tua nota (massimo 3000 parole)..."
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                disabled={isSubmitting}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                Dialogo salvato con successo!
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || wordCount > maxWords}
              className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Salvataggio..." : "Salva Dialogo"}
            </button>
          </form>
        </div>

        {/* Empty State or Entries List */}
        {data && data.entries.length === 0 && (
          <div className="text-center text-gray-600 py-8">
            <p className="text-lg">
              Nessun dialogo salvato ancora. Inizia aggiungendo il tuo primo dialogo!
            </p>
          </div>
        )}

        {/* Entries List */}
        {data && data.entries.length > 0 && (
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Dialoghi salvati ({data.entries.length})
            </h2>
            <div className="space-y-4">
              {data.entries.map((entry, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {entry.numero} dialoghi
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(entry.data).toLocaleDateString("it-IT", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                  {entry.nota && (
                    <p className="text-gray-700 mt-2 whitespace-pre-wrap">
                      {entry.nota}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Help Icon */}
        <div className="fixed bottom-6 right-6">
          <button
            className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center text-xl font-bold hover:bg-gray-800 transition-colors shadow-lg"
            title="Aiuto"
          >
            ?
          </button>
        </div>
      </div>
    </div>
  );
}
