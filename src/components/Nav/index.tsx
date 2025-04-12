import styled from 'styled-components'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
`

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    margin-right: 10px;
  }

  span {
    font-size: 14px;
    color: #333;
  }
`

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-left: 20px;

    a {
      text-decoration: none;
      color: #000;
      font-size: 16px;
      position: relative;

      &.active {
        font-weight: bold;
        text-decoration: underline;
      }

      &:hover {
        color: #007bff;
      }
    }
  }
`

export default function Nav() {
  return (
    <NavContainer>
      <Logo>
        <span>Ticino Comercial Ltda.</span>
      </Logo>
      <NavLinks>
        <li>
          <a href='/' className='active'>
            Home
          </a>
        </li>
        <li>
          <a href='/services'>Services</a>
        </li>
        <li>
          <a href='/about'>About Us</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </NavLinks>
    </NavContainer>
  )
}
