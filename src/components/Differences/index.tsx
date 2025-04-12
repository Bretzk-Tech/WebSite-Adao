import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  background-color: #4db2f7;
  color: white;
  text-align: center;
  padding: 60px 20px;
`

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 60px;
`

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
`

const Item = styled.div`
  max-width: 300px;
`

const Image = styled.img`
  width: 100%;
  max-width: 200px;
  margin-bottom: 20px;
`

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`

const Diferenciais = () => {
  return (
    <Container>
      <Title>Nossos Diferenciais</Title>
      <ItemsContainer>
        <Item>
          <Image src='src/assets/image1.png' alt='Atendimento' />
          <Text>
            Atendimento especializado e pronto para auxiliar nossos clientes com
            suas demandas
          </Text>
        </Item>
        <Item>
          <Image src='src/assets/image2.png' alt='Estoque' />
          <Text>
            Amplo estoque, com a capacidade de oferecer pronta entrega em uma
            grande variedade de itens
          </Text>
        </Item>
        <Item>
          <Image src='src/assets/image3.png' alt='Confiança' />
          <Text>
            Reputação e confiança: na Ticino valorizamos a idoneidade e
            transparência na relação entre nós e nossos clientes
          </Text>
        </Item>
      </ItemsContainer>
    </Container>
  )
}

export default Diferenciais
