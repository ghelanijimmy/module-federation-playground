import { colors, colorsLight } from "./colors";

/**
 * Button styles for light theme
 * @type {{secondary: {inverse: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}, regular: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}}, default: {inverse: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}, regular: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}}, primary: {inverse: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}, regular: {borderColor: string, bgColor: string, color: string, hoverBorderColor: string, hoverColor: string, hoverBGColor: string}}}}
 * @category Styles
 */
export const buttonLight = {
  primary: {
    regular: {
      bgColor: colorsLight.primary,
      color: colors.white,
      hoverBGColor: colorsLight.primaryLighter1,
      hoverColor: colors.white,
      borderColor: colorsLight.primary,
      hoverBorderColor: colorsLight.primaryLighter1,
    },
    inverse: {
      bgColor: "transparent",
      color: colorsLight.primary,
      hoverBGColor: colorsLight.primary,
      hoverColor: colors.white,
      borderColor: colorsLight.primary,
      hoverBorderColor: colorsLight.primary,
    },
  },
  secondary: {
    regular: {
      bgColor: colorsLight.secondary,
      color: colors.white,
      hoverBGColor: colorsLight.secondaryLighter1,
      hoverColor: colors.white,
      borderColor: colorsLight.secondary,
      hoverBorderColor: colorsLight.secondaryLighter1,
    },
    inverse: {
      bgColor: "transparent",
      color: colorsLight.secondary,
      hoverBGColor: colorsLight.secondary,
      hoverColor: colors.white,
      borderColor: colorsLight.secondary,
      hoverBorderColor: colorsLight.secondary,
    },
  },
  default: {
    regular: {
      bgColor: colorsLight.body,
      color: colors.white,
      hoverBGColor: colorsLight.bodyDark,
      hoverColor: colors.white,
      borderColor: colorsLight.body,
      hoverBorderColor: colorsLight.bodyDark,
    },
    inverse: {
      bgColor: "transparent",
      color: colorsLight.body,
      hoverBGColor: colorsLight.body,
      hoverColor: colors.white,
      borderColor: colorsLight.body,
      hoverBorderColor: colorsLight.body,
    },
  },
};
