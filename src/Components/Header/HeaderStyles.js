import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  width: 80%;
  align-items: center;
  margin: 0 auto;
`;

export const HeaderLinks = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;
export const HeaderLogo = styled(Link)`
  text-decoration: none;
  font-size: 1.7rem;
  color: black;
`;
export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-right: 2rem;
  font-size: 1.2rem;
`;
export const IconLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LoginUserIcon = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
`;
