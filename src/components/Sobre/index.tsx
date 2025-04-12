import styled from 'styled-components'
import fornecedoresImage from '../../assets/fornecedores.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 20px;
  border-radius: 12px;
  margin: 20px;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #444;
  margin: 15px 0;
  text-align: justify;
`

const Image = styled.img`
  width: 100%;
  max-width: 450px;
`

const Section = styled.section`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }
`

const ContainerText = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`

export default function Sobre() {
  return (
    <Container>
      <Title>Sobre</Title>
      <Section>
        <ContainerText>
          <Paragraph>
            A Ticino é uma empresa especializada em soluções de combustão
            industrial, oferecendo uma ampla gama de produtos e serviços para
            atender às necessidades dos nossos clientes.
          </Paragraph>
          <Paragraph>
            Com anos de experiência no setor, nossa equipe está pronta para
            fornecer o suporte necessário para otimizar o desempenho dos
            sistemas de combustão.
          </Paragraph>
        </ContainerText>
        <Image src={fornecedoresImage} alt='Fornecedores Renomados' />
      </Section>
    </Container>
  )
}
