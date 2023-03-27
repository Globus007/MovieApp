import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter component', () => {
  it('should render initial value provided in props', () => {
    const initValue = 10;
    render(<Counter count={initValue} />);

    expect(screen.getByText(initValue)).toBeInTheDocument();
  });

  it('should decrement the displayed value by click event on "decrement" button', async () => {
    const initValue = 0;
    render(<Counter count={initValue} />);
    const header = screen.getByText(initValue);

    await userEvent.click(screen.getByText('-'));
    const displayedValue = header.innerHTML;
    const expectedValue = String(initValue - 1);

    expect(displayedValue).toBe(expectedValue);
  });

  it('should increment the displayed value by click event on "decrement" button', async () => {
    const initValue = 0;
    render(<Counter count={initValue} />);
    const header = screen.getByText(initValue);

    await userEvent.click(screen.getByText('+'));
    const displayedValue = header.innerHTML;
    const expectedValue = String(initValue + 1);

    expect(displayedValue).toBe(expectedValue);
  });
});
