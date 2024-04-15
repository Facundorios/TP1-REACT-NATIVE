import { createContext, useState, useContext } from "react";

const ThemeContext = createContext("light");

function Theme() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <>
        <button
          style={{
            backgroundColor: theme === "light" ? "#fff" : "#000",
            color: theme === "light" ? "#000" : "#fff",
          }}
        >
            {theme === "light" ? "Blanco" : "Negro"}
        </button>
      </>
    );
  }

  return (
    <ThemeContext.Provider value={theme}>

      <h1>Ejemplo de useContext!</h1>

      <button onClick={toggleTheme}> Cambiar tema</button>

      <ThemedButton />
      
    </ThemeContext.Provider>
  );
}

export default Theme;
