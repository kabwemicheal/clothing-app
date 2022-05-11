const CartItem = ({ ...item }) => {
  return (
    <div>
      <div>{item.name}</div>
      <span>{item.quantity}</span>
    </div>
  );
};
export default CartItem;
