  import { useState } from "react";


  function CounterClick() {
    const [count, setCount] = useState(0);

    return (
      <>
        <h1>Ejemplo de useState!</h1>

        <button onClick={() => setCount((count) => count + 1)}>
        Contador: {count} clicks
        </button>
      </>
    );
  }

  export default CounterClick;
