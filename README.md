# mocha-ts
simple template for testing project with Mocha+TS

Requirements:
 in order to run this project, NodeJS (version 18+) must be installed

Running the project:
  - checkout this repo and run ```npm i``` to install dependencies
  - create ```.env``` file using ```env.example``` as a template
  - to run tests use command ```npm tests```

Integration with TestomatIO: 
  - create a Moha+TS project in TestomatIO App
  - save your TestomatIO API token in ```.env``` file
  - in project's folder run command ```TESTOMATIO=<your api key> npx check-tests@latest mocha "**/*{.,_}{test,spec}.ts" --typescript``` to import tests from source code to the TestomatIO project
  