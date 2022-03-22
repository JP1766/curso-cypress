/// <reference types="cypress"/>

describe('Work with basic elements', () =>{

    before(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    it('Text', () => { 
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar' ).should('contain', 'Cuidado')
        cy.get('.facilAchar' ).should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    
        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
    })

    it('TextFields', () =>{
        cy.get('#formNome').type('Cypress test')
        cy.get('#formNome').should('have.value', 'Cypress test')


        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')                                                                           
            .should('have.value', 'textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6)') 
            .type('input test')

        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}')
            .should('have.value', 'Teste1234')
            
        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectAll}acerto', { delay : 300})
            .should('have.value', 'acerto')
    })

    it('Radio', () =>{
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')  
        
        cy.get('#formSexoMasc')
            .should('not.be.checked')


        cy.get("[name='formSexo']")
            .should('have.length', 2)
    })

    it('Checkbox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')
        
        cy.get("[name='formComidaFavorita']")
            .click({multiple: true})
        
        cy.get('#formComidaPizza')
            .should('not.be.checked')
        
        cy.get('#formComidaVegetariana')
            .should('be.checked')
    })

    it('ComboBox', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')

    })

    it('ComboMulti', () => {
        cy.get('[data-testid=dataEsportes]')
        .select(['natacao', 'Corrida', 'nada'])

        // TODO Validar opçoes do combo multiplo
    })

   

})