/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import {faker} from '@faker-js/faker'
describe('Workflow', function()
{
    it('Creation of product', function()
    {
      cy.on('uncaught:exception', (e) => {
            return false
          })
          var prodName = faker.company.buzzNoun()
          cy.log(prodName)
          var isAvailableonWebsite = 'Yes'
          var shortDesc = faker.person.fullName()
          console.log(shortDesc)
          var prodId
          cy.clearAllCookies()
      cy.clearAllLocalStorage()
      //visit the url
      cy.visit("https://pivotree-sb01.mdm.stibosystems.com/")
      // Enter the username
      cy.get("input[id='username']").type('aparna.kulkarni')
      // Enter the password
      cy.get('input[type="password"]').type('aparna')
      // Submit the login
      cy.get('input[id="kc-login"]').click()
      cy.url().should('contain','pivotree')
      cy.get('span[title="VivekWebUI"]').click({ force: true })
      //click on initiate to create product
      cy.url().should('contain','Vivek')
    cy.get('[class="gwt-Label status-selector__initiate-link-wrapper"]').click()
    cy.get('[class="gwt-TextBox stibo-NameValue"]').type(prodName)
    cy.get('[class="dropdown stibo-Value validator-text stibo-Value-Text"]').select(isAvailableonWebsite)
    cy.get('[class="gwt-TextArea"]').type(shortDesc)
    cy.wait(2000)
    cy.get('[class="material-icons NodePickerIcon"]').click({force:true})
    cy.wait(2000)
    cy.get('[class="gwt-Label"]').eq(7).contains("Search").click({force:true})
    cy.wait(2000)
    cy.get('[class="gwt-SuggestBox"]').type("PC195683")
    cy.wait(2000)
    cy.get('[class="stibo-GraphicsButton material SearchButton"]').click({force:true})
    cy.wait(2000)
    cy.get('[class="stibo-GraphicsButton"]').eq(0).click()
    cy.get('[class="stibo-GraphicsButton material SaveButton"]').click()
    //click start state
      cy.get('div[title="Start State"]').eq(1).click({ force: true })
      cy.get('[class="menulink"]').last().then((str)=>
      {
          prodId = str.text()
          cy.wrap(prodId).as('productIdentifier');
          cy.log(prodId)
      })
      cy.get('[type="checkbox"]').last().check({force:true})
      cy.get('[title="Submit event"]').click({force:true})
      cy.get('[class="gwt-TextBox FormFieldWidget"]').type("Test message")
      cy.get('[class="stibo-GraphicsButton"]').click()
      cy.get('[class="navbar-logo-small"]').click()
      //click enrich state
      cy.get('[title="Enrich For Website State"]').eq(1).click()
      cy.get('[type="checkbox"]').last().check({force:true})
      cy.get('[title="Submit event"]').click({force:true})
      cy.get('[class="stibo-GraphicsButton"]').click({force:true})
      cy.get('[class="navbar-logo-small"]').click()
     cy.pause()
     //final state
      cy.get('[title="Final Review"]').eq(1).click({ force: true })
      cy.get('[class="menulink"]').last().click({force:true})
      cy.contains("Product Detail").click({force:true})
      cy.get("[class='dropdown stibo-Value validator-text stibo-Value-Text']").select("No")
      cy.pause()
      cy.get("[class='stibo-GraphicsButton material SubmitButton']").eq(1).click()
      //start state
      cy.get('div[title="Start State"]').eq(1).click({ force: true })
      cy.get('@productIdentifier').then((prodid)=>
      {
      cy.contains(prodid).click({force:true})
      })
      cy.get("[class='text']").contains("Submit").click({force:true})
      cy.get("[class='text']").contains("OK").click({force:true})
      //final review
      cy.get('[title="Final Review"]').eq(1).click({ force: true })
      cy.get('@productIdentifier').then((prodid)=>
      {
      cy.contains(prodid).click({force:true})
      })
      cy.get('[id="stibo_tab_References"]').click({force:true})
      cy.contains('Add Reference').click({force:true})
      cy.contains('node_picker').click({force:true})
      cy.get('[class="gwt-TabBarItem"] [class="gwt-Label"').click({force:true})
      cy.get('[class="gwt-SuggestBox"]').type('sample1')
      cy.get('[class="text"]').eq(5).click()
      cy.get('[class="text"]').eq(6).click()
      cy.get('[class="text"]').eq(3).click()
      cy.get('[class="text"]').eq(0).click()
      cy.get('[class="text"]').eq(3).click()
      cy.contains('Success').eq(0).should('contain','Success')
      cy.pause()
    })
})