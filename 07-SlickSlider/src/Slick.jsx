import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { list } from "./data";
import { FaQuoteRight } from "react-icons/fa";

const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <container className="slick-container">
      <Slider className="slider" {...settings}>
        {list.map((item) => {
          const { image, name, title, quote, id } = item;
          return (
            <main key={id}>
              <img src={image} alt={name} />
              <h1>{name}</h1>
              <h5>{title}</h5>
              <div className="text">{quote}</div>
              <FaQuoteRight className="quote" />
            </main>
          );
        })}
      </Slider>
    </container>
  );
};

export default Slick;
