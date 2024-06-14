import '@apollo/space-kit/reset.css';
import { colors as SKColors } from '@apollo/space-kit/colors';
import { Global } from '@emotion/core';

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

const GlobalStyle = () => {
  <Global></Global>;
};
