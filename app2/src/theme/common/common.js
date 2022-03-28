import { typography } from "./typography";
import sizing from "./sizing";
import { box } from "./box";
import { transitions } from "./transitions";

/**
 * Common styles for theme provider
 * @type {{sizing: {quarterPadding: string, halfPadding: string, defaultPadding: string, doublePadding: string, biggerPadding: string}, box: {borderRadius: string}, type: {small: string, default: string, size: string, large: string, extraLarge: string, medium: string, family: string}, transitions: {defaultTransition: string}}}
 * @category Styles
 */
export const common = {
  type: { ...typography },
  sizing: { ...sizing },
  box: { ...box },
  transitions: { ...transitions },
};
