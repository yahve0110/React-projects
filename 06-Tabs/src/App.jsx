import React, { useEffect, useState } from "react";
import Info from "./Info";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [list, setList] = useState([]);
  const [toRender, setToRender] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = async () => {
    const request = await fetch(url);
    const response = await request.json();
    setList(response);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const changeItem = (index) => {
    setToRender(index)
  };

  return (
    <div className="main">
      {isLoaded ? (
        <>
          <div className="names">
            {list.map((item,index) => {
              return (
                <div key={item.id}>
                  {toRender === index ? (
                    <button className="pseudo" onClick={() => changeItem(index)}>
                      {item.company}
                    </button>
                  ) : (
                    <button onClick={() => changeItem(index)}>
                      {item.company}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          <div className="info">
            <Info {...list[toRender]} />
          </div>
        </>
      ) : (
        <div>LOADING...</div>
      )}
    </div>
  );
};

export default App;
