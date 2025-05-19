import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
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

  @media (max-width: 768px) {
    padding: 16px 18px;
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 50px;
    margin-right: 10px;

    @media (max-width: 480px) {
      width: 32px;
      height: 40px;
      margin-right: 8px;
    }
  }

  span {
    font-size: 20px;
    font-weight: 700;
    color: #222;

    @media (max-width: 480px) {
      font-size: 18px;
    }
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

  @media (max-width: 480px) {
    font-size: 22px;
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
    background: #ffffff;
    position: absolute;
    top: 70px;
    right: 0;
    width: 240px;
    padding: 20px;
    box-shadow: -2px 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 0 0 8px 8px;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    z-index: 1000;

    li {
      margin: 0 0 15px 0;
      width: 100%;
      text-align: center;

      &:last-child {
        margin-bottom: 0;
      }

      a {
        display: block;
        padding: 12px;
        border-radius: 4px;

        &:hover {
          background-color: #f8f9fa;
        }

        &.active {
          border-bottom: none;
          background-color: #ecf0f1;
        }
      }
    }
  }

  @media (max-width: 480px) {
    top: 65px;
    width: 200px;
    padding: 15px;

    li a {
      font-size: 15px;
      padding: 10px;
    }
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

  @media (max-width: 480px) {
    padding: 0;
  }
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

  .contact-info {
    display: flex;
    gap: 15px;
    align-items: center;
    width: 100%;

    span {
      display: flex;
      align-items: center;
      white-space: nowrap;
      padding: 4px 8px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.2);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

      svg,
      img {
        margin-right: 5px;
      }
    }
  }

  .social-icons {
    display: flex;
    gap: 15px;

    a {
      font-size: 18px;
      display: flex;
      align-items: center;
      transition: transform 0.2s ease, color 0.2s ease;

      &:hover {
        transform: translateY(-2px);
        color: #333;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;

    div {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .contact-info {
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
      max-width: 90%;
      margin: 0 auto;

      span {
        margin: 0;
        flex: 0 0 auto;
        font-size: 13px;
        padding: 5px 10px;
      }
    }

    div:first-child {
      flex-direction: column;
      gap: 5px;
      align-items: center;
    }
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px 0;

    .contact-info {
      display: grid;
      grid-template-columns: 1fr;
      width: 90%;
      gap: 6px;
      margin: 0 auto 8px auto;

      span {
        justify-content: center;
        padding: 6px 0;
        width: 100%;
        text-align: center;
      }
    }

    .social-icons {
      gap: 10px;

      a {
        font-size: 16px;
      }
    }
  }
`

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const [activeLink, setActiveLink] = useState(location.pathname)
  const navRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleLinkClick = (path: string) => {
    setActiveLink(path)
    setMenuOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        menuOpen
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  return (
    <>
      <ContactBar>
        <Center>
          <div className='contact-info'>
            <span>📞 (47) 3378-5990</span>
            <span>📱 (47) 99147-1021</span>
            <span>✉ adaocatherm@tarra.com.br</span>
          </div>
          <div className='social-icons'>
            <a
              href='https://wa.me/5547991471021'
              target='_blank'
              rel='noopener noreferrer'
              title='WhatsApp'
            >
              <FaWhatsapp />
            </a>
            <a
              href='https://www.instagram.com/catherm_comercio/'
              target='_blank'
              rel='noopener noreferrer'
              title='Instagram'
            >
              <FaInstagram />
            </a>
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              title='Facebook'
            >
              <FaFacebook />
            </a>
          </div>
        </Center>
      </ContactBar>
      <NavContainer>
        <Center ref={navRef}>
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
              <Link
                to='/'
                className={activeLink === '/' ? 'active' : ''}
                onClick={() => handleLinkClick('/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/products'
                className={activeLink === '/products' ? 'active' : ''}
                onClick={() => handleLinkClick('/products')}
              >
                Produtos
              </Link>
            </li>
            <li>
              <Link
                to='/burners'
                className={activeLink === '/burners' ? 'active' : ''}
                onClick={() => handleLinkClick('/burners')}
              >
                Queimadores
              </Link>
            </li>
          </NavLinks>
        </Center>
      </NavContainer>
    </>
  )
}
