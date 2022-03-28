import { base } from "./base";

/**
 * Sizing styles for theme provider
 * @type {{quarterPadding: string, halfPadding: string, defaultPadding: string, doublePadding: string, biggerPadding: string}}
 * @category Styles
 */
const sizing = {
  defaultPadding: `${base.defaultPadding}px`,
  halfPadding: `${base.defaultPadding * 0.5}px`,
  quarterPadding: `${base.defaultPadding * 0.25}px`,
  biggerPadding: `${base.defaultPadding * 1.5}px`,
  doublePadding: `${base.defaultPadding * 2}px`,
};

export default sizing;
