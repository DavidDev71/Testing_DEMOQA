// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('campo_obligatorio',(name,lastname,email,phone,adress,language,framework,so,win,events,calendar,file) => {

    cy.get("#wsf-1-field-95").should('be.visible').type(name)
    cy.get("#wsf-1-field-96").should('be.visible').type(lastname)
    cy.get("#wsf-1-field-97").should('be.visible').type(email)
    cy.get("#wsf-1-field-98").should('be.visible').type(phone)
    cy.get("#wsf-1-field-99").should('be.visible').type(adress)
    cy.get('[type="checkbox"]').eq(language).check({force:true})
    cy.get('[type="radio"]').eq(framework).check({force:true})
    cy.get("#wsf-1-field-102").select(so)
    cy.get("#wsf-1-field-104").select(win)

    /*eventos si quisiera una fecha especifica desde el calendario
    cy.get('#wsf-1-field-106').should('be.visible').click({force:true})
    cy.get("button.xdsoft_next").eq(0).click({force:true})
    cy.xpath("(//div[contains(.,'7')])[41]").click({force:true})*/

    cy.get('#wsf-1-field-106').type(events).wait(2000)
    //calendario
    cy.xpath("(//div[contains(.,'31')])[18]").should('be.visible').click({force:true})
    
    
    

    cy.get("[type='file']").selectFile("cypress/fixtures/yoo.jpg")

    cy.get("#wsf-1-field-109").should('be.visible').click({force:true})
})


Cypress.Commands.add('comprobarCampo',(campo,campoMensaje,mensaje)=> {
    cy.get(campo).should('be.visible').type("a")
    cy.get("#wsf-1-field-109").should('be.visible').click({force:true})
    cy.get(campoMensaje).should('be.visible').should('contain.text', mensaje)
})