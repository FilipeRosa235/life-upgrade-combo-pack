
import { useEffect, useState } from "react";

// Componente para mostrar o tempo restante (elemento de urgência)
export function CountdownTimer() {
  // Estado para armazenar o tempo restante (4 horas como padrão)
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 0,
    seconds: 0
  });

  // Atualiza o contador a cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        
        let newHours = prev.hours;
        let newMinutes = prev.minutes;
        let newSeconds = prev.seconds - 1;
        
        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        
        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Função para formatar os números com zeros à esquerda
  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-sm font-bold uppercase text-red-600 mb-2">Oferta expira em:</p>
      <div className="flex items-center justify-center gap-2 text-xl md:text-2xl font-mono font-bold">
        <div className="bg-gray-800 text-white rounded-md px-3 py-2 min-w-[40px] text-center">
          {formatNumber(timeLeft.hours)}
        </div>
        <span>:</span>
        <div className="bg-gray-800 text-white rounded-md px-3 py-2 min-w-[40px] text-center">
          {formatNumber(timeLeft.minutes)}
        </div>
        <span>:</span>
        <div className="bg-gray-800 text-white rounded-md px-3 py-2 min-w-[40px] text-center">
          {formatNumber(timeLeft.seconds)}
        </div>
      </div>
    </div>
  );
}
