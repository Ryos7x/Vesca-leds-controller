import { useState } from "react";

// const Gpio = require("pigpio-mock").Gpio;

// const led = new Gpio(13, { mode: Gpio.OUTPUT });
// let dutyCycle = 0;

// setInterval(function () {
//   led.pwmWrite(dutyCycle);

//   dutyCycle += 50;
//   if (dutyCycle > 255) {
//     dutyCycle = 0;
//   }
// }, 500);

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
