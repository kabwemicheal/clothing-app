import "../CartItem/CartItem.scss";
const CartItem = ({ ...item }) => {
  return (
    <div className="cart-item-container">
      <img src={item.imageUrl} alt={item.name} />
      <div className="item-details">
        <h1 className="name">{item.name}</h1>
        <span className="price">
          {item.quantity} X ${item.price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
