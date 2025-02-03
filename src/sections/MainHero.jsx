import React from "react";
import ThreeModel from "../components/ThreeModel";

const MainHero = () => {
  function getCurrentDayDateTime() {
    const now = new Date();

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[now.getDay()]; // Get the current day of the week

    const date = `${now.getDate().toString().padStart(2, "0")} ${(
      now.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")} ${now.getFullYear()}`;

    // Format the time as HH:MM:SS
    const time = now.toLocaleTimeString();

    const hours = now.getHours();

    const mins = now.getMinutes();

    return { day, date, time, hours, mins };
  }

  const result = getCurrentDayDateTime();

  const time = `${result.hours}:${result.mins}`;
  return (
    <div className="relative flex items-center min-h-screen px-10 overflow-hidden">
      <div className="flex items-center justify-center w-full">
        <div className="">
          <h3>Hello</h3>
        </div>
      </div>

      <div className="absolute bottom-2 left-0 w-full px-6 flex items-center justify-between">
        <div className="text-left">Mangalore, IN</div>
        <div className="inline-flex items-center gap-4">
          <div className="bg-green-500 size-2.5 rounded-full relative">
            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
          </div>
          <div className="text-sm font-medium text-white">
            Available for work
          </div>
        </div>
        <div className="text-right">
          <div>
            {result.date} {time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
