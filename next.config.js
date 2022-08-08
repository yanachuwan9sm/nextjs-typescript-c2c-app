/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: (() => {
    let compilerConfig = {
      // styled-componentsの有効化
      styledComponents: true,
    };

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        // 本番環境時には React Testing Library で使用する data-testid属性 を削除する
        reactRemoveProperties: { properties: ['^data-testid$'] },
      };
    }

    return compilerConfig;
  })(),
};
module.exports = nextConfig;
