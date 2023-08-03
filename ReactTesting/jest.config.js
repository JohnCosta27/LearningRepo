module.exports = {
	moduleNameMapper: {
		"\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
	 },
	 setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
	 testEnvironment: 'jsdom'
};
