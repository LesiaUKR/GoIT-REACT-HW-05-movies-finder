import styled from 'styled-components';

export const MovieInfoWrapper = styled.div`
  padding-bottom: 20px;
  margin-top: 20px;
  display: flex;
  gap: 30px;
  color: white;
`;

export const ImgWrapper = styled.div`
  border-radius: 6px;
  outline: 2px solid rgb(255, 49, 49, 0.5);
  min-width: 400px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  > img {
    object-fit: cover;
  }
`;

export const InfoWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`;
