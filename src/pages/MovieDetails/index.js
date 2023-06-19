import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieListService from "../../services/MovieListService";
import { Container, HeaderStyled, OverlayContent2, DetailsSection, PosterContainer, Poster, Description } from "./styles";
import { Overlay, FlexRowContainer, IconStar, IconTime, IconVotes, FlexRowContainerLeft, DetailsContainerCol } from "../../components/GlobalComponents/styles";
import Loader from "../../components/Loader";

const MovieDetails = () => {
    const [movieInfo, setMovieInfo] = useState(null);
    const [isLoadting, setIsLoadting] = useState(true);
    const { movieId } = useParams();

    useEffect(() => {
        setIsLoadting(true);
        movieListService.getMovieDetails(movieId)
            .then(data => {
                setMovieInfo(data);
            })
        setIsLoadting(false);
    }, [movieId]);

    if (movieInfo === null || isLoadting) {
        return (
            <Loader />
        )
    }

    const backdropPath = movieInfo.backdrop_path || "";
    const posterPath = movieInfo.poster_path || "";

    return (
        <Container>

            <HeaderStyled>
                <img
                    src={movieListService.getOriginalPosterByMovieId(backdropPath)}
                    alt={movieInfo.title}
                />
                <Overlay>
                    <OverlayContent2>
                        <h2>{movieInfo.title}</h2>
                        <FlexRowContainer>
                            <IconTime />
                            <h5>
                                {parseInt(movieInfo.runtime / 60)}h
                                {movieInfo.runtime % 60}m
                            </h5>
                            <h5>{movieInfo.release_date.substring(0, movieInfo.release_date.indexOf("-"))} </h5>
                        </FlexRowContainer>
                        <FlexRowContainer>
                            <IconStar />
                            <h4>{movieInfo.vote_average}</h4>
                            <IconVotes />
                            <h4>{movieInfo.vote_count}</h4>
                        </FlexRowContainer>
                    </OverlayContent2>
                </Overlay>
            </HeaderStyled>

            <DetailsSection>
                <FlexRowContainerLeft>
                    <PosterContainer>
                        <Poster
                            src={movieListService.getOriginalPosterByMovieId(posterPath)}
                            alt={movieInfo.title}
                        />
                    </PosterContainer>

                    <DetailsContainerCol>
                        <p><span>Release date:</span> {movieInfo.release_date}</p>
                        <p><span>Budget:</span> ${movieInfo.budget / 1000}k</p>
                        <p>
                            <span>Genres: </span>
                            {movieInfo.genres.map((genre, index) =>
                                movieInfo.genres.length - 1 === index
                                    ? `${genre.name}`
                                    : `${genre.name}, `)}
                        </p>
                        <p>
                            <span>Production: </span>
                            {movieInfo.production_companies.map((company, index) =>
                                movieInfo.production_companies.length - 1 === index
                                    ? `${company.name}`
                                    : `${company.name}, `)}
                        </p>
                        <p>
                            <span>Countries: </span>
                            {movieInfo.production_companies.map((country, index) =>
                                movieInfo.production_companies.length - 1 === index
                                    ? `${country.name}`
                                    : `${country.name}, `)}
                        </p>

                    </DetailsContainerCol>
                </FlexRowContainerLeft>
                <Description>
                    <p><span>Overview:</span> {movieInfo.overview}</p>
                </Description>
            </DetailsSection>
        </Container >
    )
}

export default MovieDetails;

