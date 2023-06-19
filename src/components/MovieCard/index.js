import { PosterContainer, Poster } from "./styles";
import { StyledRouterLink } from "../GlobalComponents/styles";
import { links } from "../../services/ApiEndpointConfig";

const MovieCard = ({ imgPath, title, movieId }) => {

    const PosterAltText = title.concat(" - Movie Poster");
    const imgUrl = links.imageEndpoint.concat(imgPath);

    return (
        <PosterContainer>
            <StyledRouterLink to={`movies/${movieId}`} >
                <Poster src={imgUrl} alt={PosterAltText} />
            </StyledRouterLink>
        </PosterContainer>
    )
}

export default MovieCard;