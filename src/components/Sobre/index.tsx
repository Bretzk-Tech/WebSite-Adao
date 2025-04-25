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
            Somos especialistas em soluções para queimadores de biomassa,
            oferecendo uma linha completa de peças de reposição e equipamentos
            de alta qualidade para sistemas de combustão industrial.
          </Paragraph>
          <Paragraph>
            Com vasta experiência no setor e parcerias com os melhores
            fabricantes do mercado, garantimos produtos confiáveis e o suporte
            técnico necessário para otimizar o desempenho e a eficiência dos
            seus sistemas de queima industrial.
          </Paragraph>
        </ContainerText>

        <div
          style={{
            padding: '20px',
            border: '1px solid #44444444'
          }}
        >
          <h2 style={{ marginBottom: '15px' }}>Fornecedores Renomados</h2>
          <Image src={fornecedoresImage} alt='Fornecedores Renomados' />
        </div>
      </Section>
    </Container>
  )
}
