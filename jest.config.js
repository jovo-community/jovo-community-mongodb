module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['./test'],
    verbose: true,
    collectCoverage: false,
    collectCoverageFrom: ['./src/**/*.ts'],
    coverageThreshold: {
        global: {
            lines: 90
        }
    }
};