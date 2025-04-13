import styled from 'styled-components'
import Contact from '../../components/Contact'
import Diferenciais from '../../components/Differences'
import Header from '../../components/Header'
import Sobre from '../../components/Sobre'

const HomeContainer = styled.div`
  text-align: center;
  padding: 0;
  margin: 0;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <Sobre />
      <Diferenciais />
      <Contact />
    </HomeContainer>
  )
}
