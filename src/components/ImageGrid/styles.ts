import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  margin-top: 40px;

  /* Improve mobile responsiveness */
  @media (max-width: 768px) {
    padding: 0 10px;
    margin-top: 20px;
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;

  /* Adjust grid to 2 columns on tablets */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  /* Adjust grid to 1 column on mobile */
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`

export const StyledImage = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  /* Adjust image height on mobile for better proportions */
  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 576px) {
    height: 200px;
  }
`

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
  }

  /* Improve overlay readability on mobile */
  @media (max-width: 576px) {
    padding: 10px;

    h3 {
      font-size: 18px;
      margin-bottom: 5px;
    }

    p {
      font-size: 14px;
    }
  }
`
