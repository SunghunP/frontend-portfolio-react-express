import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  border-top: 2px solid black;
  p {
    margin: 10px;
    padding: 10px; 
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <p><a href="https://www.linkedin.com/in/sunghunp/">Linkedin</a></p>
      <p><a href="https://github.com/SunghunP">Github</a></p>
      
    </StyledFooter>
  );
};