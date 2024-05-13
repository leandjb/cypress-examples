describe('Home de freerangetesters.com', () => {

    beforeEach(() => {
        cy.viewport('macbook-11')
        cy.visit('https://www.freerangetesters.com/')

    })

    it('shoul hav a title', ()=>{
        cy.title().should('include', 'Free Range Testers');
        cy.get('[data-testid="header-container"] > .sc-gHjVMF > .sc-eTNRI > :nth-child(2) > .sc-dJGMql').click();
        cy.get(':nth-child(1) > .sc-cSxRuM > .sc-jMbVJB > .sc-iCKXBC > .sc-iKOmoZ > .sc-dJGMql > .sc-gLLuof').click();


    })

})