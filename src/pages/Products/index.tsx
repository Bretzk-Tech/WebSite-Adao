import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  background-color: #004466;
  padding: 70px 0;
  background-image: url('src/assets/headerEstoque.png');
  background-size: cover;
  background-position: center;
`

const Title = styled.h2`
  color: #ffffff;
  text-align: center;
  font-size: 27px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  line-height: 1.5;
  text-shadow: 3px 2px 4px rgb(0, 0, 0);
`

const CardsWrapper = styled.div`
  background-color: rgb(225, 225, 225);
  align-items: center;
  justify-items: center;
`
const Center = styled.div`
  gap: 24px;
  flex-wrap: wrap;
  background-color: rgb(225, 225, 225);
  padding: 50px 30px;
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 1fr));
  justify-items: center;
`

const Card = styled.div`
  width: 280px;
  border: 1px solid #dcdcdc;
  border-radius: 8px; /* Adicionado bordas arredondadas */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff; /* Fundo branco para contraste */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adicionado sombra */
`

const CardImage = styled.img`
  max-width: 100%;
  height: 180px; /* Ajustado para uniformidade */
  object-fit: contain;
  padding: 20px;
`

const CardTitle = styled.h3`
  font-size: 20px; /* Aumentado para maior destaque */
  color: #004466; /* Ajustado para combinar com a paleta */
  margin: 16px 0 8px;
`

const CardDescription = styled.p`
  font-size: 14px;
  color: #666666; /* Cor ajustada para melhor contraste */
  margin: 0 16px 16px;
`

const Button = styled.button`
  background-color: #004466; /* Ajustado para combinar com a paleta */
  color: #ffffff;
  padding: 12px 20px; /* Ajustado para melhor proporção */
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px; /* Adicionado bordas arredondadas */

  &:hover {
    background-color: #00334d; /* Cor de hover ajustada */
  }
`

const Pecas: React.FC = () => {
  const pecas = [
    {
      image: 'src/assets/motor10.avif',
      title: 'Controle e Monitoramento',
      description: 'Programador de chama TGRD - Brahma'
    },
    {
      image: 'src/assets/motor01.avif',
      title: 'Transformadores de Ignição',
      description: 'Eletroválvula VMR2'
    },
    {
      image: 'src/assets/motor05.avif',
      title: 'Válvulas Solenóides',
      description: 'Eletroválvulas VML2'
    },
    {
      image: 'src/assets/motor03.avif',
      title: 'Bombas de Óleo',
      description: 'Sensor de alta precisão para controle térmico'
    },
    {
      image: 'src/assets/motor08.avif',
      title: 'Motores',
      description: 'Bomba de alta eficiência para sistemas industriais'
    },
    {
      image: 'src/assets/motor07.avif',
      title: 'Variados',
      description: 'Válvula para controle de pressão em sistemas hidráulicos'
    }
  ]

  return (
    <>
      <Header>
        <Title>Peças de Reposição para Queimadores Industriais</Title>
      </Header>
      <CardsWrapper>
        <Center>
          {pecas.map((peca, index) => (
            <Card key={index}>
              <CardImage src={peca.image} alt={peca.title} />
              <CardTitle>{peca.title}</CardTitle>
              <CardDescription>{peca.description}</CardDescription>
              <Button>Saiba Mais</Button>
            </Card>
          ))}
        </Center>
      </CardsWrapper>
    </>
  )
}

export default Pecas
