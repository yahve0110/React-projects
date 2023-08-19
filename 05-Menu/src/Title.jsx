import React, { useState } from "react";
import menu from "./data";
import Cart from "./Cart";

const Title = () => {

    const [list, setList] = useState(menu);


        const displayCategory =(e)=>{
            if(e.toLowerCase() === 'all'){
                setList(menu)
                return
            }
            const newList = menu.filter((item)=>e.toLowerCase() === item.category)
            setList(newList)
            return
          
        }
 


  return (
    <main>
      <h1>Our Menu</h1>
      <div className="btns">
        <button onClick={(e) => displayCategory(e.target.textContent)}>All</button>
        <button onClick={(e) => displayCategory(e.target.textContent)}>Breakfast</button>
        <button onClick={(e) => displayCategory(e.target.textContent)}>Lunch</button>
        <button onClick={(e) => displayCategory(e.target.textContent)}>Shakes</button>
      </div>
      <div className="container">
        {list.map((item)=>{
            return(
                <Cart key={item.id} {...item}/>
            )
        })}
       
      </div>
    </main>
  );
};

export default Title;
