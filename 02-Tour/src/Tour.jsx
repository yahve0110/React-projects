import { useState } from "react";

const Tour = ({ name, info, image, price, id, remove }) => {
  const [more, setMore] = useState(false);
  return (
    <div className="tour">
      <img className={"tour-img"} src={image} alt={name} />
      <div className="price">${price}</div>
      <div className="tour-lower">
        <h5>{name}</h5>
        {more ? <p>{info}</p> : <p>{info.slice(0, 200)}...</p>}
        <button className="more" onClick={()=>setMore(!more)}>{!more?`read more`:`close`}</button>
        <button className="not-interested" onClick={() => remove(id)}>
          not interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
