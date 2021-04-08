module.exports = {
    verbose: true,
    testMatch: [
        '<rootDir>/src/**/*.spec.js',
    ],
    preset: '@vue/cli-plugin-unit-jest',
    transform: {
        '^.+\\.vue$': 'vue-jest'
    }
}
