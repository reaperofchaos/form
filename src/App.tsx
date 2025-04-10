import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormContext } from './provider/FormContext'

function App() {
  const [count, setCount] = useState(0)
  const {answers, setAnswers, updateAnswerForQuestion, clearAnAnswer, clearAnswers} = useContext(FormContext);

  const test: Record<string, any> = {question1: "yes", question2: "no", question3: "This is a test", question4: true, question5: 42}
  
  setAnswers(test);
  console.log("answers", answers);

  updateAnswerForQuestion({key: "question5", value: 7})
  console.log("answers", answers);

  // clearAnAnswer("question1");
  // console.log("answers", answers);

  // clearAnswers();
  // console.log("answers", answers)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
