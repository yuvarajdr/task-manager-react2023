import React, { useEffect, useState } from "react";
import fetchapi from "../api/fetchapi";
import ButtonsHead from "./Header";

function Home (){
    // const [name, setName]=useState(true);
    // useEffect(()=>{
    //     fetchapi()
    // },[,name])
    // const url = 'https://localhost:7003/WeatherForecast/';
    const url = '/WeatherForecast/'
    const requestBody = {};
    const [response,setResponse] = useState([]);
    const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin' : "*"
        // 'X-RapidAPI-Key': '50e4e083bamsh413555ce4b60c5dp10a6b5jsn500bdc3f5704',
        // 'X-RapidAPI-Host': 'fairestdb.p.rapidapi.com'
    },
    // body: JSON.stringify(requestBody)
    };
    const fetchit=(url,options)=>{
        fetchapi(url,options)
        .then(res => res.json())
        .then(json => setResponse(json))
        .catch(err => console.error('error:' + err));
    }
    return (
        <div style={{display:'flex', flexDirection:'row'}}>
    <div >
        <h2>Welcome to the world of Yuvaraj DR</h2>
        <div className="container" style={{display:'flex', flexDirection:'column'}}>
        <ButtonsHead title={"Yuvaraj Test Portfolio"}></ButtonsHead>
        </div>
</div>
<div className="container">
<h2>Todays weather is as fallows</h2><button className="btn" color="red" onClick={e=>fetchit(url,options)}>click</button>
<div className="container" style={{overflowX:'auto',display:'flex', flexDirection:'row'}}>
        { 
            response.map((res,index) =>{
                return(<div key={index} className="minContainer" style={{display:'flex', flexDirection:'column'}}>
                    <h3>date = {res.date} </h3>
                    <h3>temperatureC = {res.temperatureC} </h3>
                    <h3>temperatureF = {res.temperatureF} </h3>
                    <h3>summary = {res.summary} </h3>
                    </div>
                )
            })
        }
        </div>
</div>
</div>
    )
}

export default Home;