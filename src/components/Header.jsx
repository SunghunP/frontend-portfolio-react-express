import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 5px;
  text-align: center;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  border: 3px solid black;
  padding: 8px;
  width: 90%;
  margin: auto;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Sunghun Park's Portfolio</h1>
      <StyledNav>
        <Link to="/" >HOME</Link>
        <Link to="/about" >ABOUT</Link>
        <Link to="/projects" >PROJECTS</Link>
      </StyledNav>
    </StyledHeader>
  );
};