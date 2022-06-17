import { useEffect, useState } from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: center;
  margin: auto 0 ;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Projects({URL}) {
  // create state to hold data for projects
  const [projects, setProjects] = useState(null);

  // Function that fetches project data from the backend
  async function getProjectsData() {
    // Make API call and get response
    const response = await fetch(URL + "projects");
    // turn response into JS object
    const data = await response.json();
    // set data to projects
    setProjects(data);
  };

  // make initial call for the data 
  useEffect(() => {getProjectsData()}, []);

  const imgStyle = {
    maxWidth: "500px"
  };

  function loaded() {
    return projects.map((project, id) => (
      <StyledDiv key={id}>
        <h1>{project.name}</h1>
        <img src={project.image} style={imgStyle}/>
        <div className="buttons">
          <a href={project.git}>
            <button>Github</button>
          </a>
          <a href={project.live}>
            <button>Go to Site</button>
          </a>
        </div>
      </StyledDiv>
    ));
  };

  return <StyledDiv className="projects-page">
    {projects ? loaded() : <h1>Loading...</h1>}
  </StyledDiv>
};