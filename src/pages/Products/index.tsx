// src/components/Pecas.tsx

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #004466; /* Ajustado para combinar com a paleta da Home */
  padding: 50px 0;
`;

const Title = styled.h2`
  color: #ffffff;
  text-align: center;
  font-size: 36px; /* Aumentado para maior destaque */
  font-weight: bold;
  /* margin-bottom: 50px; */
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px; /* Ajustado para melhor espaçamento */
  flex-wrap: wrap;
  background-color: #f0f8ff; /* Cor de fundo mais clara */
  padding: 50px 30px;
  border-radius: 8px; /* Adicionado bordas arredondadas */
`;

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
`;

const CardImage = styled.img`
  max-width: 100%;
  height: 180px; /* Ajustado para uniformidade */
  object-fit: contain;
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: 20px; /* Aumentado para maior destaque */
  color: #004466; /* Ajustado para combinar com a paleta */
  margin: 16px 0 8px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666666; /* Cor ajustada para melhor contraste */
  margin: 0 16px 16px;
`;

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
`;

const Pecas: React.FC = () => {
  const pecas = [
    {
      image: '/pecas/chama.png',
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
    },
    {
      image: '/pecas/sensor.png',
      title: 'Sensor de Temperatura',
      description: 'Sensor de alta precisão para controle térmico'
    },
    {
      image: '/pecas/bomba.png',
      title: 'Bomba de Água Industrial',
      description: 'Bomba de alta eficiência para sistemas industriais'
    },
    {
      image: '/pecas/valvula.png',
      title: 'Válvula Reguladora de Pressão',
      description: 'Válvula para controle de pressão em sistemas hidráulicos'
    }
  ];

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
  );
};

export default Pecas;
