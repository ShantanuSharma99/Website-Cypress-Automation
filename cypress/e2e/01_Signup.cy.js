///<reference types ="Cypress" />
describe('CSSLOCATOR', () => {
  it('CSS Locators by elements', () => {
    cy.wait(1000);
    cy.visit('https://www.automationexercise.com/')
    cy.wait(3000);
    cy.get('.shop-menu > .nav > :nth-child(4)').click();
    cy.get('[data-qa="signup-name"]').type("Shantanu Sharma");
    cy.get('[data-qa="signup-email"]').type('rm@mailinator.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').click();
    cy.get('[data-qa="password"]').type('1234567890');
    cy.get('[data-qa="days"]').select('20');
    cy.get('[data-qa="months"]').select('May');
    cy.get('[data-qa="years"]').select('1999');
    cy.get('#newsletter').click();
    cy.get('#optin').click();
    cy.get('[data-qa="first_name"]').type('Shantanu');
    cy.get('[data-qa="last_name"]').type('Sharma');
    cy.get('[data-qa="company"]').type('Qualwebs');
    cy.get('[data-qa="address"]').type('203 , Shubh Mangal 9903 Space');
    cy.get('[data-qa="address2"]').type('Rajuv Gandhi , Indore , M.P');
    cy.get('[data-qa="country"]').select('India');
    
    cy.get('[data-qa="state"]').type('Madhya Pradesh ');
    cy.get('[data-qa="city"]').type('Indore');
    cy.get('[data-qa="zipcode"]').type('452001');
    cy.get('[data-qa="mobile_number"]').type('9134567843');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    })
})


//Create Account is completed