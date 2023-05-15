import { useEffect, useState } from "react";

export const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSeconds(prev => prev + 1);
  //   }, 1000)

  //   return () => {
  //     clearInterval(interval);
  //   }
  // }, []);

  // Zadanko Timer
  // dodajemy interval
  // dodaje sekundy
  // jezeli 60 sekund to +1 minuta
  // jezeli 60 minut to +1 godzina

  return (
    <div>
      <h2>Seconds: {seconds}</h2>
    </div>
  );
}