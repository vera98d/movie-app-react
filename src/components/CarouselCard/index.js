import { StyledRouterLink } from "../GlobalComponents/styles";
import movieListService from "../../services/MovieListService";
import { CardCountainer, Overlay, OverlayContent, RetesContainer, Icon } from "./styles";

const CarouselCard = ({ movie }) => {
    return (
        <CardCountainer>
            <img
                src={movieListService.getOriginalPosterByMovieId(movie.backdrop_path)}
                alt={movie.title}
            />
            <Overlay>
                <OverlayContent>
                    <StyledRouterLink to={`movies/${movie.id}`}>
                        <h1>
                            {movie.title}
                        </h1>
                    </StyledRouterLink>
                    <RetesContainer>
                        <Icon />
                        <h3>{movie.vote_average}</h3>
                    </RetesContainer>
                </OverlayContent>
            </Overlay>
        </CardCountainer>
    )
}

export default CarouselCard;