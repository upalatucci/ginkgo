"use client";

import React, { FC } from "react";
import SectionTitle from "../Common/SectionTitle";
import { things } from "./things";
import useThingsToBring from "./useThingsToBring";

const ThingsToBring: FC = () => {
  const [thingsChecked, toggleId] = useThingsToBring();

  return (
    <section id="cose-da-portare" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="Prepariamoci al corso" center />

        <div className="mx-auto flex justify-center">
          <a
            className="text-primary hover:underline"
            download
            href="/pdf/mappa.pdf"
          >
            Scarica la mappa INTERATTIVA di Salerno. Clicca sulle icone!!
          </a>
        </div>

        <div className="mx-auto flex justify-center">
          <a
            className="text-primary hover:underline"
            download
            href="/pdf/mappashotelstampa.pdf"
          >
            E anche la mappa dell&apos;hotel
          </a>
        </div>
        <h3 className="text-center font-bold mt-8 mb-2">
          Hai fatto la valigia?
        </h3>

        <div className="mx-auto flex justify-center">
          <ul>
            {things.map((cosa) => (
              <li key={cosa.id} className="my-4">
                <label className="cursor-pointer">
                  <input
                    type="checkbox"
                    className="pr-4"
                    name={cosa.id.toString()}
                    checked={thingsChecked?.includes(cosa.id)}
                    onChange={() => toggleId(cosa.id)}
                  />{" "}
                  {cosa.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ThingsToBring;
