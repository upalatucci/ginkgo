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
        1,
      );
      daimokuContainer.current.innerHTML = Math.floor(
        progress * (daimoku - previousDaimoku) + previousDaimoku,
      ).toString();

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [daimoku, previousDaimoku]);

  return (
    <div className="flex w-full flex-wrap justify-center mb-10 p-4">
      <div className=" px-4">
        <div className="mx-auto text-center">
          <h2 className="mb-3 text-2xl font-bold text-primary sm:text-3xl lg:text-2xl xl:text-3xl">
            Daimoku
          </h2>
        </div>
        <div
          className="wow fadeInUp mx-auto max-w-[800px] text-center mb-10"
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
      </div>
      <Modal open={modalOpen} setOpen={setModalOpen} />
    </div>
  );
};

export default Obiettivi;
