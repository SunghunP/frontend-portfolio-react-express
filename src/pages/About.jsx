import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;
  padding: 10px;
  p {
    text-align: center;
  }
`

export default function About({ URL }) {
  // create state to hold data from backend
  const [about, setAbout] = useState(null);

  // Function to handle api call
  const getAboutData = async () => {
    const response = await fetch(URL + "about").then((res) => res.json());
    setAbout(response);
    console.log(response);
  };

  // make initial call for the data 
  useEffect(() => {getAboutData()}, []);

  function loaded() {
    return (
      <StyledDiv className="about">
        <h2>{about.name}</h2>
        <h3>{about.email}</h3>
        <p>{about.bio}</p>
        <h2>Find me on these Websites!</h2>
        <ul>
          <li><h3><a href="https://www.linkedin.com/in/sunghunp/">Linkedin</a></h3></li>
          <li><h3><a href="https://github.com/SunghunP">Github</a></h3></li>
        </ul>
      </StyledDiv>
    );
  };

  return about ? loaded() : <h1>Loading...</h1>
};

