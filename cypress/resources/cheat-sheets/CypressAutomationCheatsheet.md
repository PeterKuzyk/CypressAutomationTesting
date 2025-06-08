# 📘 Cypress Automation Cheatsheet (Beginner-Friendly)

This guide includes essential concepts, best practices, and examples so you can confidently start writing tests.  
Once you're comfortable with this, explore deeper topics through the official Cypress documentation: [docs.cypress.io](https://docs.cypress.io)

---

## 🧩 1. Installing Cypress

```bash

npm init -y
npm install cypress --save-dev
Run Cypress GUI:
```

## Run Cypress GUI:

```bash

npx cypress open
```
## Run Cypress headlessly (CLI):

```bash

npx cypress run
```

## 📁 2. Folder Structure Overview
```bash

cypress/
├── e2e/               # Test files go here
├── fixtures/          # Test data (JSON)
├── support/           # Reusable functions and commands
cypress.config.js      # Cypress config file
```
## ✏️ 3. Basic Test Structure
Cypress tests are written using a familiar describe and it block syntax (similar to Mocha):
```js

describe('Login Test', () => {
  it('should login successfully with valid credentials', () => {
    cy.visit('https://example.com/login');
    cy.get('#username').type('testuser');
    cy.get('#password').type('password123');
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/dashboard');
  });
});

```
## 🎯 4. Common Cypress Commands

These are your everyday tools for interacting with and asserting on your web application:

| Action         | Command               | Example                                |
| :------------- | :-------------------- | :------------------------------------- |
| Visit a page   | `cy.visit(url)`       | `cy.visit('https://example.com')`      |
| Get an element | `cy.get(selector)`    | `cy.get('.btn-login')`                 |
| Click          | `.click()`            | `cy.get('button').click()`             |
| Type           | `.type(text)`         | `cy.get('input').type('Hello')`        |
| Assert URL     | `cy.url().should()`   | `cy.url().should('include', '/dashboard')` |
| Custom Command | `Cypress.Commands.add(...)` | See section 7                          |

## 🛠️ 5. Assertions
```js

cy.get('h1').should('contain.text', 'Welcome');
cy.get('.error').should('not.exist');
cy.url().should('include', '/home');
```

## ⏱️ 6. Waiting & Timing
Cypress automatically waits for elements to appear.
Avoid cy.wait() unless absolutely necessary.

✅ Better:

```js

cy.get('.loader', { timeout: 10000 }).should('not.exist');

```
#### ⚠️ Use sparingly: 

```js

cy.wait(3000); // Waits for 3 seconds
```

## 🧪 7. Reusable Commands
Create in cypress/support/commands.js:


```js

Cypress.Commands.add('login', (username, password) => {
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('button[type=submit]').click();
});
```

Use in test:

```js

cy.visit('/login');
cy.login('testuser', 'password123');
```

## 🔄 8. Hooks: Before/After
```js

describe('Dashboard Tests', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.login('user', 'pass');
  });

  it('loads dashboard', () => {
    cy.url().should('include', '/dashboard');
  });
});
```

## 🧹 9. Best Practices
#### ✅ Do:

Use data-* attributes for selectors (e.g., [data-cy=login-button])

Write small, independent tests

Use custom commands for repeated actions

#### 🚫 Avoid:

Using random CSS classes (they may change)

Using cy.wait() for timing fixes

Writing overly long test cases

### 🧰 10. Useful Cypress Features
#### Cypress provides powerful features to make your testing efficient:

**Test Runner:** The interactive browser UI that lets you watch your tests run in real-time.
**Screenshots & Videos:** Automatically captured on test failures, invaluable for debugging. You can also manually take them.
**Time Travel Debugging:** A unique feature allowing you to step through command execution, inspect the DOM at each step, and understand exactly what happened.
**Cypress Dashboard:** An optional cloud service to record and visualize test runs, especially useful for CI/CD.

## 📚 Resources
Cypress Docs: https://docs.cypress.io

Best Practices: https://docs.cypress.io/guides/references/best-practices
