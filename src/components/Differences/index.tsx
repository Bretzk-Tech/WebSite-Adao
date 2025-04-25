import styled from 'styled-components'

const Container = styled.section`
  background-color: #2c3e50; // Azul petróleo
  color: white;
  text-align: center;
  padding: 60px 20px;
`

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 60px;
  color: #ecf0f1;
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
  color: white !important;
`

const Diferenciais = () => {
  return (
    <Container>
      <Title>Nossos Diferenciais</Title>
      <ItemsContainer>
        <Item>
          <Image src='src/assets/image1.png' alt='Atendimento' />
          <Text>
            Atendimento técnico especializado para identificar a solução ideal
            para seu sistema de queima industrial
          </Text>
        </Item>
        <Item>
          <Image src='src/assets/image2.png' alt='Estoque' />
          <Text>
            Amplo estoque de peças originais com pronta entrega para minimizar
            paradas e garantir a continuidade da sua operação
          </Text>
        </Item>
        <Item>
          <Image src='src/assets/image3.png' alt='Confiança' />
          <Text>
            Compromisso com qualidade e transparência: trabalhamos com as
            melhores marcas do mercado e garantimos a procedência de todas as
            peças
          </Text>
        </Item>
      </ItemsContainer>
    </Container>
  )
}

export default Diferenciais
