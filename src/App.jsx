import CounterClick from "./components/useState";
import Temporizator from "./components/useEffect";
import Theme from "./components/useContext";

function App() {
  return (
    <>
      <Temporizator />

      <CounterClick />
      
      <Theme />
    </>
  );
}

export default App;
