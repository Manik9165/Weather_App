import React from 'react';
import { useState } from 'react';

const App = () => {
  const[name,setName] = useState("");
  //api.openweathermap.org/data/2.5/weather?q={city name}&appid={fd62ac2c176c9e08c5ad659bad068a58}

  const inputEvent=(event)=>{
    setName(event.target.value);
  }

  return (
    <>
      <div className="main_div">
        <div className="second_div">
          <input type="search" onChange={inputEvent} placeholder="Enter a City" />
          <div className="info">
            <h2 className="location"><i class="fas fa-street-view"></i> {name}</h2>
            <h1 className="temp"> 12.3 Celcius</h1>
            <h4 className="temp-min-max"> Min : 12.3 Cel | Max : 12.3 Cel</h4>
          </div>
          <div className="wave-one"></div>
          <div className="wave-two"></div>
          <div className="wave-three"></div>
        </div>
      </div>
    </>
  );
}
export default App;
