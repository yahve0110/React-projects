

const Cart = ({title,img,desc,price}) => {
  
  return (
    <div className="cart">
      <img src={img} alt={title} />
      <div className="lower">
        <div className="upper">
          <h5>{title}</h5>
          <div  className="price">${price}</div>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Cart;
