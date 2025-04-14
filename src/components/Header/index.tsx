import styled from 'styled-components'

const HeaderSection = styled.header`
  /* background: linear-gradient(to bottom, #2c3e50, #34495e); */
  background-image: url('src/assets/headerEstoque.png');
  color: white;
  padding: 20px 20px;
  text-align: center;
`

const Title = styled.h1`
  font-size: 30px !important;
  font-weight: 700;
  margin-top: 20px !important;
  margin-bottom: 40px !important;
  color: #ecf0f1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(160px, 1fr));
  gap: 20px;
  justify-items: center;
  max-width: 1000px;
  margin: 0 auto 60px auto;
`

const ProductImage = styled.img`
  width: 100%;
  max-width: 140px;
  height: auto;
  border-radius: 8px;
  background: white;
  padding: 10px;
`

const CTABox = styled.div`
  background: #1a1a1a;
  padding: 40px 20px;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
`

const CTATitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`

const CTAText = styled.p`
  font-size: 1rem;
  color: #ccc !important;
  margin-bottom: 20px;
`

const CTAButton = styled.a`
  display: inline-block;
  background-color: #2c3e50;

  color: white;
  padding: 12px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background-color: #34495e;
    transform: scale(1.05);
  }
`

const Header = () => {
  const produtos = [
    '/src/assets/motor01.avif',
    '/src/assets/motor02.avif',
    '/src/assets/motor03.avif',
    '/src/assets/motor04.avif',
    '/src/assets/motor05.avif',
    '/src/assets/motor06.avif',
    '/src/assets/motor07.avif',
    '/src/assets/motor08.avif',
    '/src/assets/motor09.avif',
    '/src/assets/image.png'
  ]

  return (
    <HeaderSection>
      <Title>Peças de reposição para seu queimador industrial.</Title>
      <ProductGrid>
        {produtos.map((src, i) => (
          <ProductImage key={i} src={src} alt={`Produto ${i + 1}`} />
        ))}
      </ProductGrid>

      <CTABox>
        <CTATitle>Conheça nosso catálogo de peças!</CTATitle>
        <CTAText>Entregamos em todo o Brasil!</CTAText>
        <CTAButton href='/products'>Ver Produtos</CTAButton>
      </CTABox>
    </HeaderSection>
  )
}

export default Header
