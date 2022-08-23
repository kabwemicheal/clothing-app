import { CartItemContainer, Name, ItemDetails } from "./CartItemStyles.js";
const CartItem = ({ ...item }) => {
  return (
    <CartItemContainer>
      <img src={item.imageUrl} alt={item.name} />
      <ItemDetails>
        <Name>{item.name}</Name>
        <span>
          {item.quantity} X ${item.price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
