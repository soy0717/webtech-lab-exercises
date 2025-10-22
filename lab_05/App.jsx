import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Temperature from './components/Temperature'
import TempControl from './components/TempControl'

function App() {
  const [celsius, setCelsius] = useState(32);

  const toFaren = function(celsius) {
    return (celsius * 9 / 5) + 32;
  };

  const faren = toFaren(celsius);

  return (
    <div>
      <Header text="Temperature Converter" />
      <Temperature celsius={celsius} faren={faren} />
      <TempControl celsius={celsius} onTempChange={setCelsius} />
    </div>
  )
}

export default App;
