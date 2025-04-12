import styled from 'styled-components'

const Container = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
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
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4a5568;
`

const Input = styled.input`
  margin-top: 0.25rem;
  width: 100%;
  border: 1px solid #d2d6dc;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.5);
  }
`

const Textarea = styled.textarea`
  margin-top: 0.25rem;
  width: 100%;
  border: 1px solid #d2d6dc;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.5);
  }
`

const Button = styled.button`
  width: 100%;
  background-color: #f97316;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ea580c;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.5);
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
  color: #4a5568;
  margin-bottom: 1.5rem;
`

const Image = styled.img`
  margin-top: 1.5rem;
`

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for contacting us! We will get back to you soon.')
  }

  return (
    <Container>
      <InnerContainer>
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
              experiente está pronta para fornecer as soluções personalizadas e
              de alta qualidade que você precisa. Não perca tempo, entre em
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
  )
}

export default Contact
