import { render, screen } from '../test-utils';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import  mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

describe('Home', () => {
    beforeEach(() => {
        mockRouter.setCurrentUrl('/');
    });

    it('renders a heading', () => {
        render(<Home />);

        const heading = screen.getByRole('heading', {
            name: /Discover AutoCare+/i,
        });

        expect(heading).toBeInTheDocument();
    });
});
