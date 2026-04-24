import { useContext } from 'react'
import { counterContextObj } from '../contexts/ContextProvider'

function Home() {
  const { counter, changeCounter } = useContext(counterContextObj);
  return (
    <div className="m-auto placeholder-amber-100 align-middle">
      <h1>counter : {counter}</h1>
      <button onClick={changeCounter} className="bg-pink-500 p-5   text-black">Increment</button>    </div>

  )
}

export default Home
