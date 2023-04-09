import { render, screen } from '@testing-library/react';
import { MovieTitle } from './MovieTitle';

describe('MovieTitle component', () => {
  it('should render movie info from props', () => {
    const testMovieInfo = {
      imageUrl: 'test_img_url',
      movieName: 'test movie name',
      releaseYear: 2018,
      relevantGenres: ['Drama', 'Biography'],
    };

    render(<MovieTitle movieInfo={testMovieInfo} />);
    const movieNameElement = screen.getByText('test movie name');
    const releaseYearElement = screen.getByText('2018');
    const genresElement = screen.getByText('Drama, Biography');
    const image = screen.getByAltText('test movie name');

    expect(movieNameElement).toBeInTheDocument();
    expect(releaseYearElement).toBeInTheDocument();
    expect(genresElement).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test_img_url');
  });
});
