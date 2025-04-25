import { BrowserRouter } from 'react-router-dom'
import RoutesComponent from './routes'
import './App.css'
import Nav from './components/Nav'
import styled, { keyframes } from 'styled-components'
import Footer from './components/Footer'

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(86, 231, 60, 0.7);
  }
  50% {
    transform: scale(1.2);
    box-shadow: 0 0 25px rgba(86, 231, 60, 0.7);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(86, 231, 60, 0.7);
  }
`

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: rgba(207, 207, 207, 0.63);
  color: white;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s, transform 0.2s;
  animation: ${pulseAnimation} 2s infinite;

  &:hover {
    background-color: rgba(207, 207, 207, 0.42);
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(86, 231, 60, 0.5);
  }

  &:after {
    content: 'Entrar em contato';
    position: absolute;
    bottom: 4.5rem;
    right: 0.5rem;
    background-color: #333;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    white-space: nowrap;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`

const WhatsAppIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`

export default function App() {
  return (
    <BrowserRouter>
      <Nav />

      <RoutesComponent />

      <WhatsAppButton
        href='https://wa.me/5547991471021'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Fale conosco pelo WhatsApp'
      >
        <WhatsAppIcon
          src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
          alt='WhatsApp Icon'
        />
      </WhatsAppButton>

      <Footer />
    </BrowserRouter>
  )
}
