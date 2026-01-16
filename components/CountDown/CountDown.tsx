"use client";
import React, { FC, useEffect, useState } from "react";

const MINUTES_IN_MS = 1000 * 60;
const HOURS_IN_MS = 60 * MINUTES_IN_MS;
const DAYS_IN_MS = 24 * HOURS_IN_MS;
const WEEKS_IN_MS = DAYS_IN_MS * 7;

const CountDown: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setTic] = useState(0);
  const now = new Date();

  const courseDate = new Date(2026, 2, 8, 10, 30);
  const deltaTime = courseDate.getTime() - now.getTime();

  const deltaWeeks = Math.trunc(deltaTime / WEEKS_IN_MS);
  const remainingDays = deltaTime % WEEKS_IN_MS;

  const deltaDays = Math.trunc(remainingDays / DAYS_IN_MS);

  const remainingHours = remainingDays % DAYS_IN_MS;

  const deltaHours = Math.trunc(remainingHours / HOURS_IN_MS);
  const remainingMinutes = remainingHours % HOURS_IN_MS;

  const deltaMinutes = Math.trunc(remainingMinutes / MINUTES_IN_MS);

  useEffect(() => {
    setInterval(() => {
      setTic((prevTic) => prevTic++);
    }, MINUTES_IN_MS);
  }, []);

  return (
    <div className="flex flex-col text-center mb-10">
      <h3 className="mb-4 text-2xl relative mt-10 z-10 text-primary">
        IL MEETING INIZIERA&apos; TRA
      </h3>

      <div id="countdown" className="countdown">
        <div className="time">
          <h2 className="text-gradient" id="weeks">
            {deltaWeeks}
          </h2>
          <small>Settimane</small>
        </div>
        <div className="time">
          <h2 className="text-gradient" id="days">
            {deltaDays}
          </h2>
          <small>Giorni</small>
        </div>
        <div className="time">
          <h2 className="text-gradient" id="hours">
            {deltaHours}
          </h2>
          <small>Ore</small>
        </div>
        <div className="time">
          <h2 className="text-gradient" id="minutes">
            {deltaMinutes}
          </h2>
          <small>Minuti</small>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
