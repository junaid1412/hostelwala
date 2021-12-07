/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */
import * as React from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ThemeManager } from 'react-native-ui-lib';

ThemeManager.setComponentTheme('TextField', (props, context) => {

  return {

    backgroundColor: props.outline ? 'black' : 'green',
  };
});
import { useColorScheme } from '../hooks/useColorScheme';


type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];

export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: "text" | "background" | string
) {
  const theme = useColorScheme();
  const { colors } = useTheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return colors[colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
