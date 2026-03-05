// cypress/e2e/home_smoke.cy.js

describe('Home - Smoke', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('carrega a Home e exibe navegação principal', () => {
    cy.contains('Exemplos de Gírias e termos populares').should('be.visible');
  });

  it('exibe a seção "Gíria do dia"', () => {
    cy.contains('Gíria do dia:').should('be.visible');
  });

  it('navega pelos itens do menu e retorna para a Home', () => {

    const menuItems = [
      'Inserir Gíria',
      'Home',
      'Login',
      'Novas Gírias',
      'As Mais Famosas',
      'Dicionário A-Z',
      'Hashtags',
      'Blog',
      'FAQ',
      'Galera'
    ]

    menuItems.forEach((item) => {

      cy.contains(item)
        .should('be.visible')
        .click()

      cy.wait(500) // pequena pausa para garantir carregamento da página

      cy.visit('/') // retorna para Home

    })

  });

  it('possui links essenciais no rodapé', () => {
    cy.contains('Contato').should('have.attr', 'href');
    cy.contains('Quem Somos').should('have.attr', 'href');
    cy.contains('Privacidade').should('have.attr', 'href');
    cy.contains('Termos de Uso').should('have.attr', 'href');
  });

});