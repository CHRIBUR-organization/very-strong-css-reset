/** @type {import('stylelint').Config} */
const config = {
  extends: ['stylelint-config-standard'],
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
  },
};

export default config;
