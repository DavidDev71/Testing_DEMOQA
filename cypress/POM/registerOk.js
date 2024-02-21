export class RegisterPageOk {
    
    personalInfo(name,lastname,email){
        cy.get('#firstName').should('be.visible').type(name)
        cy.get('#lastName').should('be.visible').type(lastname)
        cy.get('#userEmail').should('be.visible').type(email)
    }

    gender(gen){
        cy.get('[type="radio"]').eq(gen).click({force:true})
    }

    personalInfo2(mobile,subject,hobbie){
        cy.get('#userNumber').should('be.visible').type(mobile)

        cy.get('#dateOfBirthInput').click().then(()=> {
            cy.get('[aria-label="Next Month"]').dblclick().wait(1000)
            cy.get('.react-datepicker__year-select').select('1992').wait(1000)
            cy.get('.react-datepicker__day--027').click()
        })

        cy.xpath("//div[contains(@class,'value-container--is-multi css-1hwfws3')]").should('be.visible').type(subject)
        cy.get('[type="checkbox"]').eq(hobbie).click({force:true})
    }

    upload() {
        cy.get('#uploadPicture').selectFile("cypress/downloads/yoo.jpg")
    }

    address(ad,state,city) {
        cy.get('#currentAddress').should('be.visible').type(ad)
        cy.xpath("//div[@class=' css-1wa3eu0-placeholder'][contains(.,'Select State')]")
        .should('be.visible').click().type(state)
        cy.xpath("(//div[contains(.,'Select City')])[8]").click().type(city)
    }

    submit(){
        cy.get('#submit').should('be.visible').click()
    }

    submitOk(){
        cy.get('.modal-header').should('be.visible').and('contain.text',"Thanks for submitting the form")
    }

    errorSubmit(element,rgb) {
            cy.get(element).invoke('css','border-color').should('eq',rgb)
    }
}