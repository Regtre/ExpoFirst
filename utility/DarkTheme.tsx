import { Theme } from "@react-navigation/native";
import { Platform } from "react-native";
import colorPanel from "./ColorPanel";

const WEB_FONT_STACK =
  'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const DarkTheme : Theme = {
  dark: true,
  colors: {
    primary: colorPanel.color.dark.primary, 
    background: colorPanel.color.dark.background,
    card: colorPanel.color.dark.b_a1,
    text: colorPanel.color.dark.text,
    border: colorPanel.color.dark.border,
    notification: colorPanel.color.dark.secondary,
  },
  fonts: Platform.select({
    web: {
      regular: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: '400',
      },
      medium: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: '500',
      },
      bold: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: '600',
      },
      heavy: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: '700',
      },
    },
    ios: {
      regular: {
        fontFamily: 'System',
        fontWeight: '400',
      },
      medium: {
        fontFamily: 'System',
        fontWeight: '500',
      },
      bold: {
        fontFamily: 'System',
        fontWeight: '600',
      },
      heavy: {
        fontFamily: 'System',
        fontWeight: '700',
      },
    },
    default: {
      regular: {
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'sans-serif-medium',
        fontWeight: 'normal',
      },
      bold: {
        fontFamily: 'sans-serif',
        fontWeight: '600',
      },
      heavy: {
        fontFamily: 'sans-serif',
        fontWeight: '700',
      },
    },
  }),
};


export default DarkTheme;