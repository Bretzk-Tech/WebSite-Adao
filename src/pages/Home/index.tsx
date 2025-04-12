import styled from 'styled-components'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Contact from '../../components/Contact'

const HomeContainer = styled.div`
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`

const DataSection = styled.section`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f1f1f1;
  border-radius: 8px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
      font-size: 1rem;
      color: #333;
    }
  }
`

export default function Home() {
  return (
    <HomeContainer>
      <Nav />
      <h1>Home</h1>
      <p>Welcome to the home page!</p>

      <DataSection>
        <h2>Our Services</h2>
        <ul>
          <li>Service 1: Industrial Burner Maintenance</li>
          <li>Service 2: Custom Parts Manufacturing</li>
          <li>Service 3: Technical Consulting</li>
        </ul>
      </DataSection>

      <Contact />
      <Footer />
    </HomeContainer>
  )
}
