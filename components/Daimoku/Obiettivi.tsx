"use client";
import useDaimoku from "@/hooks/useDaimoku";
import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

function usePrevious(value: number) {
  const ref = useRef<number>(null);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current || 0;
}

const animationDuration = 500;

const Obiettivi = () => {
  const [daimoku] = useDaimoku();
  const [modalOpen, setModalOpen] = useState(false);

  const previousDaimoku = usePrevious(daimoku);
  const daimokuContainer = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!daimokuContainer.current || daimokuContainer.current === null) return;

    let startTimestamp: number = 0;
    const step = (timestamp: number) => {
      if (!daimokuContainer.current) return;
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / animationDuration,
        1
      );
      daimokuContainer.current.innerHTML = Math.floor(
        progress * (daimoku - previousDaimoku) + previousDaimoku
      ).toString();

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [daimoku, previousDaimoku]);

  return (
    <div className="-mx-4 flex w-full lg:w-1/3 flex-wrap mb-10 p-4">
      <div className=" px-4">
        <div className="mx-auto text-left">
          <h2 className="mb-3 text-2xl font-bold text-primary sm:text-3xl lg:text-2xl xl:text-3xl">
            OBIETTIVI
          </h2>

          <ul className="mb-10 text-xl">
            <li className="mb-4">
              Sfidarsi a recitare almeno 60’ di Daimoku al giorno
            </li>

            <li>
              Studiare insieme il Gosho{" "}
              <strong>Ripagare i debiti di gratitudine</strong>
            </li>
          </ul>
        </div>
        <div
          className="wow fadeInUp mx-auto max-w-[800px] text-left mb-10"
          data-wow-delay=".2s"
        >
          <h2
            ref={daimokuContainer}
            className="mb-3 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl xl:text-5xl"
          >
            0
          </h2>
          <div className=" space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <button
              onClick={() => setModalOpen(true)}
              className="shadow-submit rounded-md bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
            >
              Aggiungi Daimoku
            </button>
          </div>
        </div>
        <div className="py-10 text-xl font-bold">
          All&apos;incontro sara&apos; centrale lo studio del Gosho &apos;Ripagare i
          debiti di gratitudine&apos; che puoi trovare{" "}
          <a
            href="https://biblioteca.sgi-italia.org/rsnd/ripagare-i-debiti-di-gratitudine"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            qui
          </a>
          . <br />
          Scarica lo studio da{" "}
          <a
            href="/ripagare_i_debiti_di_gratitudine.pdf"
            className="text-blue-600 hover:underline"
            download
          >
            qui.
          </a>
          <p className="my-5">
            Inoltre condividiamo degli incoraggiamenti per i responsabili di
            capitolo estratti dalla Nuova Rivoluzione Umana vol. 26 capitolo
            Vessillo della Legge{" "}
            <a
              href="/nru_vol26.pdf"
              className="text-blue-600 hover:underline"
              download
            >
              scarica
            </a>
          </p>
          Per approfondire la &quot;Rivoluzione degli zadankai&quot;:
          <a
            href="https://ilnuovorinascimento.org/a/la-nuova-rivoluzione-umana-vol-13-capitolo-stella-guida-raccolta-di-tutte-le-puntate-pubblicate"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            clicca qui
          </a>
        </div>
        <div className="py-10 text-xl">
          Scarica le musiche e i testi del corso qui:{" "}
          <a href="/contenuti#musica" className="text-blue-600 hover:underline">
            Musiche
          </a>
        </div>
      </div>
      <Modal open={modalOpen} setOpen={setModalOpen} />
    </div>
  );
};

export default Obiettivi;
