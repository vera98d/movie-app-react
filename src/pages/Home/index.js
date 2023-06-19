import React, { useEffect, useState } from "react";
import movieListService from "../../services/MovieListService";
import { movieListKeywords } from "../../services/ApiEndpointConfig";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MovieListHorizontal from "../../components/MovieListHorizontal";
import CarouselCard from "../../components/CarouselCard";
import { Container } from "./styles";
import Loader from "../../components/Loader";

const Home = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRated] = useState([]);
    const [upcomingMovies, setUpcoming] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [isLoadting, setIsLoadting] = useState(true);

    useEffect(() => {
        setIsLoadting(true);
        movieListService.getMovieList(movieListKeywords.popular)
            .then(data => {
                setPopularMovies(data);
            })

        movieListService.getMovieList(movieListKeywords.topRated)
            .then(data => {
                setTopRated(data);
            })

        movieListService.getMovieList(movieListKeywords.upcoming)
            .then(data => {
                setUpcoming(data);
            })

        movieListService.getMovieList(movieListKeywords.nowPlaying)
            .then(data => {
                const dataToShow = data.filter(movie =>
                    movie.title.length < 20);
                setNowPlayingMovies(dataToShow);
            })
        setIsLoadting(false);
    }, []);

    const carouselCards = nowPlayingMovies.map(movie => {
        return (
            <CarouselCard movie={movie} key={movie.id} />
        )
    })

    if (isLoadting) {
        return (
            <Loader />
        )
    }

    return (
        <Container>
            {carouselCards.length > 0 && (
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                    stopOnHover={false}
                    interval={5000}
                    autoFocus={true}
                >
                    {carouselCards}

                </Carousel>
            )}
            < MovieListHorizontal movieList={popularMovies} listTitle="Popular movies" />
            <MovieListHorizontal movieList={topRatedMovies} listTitle="Top rated movies" />
            <MovieListHorizontal movieList={upcomingMovies} listTitle="Upocomming productions" />
        </Container>
    )
}

export default Home;