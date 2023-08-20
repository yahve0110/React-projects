import { nanoid } from 'nanoid'

const Info = ({title,company,dates,duties,id}) => {
   
  return (
    <div className="data">
      <h1>{title}</h1>
      <div className="data-name">{company}</div>
      <p className="data-data">{dates}</p>
      <div >
        {duties && duties.map((item)=>{
            return <div key={nanoid()}  className="duties">{item}</div>
        })}
      </div>
    </div>
  );
};

export default Info;
