/// <reference types="cypress"/>

describe('Work with sync elements', () =>{

    before(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()
    })

        it('Wait', () => {
            cy.get('#novoCampo').should('not.exist')
            cy.get('#buttonDelay').click()
            cy.get('#novoCampo').should('not.exist')
            cy.get('#novoCampo').should('exist')
            cy.get('#novoCampo').type('funciona')
        })
        it('Retrys', () => {
            cy.get('#novoCampo')
                .should('not.exist')
                cy.get('#buttonDelay').click()
                .type('funciona')
                .should('exist')
            
        })

        it.only('Find', () => {
            cy.get('#buttonListDOM').click()
            cy.get('#lista li')
                .find('span')
                .should('contain', 'Item 1')
            cy.get('#lista li span')
                .should('contain', 'Item 2')

          
        })
}) 