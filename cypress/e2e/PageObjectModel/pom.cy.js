import DuckDuckGoHomePage from "../../pages/DuckDuckGoHomePage";

const home = new DuckDuckGoHomePage

//npx cypress run --spec "cypress\e2e\PageObjectModel\pom.cy.js"

describe('Ejemplo de POM con cypress', () => {

    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.visit('https://duckduckgo.com');
        cy.viewport('macbook-11')
    });

    it('Prueba con POM', () => {
        cy.title().should('include', "DuckDuckGo — Privacy, simplified.")
        
        home.searchBox().should('exist')
        home.searchBox().type('DJI')
        home.searchBtn().click()

        cy.get(':nth-child(3) > [data-testid="result"]').should('include.text', 'DJI')
        cy.title().should('include', 'DJI at DuckDuckGo')

    })
})