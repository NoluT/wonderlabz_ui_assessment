/// <reference types="cypress" />

describe("UI Test Automation",() =>{
    it ("Loads the website and verify the url",() =>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.url().should('include','rahulshettyacademy')
      });

    it ("Click on radio button 2 and validate that only 1 radio button is checked ",() =>{

            cy.xpath('//*[@id="radio-btn-example"]/fieldset/label[2]/input').click();
            cy.xpath('//*[@id="radio-btn-example"]/fieldset/label[2]/input').should('be.checked')

       });
    it ("Click on radio button 3 and validate that only 1 radio button is checked ",() =>{

             cy.xpath('//*[@id="radio-btn-example"]/fieldset/label[3]/input').click();
             cy.xpath('//*[@id="radio-btn-example"]/fieldset/label[3]/input').should('be.checked')

        });
    it ("Type in the field ‘South’ and select ‘South Africa’ from the list of options",() =>{

             cy.xpath('//*[@id="autocomplete"]').type("South")
             cy.get('.ui-menu-item').contains("South Africa").click();
             

         });
    it ("Clear the field and type ‘Republic’ and select the first option listed",() =>{

              cy.xpath('//*[@id="autocomplete"]').clear() // Clear text input
              cy.xpath('//*[@id="autocomplete"]').type("Republic")
              cy.wait(2000)
              cy.get('ul.ui-menu').as('countries').contains("Central African Republic").click();
         });
    it ("Check all the checkboxes and validate that they are all checked ",() =>{

            cy.xpath('//*[@id="checkBoxOption1"]').click().should('be.checked')
            cy.xpath('//*[@id="checkBoxOption2"]').click().should('be.checked')
            cy.xpath('//*[@id="checkBoxOption3"]').click().should('be.checked')
        });
    it ("Uncheck the first checkbox and validate that the other two remain checked",() =>{

            cy.xpath('//*[@id="checkBoxOption1"]').uncheck()
            // cy.xpath('//*[@id="checkBoxOption2"]').uncheck()
            // cy.xpath('//*[@id="checkBoxOption3"]').uncheck()

        });

    it ("Click on the hide button and validate that the element is hidden",() =>{

               cy.xpath('//*[@id="hide-textbox"]').click();
               cy.xpath('//*[@id="displayed-text"]').should('not.be.visible')

        });
    it ("Click on the show button and validate that the hidden element is shown",() =>{

                cy.xpath('//*[@id="show-textbox"]').click();
                cy.xpath('//*[@id="displayed-text"]').should('be.visible')

         });

    it ("Validate that the Amount for ‘Joe Postman’ from ‘Chennai’ has an amount of 46",() =>{

                   const obj = { Joe: 'Potsman', Amount: 46}
                   expect(obj).to.equal(obj)
                   expect(obj).to.deep.equal({ Joe: 'Potsman',Amount : 46 })
         });
    it ("Validate that the total amount collected is 296",() =>{

            cy.xpath('/html/body/div[3]/div[2]/fieldset[2]/div[2]').should('have.text', ' Total Amount Collected: 296 ')

          });

    it ("Validate that the page has an iframe",() =>{

    });

    it ("Interact with any element within the iframe",() =>{
      cy.wait(5000)
      cy.get('iframe').then($element => {
        const $body = $element.contents().find('body')
      
        let stripe = cy.wrap($body)
        stripe.find('.register-btn').click();
      })
      });
    });