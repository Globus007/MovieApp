import { render, screen } from '@testing-library/react';
import { GenreSelect } from './GenreSelect';
import userEvent from '@testing-library/user-event';

describe('Genre component', () => {
  const genders = ['test1', 'test2', 'test3'];
  it('should render all genres passed in props', () => {
    render(<GenreSelect genders={genders} />);
    const liArray = screen.getAllByRole('listitem');

    expect(liArray[0]).toBeInTheDocument();
    expect(liArray[1]).toBeInTheDocument();
    expect(liArray[2]).toBeInTheDocument();
    expect(liArray[0].innerHTML).toBe(genders[0]);
    expect(liArray[1].innerHTML).toBe(genders[1]);
    expect(liArray[2].innerHTML).toBe(genders[2]);
  });

  it('should highlight a selected genre passed in props', () => {
    render(<GenreSelect genders={genders} selected={genders[1]} />);
    const liArray = screen.getAllByRole('listitem');

    expect(liArray[0].className).not.toContain('selected');
    expect(liArray[1].className).toContain('selected');
    expect(liArray[2].className).not.toContain('selected');
  });

  it('should pass correct genre in arguments', async () => {
    const onSelect = jest.fn((x) => x);
    render(<GenreSelect genders={genders} onSelect={onSelect} />);
    const liArray = screen.getAllByRole('listitem');

    await userEvent.click(liArray[2]);

    expect(onSelect).toBeCalledTimes(1);
    expect(onSelect.mock.results[0].value).toBe(genders[2]);
  });
});
