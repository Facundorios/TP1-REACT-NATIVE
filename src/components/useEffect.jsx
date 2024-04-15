import { useState, useEffect } from "react";

function Temporizator() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const seconds = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);

    return () => clearInterval(seconds);
  }, [counter]);

  const hours = Math.floor(counter / 3600);
  const minutes = Math.floor((counter % 3600) / 60);
  const seconds = counter % 60;

  return (
    <div>
      <h1>Ejemplo de useEffect!</h1>

      <p>Horas:{hours}</p>
      <p>Minutos:{minutes}</p>
      <p>Segundos:{seconds}</p>
    </div>
  );
}

export default Temporizator;
