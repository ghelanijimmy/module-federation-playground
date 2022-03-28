import { light } from "./light";
import { common } from "./common/common";
import { colors } from "./common/colors";

/**
 * Styles for styled component theme provider
 * @type {{common: {sizing: {quarterPadding: string, halfPadding: string, defaultPadding: string, doublePadding: string, biggerPadding: string}, box: {borderRadius: string}, type: {small: string, default: string, size: string, large: string, extraLarge: string, medium: string, family: string}, transitions: {defaultTransition: string}}, light: {button: {secondary: {inverse: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}, regular: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}}, default: {inverse: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}, regular: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}}, primary: {inverse: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}, regular: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}}}, colors: {secondary: string, primaryLighter1: string, secondaryLighter1: string, body: string, primary: string}}, colors: {white: string, black: string}}}
 * @category Styles
 */
export const theme = {
  light,
  common,
  colors,
};
