import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { WiDayCloudy } from 'react-icons/wi';

const Weather = () => {
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
            <div className="container-fluid">
                <div className="row my-5">
                    <div className="col-12 col-md-12 mb-3">
                        <h2 className="text">Weather Finder 🌥️</h2>
                    </div>
                    <div className="col-12 col-sm-3 m-auto">
                        <div className="card bg-dark box">
                            <div className="card-body">
                                <input 
                                type="search" 
                                placeholder="Enter City Here" 
                                onChange={inputEvent} 
                                value={search} 
                                />
                                <div className="row my-5">
                                    <div className="col-12 col-sm-12 data">
                                        {!city ? (<p className="text-danger">No Data Found 😢</p>) : (<>
                                            <h2> <WiDayCloudy /> {search}</h2>
                                            <div className="row">
                                                <div className="col-12 col-sm-12 my-2">
                                                    <h4> <u>Temperature</u> : {city.temp} °C</h4>
                                                </div>
                                                <div className="col-12 col-sm-12 my-2">
                                                    <h5> <u>Min</u> : {city.temp_min} °C | <u>Max</u> : {city.temp_max} °C</h5>
                                                </div>
                                            </div>
                                        </>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather
