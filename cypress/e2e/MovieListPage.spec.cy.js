describe('MovieListPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  describe('Sorting', () => {
    const sortSelector = 'select.SortControl_select__poZB8';
    const firstFilmTitleSelector =
      'section.MovieListPage_grid__LjaLo > article:first-child > div > h3';

    it('Should sort by title if sorting criteria is title', () => {
      cy.get(sortSelector).select('title');
      cy.get(firstFilmTitleSelector)
        .invoke('text')
        .should('have.string', '¡Three Amigos!');
    });

    it('Should sort by release date if sorting criteria is date', () => {
      cy.get(sortSelector).select('date');
      cy.get(firstFilmTitleSelector)
        .invoke('text')
        .should('have.string', 'Fifty Shades Freed');
    });
  });

  describe('Switching genres', () => {
    const movieInfoSelector = 'section.MovieListPage_grid__LjaLo > article';
    const listGenreSelector = 'ul.GenreSelect_ul__MUfIW';

    it('Should display films with comedy gender, when all gender is active', () => {
      cy.get(listGenreSelector)
        .contains(/comedy/i)
        .click();

      cy.get(movieInfoSelector).each(($el) => {
        cy.wrap($el)
          .get('span')
          .contains(/comedy/i);
      });
    });

    it('Should display films with CRIME gender, when all CRIME is active', () => {
      cy.get(listGenreSelector).contains('crime').click();

      cy.get(movieInfoSelector).each(($el) => {
        cy.wrap($el).get('span').contains(/crime/i);
      });
    });
  });

  describe('Search', () => {
    const movieInfoSelector = 'section.MovieListPage_grid__LjaLo > article';
    const buttonSearchSelector = 'button.SearchForm_button__UXY06';
    const inputSearchSelector = 'input.SearchForm_input__HOxJo';
    const movieFullInfoSelector = 'section.MovieDetails_section__3J5A0';
    const filmName = 'Black Panther';

    it('Should filter films with "sex" in title when searchString is "sex" and pressed search button', () => {
      cy.get(inputSearchSelector).type('sex');
      cy.get(buttonSearchSelector).click();

      cy.get(movieInfoSelector).each(($el) => {
        cy.wrap($el).get('h3').invoke('text').should('to.match', /sex/i);
      });
    });

    it('Should show movieInfo instead of search form if only one movie is found', () => {
      cy.get(inputSearchSelector).type(filmName);
      cy.get(buttonSearchSelector).click();

      cy.get(buttonSearchSelector).should('not.exist');
      cy.get(inputSearchSelector).should('not.exist');

      cy.get(movieFullInfoSelector)
        .should('exist')
        .get('h2')
        .invoke('text')
        .should('have.string', filmName);
    });

    it('Should show search form after exit from movieInfo', () => {
      cy.get(inputSearchSelector).type(filmName);
      cy.get(buttonSearchSelector).click();

      cy.get(buttonSearchSelector).should('not.exist');
      cy.get(inputSearchSelector).should('not.exist');
      cy.get(movieFullInfoSelector).should('exist');

      cy.get('button.MovieListPage_button__7DryF').click();

      cy.get(buttonSearchSelector).should('exist');
      cy.get(inputSearchSelector).should('exist');
      cy.get(movieFullInfoSelector).should('not.exist');
    });
  });
});
