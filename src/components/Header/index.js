import { HeaderStyled, LogoContainer } from "./styles";
import MovieIcon from "../../assets/movieIcon.png";
import { StyledRouterLink } from "../GlobalComponents/styles";

const Header = () => {
    return (
        <HeaderStyled>
            <StyledRouterLink to="/movie-app-react">
                <LogoContainer>
                    <img src={MovieIcon} alt="Logo - Movie" />
                    <h3>
                        Movie<span>DB</span>
                    </h3>
                </LogoContainer>
            </StyledRouterLink>
        </HeaderStyled>
    )
}

export default Header;