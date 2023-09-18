/// <reference types= "cypress" />
Cypress.Commands.add("item",(username,password)=>
{
 
  cy.visit("https://www.saucedemo.com/")
 cy.get('[data-test="username"]').type(username)


 cy.get('[data-test="password"]').type(password)
 cy.get('[data-test="login-button"]').click();
});
 Cypress.Commands.add("add_to_cart",(number_of_item)=>
 {
for (let  i= 0; i < number_of_item; i++){
    cy.get('.btn').eq(i).click({multipl:true})
}
 })

 describe('Swag Labs', () => {
 it('add all item to the cart', () => {

 cy.item("standard_user","secret_sauce")
cy.add_to_cart(5)
cy.get('.shopping_cart_link').click()
cy.get('[data-test="checkout"]').click()
cy.get('[data-test="firstName"]').type("ahmad")
cy.get('[data-test="lastName"]').type("ali")
cy.get('[data-test="postalCode"]').type(1234)
cy.get('[data-test="continue"]').click()
cy.get('[data-test="finish"]').click()
cy.get('.complete-header').invoke('text').should('contain',"Thank you for your order!")











//cy.get('.btn').eq(5).click({multipl:true}) 


//cy.get('.shopping_cart_link').invoke('text').should('include',"5")

 })

 })