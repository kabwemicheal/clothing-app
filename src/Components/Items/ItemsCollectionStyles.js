import styled from "styled-components";

export const ImageContainer = styled.div`
  background-image: url(${(props) => props.imageUrl});
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
export const Price = styled.span`
  width: 10%;
`;
export const Position = styled.span`
  position: absolute;
  top: 65%;
  display: none;
`;

export const CollectionItemContainer = styled.div`
display: flex;
flex: 1;
justify-content: space-between;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;

&:hover {
  ${ImageContainer} {
    opacity: 0.8;
  }

  ${Position} {
    opacity: 0.85;
    display: flex;
    cursor: pointer;
  }
`;
