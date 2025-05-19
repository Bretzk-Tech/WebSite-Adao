import styled from 'styled-components'
import { Link } from 'react-router-dom'
import headerBackground from '../../assets/headerEstoque.png'
import motor01 from '../../assets/motor01.avif'
import motor02 from '../../assets/motor02.avif'
import motor03 from '../../assets/motor03.avif'
import motor04 from '../../assets/motor04.avif'
import motor05 from '../../assets/motor05.avif'
import motor06 from '../../assets/motor06.avif'
import motor07 from '../../assets/motor07.avif'
import motor08 from '../../assets/motor08.avif'
import motor09 from '../../assets/motor09.avif'
import image from '../../assets/image.png'
import queimadorPainel from '../../assets/queimadorPainel.png'
import quemadorPainel02 from '../../assets/quemadorPainel02.png'
import queimadorM01 from '../../assets/queimadorM01.png'
import queimadorM02 from '../../assets/queimadoresM02.png'
import queimadorM3 from '../../assets/queimadorM3.png'

const HeaderSection = styled.header`
  background-image: url(${headerBackground});
  color: white;
  padding: 20px 0;
  padding-top: 0;
  text-align: center;
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

const FeatureImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`

const FeatureImage = styled.img`
  max-width: auto;
  height: 300px;
  border-radius: 8px;
  background: white;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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

const CTAButton = styled(Link)`
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

const StylesHeader = styled.div`
  background-color: #004466;
  padding: 30px 0;
  margin-bottom: 30px;
  background-size: cover;
  background-position: center;
  width: 100%;
`

const Header = () => {
  const produtos = [
    motor01,
    motor02,
    motor03,
    motor04,
    motor05,
    motor06,
    motor07,
    motor08,
    motor09,
    image
  ]

  return (
    <HeaderSection>
      <StylesHeader>
        <Title>Soluções completas e peças para queimadores de biomassa</Title>
      </StylesHeader>
      <FeatureImagesContainer>
        <FeatureImage src={queimadorPainel} alt=' Queimador de bio massa' />
        <FeatureImage src={quemadorPainel02} alt='Queimador de bio massa' />
        <FeatureImage src={queimadorM02} alt='Queimador de bio massa' />
        <FeatureImage src={queimadorM3} alt='Queimador de bio massa' />
      </FeatureImagesContainer>
      <ProductGrid>
        {produtos.map((src, i) => (
          <ProductImage key={i} src={src} alt={`Produto ${i + 1}`} />
        ))}
      </ProductGrid>

      <CTABox>
        <CTATitle>Explore nosso catálogo!</CTATitle>
        <CTAText>Entrega rápida para todo o Brasil</CTAText>
        <CTAButton to='/products'>Ver Produtos</CTAButton>
      </CTABox>
    </HeaderSection>
  )
}

export default Header
