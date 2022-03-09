import axios from '../axios';
import React, { useState,useEffect } from 'react';
import requests from '../request'
import "./Banner.css"

const baseImgUrl = "https://image.tmdb.org/t/p/original"

// rfce writes all the structure of the function
function Banner() {

    const [movie,setMovie] = useState([]);

    useEffect(() => {
      async function fetchData(){
        const request = await axios.get(requests.fetchNetlixOriginals);
        const movie = await request.data.results[Math.floor(Math.random() * (request.data.results.length - 1))];
        setMovie(movie);
        return request;
    }
    fetchData();
    }, []);

    console.log(movie);

  return (<header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage:`url(${baseImgUrl}${movie.backdrop_path})`,
                backgroundPosition: "center center",
                
            }}
            >
            <div className="banner_contents">
                {/*Title */}
                <h1 className='banner_title'>{movie?.name} </h1>
                <div className="buttons">
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My list</button>
                </div>
                {/* Div with two btns */}
               <h1 className='banner_description'> {movie.overview}</h1>
            </div>
            <div className='bannerFade'></div>
        </header>);
}

export default Banner;



