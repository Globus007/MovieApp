describe('GenreSelect menu', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('"all" section selected on first load', () => {
    cy.get('ul.GenreSelect_ul__MUfIW > li:first-child').should(
      'have.class',
      'GenreSelect_selected__F2qBi',
    );
  });

  it('should change genre on click', () => {
    cy.get('ul.GenreSelect_ul__MUfIW > li:nth-child(2)').click();

    cy.get('ul.GenreSelect_ul__MUfIW > li:first-child').should(
      'not.have.class',
      'GenreSelect_selected__F2qBi',
    );
    cy.get('ul.GenreSelect_ul__MUfIW > li:nth-child(2)').should(
      'have.class',
      'GenreSelect_selected__F2qBi',
    );
  });
});
