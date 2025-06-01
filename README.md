# **This Repo was created for QA Team Training with Cypress Test Automation using JS**

### Setup Instructions for the Cypress Project
1. **Prerequisites**:
    - Install [Node.js](https://nodejs.org/) if not already installed. Make sure to install a version compatible with your project dependencies (check the `package.json` file for compatibility).
    - Ensure **npm** (Node Package Manager) is installed. It comes with Node.js.

2. **Clone the Repository**:
    - Clone the project repository using the following command:
``` bash
     git clone <repository-url>
```
- Replace `<repository-url>` with the actual repository URL.
    1. **Navigate to the Project Directory**:
        - Change to the project's root directory:
``` bash
     cd <project-directory>
```

3. **Creating and Configuring `package.json`**

 - If the repository does not have a `package.json` file, create a new one by running:
``` bash
   npm init -y
```
This generates a `package.json` file with default values.


4. **Install Dependencies**:
    - Run the following command to install all necessary project dependencies listed in `package.json`:
``` bash
     npm install
```

5. **Open the Project in an IDE**:
    - Open the project in your preferred IDE (e.g., WebStorm) to start working with Cypress or customizing the tests.


6. **Install Cypress as a development dependency:**
``` bash
   npm install cypress --save-dev
```


7. **Run Cypress**:
    - Execute the following command to open the Cypress Test Runner:
``` bash
     npx cypress open 
     or ./node_modules/.bin/cypress open    

```
- Use the Test Runner to execute and debug the tests interactively.
- Alternatively, if you want to run tests in headless mode, use:
``` bash
     npx cypress run
```
8. **Verify Setup**:
    - Ensure that all dependencies are installed correctly, and the Cypress Test Runner opens without any issues.

9. **Additional Notes** (Optional):
    - Add or modify dependencies by editing the `package.json` file and running `npm install`.
    - For any specific testing framework or library integration, review the `README.md` or accompanying project documentation.

10 **Mochawesome Report Examole**:
- To generate report run command
- Reports located reports folder
``` bash
   npm run reporter
```
http://localhost:63342/CypressAutomationTesting/cypress/reports/html/index.html?_ijt=a3qtedd13cg47pm769o63dhutf&_ij_reload=RELOAD_ON_SAVE


11 **Cucumber HTML Reporter**:
- Report Example Using Multiple Cucumber HTML Reporter 
- https://shorturl.at/IFXzM
