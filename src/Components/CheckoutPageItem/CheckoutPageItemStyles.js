import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid lightgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ItemWidth = styled.span`
  width: 23%;
`;
export const Name = styled(ItemWidth)``;
export const Price = styled(ItemWidth)``;
export const Quantity = styled(ItemWidth)`
  display: flex;
`;
export const Value = styled.span`
  margin: 0 10px;
`;
export const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;

export const RightArrow = styled(FaChevronRight)`
  cursor: pointer;
`;
export const LeftArrow = styled(FaChevronLeft)`
  cursor: pointer;
`;
