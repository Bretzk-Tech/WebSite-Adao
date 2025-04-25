import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: rgb(62, 62, 62);
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 1rem 0;
`

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2023 Catherm Comercial Ltda. Todos os direitos reservados.</p>
      <p>
        Contato: adaocatherm@tarra.com.br | (47) 3378-5990 | (47) 99147-1021
      </p>
    </FooterContainer>
  )
}
