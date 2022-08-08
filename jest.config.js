// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // next.config.jsとテスト環境用の.envファイルが配置されたディレクトリを設定する
  dir: './',
});
const customJestConfig = {
  // next/jestプラグイン は testPath から node_modules/.next フォルダがデフォルトで無視される
  // 下記の設定は明示的に行わなくても良さそう？？
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  // jest.setup.jsを作成する場合のみ定義。
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jsdom',
};

// createJestConfigを定義する事で、本ファイルで定義された設定がNext.jsの設定に反映
module.exports = createJestConfig(customJestConfig);
