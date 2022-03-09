import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../axios";
import "./Row.css";

const baseImgUrl = "https://image.tmdb.org/t/p/original"
function Row({title,fetchUrl,isLargeRow}){

    const [movies,setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
      async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request
    }
    fetchData(); 
}, [fetchUrl]);



    const handleClick = (movie) => {

        // if(trailerUrl){
        //     setTrailerUrl('')
        // }else{
            movieTrailer(movie.title || movie.name || movie.original-title ||'')
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch(err => console.log(err))
        //}
    }

const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      rel:1,
      fs: 0,
    },
  };


return(
        <div className="row">
            <h2>{title}</h2>
            <div className= "row_posters">
                {movies.map(movie => (
                    <img 
                    onMouseEnter={() => setTimeout(() => {
                        handleClick(movie);
                    },1500)}
                    onMouseLeave={()=> setTimeout(() => {
                            setTrailerUrl('');
                            console.log('This will run after 1 second!');
                            }, 1000)}
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                    src={isLargeRow ? baseImgUrl + movie.poster_path   : baseImgUrl + movie.backdrop_path} 
                    alt={movie.name} />
                ))}
                
            </div>
           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />
}         </div>
    )
}

export default Row;