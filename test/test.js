var expect = require('chai').expect;
var processEnvironmentSetup = require('../index.js');

const testConfigFile = "./test/resources/testEnvironmentVariablesFile.json";

describe('Environment variables from remote server configuration', function () {
    it('should bring the environment variables set in remote server to current process', function () {
        expect(process.env.TEST_VARIABLE, "TEST_VARIABLE should not have been set").undefined;
        expect(process.env.BASE_URL, "BASE_URL should not have been set").undefined;
        expect(process.env.NODE_CONFIG_DIR, "NODE_CONFIG_DIR should not have been set").undefined;

        processEnvironmentSetup.setUpEnvironmentVariables(testConfigFile);

        expect(process.env.TEST_VARIABLE, "TEST_VARIABLE should have been set").to.equal("testValue");
        expect(process.env.BASE_URL, "BASE_URL should have been set").to.equal("testBaseUrl");
        expect(process.env.NODE_CONFIG_DIR, "NODE_CONFIG_DIR should not have been set. It's marked to be ignored").undefined;
    });

    it('should fail when configuration file does not exist', function () {
        try {
            processEnvironmentSetup.setUpEnvironmentVariables("./non-existent-file.json");
            throw new Error("Should have thrown error");
        } catch (e){
            expect(e.message).to.equal("Could not find configuration file: ./non-existent-file.json");
        }
    });
});