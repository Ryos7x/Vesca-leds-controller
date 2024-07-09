import { useState } from "react";

function App() {
  const [encendido, setEncendido] = useState(false);

  const handleButtonClick = () => {
    setEncendido((prevEncendido) => !prevEncendido);
  };
  return (
    <>
      <h1 className="titulo">Leds Raspberry Pi</h1>
      <div className="card">
        <button
          onClick={handleButtonClick}
          style={{ backgroundColor: encendido ? "green" : "red" }}
        >
          Prender Led {encendido ? "Encendido" : "Apagado"}
        </button>
      </div>
    </>
  );
}

export default App;
