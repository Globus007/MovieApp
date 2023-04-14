import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MovieForm } from './MovieForm';

describe('MovieForm component', () => {
  const movieInfo = {
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/ru/4/46/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%91%D0%BE%D0%B3%D0%B5%D0%BC%D0%BD%D0%B0%D1%8F_%D1%80%D0%B0%D0%BF%D1%81%D0%BE%D0%B4%D0%B8%D1%8F%C2%BB.jpg',
    movieName: 'bohemian rhapsody',
    releaseYear: '2018-07-22',
    genre: 'Biography',
    rating: 8.9,
    duration: '2h 34min',
    description:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
  };

  it('should render fields from props', () => {
    render(<MovieForm movieInfo={movieInfo} />);

    const titleElement = screen.getByDisplayValue(movieInfo.movieName);
    const imageUrlElement = screen.getByDisplayValue(movieInfo.imageUrl);
    const releaseYearElement = screen.getByDisplayValue(movieInfo.releaseYear);
    const genreElement = screen.getByDisplayValue(movieInfo.genre);
    const ratingElement = screen.getByDisplayValue(movieInfo.rating);
    const durationElement = screen.getByDisplayValue(movieInfo.duration);
    const descriptionElement = screen.getByDisplayValue(movieInfo.description);

    expect(titleElement).toBeInTheDocument();
    expect(imageUrlElement).toBeInTheDocument();
    expect(releaseYearElement).toBeInTheDocument();
    expect(genreElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
    expect(durationElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('should pass all form values when submit', async () => {
    const onSubmitMock = jest.fn();

    render(<MovieForm movieInfo={movieInfo} onSubmit={onSubmitMock} />);
    const submitBtn = screen.getByRole('button', { name: /submit/i });

    await userEvent.click(submitBtn);

    expect(onSubmitMock).toBeCalledWith({}); //todo fix
  });
});
