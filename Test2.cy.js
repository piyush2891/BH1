/// <reference types="Cypress" />

describe('Test2',()=>{
    it('verify comments',()=>{
        //to visit the website
        cy.visit("https://www.brighthorizons.com/");
        //to click on the find a center button
        cy.get("nav[class='nav-shared txt-nav-hierarchy nav-top js-nav-shared js-nav-top'] li[class='nav-item displayed-desktop'] a[class='btn-nav btn btn-large btn-hollow color-nileblue global_header_findcenter track_cta_click']").click();
        //assertion to check url includes the expected value
        cy.url().should('include','/child-care-locator');
        //to enter New York text in input box
        cy.get("input[id='addressInput']").type('New York','{enter}');
        //assertion to check the number 
        cy.get(".resultsNumber").should('have.length',20);
        //to click on the first value
        cy.get("div[id='1489'] span[class='centerResult__address']").click();
        //assertion for name validation
        cy.get(".mapTooltip__headline").should('eq','Bright Horizons at TriBeCa');
        //assertion for address validation
        cy.get(".mapTooltip__address").should('eq','129 Hudson StreetNew York, NY 10013');



    })
})