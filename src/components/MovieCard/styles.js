import styled from 'styled-components';

export const PosterContainer = styled.div`
  width: 28%;
  max-width: 150px;
  height: 36%;
  overflow: hidden;
  flex-shrink: 0;

  &:hover img {
    transform: scale(1.1);
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.55s ease;
`;
