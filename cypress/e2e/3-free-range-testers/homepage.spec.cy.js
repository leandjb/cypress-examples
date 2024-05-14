describe('Home de freerangetesters.com', () => {

    beforeEach(() => {
        cy.viewport('macbook-11')
        cy.visit('https://www.freerangetesters.com/')

    })

    it('should have a title of freerangetesters', () => {
        cy.title().should('include', 'Free Range Testers');
    })

    it('verify intro message', ()=>{
        cy.get('[data-testid="header-container"] > .sc-gHjVMF > .sc-eTNRI > :nth-child(2) > .sc-dJGMql').click();
        cy.get('[data-react-component="creator_ui/section_adapters/Image"] > .sc-dmyCSP > [data-testid="container"] > .sc-cSxRuM > .sc-jMbVJB > .sc-iCKXBC > .sc-iKOmoZ > .sc-gLLuof').should('exist');
        cy.ge
    })

})