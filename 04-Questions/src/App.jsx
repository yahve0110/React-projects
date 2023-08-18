import React from "react";
import questions from "./data";
import Question from "./Question";

const App = () => {
  console.log(questions);
  return (
    <main>
      <h1>Questions</h1>
      {questions.map((item)=>{
        return(
          <Question key={item.id} {...item}/>
        )
      })}
    </main>
  );
};

export default App;
