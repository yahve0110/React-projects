import {useState} from 'react'
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";
import reviews from './data'

const App = () => {
const [slide, setSlide] = useState(0);

const nextSlide = ()=>{
  if (slide === reviews.length - 1) {
    setSlide(0);
    return;
  }
  setSlide(slide + 1);
}


const prevSlide = ()=>{
  if(slide === 0){
    setSlide(reviews.length-1)
    return
  }
  setSlide(slide-1)
}

const random = () => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * reviews.length);
  } while (randomIndex === slide);

  setSlide(randomIndex);
};

  return (
    <main>
      <img src={reviews[slide].image} alt={reviews[slide].id}  />
      <h3>{reviews[slide].name} </h3>
      <p className='boss'>{reviews[slide].job} </p>
      <p className='text'>I{reviews[slide].text} </p>
      <div className='left'><button onClick={prevSlide}><AiOutlineLeft/></button></div>
      <div className='right'><button onClick={nextSlide}><AiOutlineRight/></button></div>
      <div className='surprise'><button onClick={random}>Surprise me</button></div>
    </main>
  )
}

export default App