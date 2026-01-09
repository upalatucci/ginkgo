import { goals } from "@/components/Goals/goals";
import GoalsForm from "@/components/Goals/GoalsForm";
import React, { FC } from "react";

const QA: FC = () => {
  const randomOrderQA = goals
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <div className="px-4 md:px-10 relative z-10 overflow-hidden  pb-8 pt-[120px] md:pb-[80px] md:pt-[100px] xl:pb-[100px] xl:pt-[180px] 2xl:pb-[120px] 2xl:pt-[210px]">
      <GoalsForm />

      <section
        className="flex flex-wrap container my-4 justify-center"
        id="qa-membri-shuffle"
      >
        {randomOrderQA.map((qa, index) => (
          <div
            className="max-w-sm rounded m-4 overflow-hidden shadow-lg"
            key={index}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Domanda e Risposta</div>
              <p className="text-gray-700 text-base">{qa} </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default QA;
