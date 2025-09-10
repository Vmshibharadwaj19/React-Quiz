import React from 'react'
import './quiz.css'
import { data } from '../../assets/data';
import { useRef,useState } from 'react';

const quiz = () => {
        let [index, setIndex] = useState(0);
       let [question, setQuestion] = useState(data[index]);
       let[lock,setLock]=useState(false);
       let option1=useRef(null);
       let option2=useRef(null);
       let option3=useRef(null);
       let option4=useRef(null);
       let options=[option1,option2,option3,option4];
       let [score,setScore]=useState(0);
       let[result,setResult]=useState(false);
       const Checkans=(e,ans) =>{
        if(lock===false){
        if(question.ans===ans){
           e.target.classList.add("correct");   
              setLock(true);
              setScore(prev=>prev+1);
        }
        else{
            e.target.classList.add("wrong");
            setLock(true);
            options[question.ans-1].current.classList.add("correct");
        }
    }

       }
      const nextquestion=()=>{
        if(lock === true){
            if(index === data.length-1){
                setResult(true);
                return 0;
            }
        setIndex(++index);
        setQuestion(data[index]);
        setLock(false);
        options.map((options)=>{
            options.current.classList.remove("correct","wrong");
                 return null;
        })
    }
}
let rest=()=>{
    setIndex(0);
    setQuestion(data[0]);
    setResult(false);
    setScore(0);
    setLock(false);
}
    
    
  return (
    <div className='container'>
        <h1>Quiz Application</h1>
        <hr></hr>
        {result?<></>:<> <h2>{index+1}.{question.question}</h2>
        <ul>
           <li ref={option1} onClick={(e)=>{Checkans(e,1)}}>{question.option1}</li>
           <li ref={option2} onClick={(e)=>{Checkans(e,2)}}>{question.option2}</li>
           <li ref={option3} onClick={(e)=>{Checkans(e,3)}}>{question.option3}</li>
           <li ref={option4} onClick={(e)=>{Checkans(e,4)}}>{question.option4}</li>
        </ul>
        <button onClick={nextquestion}>Next</button>
        <div className="index">{index+1} of {data.length}</div></>}
        {result?<>  <h2>You Scored {score} out of {data.length}</h2>
        <button onClick={rest}>Reset</button></>:<></>}
      
        
       
        </div>
  )
}

export default quiz