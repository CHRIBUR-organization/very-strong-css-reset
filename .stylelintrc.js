module.exports = {
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  plugins: ["stylelint-order"],
  rules: { "order/properties-alphabetical-order": true },
};
