import { render, screen } from '@testing-library/react';
import { MovieDetails } from './MovieDetails';

describe('MovieDetails component', () => {
  it('should render movie info from props', () => {
    const testMovieInfo = {
      imageUrl: 'test_img_url',
      movieName: 'test movie name',
      releaseYear: 2018,
      relevantGenres: ['Drama', 'Biography'],
      rating: 8.9,
      duration: '2h 34min',
      description: 'test description',
    };

    render(<MovieDetails movieInfo={testMovieInfo} />);
    const movieNameElement = screen.getByText('test movie name');
    const ratingElement = screen.getByText('8.9');
    const releaseYearElement = screen.getByText('2018');
    const durationElement = screen.getByText('2h 34min');
    const genresElement = screen.getByText('Drama, Biography');
    const descriptionElement = screen.getByText('test description');
    const image = screen.getByAltText('test movie name');

    expect(movieNameElement).toBeInTheDocument();
    expect(releaseYearElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
    expect(durationElement).toBeInTheDocument();
    expect(genresElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test_img_url');
  });
});
