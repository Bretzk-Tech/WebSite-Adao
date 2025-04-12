import styled from 'styled-components'
import fornecedoresImage from '../../assets/fornecedores.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
`

const Title = styled.h1``

const Paragraph = styled.p`
  font-size: 1rem;
  margin: 10px 0;
`

const Image = styled.img`
  width: 100%;
  max-width: 300px;
`

export default function Sobre() {
  return (
    <Container>
      <Title>Sobre</Title>
      <Paragraph>
        A Ticino é uma empresa especializada em soluções de combustão
        industrial, oferecendo uma ampla gama de produtos e serviços para
        atender às necessidades dos nossos clientes.
      </Paragraph>
      <Paragraph>
        Com anos de experiência no setor, nossa equipe está pronta para fornecer
        o suporte necessário para otimizar o desempenho dos sistemas de
        combustão.
      </Paragraph>
      <Image src={fornecedoresImage} alt='Fornecedores Renomados' />
    </Container>
  )
}
