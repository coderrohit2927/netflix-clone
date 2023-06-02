import React from 'react';
import "./Home.scss";
import axios from 'axios';
import { useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

const apiKey = "6e7b76a81235b9806d09599d0a97096f"
const url = "https://api.themoviedb.org/3"
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";


const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [{
  
}] }) => {
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='rowdiv'>

        {
          arr.map((item,index) => (
            <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
          ))
        }


      </div>
    </div>
  );
};

const Home = () => {

  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);


  useEffect(() => {
    const fetchUpcoming = async () => {
        const {
            data: { results },
        } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
        setUpcomingMovies(results);
    };
    const fetchNowPlaying = async () => {
        const {
            data: { results },
        } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
        setNowPlayingMovies(results);
    };
    const fetchPopular = async () => {
        const {
            data: { results },
        } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
        setPopularMovies(results);
    };
    const fetchTopRated = async () => {
        const {
            data: { results },
        } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
        setTopRatedMovies(results);
    };
    const getAllGenre = async () => {
        const {
            data: { genres },
        } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
        setGenre(genres);
        console.log(genres);
    };
    getAllGenre();
    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
    fetchUpcoming()
    fetchNowPlaying()
}, []);




  return (
    <>
      <div className="banner">
        <div className="banner-contents">
          <h1 className="banner-title">Watche Netflix-Rohit hcr2</h1>
          <div className="banner-buttons">
            <button className="banner-button">Play</button>
            <button className="banner-button">My List</button>
          </div>
          <h1 className="banner-description">🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥</h1>
        </div>
        <div className="banner-fadeBottom" />
      </div>
      <Row title={"Upcoming moveies Watch list now!"} arr={upcomingMovies}/>
      <Row title={"Popular moveies Watch now"} arr={nowPlayingMovies} />
      <Row title={"Watch All Pubg Movies Here"} arr={popularMovies} />
      <Row title={"Watch  All Free Fire Movies Here"} arr={topRatedMovies}/>
      <div className="genreBox">
                {genre.map((item) => (
                    <Link key={item.id} to={`/genre/${item.id}`}>
                        {item.name}
                    </Link>
                ))}
            </div>
    </>
  );
};

export default Home;
