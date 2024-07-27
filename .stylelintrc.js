module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-prettier/recommended",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-order"],
  rules: { "order/properties-alphabetical-order": true },
};
