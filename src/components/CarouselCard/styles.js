import styled from "styled-components";
import { AiTwotoneStar } from 'react-icons/ai';

export const CardCountainer = styled.div`
    height:45vh;
    margin: 0 auto;

& img{
    width: 100%;
    height: 100%;
    object-fit: cover ;
    object-position: center;
    position: relative;
}

@media (min-width: 768px) or (orientation: landscape)
 {
    width:100%;
    height: auto;
    max-height: 90vh;
  }
`;

export const Overlay = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    z-index: 10;
`;

export const OverlayContent = styled.div`
    position:absolute;
    bottom:0;
    left:0;
    width:60%;
    height: 40%;
    padding: 1.5em 1em;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    & h1, h3{
        color: white;
    }

    & h1{
        font-weight: bold;
        text-transform: uppercase;
        text-align: left;
    }

    @media (min-width: 580px) or (orientation: landscape)
    {
        & h1{
            font-size: 2.8rem;
        }
    }
    @media (min-width: 720px) or (orientation: landscape)
    {
        padding: 2.5em 2em;
        width:45%;

        & h1{
            font-size: 3.2rem;
        }
    }

    @media (min-width: 1050px) or (orientation: landscape)
    {
        padding: 3.5em 3em;
        width:40%;
        
        & h1{
            font-size: 4rem;
        }
    }

`;

export const Icon = styled(AiTwotoneStar)`
    display: block;
    margin: auto;
    color: #FFC000;
`;

export const RetesContainer = styled.div`
    display: flex;
    align-items: 'center';
    gap: .5em;
`;

