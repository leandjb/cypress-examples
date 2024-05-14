require('cypress-xpath')
describe('Google Search', () => {
    it('Searches for "bicicleta" on Google', () => {
      
      cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
      cy.viewport('macbook-11')
      cy.visit('https://www.duckduckgo.com');
      cy.get('#searchbox_input').type('DJI FPV');
      cy.get('.searchbox_searchButton__F5Bwq').click();
      cy.get('.react-results--main').should('contain', 'fpv').and('be.visible');

    });
  });