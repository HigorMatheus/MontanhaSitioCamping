import { render } from '@testing-library/react';
import { Header } from '.';

describe('Header Component', () => {
  it('test', () => {
    const { getByText } = render(<Header />);

    const text = getByText(/Montanha Sitio Camping/i);
    expect(text).toBeInTheDocument();
  });
});
