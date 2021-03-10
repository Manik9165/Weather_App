import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("Bhopal");

  useEffect(() => {
    const fetchApi = async () => {
      const Url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fd62ac2c176c9e08c5ad659bad068a58`;
      const response = await fetch(Url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  const inputEvent = (event) => {
    setSearch(event.target.value);
  }

  return (
    <>
      <div className="main_div">
        <div className="second_div">
          <input type="search" onChange={inputEvent} placeholder="Enter a City" value={search} />
          <div>
            <div className="info">
              {!city ? (<p className="data">No Data Found 😢</p>) : (<>
                <h2 className="location"><i className="fas fa-street-view"></i> {search}</h2>
                <h1 className="temp"> {city.temp} °C</h1>
                <h4 className="temp-min-max"> Min : {city.temp_min} °C | Max : {city.temp_max} °C</h4>
              </>)}
            </div>
            <div className="wave-one"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
