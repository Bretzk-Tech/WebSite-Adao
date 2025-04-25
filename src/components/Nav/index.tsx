import { useState } from 'react'
import styled from 'styled-components'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import logoImage from '../../assets/logo.png'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  background-color: #ffffff;
  border-bottom: 1px solid #ecf0f1;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
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
      color: #34495e;
      font-size: 16px;
      font-weight: 500;
      padding: 6px 0;
      position: relative;
      transition: color 0.3s ease, border-bottom 0.3s ease;

      &.active {
        color: #2c3e50;
        font-weight: 600;
        border-bottom: 2px solid #2c3e50;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background: #ffffff; // Fundo branco consistente
    position: absolute;
    top: 70px;
    right: 0;
    width: 240px; // Largura ajustada para melhor visualização
    padding: 20px;
    box-shadow: -2px 4px 12px rgba(0, 0, 0, 0.15); // Sombra mais visível
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
  cursor: pointer;
`

const ContactBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1c40f;
  padding: 7px 0;
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
      font-size: 15px;
    }
  }
`

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('/')

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleLinkClick = (path: string) => {
    setActiveLink(path)
    setMenuOpen(false)
  }

  return (
    <>
      <ContactBar>
        <Center>
          <div style={{ display: 'flex', gap: '10px', fontSize: '14px' }}>
            <span>📞 (47) 3378-5990</span>
            <span>📱 (47) 99147-1021</span>
            <span>✉ adaocatherm@tarra.com.br</span>
          </div>
          <div className='social-icons'>
            <a
              href='https://wa.me/5547991471021'
              target='_blank'
              rel='noopener noreferrer'
            >
              🔗 Whatsapp
            </a>
            <a href='#'>🔗 Instagram</a>
            <a href='#'>🔗 Facebook</a>
          </div>
        </Center>
      </ContactBar>
      <NavContainer>
        <Center>
          <Logo>
            <StyledLink to='/'>
              <img src={logoImage} alt='Logo' />
              <span>Catherm</span>
            </StyledLink>
          </Logo>

          <MenuToggle onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </MenuToggle>

          <NavLinks isOpen={menuOpen}>
            <li>
              <a
                href='/'
                className={activeLink === '/' ? 'active' : ''}
                onClick={() => handleLinkClick('/')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='/products'
                className={activeLink === '/products' ? 'active' : ''}
                onClick={() => handleLinkClick('/products')}
              >
                Produtos
              </a>
            </li>
            <li>
              <a
                href='/burners'
                className={activeLink === '/burners' ? 'active' : ''}
                onClick={() => handleLinkClick('/burners')}
              >
                Queimadores
              </a>
            </li>
          </NavLinks>
        </Center>
      </NavContainer>
    </>
  )
}
