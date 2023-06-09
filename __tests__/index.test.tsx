import { render, screen } from '../test-utils';
import Home from '../pages/index';
import '@testing-library/jest-dom';


describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />);

        const heading = screen.getByRole('heading', {
            name: /Discover AutoCare+/i,
        });

        expect(heading).toBeInTheDocument();
    });
});

