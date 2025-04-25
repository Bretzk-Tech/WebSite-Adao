import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #f0f0f0;
`

const ImageGrid = styled.div`
  display: grid;
  padding: 60px 0;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  /* border: 1px solid red; */
`

const StyledImage = styled.img`
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const Header = styled.div`
  background-color: #004466;
  padding: 30px 0;
  /* background-image: url('src/assets/headerEstoque.png'); */
  background-size: cover;
  background-position: center;
`

const Title = styled.h2`
  color: #ffffff;
  text-align: center;
  font-size: 23px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  line-height: 1.5;
  text-shadow: 2px 2px 4px rgba(30, 30, 30, 0.59);
`

const Description = styled.div`
  padding: 60px 20px;
  background-color: #ffffff;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;

  h2 {
    font-size: 28px;
    color: #004466;
    margin-bottom: 30px;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    color: #444;
    margin-bottom: 20px;
    text-align: justify;
  }
`

export default function Burners() {
  return (
    <Container>
      <Header>
        <Title>Queimadores Industriais de Biomassa</Title>
      </Header>

      <ImageGrid>
        <StyledImage src='src/assets/qm100Eco.png' alt='QM100 Eco' />
        <StyledImage src='src/assets/qm100Slim.png' alt='QM100 Slim' />
        <StyledImage src='src/assets/qm400Eco.png' alt='QM400 Eco' />
        <StyledImage src='src/assets/qm400Slim.png' alt='QM400 Slim' />
        <StyledImage src='src/assets/qm400Turbo.png' alt='QM400 Turbo' />
      </ImageGrid>

      <Description>
        <h2>Queimadores de alta performance para processos industriais</h2>
        <p>
          Nossa linha de queimadores industriais de biomassa é projetada para
          oferecer máxima eficiência térmica com baixo impacto ambiental.
          Desenvolvidos com tecnologia avançada, nossos equipamentos garantem
          combustão completa, reduzindo emissões e maximizando o aproveitamento
          energético do combustível.
        </p>
        <p>
          Disponíveis em diferentes modelos e capacidades, os queimadores se
          adaptam perfeitamente às necessidades específicas de cada indústria,
          seja para caldeiras, fornos, secadores ou outros equipamentos
          térmicos. Conte com nossa consultoria especializada para encontrar a
          solução ideal para seu processo.
        </p>
      </Description>
    </Container>
  )
}
