/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';
//import 'cypress-file-upload';
describe('Natalie', () => {
  it('Natali2.0', () => {
    Cypress.on('uncaught:exception', (err, runnable, promise) => {
      if (promise) {
        return false;
      }
    });
      // Use cy.origin to set the expected origin
        // Inside this block, Cypress will ensure the expected origin is set.
        // User enter URL
        cy.visit("https://main.d1akffsvkkwyuz.amplifyapp.com");
        cy.wait(4000);
    // Login Screen valid
    cy.contains("Login");
    // User Name field clickable
    cy.get('[type="text"][placeholder="Username"]').click().type("Username");
    // Password Name field clickable
    cy.get('[type="password"][placeholder="Password"]').click().type("Password");
    // Click on single sign Button
    cy.get('[type="button"][class="btn btn-primary w-100 mt-3"]').contains("Single Sign In").click({force:true});
    cy.wait(2000);
    // Valid with Sign in with your email and password
    cy.contains("Sign in with your email and password");
    // Click on Sign in with your
    cy.origin('https://natalieauth-dev.auth.us-east-1.amazoncognito.com', () => {
        cy.get('[id="signInFormUsername"][name="username"]').eq(1).click().type("gaurav.sharma@pivotree.com");
        cy.wait(2000);
        // Click on password filed
        cy.get('[id="signInFormPassword"][name="password"]').eq(1).click().type("Admin@123");
        cy.wait(2000);
        // click on sign button
        cy.get('[name="signInSubmitButton"][value="Sign in"]').eq(1).click();
        cy.wait(8000);
    })
        // validate natalidashboard
        cy.contains("Natalie");
        cy.wait(2000);
       // Search something in the search bar
       cy.get('[placeholder="Search Project"][id="tableSearch"]').click().type("Natalie");
       cy.wait(2000);
       // View all project list
       cy.get('[placeholder="Search Project"][id="tableSearch"]').click().type('{selectall}{backspace}');
       cy.wait(2000);

       // Click on project
       cy.get('[class="btn btn-light w-100"]').contains("View / Edit").eq(0).click();
       cy.wait(15000)

       cy.visit('https://viz.pivotree.digital/visio.html?load=Trimark_1.4&ID=dc54156e-afd0-4598-891c-81c78a76500d&AU=8c19512c-119e-ff1c-8dba-6e5d6e2aabd1')
       cy.pause()
      //  cy.intercept('GET', 'https://viz.pivotree.digital/visio.html', (req) => {
      //   req.on('before:response', (res) => {
      //     if (res.body && res.body.includes('zapiproxy245a9fc6426e6f5f353cf85da5e576a3a33d50c70.2012630697')) {
      //       res.body = ''; // Modify the response body to remove the error message
      //     }
      //   });
      // }).as('suppressError');
      
      Cypress.on('uncaught:exception', (err) => {
  // Handle any uncaught exceptions here if needed
  console.error('Uncaught Exception:', err.message);
  return false; // Suppress the Cypress error
});

// Use cy.intercept to handle network requests
cy.intercept('GET', 'https://viz.pivotree.digital/visio.html?load=Trimark_1.4&ID=dc54156e-afd0-4598-891c-81c78a76500d&AU=8c19512c-119e-ff1c-8dba-6e5d6e2aabd1')
  .as('visioPageLoad');

  // cy.request({
  //   method: 'GET',
  //   url: 'https://viz.pivotree.digital/',
  //   failOnStatusCode: false, // To prevent the content-type failure from failing the test
  // }).then((response) => {
  //   if (response.status === 200) {
  //     // Handle a successful response
  //     cy.log('Request was successful.');
  //   } else if (response.status === 404) {
  //     // Handle the 404 Not Found error
  //     cy.log('404 Not Found - The requested resource was not found.');
  //   } else {
  //     // Handle other status codes or errors
  //     cy.log(`Received status code: ${response.status}`);
  //   }
  // });
  
cy.visit('https://viz.pivotree.digital', {
  failOnStatusCode: false,
  onBeforeLoad(win) {
    // Define a function to handle exceptions on the page
    win.onerror = (message) => {
      if (message.includes('Things went bad')) {
        // Expected error, continue the test
        console.log('Expected error occurred:', message);
      } else {
        // Handle other unexpected errors as needed
        console.error('Uncaught Exception:', message);
      }
      
    };
  }
});

// Wait for the intercepted request to complete
// cy.wait('@visioPageLoad');

// Continue your test from here


// Use cy.origin to set the expected origin
// cy.origin('https://viz.pivotree.digital', () => {
//   // Inside this block, Cypress will ensure the expected origin is set.

//   // Visit the target page
//   cy.visit('https://viz.pivotree.digital/visio.html?load=Trimark_1.4&ID=dc54156e-afd0-4598-891c-81c78a76500d&AU=8c19512c-119e-ff1c-8dba-6e5d6e2aabd1');
//   // Continue with your test steps on the visited page.
// });

      

      //  cy.wait(10000);
       // Validate VZ dashboard
      //  cy.visit("https://viz.pivotree.digital/visio.html?load=Trimark_1.4&ID=dc54156e-afd0-4598-891c-81c78a76500d&AU=8c19512c-119e-ff1c-8dba-6e5d6e2aabd1")
       
       cy.contains("Sign In");
       cy.contains("Auto Layout");
       cy.pause();
  
  });
});
