class DuckDuckGoHomePage {

    searchBtn(){
        return cy.get('.searchbox_searchButton__F5Bwq')
    }

    searchBox(){
        return cy.get('#searchbox_input')
    }
}

export default DuckDuckGoHomePage