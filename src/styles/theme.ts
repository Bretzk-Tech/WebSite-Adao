import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    primary: '#2c3e50', // Azul petróleo
    secondary: '#ecf0f1', // Cinza muito claro
    background: '#ffffff', // Branco
    text: '#34495e', // Cinza azulado
    mutedText: '#7f8c8d', // Cinza suave
    white: '#ffffff'

    // Segunda paleta possivel

    // primary: '#0056b3', // Azul corporativo
    // secondary: '#ffc107', // Amarelo ouro
    // background: '#f8f9fa', // Cinza claro
    // text: '#212529', // Preto suave
    // mutedText: '#6c757d', // Cinza suave
    // white: '#ffffff',
    // highlight: '#dc3545' // Vermelho intenso
  },
  typography: {
    fontFamily: "'Segoe UI', sans-serif",
    fontSize: '16px',
    lineHeight: '1.5'
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px'
  },
  borderRadius: '8px'
}

export default theme
