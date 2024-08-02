///<reference types ="Cypress" />

describe('Login',()=>{

    it('Login_user',()=>{

        cy.visit('https://www.automationexercise.com/')

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="login-email"]').type('rm@mailinator.com');
        cy.get('[data-qa="login-password"]').type('1234567890');
        cy.get('[data-qa="login-button"]').click();

        cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge > .fa').click();
        cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click();
        cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get('#quantity').clear().type('2');
        cy.get(':nth-child(5) > .btn').click();
        cy.get('u').click();
        cy.get('.col-sm-6 > .btn').click();
        cy.get('.form-control').type('Nice Product')
        cy.get(':nth-child(7) > .btn').click();
        cy.get('[data-qa="name-on-card"]').type('Shantanu Sharma');
        cy.get('[data-qa="card-number"]').type('411111111111');
        cy.get('[data-qa="cvc"]').type('321');
        cy.get('[data-qa="expiry-month"]').type('10');
        cy.get('[data-qa="expiry-year"]').type(2025);
        cy.get('[data-qa="pay-button"]').click();

        cy.get('.col-sm-9 > .btn-default').click();
        cy.get('[data-qa="continue-button"]').click();
        cy.wait(5000);
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    })


})
