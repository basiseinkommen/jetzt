import { lighten } from 'polished'

const theme = {
  font: {
    primary: `'Arial', sans-serif`,
    secondary: `'Arial', sans-serif`
  },
  font_size: {
    small: 'font-size: 16px; line-height: 24px',
    regular: 'font-size: 20px; line-height: 30px',
    large: 'font-size: 24px; line-height: 32px',
    larger: 'font-size: 30px; line-height: 40px',
    xlarge: 'font-size: 36px; line-height: 48px'
  },
  color: {
    white: {
      regular: '#FFFFFF',
      dark: '#F6F6F6',
      inverted: 'hsl(0, 0%, 25%)'
    },
    black: {
      lighter: '#ABA8AF',
      light: '#564F62',
      regular: '#211E26',
      inverted: '#FFFFFF'
    },
    primary: '#FFD005'
  },
  screen: {
    xs: '575px',
    sm: '767px',
    md: '991px',
    lg: '1199px'
  }
}

export default theme
