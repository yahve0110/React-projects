import {useState} from "react";
import text from "./data";

const App = () => {
  const [value, setValue] = useState(2);
  const [toRender, setToRender] = useState(text.slice(0,value));
 console.log(text);
  return (
    <div className="main">
      <h1>Tired of Lorem ipsum?</h1>
      <div className="cont">
        <span className="par">Paragraphs:</span>
        <span >
        <input
          type="number"
          step="1"
          min="1"
          max="8"
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          className="input"
        />
        </span>
        <button onClick={() => setToRender(text.slice(0, value))}>Generate</button>
      </div>
      <div >
        {toRender.map((item)=>{
          return <p className="text">{item}</p>
        })}
      </div>
    </div>
  );
};

export default App;
