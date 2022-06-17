import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledDiv = styled.div`
  text-align: center;
  margin: auto 0 ;
  width: 100%;
  display: flex;
  flex-direction: column;
`;


const StyledH1 = styled.h1`
  text-align: center;
  overflow: hidden;
`;

export default function Home() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const msg = "Welcome to Sunghun's Portfolio";
  const msgArr = msg.split('');

  function typeMessage() {
    setMessage(message + msg[count])
  };

  useEffect(() => {
    if (count < msg.length) {
      typeMessage();
      setTimeout(() => {
        setCount(count + 1)
      }, 100);
    };
  }, [count]);

  return (
    <StyledDiv className="home-page">
      <StyledH1 id="msg">{message}</StyledH1>
    </StyledDiv>
  );
};