import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 12px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const CastItem = styled.li`
  border-radius: 6px;
  outline: 2px solid rgb(255, 49, 49, 0.5);
  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
    box-shadow 250ms ease-in-out, transform 250ms ease-in-out;
  &:hover,
  &:focus {
    cursor: pointer;
    outline: 2px solid white;
    box-shadow: 2px 2px 6px 2px rgb(255, 49, 49, 0.7);
    transform: scale(1.03);
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  height: 260px;
  > img {
    object-fit: cover;
  }
`;

export const InfoWrapper = styled.div`
  margin-top: 10px;
  font-size: 18px;
  padding: 10px;
  overflow: hidden;
`;
