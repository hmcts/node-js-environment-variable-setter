const fs = require('fs');

const fieldsToIgnore = ["NODE_CONFIG_DIR"];

const methods = {
    setUpEnvironmentVariables: function (environmentVariableFilePath) {
        if (!fs.existsSync(environmentVariableFilePath)) {
            throw new Error(`Could not find configuration file: ${environmentVariableFilePath}`);
        }
    
        console.log(`Reading environment variables file: ${environmentVariableFilePath}`);
        const environmentVariablesFromRemoteServer = JSON.parse(fs.readFileSync(environmentVariableFilePath));
    
        for (const fieldToIgnore of fieldsToIgnore) {
            console.log(`Ignoring field ${fieldToIgnore}`);
            delete environmentVariablesFromRemoteServer[fieldToIgnore];
        }
    
        Object.assign(process.env, environmentVariablesFromRemoteServer);
    }
}

module.exports = methods;