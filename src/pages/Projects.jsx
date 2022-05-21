import { useEffect, useState } from "react"

export default function Projects({URL}) {
  // creat state to hold data for projects
  const [projects, setProjects] = useState(null);

  // Function that fetches project data from the backend
  async function getProjectsData() {
    // Make API call and get response
    const response = await fetch(URL + "projects");
    // turn response into JS object
    const data = await response.json();
    // set data to projects
    setProjects(data);
  }

  // make initial call for the data 
  useEffect(() => {getProjectsData()}, []);

  const imgStyle = {
    maxWidth: "500px"
  }
  function loaded() {
    return projects.map((project, id) => (
      <div key={id}>
        <h1>{}</h1>
        <img src={project.image} style={imgStyle}/>
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>Go to Site</button>
        </a>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>
}