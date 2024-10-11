/// <reference types="Cypress" />

describe('Test1',()=>{
    it('verify search functionality',()=>{
        //to access the given website
        cy.visit("https://www.brighthorizons.com/"); 
        //to click on the search button
        cy.get("body > nav:nth-child(5) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(10) > a:nth-child(1) > span:nth-child(1)").click();
        //assertion to verify if the search field is visible
        cy.get("nav[id='subnav-search-desktop-top'] [placeholder='Type to Search']").should('be.visible');
        //to enter the value in seach box
        cy.get("nav[id='subnav-search-desktop-top'] [placeholder='Type to Search']").type("Employee education in 2018: Strategies to Watch");
        //to click on the search button
        cy.get("nav[id='subnav-search-desktop-top'] button[type='submit']").click();
        //assertion to check actual text with expected text
        cy.get("body > main:nth-child(10) > section:nth-child(3) > div:nth-child(2) > a:nth-child(1) > div:nth-child(1) > h3:nth-child(2)").then((x)=>{
            let val = x.text();
            expect(val).to.equal("Employee Education in 2018: Strategies to Watch");
        })

    })
})