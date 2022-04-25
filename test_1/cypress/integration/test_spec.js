/// <reference types="cypress" />
describe('Visit https://www.clearscore.com/za', {}, () => {
    it('Should visit ClearScore site', () =>{
        cy.visit('https://www.clearscore.com/za');

        // check for "We use cookies"
        // for negative scen type incorrect word, should fail
        cy.contains("We use cookies");

        // check for the "No problem" button
        cy.contains("No problem").click();

        // check for "We use cookies" again, it should fail
        cy.contains("We use cookies");
    })
})