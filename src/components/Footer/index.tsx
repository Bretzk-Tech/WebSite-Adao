import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: rgb(62, 62, 62);
  color:rgb(255, 255, 255);
  text-align: center;
  padding: 1rem 0;
`

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2023 Ticino Comercial Ltda. All rights reserved.</p>
      <p>Contact us: info@ticino.com | +55 11 1234-5678</p>
    </FooterContainer>
  )
}
