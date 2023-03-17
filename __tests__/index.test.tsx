import { render, screen } from '../test-utils';
import Home from '../pages/index';
import '@testing-library/jest-dom';


describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />);

        const heading = screen.getByRole('heading', {
            name: /Next\.js and Auth0 Example/i,
        });

        expect(heading).toBeInTheDocument();
    });
});

