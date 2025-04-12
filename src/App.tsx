import { useContext, useEffect } from 'react'
import './App.css'
import { FormContext } from './provider/FormContext'
import { FormActionType, FormStoreType } from './provider/types'

function App() {
  const {dispatch: formDispatch, useSelector} = useContext(FormContext) as FormStoreType;

  const answers = useSelector((state)=>state.answers);
  const test: Record<string, any> = {question1: "yes", question2: "no", question3: "This is a test", question4: true, question5: 42}
  
  useEffect(()=>{
    formDispatch({type: FormActionType.SET_ALL_ANSWERS, payload: test});
  }, [])
  
  const resetForm = (formResult: Record<string, any>)=>{
    formDispatch({type: FormActionType.SET_ALL_ANSWERS, payload: formResult})  
  }

  const updateAnswer = (question: string, value: any)=>{
    formDispatch({type: FormActionType.SET_AN_ANSWER, payload: {key: question, value}});
  }

  const clearQuestion = (val: string)=>{
    formDispatch({type: FormActionType.CLEAR_AN_ANSWER, payload: val})
  }

  const clearAll = ()=>{
    formDispatch({type: FormActionType.CLEAR_ALL_ANSWERS, payload: null})
  }

  
  return (
      <div style={{display: 'flex', flexDirection: 'column', rowGap: '20px'}}>
        <div style={{display: 'flex', flexDirection: 'row', columnGap: '10px'}}>
        <label>Question 1</label>
        <input type="text" value={answers?.question1 ?? ""} onChange={(e)=>updateAnswer("question1", e.target.value)} />
        <button onClick={()=>clearQuestion("question1")}>clear</button>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', columnGap: '10px'}}>
        <label>Question 2</label>
        <input type="text" value={answers?.question2 ?? ""} onChange={(e)=>updateAnswer("question2", e.target.value)} />
        <button onClick={()=>clearQuestion("question2")}>clear</button>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', columnGap: '10px'}}>
        <label>Question 3</label>
        <input type="text" value={answers?.question3 ?? ""} onChange={(e)=>updateAnswer("question3", e.target.value)} />
        <button onClick={()=>clearQuestion("question3")}>clear</button>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', columnGap: '10px'}}>
          <button onClick={()=>resetForm(test)}>Reset All Answers</button>
          <button onClick={()=>clearAll()}>Clear All Answers</button>
        </div>
      </div>
  )
}

export default App
