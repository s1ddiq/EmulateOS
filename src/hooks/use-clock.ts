"use client";
// MY PREVIOUS CODE
// const date = new Date();
// const formattedDate = `${
//   date.getMonth() + 1
// }/${date.getDay()}/${date.getFullYear()}`;
// const formattedTime = `${date.getHours() % 12 || 12}:${date.getMinutes()}`;
// const amPm = date.getHours() >= 12 ? "PM" : "AM";

import { format } from "date-fns";
import { useEffect, useState } from "react";

export const useClock = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    });

    return () => clearInterval(interval);
  }, []);

  const date = format(now, "M/d/yyyy"); // > 8/7/25
  const time = format(now, "h:mm a"); // > 1:45 PM

  return {
    date,
    time,
  };
};
