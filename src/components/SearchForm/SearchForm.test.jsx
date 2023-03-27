import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchForm } from './SearchForm';
import userEvent from '@testing-library/user-event';

describe('SearchForm component', () => {
  it('should renders an input with the value equal to initial value passed in props', () => {
    const initialQuery = 'initialTestQuery';
    render(<SearchForm initialQuery={initialQuery} />);
    const searchInput = screen.getByPlaceholderText(
      'What do you want to watch?',
    );

    expect(searchInput).toBeInTheDocument();
    expect(searchInput.value).toBe(initialQuery);
  });

  it('should called prop "onChange" with proper value on click', async () => {
    const onChange = jest.fn((x) => x);
    const inputValue = 'testInput';
    render(<SearchForm onSearch={onChange} />);
    const searchInput = screen.getByPlaceholderText(
      'What do you want to watch?',
    );
    const submit = screen.getByRole('button', { name: /search/i });
    await userEvent.type(searchInput, inputValue);
    await userEvent.click(submit);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.results[0].value).toBe(inputValue);
  });

  it('should called prop "onChange" with proper value on enter', async () => {
    const onChange = jest.fn((x) => x);
    const inputValue = 'testInput';
    render(<SearchForm onSearch={onChange} />);
    const searchInput = screen.getByPlaceholderText(
      'What do you want to watch?',
    );

    await userEvent.type(searchInput, `${inputValue}{enter}`);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.results[0].value).toBe(inputValue);
  });
});
