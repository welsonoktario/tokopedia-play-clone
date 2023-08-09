export default {
  extends: '',
  singleQuote: true,
  semi: false,
  printWidth: 100,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "^@config/(.*)$",
    "^@models/(.*)$",
    "^@services/(.*)$",
    "^@controllers/(.*)$",
    "^@routes/(.*)$",
    "^@helpers/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
