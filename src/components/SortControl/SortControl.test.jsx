import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SortControl } from './SortControl';

describe('SortControl component', () => {
  it('should show current selection from props', () => {
    render(<SortControl currentSelection="date" />);
    const dateOptionElement = screen.getByDisplayValue('release date');

    expect(dateOptionElement).toBeInTheDocument();
  });

  it('should show call onChange with input value', async () => {
    const mockedOnChange = jest.fn((x) => x);
    render(<SortControl onChange={mockedOnChange} />);
    const selectElement = screen.getByLabelText('sort by');

    fireEvent.change(selectElement, { target: { value: 'date' } });

    await waitFor(() => {
      expect(mockedOnChange).toBeCalledWith('date');
    });
  });
});
