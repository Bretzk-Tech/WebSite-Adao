import styled from 'styled-components'

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem 0;
  background-color: #f8f9fa;
  color: #6c757d;
`

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2023 Ticino Comercial Ltda. All rights reserved.</p>
      <p>Contact us: info@ticino.com | +55 11 1234-5678</p>
    </FooterContainer>
  )
}
