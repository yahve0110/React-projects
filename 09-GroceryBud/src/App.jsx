import React, { useState } from "react";
import { nanoid } from "nanoid";
import Task from "./Task";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getLocalStorage =()=>{
  let list = localStorage.getItem('list')
  console.log(list);
}

const setLocalStorage =(tasks)=>{
  localStorage.setItem('list',JSON.stringify(tasks))
}

const App = () => {
  const [itemList, setItemList] = useState("");
  const [tasks, setTasks] = useState([]);
getLocalStorage()

  const addTask = () => {
    setTasks([...tasks, itemList]);
    setItemList("");
    toast.success('Added!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter((_, index) => index !== id);
    setTasks(newTasks);
    toast.warn('You removed task', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setLocalStorage(...newTasks)
  };

  return (
    <main>
      <div>
        <h1>Grocery Bud</h1>
      </div>
      <div className="toInput">
        <input
          className="input-text"
          type="text"
          value={itemList}
          onChange={(e) => setItemList(e.target.value)}
        />
        <button className="add-btn" onClick={addTask}>
          Add Item
        </button>
      </div>

      {tasks &&
        tasks.map((item, index) => {
          const id = nanoid();
          return (
            <div className="task">
              <Task
                key={id}
                item={item}
                removeTask={removeTask}
                index={index}
              />
            </div>
          );
        })}
          <ToastContainer />
    </main>
  );
};

export default App;
