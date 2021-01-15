/// <reference types="cypress" />

describe("dado que eu acesso o site", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(5000);
  });

  it("Quando desejo comprar", () => {
    cy.get('[class="src__Wrapper-xr9q25-1 iUovPn"]').click();
    cy.get('[class="src__LinkSeeMoreInformation-sc-60dq3d-1 jDXpQf"]').click();
    cy.wait(2000);
    cy.get('[class="src__BuyButtonText-sc-16np9zs-2 cjRDyu"]').click();
    cy.get(
      '[class="TextUI-sc-1i9za0i-4 gulQE TextUI-sc-12tokcy-0 gYgvXd"]'
    ).click();
    cy.contains("Continuar").click();
    cy.wait(5000);
    cy.get('[class="TextUI-sc-1i9za0i-4 gulQE TextUI-sc-12tokcy-0 gYgvXd"]');
    cy.get('[class="entrar-inputLabel"]').type("joaoemaria@gmail.com");
    cy.wait(5000);
    cy.get(
      '[class="form-control entrar-input --hasAddon form-control"]'
    ).click();
    cy.get(".container-buttons > .button").type("123456789");
    cy.get('[class="btn btn-primary submit-button  entrar-button"]').click({
      force: true,
    });
  });
});
