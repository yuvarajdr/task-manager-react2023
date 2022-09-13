
// import fetch from node-fetch;
import { useEffect } from 'react';

// const fetch = require('node-fetch');
const url = 'https://fairestdb.p.rapidapi.com/';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '50e4e083bamsh413555ce4b60c5dp10a6b5jsn500bdc3f5704',
    'X-RapidAPI-Host': 'fairestdb.p.rapidapi.com'
  }
};

const fetchapi=((url, options)=>{
    return fetch(url, options)
	// .then(res => res.json())
	// .then(json => console.log(json))
	// .catch(err => console.error('error:' + err));
})

export default fetchapi;
