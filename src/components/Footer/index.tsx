import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: #ecf0f1; // Fundo cinza muito claro
  color: #34495e; // Texto cinza azulado
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
