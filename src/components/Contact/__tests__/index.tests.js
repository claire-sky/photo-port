import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
    it('renders', () => {
        render(<ContactForm />);
    });
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('renders h1 tag', () => {
        const { getByTestId } = render(<ContactForm />)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    });
    it('renders submit button', () => {
        const { getByTestId } = render(<ContactForm />)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('submit')).toHaveTextContent('Submit')
    });
});
