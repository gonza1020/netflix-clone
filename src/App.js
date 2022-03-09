import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import request from './request';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title = "Netflix Originals" fetchUrl = {request.fetchNetlixOriginals} isLargeRow/>
      <Row title = "Trending" fetchUrl={request.fetchTrendig}/>
      <Row title = "Top Rated movies" fetchUrl={request.fecthTopRated}/>
      <Row title = "Action movies" fetchUrl={request.fetchActionMovies}/>
      <Row title = "Romance movies" fetchUrl={request.fecthRomanceMovies}/>
      <Row title = "Horror movies" fetchUrl={request.fecthHorrorMovies}/>
      <Row title = "Documentaries" fetchUrl={request.fecthDocumentaries}/>

    </div>
  );
}

export default App;
