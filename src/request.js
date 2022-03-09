const APIKEY = "91a7eea8bc32bcf334b3bb139ae47ada";

const requests = {
    fetchTrendig: `/trending/all/week?api_key=${APIKEY}`,
    fecthTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchNetlixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchActionMovies:    `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fecthComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fecthHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fecthRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fecthDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`
}
export default requests;