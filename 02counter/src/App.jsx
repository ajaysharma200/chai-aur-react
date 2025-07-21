import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15;

  const addValue = () => {
    console.log("value added");
    counter = counter + 1 ;
    setCounter(counter)
  }

    const removeValue = () => {
    console.log("value decrease");
    // counter = counter + 1 ;
    setCounter(counter-1)
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>counter value: {counter}</h2>

     <button onClick={addValue}>Add value {counter}</button>
     <br />
     <button
     onClick={removeValue}>decrease value {counter}</button>

    </>
  )
}

export default App
