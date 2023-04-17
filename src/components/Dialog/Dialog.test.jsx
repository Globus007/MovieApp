import { render, screen } from '@testing-library/react';
import { Dialog } from './Dialog';
import userEvent from '@testing-library/user-event';

describe('Dialog component', () => {
  it('should render title and children from props', () => {
    const children = <>children</>;
    const title = 'test title';

    render(<Dialog children={children} title={title} />);
    const titleElement = screen.getByText(title);
    const childrenElement = screen.getByText('children');

    expect(titleElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });

  it('should run onClose function when cross-clicked', async () => {
    const onCloseMock = jest.fn();

    render(<Dialog onClose={onCloseMock} />);
    const closeBtn = screen.getByLabelText('close');

    await userEvent.click(closeBtn);

    expect(onCloseMock).toBeCalled();
  });
});
