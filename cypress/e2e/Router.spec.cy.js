describe('Routing', () => {
  it('Should display search query in url when searching', () => {
    cy.visit('http://localhost:3000');

    const buttonSearchSelector = 'button.SearchForm_button__UXY06';
    const inputSearchSelector = 'input.SearchForm_input__HOxJo';
    const searchQueue = 'star';

    cy.get(inputSearchSelector).type(searchQueue);
    cy.get(buttonSearchSelector).click();

    cy.url().should('include', `query=${searchQueue}`);
  });

  it('Should display sortingOrder in url when change sorting', () => {
    cy.visit('http://localhost:3000');
    const sortSelector = 'select.SortControl_select__poZB8';
    const sortingCriteria = 'title';

    cy.get(sortSelector).select(sortingCriteria);
    cy.url().should('include', `sortBy=${sortingCriteria}`);
  });

  it('Should display genre in url when change genre', () => {
    cy.visit('http://localhost:3000');
    const listGenreSelector = 'ul.GenreSelect_ul__MUfIW';
    const genre = 'comedy';

    cy.get(listGenreSelector).contains(new RegExp(genre, 'i')).click();

    cy.url().should('include', `genre=${genre}`);
  });

  it('Should show movies according url params', () => {
    cy.visit('http://localhost:3000/?genre=all&sortBy=title&query=star');
    const movieInfoSelector = 'section.MovieListPage_grid__LjaLo > article';
    const firstFilmTitleSelector =
      'section.MovieListPage_grid__LjaLo > article:first-child > div > h3';

    cy.get(movieInfoSelector).each(($el) => {
      cy.wrap($el).get('h3').invoke('text').should('to.match', /star/i);
    });

    cy.get(firstFilmTitleSelector)
      .invoke('text')
      .should('have.string', 'Barbie: The Princess & The Popstar');
  });

  it('Should show movie details when movieId in url', () => {
    cy.visit('http://localhost:3000/284054');
    const buttonSearchSelector = 'button.SearchForm_button__UXY06';
    const inputSearchSelector = 'input.SearchForm_input__HOxJo';
    const movieFullInfoSelector = 'section.MovieDetails_section__3J5A0';
    const filmName = 'Black Panther';

    cy.get(buttonSearchSelector).should('not.exist');
    cy.get(inputSearchSelector).should('not.exist');

    cy.get(movieFullInfoSelector)
      .should('exist')
      .get('h2')
      .invoke('text')
      .should('have.string', filmName);
  });
});
