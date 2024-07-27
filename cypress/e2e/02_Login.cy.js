///<reference types ="Cypress" />

describe('Login',()=>{

    it('Login_user',()=>{

        cy.visit('https://www.automationexercise.com/')

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="login-email"]').type('ramkumar2@mailinator.com');
        cy.get('[data-qa="login-password"]').type('1234567890');
        cy.get('[data-qa="login-button"]').click();

       // cy.get('.shop-menu > .nav > :nth-child(4) > a').click();    // Logout Button
    })


})
