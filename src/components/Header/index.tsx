import React from 'react'
import styled from 'styled-components'

const HeaderSection = styled.header`
  background: linear-gradient(
    to bottom,
    #2c3e50,
    #34495e
  ); // Gradiente azul petróleo e cinza azulado
  color: white;
  padding: 40px 20px;
  text-align: center;
`

const TopBar = styled.div`
  font-size: 1rem;
  margin-bottom: 25px;
  color: #b3b3b3;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 50px;
  color: #f5f5f5;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(160px, 1fr));
  gap: 20px;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto 60px auto;
`

const ProductImage = styled.img`
  width: 100%;
  max-width: 160px;
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
  color: #ccc;
  margin-bottom: 20px;
`

const CTAButton = styled.a`
  display: inline-block;
  background: #e74c3c; // Vermelho suave
  color: white;
  padding: 12px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: #c0392b; // Vermelho mais escuro para hover
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
    '/src/assets/motor10.avif'
  ]

  return (
    <HeaderSection>
      <TopBar>(47) 9 2274-0929 - ticino@ticino.com.br</TopBar>
      <Title>Soluções em Combustão Industrial</Title>

      <ProductGrid>
        {produtos.map((src, i) => (
          <ProductImage key={i} src={src} alt={`Produto ${i + 1}`} />
        ))}
      </ProductGrid>

      <CTABox>
        <CTATitle>Conheça nosso catálogo de peças!</CTATitle>
        <CTAText>
          Peças de reposição dos mais renomados fornecedores para seu queimador
          industrial.
          <br />
          <br />
          Entregamos em todo o Brasil!
        </CTAText>
        <CTAButton href='#produtos'>Ver Produtos</CTAButton>
      </CTABox>
    </HeaderSection>
  )
}

export default Header
