import { buttonLight } from "./common/button";
import { colorsLight } from "./common/colors";

/**
 * Light theme styles
 * @type {{button: {secondary: {inverse: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}, regular: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}}, default: {inverse: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}, regular: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}}, primary: {inverse: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}, regular: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}}}, colors: {secondary: string, primaryLighter1: string, secondaryLighter1: string, body: string, primary: string}}}
 * @category Styles
 */
export const light = {
  button: {
    primary: {
      ...buttonLight.primary,
    },
    secondary: {
      ...buttonLight.secondary,
    },
    default: {
      ...buttonLight.default,
    },
  },
  colors: {
    ...colorsLight,
  },
};
