# node-js-environment-variable-setter
This module can used in Node JS applications to mimic the environment variables used in a different environment

To test this module, run the following commands:
- yarn install
- yarn test

#Usage

##Downloading environment variables file
In the module where the functional tests will be run, you need to firstly download the json file with the environment variable configurations. This file can be found in the Azure project of which environment variables you want to mimic locally.
For example, this is the URL for the environment variables file for the RFE project in AAT:
```
https://div-rfe-aat.scm.service.core-compute-aat.internal/api/settings
```
In order to log in, you'll have to enter your SCM credentials. These can be registered in Azure.
Once you have access to this file, just save it as a json file anywhere in your computer. If you choose to save it in your project, don't forget to add this file to .gitignore so that you don't check this into GitHub (exposing secrets).

##Installing the package in your project
To install this as a dev dependency in your project, just run:
```
yarn add "https://github.com/hmcts/node-js-environment-variable-setter#0.2" -D
```

##Having environment variables changed on the fly for your test
```
const processEnvironmentSetup = require('@hmcts/node-js-environment-variable-setter');

const configurationFile = './remote-config.json'; //This will be the path to the file you saved with the environment variables
processEnvironmentSetup.setUpEnvironmentVariables(configurationFile);
```
From this point onwards, your project will have the same environment variables set in the json file (with the exception of the ignored properties - you can find this list in this module's source code).