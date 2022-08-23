import styled from "styled-components";

export const CollectionPreview = styled.div`
  display: flex;
  width: 80vw;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;
export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 4rem;
`;
