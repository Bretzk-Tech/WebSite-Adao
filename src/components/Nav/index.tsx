import React, { useState } from 'react'
import styled from 'styled-components'
import { FiMenu, FiX } from 'react-icons/fi' // Ícones do menu

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  background-color: #ffffff; // Fundo branco
  border-bottom: 1px solid #ecf0f1; // Borda cinza muito claro
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  position: sticky;
  top: 0;
  z-index: 999;
  font-family: 'Segoe UI', sans-serif;
`

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 50px;
    margin-right: 10px;
  }

  span {
    font-size: 20px;
    font-weight: 700;
    color: #222;
  }
`

const MenuToggle = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

interface NavLinksProps {
  isOpen: boolean
}

const NavLinks = styled.ul<NavLinksProps>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-left: 28px;

    a {
      text-decoration: none;
      color: #34495e; // Texto cinza azulado
      font-size: 16px;
      font-weight: 500;
      padding: 6px 0;
      position: relative;
      transition: 0.3s ease;

      &.active {
        color: #2c3e50; // Azul petróleo para link ativo
        font-weight: 600;
        border-bottom: 2px solid #2c3e50;
      }

      &:hover {
        color: #e74c3c; // Vermelho suave para hover
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background: #fff;
    position: absolute;
    top: 70px;
    right: 0;
    width: 200px;
    padding: 20px;
    box-shadow: -2px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 8px 8px;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
  }
`

const Center = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const ContactBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1c40f; // Amarelo
  padding: 10px 20px;
  font-size: 14px;
  color: #000;

  a {
    text-decoration: none;
    color: #000;
    margin-left: 10px;
  }

  .social-icons {
    display: flex;
    gap: 10px;

    a {
      font-size: 18px;
    }
  }
`

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <ContactBar>
        <Center>
          <div style={{ display: 'flex', gap: '10px' }}>
            <span>📞 (47) 3378-5990</span>
            <span>📱 (47) 99147-1021</span>
            <a href='mailto:adaocatherm@tarra.com.br'>
              ✉ adaocatherm@tarra.com.br
            </a>
          </div>
          <div className='social-icons'>
            <a href='#'>🔗 Facebook</a>
            <a href='#'>🔗 Instagram</a>
            <a href='#'>🔗 LinkedIn</a>
            <a href='#'>🔗 YouTube</a>
          </div>
        </Center>
      </ContactBar>
      <NavContainer>
        <Center>
          <Logo>
            <img src='src/assets/logo.png' alt='Logo' />
            <span>Catherm</span>
          </Logo>

          <MenuToggle onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </MenuToggle>

          <NavLinks isOpen={menuOpen}>
            <li>
              <a href='/' className='active'>
                Home
              </a>
            </li>
            <li>
              <a href='/products'>Produtos</a>
            </li>
          </NavLinks>
        </Center>
      </NavContainer>
    </>
  )
}
