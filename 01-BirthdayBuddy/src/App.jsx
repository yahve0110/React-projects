import { useState } from "react";
import data from "./data";

const App = () => {
  const [list, setlist] = useState(data);
  return (
    <main>
      <h1>{list.length} Birthdays Today</h1>

      {list.map((item) => {
        return (
          <div className="items" key={item.id}>
            <img src={item.image} alt={item.id} />
            <div className="container">
              <div className="name" >{item.name}</div>
              <div className="year">{item.age} years</div>
            </div>
          </div>
        );
      })}
      <button onClick={() => setlist([])}>Clear all</button>
    </main>
  );
};

export default App;
