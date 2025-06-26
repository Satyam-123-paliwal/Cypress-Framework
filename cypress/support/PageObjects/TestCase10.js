class Bench {
    constructor() {
        this.bench = "a[href='/vendor/bench']";
        this.matchingpositions = "//div[contains(@class, 'cursor-pointer') and normalize-space(.)='3 Matching positions']";
        this.searchbar = "//input[@placeholder='Search' and @type='text']";
        this.searchResult = "//div[contains(@class, 'cursor-pointer') and contains(@class, 'hover:text-indigo-700') and normalize-space(text())='Java Developer']";
        this.icon = "path[stroke='black']";
    }

    clickBench() {

        cy.get(this.bench, { timeout: 10000 }).should('be.visible').click();

    }

    clickmatchingpositions() {
        cy.xpath(this.matchingpositions, { timeout: 10000 }).should('be.visible').click();
    }

    writesearchbar(keyword) {
        cy.xpath(this.searchbar, { timeout: 10000 }).should('be.visible').clear().type(keyword);
    }

    validateSearchResult(expectedText) {
        cy.xpath(this.searchResult, { timeout: 10000 }).should('have.text', expectedText)
    }

    clickicon() {
        cy.get(this.icon).click();
    }
}

export default Bench;