import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{location}</h2>
      <img src={avatar} height={150} alt={name}/>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/r-scott25`)
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data) return (
<GithubUser
    name={data.name}
    location={data.location}
    avatar={data.avatar_url}
  />
  )
  
}

export default App;
