/** @type {import('postcss-load-config').Config} */
const config = (context) => {
  const basename = context.file.basename;
  return {
    plugins: {
      autoprefixer: basename === 'base-reset.css' ? {} : false,
      cssnano: basename === 'reset.css' ? {} : false,
    },
  };
};

export default config;
