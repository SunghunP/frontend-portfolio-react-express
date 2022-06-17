import { useEffect, useState } from "react";

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
      <div>
        <h2>{about.name}</h2>
        <h3>{about.email}</h3>
        <p>{about.bio}</p>
      </div>
    );
  };

  return about ? loaded() : <h1>Loading...</h1>
};

