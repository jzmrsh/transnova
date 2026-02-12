import React, { useEffect, useState } from "react";

function parseTimeString(timeStr: string): number {
  const regex = /(?:(\d+)h)?\s*(?:(\d+)m)?/;
  const match = timeStr.match(regex);
  if (!match) return 0;
  const hours = match[1] ? parseInt(match[1], 10) : 0;
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  // console.warn(hours, minutes)
  // console.warn(hours * 60 + minutes)
  return hours * 60 + minutes;
}

function formatMinutes(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;

  if (h > 0 && m > 0) return `${h}h ${m}min`;
  if (h > 0) return `${h}h`;
  return `${m}min`;
}

const Countdown: React.FC<{ initialTime: string }> = ({ initialTime }) => {
  // 1. Hook sempre no topo, independente do valor de initialTime
  const [minutesLeft, setMinutesLeft] = useState(() => (initialTime ? parseTimeString(initialTime) : 0));

  // 2. Atualiza o estado se a prop initialTime mudar externamente
  useEffect(() => {
    if (initialTime) {
      setMinutesLeft(parseTimeString(initialTime));
    }
  }, [initialTime]);

  // 3. Efeito do intervalo
  useEffect(() => {
    if (minutesLeft <= 0) return;

    const interval = setInterval(() => {
      setMinutesLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 60000);

    return () => clearInterval(interval);
  }, [minutesLeft]);

  // 4. Lógica de retorno (Renderização condicional)
  if (!initialTime) {
    return `${initialTime}`;
  }

  return `${formatMinutes(minutesLeft)}`;
};

export default Countdown;
