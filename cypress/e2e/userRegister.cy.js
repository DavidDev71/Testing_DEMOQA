/// <reference types='cypress' />

//importo el POM
import { RegisterPageOk } from '../POM/registerOk';

//creo un objeto para acceder a la clase
const register = new RegisterPageOk();

//importo el json con la info
import registerOk from "../fixtures/registerOk.json"

Cypress.on('uncaught:exception' , (err, runnable) => {
  return false;
});

require('cypress-xpath');
import 'cypress-file-upload';


describe('DEMOQA FORM' , () => {

beforeEach(() => {
  cy.visit('https://demoqa.com/automation-practice-form')
  cy.title().should('eq',"DEMOQA").wait(1000)
})

  it('user register succesfull', () => {
    //register es el objeto pom y registerOk la BD json
    register.personalInfo(registerOk.name,registerOk.lastname,registerOk.email)
    register.gender(registerOk.gender)
    register.personalInfo2(registerOk.mobile,registerOk.subject,registerOk.hobbie)
    register.upload()
    register.address(registerOk.ad,registerOk.state,registerOk.city)
    register.submit()
    register.submitOk()
  })

  it.only('user register error name and last, blank fields', () => {
    register.submit()
    register.errorSubmit('#firstName','rgb(220, 53, 69)')
    register.errorSubmit('#lastName','rgb(220, 53, 69)')
  })

  it.only('user register error phone, blank field', () => {
    register.submit()
    register.errorSubmit('#userNumber','rgb(220, 53, 69)')
  })
});


