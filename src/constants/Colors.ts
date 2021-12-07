import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Colors as clLib } from 'react-native-ui-lib';
const primary = "#a20000"
const tintColorLight = primary;
const tintColorDark = primary;
clLib.loadColors({
  primary
});
export const DarkThemes = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary,
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  }
}
export const LightThemes = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary,
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,

  }
}