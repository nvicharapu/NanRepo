export default {
  loader: ['ts-node/esm'],
  import: ['tests/steps/**/*.ts'],
  paths: ['tests/features/**/*.feature']
};