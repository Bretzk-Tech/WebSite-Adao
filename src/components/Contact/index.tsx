import styled from 'styled-components'
import logo from '../../assets/logo.png' // Add this import

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  width: 100%;
  max-width: 100vw;

  @media (max-width: 768px) {
    padding: 1.5rem 0.8rem;
  }

  @media (max-width: 480px) {
   padding:0;
    min-height: auto;
  }
`

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem 0.8rem;
    border-radius: 0.375rem;
  }
`

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

const FormWrapper = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 50%;
    margin-bottom: 0;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #34495e;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }

  @media (max-width: 768px) {
    font-size: 1.7rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  max-width: 500px;

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;

  @media (max-width: 480px) {
    font-size: 0.8125rem;
  }
`

const Input = styled.input`
  margin-top: 0.25rem;
  width: 100%;
  border: 1px solid #ecf0f1;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: border-color 0.2s, box-shadow 0.2s;
  -webkit-appearance: none; /* Fix for iOS */

  &:focus {
    outline: none;
    border-color: #2c3e50;
    box-shadow: 0 0 0 3px rgba(44, 62, 80, 0.5);
  }

  @media (max-width: 768px) {
    padding: 0.7rem 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.8125rem;
  }
`

const Textarea = styled.textarea`
  margin-top: 0.25rem;
  width: 100%;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: border-color 0.2s, box-shadow 0.2s;
  -webkit-appearance: none; /* Fix for iOS */

  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.5);
  }

  @media (max-width: 768px) {
    padding: 0.7rem 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.8125rem;
  }
`

const Button = styled.button`
  width: 100%;
  background-color: #2c3e50;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s, transform 0.2s;
  -webkit-appearance: none; /* Fix for iOS */
  cursor: pointer;

  &:hover {
    background-color: #34495e;
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 73, 94, 0.5);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    padding: 0.7rem 0.8rem;
    border-radius: 0.25rem;
    font-size: 0.9375rem;
  }
`

const TextWrapper = styled.div`
  width: 100%;
  padding: 30px;

  @media (min-width: 1024px) {
    width: 50%;
    padding-left: 2rem;
  }

  @media (max-width: 768px) {
    padding: 20px 15px;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`

const Paragraph = styled.p`
  color: #34495e;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1.1rem !important;

  @media (max-width: 768px) {
    font-size: 1rem !important;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem !important;
    margin-bottom: 1.2rem;
    text-align: left;
  }
`

const Image = styled.img`
  max-width: 100%;
  border-radius: 0.375rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    max-width: 80%;
    margin: 1rem auto;
    display: block;
  }

  @media (max-width: 480px) {
    max-width: 70%;
    margin-top: 0.8rem;
  }
`

const SocialMediaSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  p {
    font-size: 1.25rem;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      padding: 0 0.5rem;
    }
  }

  .icons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    a {
      display: inline-block;
      width: 3rem;
      height: 3rem;
      background-color: #ecf0f1;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s, background-color 0.2s;

      &:hover {
        background-color: #bdc3c7;
        transform: scale(1.1);
      }

      img {
        width: 1.5rem;
        height: 1.5rem;
      }

      @media (max-width: 480px) {
        width: 2.5rem;
        height: 2.5rem;

        img {
          width: 1.2rem;
          height: 1.2rem;
        }
      }
    }
  }
`

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for contacting us! We will get back to you soon.')
  }

  return (
    <>
      <Container>
        <InnerContainer>
          <SocialMediaSection>
            <p>Acompanhe nossas novidades e lançamentos nas redes sociais!</p>
            <div className='icons'>
              <a
                href='https://www.instagram.com/catherm_comercio/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Siga-nos no Instagram'
              >
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'
                  alt='Instagram Icon'
                />
              </a>
              <a
                href='https://web.whatsapp.com/send?phone=YOUR_PHONE_NUMBER'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Contate-nos pelo WhatsApp'
              >
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
                  alt='WhatsApp Icon'
                />
              </a>
            </div>
          </SocialMediaSection>
          <FlexWrapper>
            <FormWrapper>
              <Title>Solicite um orçamento!</Title>
              <Form onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor='name'>Nome</Label>
                  <Input
                    id='name'
                    name='name'
                    placeholder='Seu Nome'
                    type='text'
                  />
                </div>
                <div>
                  <Label htmlFor='company'>Empresa</Label>
                  <Input
                    id='company'
                    name='company'
                    placeholder='Nome da sua empresa'
                    type='text'
                  />
                </div>
                <div>
                  <Label htmlFor='email'>Seu email*</Label>
                  <Input
                    id='email'
                    name='email'
                    placeholder='Endereço de email'
                    type='email'
                  />
                </div>
                <div>
                  <Label htmlFor='message'>Mensagem*</Label>
                  <Textarea
                    id='message'
                    name='message'
                    placeholder='Escreva sua Mensagem'
                    rows={4}
                  />
                </div>
                <div>
                  <Button type='submit'>Enviar</Button>
                </div>
              </Form>
            </FormWrapper>
            <TextWrapper>
              <Paragraph>
                Maximize a eficiência dos seus queimadores de biomassa com
                nossas peças de reposição de alta qualidade. Desenvolvidas para
                garantir operação confiável e duradoura, nossas soluções ajudam
                a reduzir custos operacionais e minimizar paradas não
                programadas. Conte com nossa experiência para encontrar os
                componentes ideais para seu equipamento. Solicite agora mesmo um
                orçamento personalizado e descubra como podemos otimizar o
                desempenho do seu sistema de combustão!
              </Paragraph>

              <Image
                src={logo}
                alt='Logo da Catherm Comercial Ltda. com texto em vermelho'
              />
            </TextWrapper>
          </FlexWrapper>
        </InnerContainer>
      </Container>
    </>
  )
}

export default Contact
