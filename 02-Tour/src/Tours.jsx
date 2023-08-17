import Tour from "./Tour";
import {useState,useEffect} from 'react'

const url = "https://course-api.com/react-tours-project";


const Tours = () => {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);

const request = async ()=>{
    const response = await fetch(url)
    const result = await response.json()
    setData(result)
}

useEffect(() => {
   try {
    request()
    setLoading(false)
   } catch (error) {
    console.log(error);
   } finally{
    setLoading(false)
   }
   
}, []);


const remove =(id)=>{
    const newData = data.filter(item=>item.id !== id)
    setData(newData)
}

  return (
    <div className="tours-container">
        
    {loading &&   <h2>LOADING...</h2>}
    {data && data.map((item) => {
        return (
            <Tour key={item.id} {...item} remove={() => remove(item.id)} />
        );
    })}
    </div>
  );
};

export default Tours;
