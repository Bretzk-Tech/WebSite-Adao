import styled from 'styled-components'
import headerEstoque from '../../assets/headerEstoque.png'
import motor01 from '../../assets/motor01.avif'
import motor03 from '../../assets/motor03.avif'
import motor05 from '../../assets/motor05.avif'
import motor07 from '../../assets/motor07.avif'
import motor08 from '../../assets/motor08.avif'
import motor10 from '../../assets/motor10.avif'
import logo from '../../assets/logo.png'

const Header = styled.div`
  background-color: #004466;
  padding: 30px 0;
  background-size: cover;
  background-position: center;
`

const Title = styled.h2`
  color: #ffffff;
  text-align: center;
  font-size: 23px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  line-height: 1.5;
  text-shadow: 2px 2px 4px rgba(30, 30, 30, 0.59);
`

const CardsWrapper = styled.div`
  background-color: rgb(225, 225, 225);
  background-image: url(${headerEstoque});
  align-items: center;
  justify-items: center;
`
const Center = styled.div`
  gap: 24px;
  flex-wrap: wrap;
  padding: 50px 30px;
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 1fr));
  justify-items: center;
`

const Card = styled.div`
  width: 280px;
  border: 1px solid #dcdcdc;
  border-radius: 8px; /* Adicionado bordas arredondadas */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff; /* Fundo branco para contraste */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adicionado sombra */
`

const CardImage = styled.img`
  max-width: 100%;
  height: 180px; /* Ajustado para uniformidade */
  object-fit: contain;
  padding: 00px;
`

const CardTitle = styled.h3`
  font-size: 20px; /* Aumentado para maior destaque */
  color: #004466; /* Ajustado para combinar com a paleta */
  margin: 16px 0 8px;
`

const CardDescription = styled.p`
  font-size: 14px;
  color: #666666; /* Cor ajustada para melhor contraste */
  margin: 0 16px 16px;
`

const Button = styled.button`
  background-color: #004466;
  color: #ffffff;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  width: 70%;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 10px;

  &:hover {
    background-color: #00334d; /* Cor de hover ajustada */
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;

  h2 {
    font-size: 24px;
    color: #00334d;
    margin-bottom: 30px;
    /* text-transform: uppercase; */
    letter-spacing: 1px;
    text-align: center;
  }

  p {
    font-size: 18px;
    color: #444444;
    line-height: 1.8;
    margin: 0 auto;
    max-width: 650px; /* Limite de largura para foco no texto */
    text-align: justify; /* Justificado para aparência mais profissional */
  }

  div:first-child {
    flex: 1.5; /* Maior proporção para o texto */
  }

  div:last-child {
    flex: 1; /* Proporção ajustada para a imagem */
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Image = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
`

const Pecas: React.FC = () => {
  const pecas = [
    {
      image: motor10,
      title: 'Controle e Monitoramento',
      description: 'Dispositivos para automação e segurança de queimadores'
    },
    {
      image: motor01,
      title: 'Transformadores de Ignição',
      description: 'Sistemas de alta energia para ignição confiável'
    },
    {
      image: motor05,
      title: 'Válvulas Solenóides',
      description: 'Controle preciso do fluxo de combustível'
    },
    {
      image: motor03,
      title: 'Bombas de Óleo',
      description: 'Transporte eficiente de combustível líquido'
    },
    {
      image: motor08,
      title: 'Motores',
      description: 'Acionamentos robustos para ventiladores e bombas'
    },
    {
      image: motor07,
      title: 'Componentes Diversos',
      description: 'Peças essenciais para manutenção completa'
    }
  ]

  return (
    <>
      <Header>
        <Title>Peças de Reposição para Queimadores de Biomassa</Title>
      </Header>
      <CardsWrapper>
        <Center>
          {pecas.map((peca, index) => (
            <Card key={index}>
              <CardTitle>{peca.title}</CardTitle>
              <CardImage src={peca.image} alt={peca.title} />
              {peca.description && (
                <CardDescription>{peca.description}</CardDescription>
              )}
              <Button>Saiba Mais</Button>
            </Card>
          ))}
        </Center>
      </CardsWrapper>
      <Description>
        <h2>Qualidade e Confiabilidade para seu Sistema de Combustão</h2>

        <section
          style={{
            width: 'auto',
            maxWidth: '1000px',
            display: 'flex',
            gap: '50px'
          }}
        >
          <div>
            <p>
              Nossa linha completa de peças e componentes para queimadores de
              biomassa foi cuidadosamente selecionada para garantir o desempenho
              ideal do seu equipamento. Trabalhamos com fabricantes renomados,
              assegurando produtos que atendem aos mais rigorosos padrões de
              qualidade e segurança.
            </p>
            <br />
            <p>
              Oferecemos suporte técnico especializado para auxiliar na escolha
              das peças corretas para o seu modelo de queimador, maximizando a
              eficiência e prolongando a vida útil do equipamento. Conte com
              nossa experiência para manter seu sistema operando com segurança e
              produtividade.
            </p>
          </div>
          <div>
            <Image
              src={logo}
              alt='Logo da Catherm Comercial Ltda. com texto em vermelho'
            />
          </div>
        </section>
      </Description>
    </>
  )
}

export default Pecas
