import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
`

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 0.5rem;
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
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    width: 50%;
    margin-bottom: 0;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #34495e; // Texto principal atualizado para cinza azulado
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: left;
`

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
`

const Input = styled.input`
  margin-top: 0.25rem;
  width: 100%;
  border: 1px solid #ecf0f1; // Borda atualizada para cinza muito claro
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: #2c3e50; // Azul petróleo para foco
    box-shadow: 0 0 0 3px rgba(44, 62, 80, 0.5);
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

  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.5);
  }
`

const Button = styled.button`
  width: 100%;
  background-color: #2c3e50; // Azul petróleo para botão
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #34495e; // Cinza azulado para hover
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 73, 94, 0.5);
  }
`

const TextWrapper = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 50%;
    padding-left: 2rem;
  }
`

const Paragraph = styled.p`
  color: #34495e; // Texto atualizado para cinza azulado
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const Image = styled.img`
  margin-top: 1.5rem;
  max-width: 100%;
  border-radius: 0.375rem;
`

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: #e74c3c; // Vermelho suave para botão do WhatsApp
  color: white;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #c0392b; // Vermelho mais escuro para hover
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.5);
  }

  &:hover::after {
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

const SocialMediaSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  p {
    font-size: 1.25rem;
    font-weight: bold;
    color: #2c3e50; // Azul petróleo
    margin-bottom: 1rem;
  }

  .icons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    a {
      display: inline-block;
      width: 3rem;
      height: 3rem;
      background-color: #ecf0f1; // Fundo cinza muito claro
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s, background-color 0.2s;

      &:hover {
        background-color: #bdc3c7; // Cinza mais escuro para hover
        transform: scale(1.1);
      }

      img {
        width: 1.5rem;
        height: 1.5rem;
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
            <p>
              Conecte-se conosco nas redes sociais e acompanhe as novidades!
            </p>
            <div className='icons'>
              <a
                href='https://www.instagram.com/YOUR_INSTAGRAM_HANDLE'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Follow us on Instagram'
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
                aria-label='Contact us on WhatsApp'
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
              <Title>Entre em Contato conosco!</Title>
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
                Pronto para maximizar a eficiência de seus queimadores
                industriais? Solicite agora mesmo uma cotação de peças conosco e
                dê o próximo passo para otimizar sua operação. Nossa equipe
                experiente está pronta para fornecer as soluções personalizadas
                e de alta qualidade que você precisa. Não perca tempo, entre em
                contato hoje mesmo e leve seu negócio a novos patamares de
                desempenho e produtividade!
              </Paragraph>
              <Image
                src='https://placehold.co/300x100'
                alt='Logo da Ticino Comercial Ltda. com texto em vermelho e azul'
              />
            </TextWrapper>
          </FlexWrapper>
        </InnerContainer>
      </Container>
      <WhatsAppButton
        href='https://web.whatsapp.com/send?phone=YOUR_PHONE_NUMBER'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Contact us on WhatsApp'
      >
        <WhatsAppIcon
          src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
          alt='WhatsApp Icon'
        />
      </WhatsAppButton>
    </>
  )
}

export default Contact
