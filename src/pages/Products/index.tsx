// src/components/Pecas.tsx

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #005180;
  padding: 40px 0;
`

const Title = styled.h2`
  color: white;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
`

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  background-color: white;
  padding: 40px 20px;
`

const Card = styled.div`
  width: 300px;
  border: 1px solid #e5e5e5;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CardImage = styled.img`
  max-width: 100%;
  height: 200px;
  object-fit: contain;
  padding: 20px;
`

const CardTitle = styled.h3`
  font-size: 18px;
  color: #005180;
  margin: 16px 0 8px;
`

const CardDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0 0 16px;
`

const Button = styled.button`
  background-color: #005180;
  color: white;
  padding: 16px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #003d5c;
  }
`

const Pecas: React.FC = () => {
  const pecas = [
    {
      image: '/pecas/chama.png', // Substitua pelo caminho real da imagem
      title: 'Controlador de chama TGRD62',
      description: 'Programador de chama TGRD - Brahma'
    },
    {
      image: '/pecas/vmr2.png',
      title: 'Eletroválvula VMR2 - 3/4”',
      description: 'Eletroválvula VMR2'
    },
    {
      image: '/pecas/vml2.png',
      title: 'Eletroválvulas VML2 - 3/4”',
      description: 'Eletroválvulas VML2'
    }
  ]

  return (
    <>
      <Container>
        <Title>PEÇAS</Title>
      </Container>
      <CardsWrapper>
        {pecas.map((peca, index) => (
          <Card key={index}>
            <CardImage src={peca.image} alt={peca.title} />
            <CardTitle>{peca.title}</CardTitle>
            <CardDescription>{peca.description}</CardDescription>
            <Button>Saiba Mais</Button>
          </Card>
        ))}
      </CardsWrapper>
    </>
  )
}

export default Pecas
