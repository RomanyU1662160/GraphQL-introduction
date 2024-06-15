import '@apollo/space-kit/reset.css';
import { colors as SKColors } from '@apollo/space-kit/colors';
import { Global, css } from '@emotion/react';

const breakpoints = [480, 768, 992, 1200];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const unit = 8;
export const widths = {
  largePageWidth: 1600,
  regularPageWidth: 1100,
  textPageWidth: 800,
};

export const colors = {
  primary: SKColors.blue,
  secondary: SKColors.grey,
  success: SKColors.green,
  warning: SKColors.orange,
  danger: SKColors.red,
  accent: SKColors.pink,
  background: SKColors.silver,
  text: SKColors.black.base,
  textSecondary: SKColors.grey.dark,
};

const globalStyle = {
  html: {
    height: '100%',
  },

  '#root': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    backgroundImage: 'url("/space_kitty_pattern.png")',
  },
  '*': {
    boxSizing: 'border-box',
  },
  [['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].join(',')]: {
    margin: 0,
    fontWeight: 600,
  },
  h1: {
    fontSize: 40,
    lineHeight: 1,
  },
  h2: {
    fontSize: 36,
  },
  h3: {
    fontSize: 30,
  },
  h5: {
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 4,
  },
};

const GlobalStyles = () => {
  return (
    <Global
      styles={{
        html: {
          height: '100%',
        },
      }}
    />
  );
};

export default GlobalStyles;
