import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    primary: '#2c3e50', // Azul petróleo
    secondary: '#ecf0f1', // Cinza muito claro
    background: '#ffffff', // Branco
    text: '#34495e', // Cinza azulado
    mutedText: '#7f8c8d', // Cinza suave
    white: '#ffffff'
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
