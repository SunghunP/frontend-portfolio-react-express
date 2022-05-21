import { useEffect, useState } from "react";

export default function About({ URL }) {
  // create state to hold data from backend
  const [about, setAbout] = useState(null);

  // Function to handle api call
  const getAboutData = async () => {
    //make api call and get response
    const response = await fetch(URL + "about");
    // turn response to javascript object
    const data = await response.json();
    // set the about state to the data
    setAbout(data);
    console.log(data)
  }

  // make initial call for the data 
  useEffect(() => {getAboutData()}, []);

  function loaded() {
    return (
      <div>
        <h2>{about.name}</h2>
        <h3>{about.email}</h3>
        <p>{about.bio}</p>
      </div>
    )

  }

  return about ? loaded() : <h1>Loading...</h1>
}

