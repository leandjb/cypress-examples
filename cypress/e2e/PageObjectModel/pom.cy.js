import DuckDuckGoHomePage from "../../pages/DuckDuckGoHomePage";

const home = new DuckDuckGoHomePage

describe('Ejemplo de POM con cypress', () => {

    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.visit('https://duckduckgo.com');
        cy.viewport('macbook-11')
    });

    it('Prueba con POM', () => {
        cy.title().should('include', "DuckDuckGo — Privacy, simplified.")

        home.searchBox().type('DJI')
        home.searchBtn().click()

        cy.get(':nth-child(3) > [data-testid="result"]').should('include.text', 'DJI')
        cy.title().should('include', 'DJI at DuckDuckGo')

    })
})