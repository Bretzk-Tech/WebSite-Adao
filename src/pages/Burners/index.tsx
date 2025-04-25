import styled from 'styled-components'
import qm100Eco from '../../assets/qm100Eco.png'
import qm100Slim from '../../assets/qm100Slim.png'
import qm400Eco from '../../assets/qm400Eco.png'
import qm400Slim from '../../assets/qm400Slim.png'
import qm400Turbo from '../../assets/qm400Turbo.png'

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
  max-width: 450px;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const Header = styled.div`
  background-color: #004466;
  padding: 30px 0;
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
  padding: 80px 20px;
  background-color: #ffffff;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-top: -40px;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;

  h2 {
    font-size: 32px;
    color: #004466;
    margin-bottom: 40px;
    font-weight: 700;
    position: relative;
    display: inline-block;

    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background-color: #004466;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.8;
    color: #555;
    margin-bottom: 30px;
    text-align: justify;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    transition: all 0.3s ease;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      color: #333;
    }
  }

  @media (max-width: 768px) {
    padding: 60px 15px;
    margin-top: -20px;

    h2 {
      font-size: 26px;
      margin-bottom: 30px;
    }

    p {
      font-size: 16px;
      line-height: 1.6;
    }
  }
`

export default function Burners() {
  return (
    <Container>
      <Header>
        <Title>Queimadores Industriais de Biomassa</Title>
      </Header>

      <ImageGrid>
        <StyledImage src={qm100Eco} alt='QM100 Eco' />
        <StyledImage src={qm100Slim} alt='QM100 Slim' />
        <StyledImage src={qm400Eco} alt='QM400 Eco' />
        <StyledImage src={qm400Slim} alt='QM400 Slim' />
        <StyledImage src={qm400Turbo} alt='QM400 Turbo' />
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
