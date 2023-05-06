describe('Forms', () => {
  it('Should open addMovie dialog with empty inputs when navigating to /new', () => {
    cy.visit('http://localhost:3000/new');
    const dialogSelector = 'dialog.Dialog_dialog__PnMlh';

    cy.get(dialogSelector)
      .should('exist')
      .get('h2')
      .invoke('text')
      .should('have.string', 'Add movie');

    cy.get('#movieName').should('have.value', '');
    cy.get('#imageUrl').should('have.value', '');
    cy.get('#genre').find(':selected').should('not.exist');
    cy.get('#releaseYear').should('have.value', '');
    cy.get('#rating').should('have.value', '');
    cy.get('#duration').should('have.value', '');
    cy.get('#description').should('have.value', '');
  });

  it('Should open editMovie dialog with movieInfo when navigating to /edit', () => {
    cy.visit('http://localhost:3000/474753/edit');
    const dialogSelector = 'dialog.Dialog_dialog__PnMlh';

    cy.get(dialogSelector)
      .should('exist')
      .get('h2')
      .invoke('text')
      .should('have.string', 'Edit movie');

    cy.get('#movieName').should('have.value', 'The China Hustle');
    cy.get('#imageUrl').should(
      'have.value',
      'https://image.tmdb.org/t/p/w500/3k6a2ZshjaFdN23bUm3kRdxr5Ny.jpg',
    );
    cy.get('#releaseYear').should('have.value', '2018-03-30');
    cy.get('#genre').find(':selected').should('have.value', 'documentary');
    cy.get('#rating').should('have.value', '6.5');
    cy.get('#duration').should('have.value', '82');
    cy.get('#description').should(
      'have.value',
      "An unsettling and eye-opening Wall Street horror story about Chinese companies, the American stock market, and the opportunistic greed behind the biggest heist you've never heard of.",
    );
  });

  it('Should create new film and navigate to it after successful submitting form', () => {
    const movieFullInfoSelector = 'section.MovieDetails_section__3J5A0';
    const filmName = 'Sing 2';
    const filmDetails =
      "In a city of humanoid animals, a hustling theater impresario's attempt to save his theater with a singing competition becomes grander than he anticipates even as its finalists find that their lives will never be the same.";
    cy.visit('http://localhost:3000/new');

    cy.get('#movieName').type(filmName);
    cy.get('#imageUrl').type(
      'https://upload.wikimedia.org/wikipedia/en/b/bb/Sing_%282016_film%29_poster.jpg',
    );
    cy.get('#genre').select('comedy');
    cy.get('#releaseYear').type('2016-09-11');
    cy.get('#rating').type(7.1);
    cy.get('#duration').type('107');
    cy.get('#description').type(filmDetails);

    cy.get('#movie_form button[type=submit]').click({ force: true });

    cy.get(movieFullInfoSelector)
      .should('exist')
      .get('h2')
      .invoke('text')
      .should('have.string', filmName);

    cy.get('.MovieDetails_desc__3wF2C')
      .invoke('text')
      .should('have.string', filmDetails);
  });
});
