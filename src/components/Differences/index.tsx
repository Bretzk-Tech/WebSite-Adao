import styled from 'styled-components'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

const Container = styled.section`
  background-color: #2c3e50; // Azul petróleo
  color: white;
  text-align: center;
  padding: 60px 20px;
`

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 60px;
  color: #ecf0f1;
`

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
`

const Item = styled.div`
  max-width: 300px;
`

const Image = styled.img`
  width: 100%;
  max-width: 200px;
  margin-bottom: 20px;
`

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: white !important;
`

const Diferenciais = () => {
  return (
    <Container>
      <Title>Nossos Diferenciais</Title>
      <ItemsContainer>
        <Item>
          <Image src={image1} alt='Atendimento' />
          <Text>
            Consultoria técnica personalizada com engenheiros especializados
            para diagnosticar, selecionar e otimizar a solução ideal para seu
            sistema de combustão, garantindo máxima eficiência e segurança
            operacional.
          </Text>
        </Item>
        <Item>
          <Image src={image2} alt='Estoque' />
          <Text>
            Centro logístico estratégico com mais de 5.000 peças originais em
            pronta entrega, sistema de distribuição ágil e monitoramento
            inteligente de estoques para eliminar paradas não programadas na sua
            produção.
          </Text>
        </Item>
        <Item>
          <Image src={image3} alt='Confiança' />
          <Text>
            Excelência certificada com mais de 20 anos no mercado, parcerias
            exclusivas com fabricantes internacionais de elite, certificação ISO
            9001 e rastreabilidade completa em todos os componentes para sua
            total segurança.
          </Text>
        </Item>
      </ItemsContainer>
    </Container>
  )
}

export default Diferenciais
