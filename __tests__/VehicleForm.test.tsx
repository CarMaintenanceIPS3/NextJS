import { render, fireEvent } from '@testing-library/react';
import VehicleForm from '../components/VehicleForm';
import '@testing-library/jest-dom';


describe('VehicleForm', () => {
    it('renders the form', () => {
        const { getByLabelText } = render(<VehicleForm />);
        const brandInput = getByLabelText('Brand');
        const modelInput = getByLabelText('Model');
        const kilometersInput = getByLabelText('Kilometers');
        const yearInput = getByLabelText('Year');
        expect(brandInput).toBeInTheDocument();
        expect(modelInput).toBeInTheDocument();
        expect(kilometersInput).toBeInTheDocument();
        expect(yearInput).toBeInTheDocument();
    });

    it('updates the input value when typed into', () => {
        const { getByLabelText } = render(<VehicleForm />);
        const brandInput = getByLabelText('Brand') as HTMLInputElement;
        fireEvent.change(brandInput, { target: { value: 'Toyota' } });
        expect(brandInput.value).toBe('Toyota');
    });

    it('calls the form submission handler with the correct data', () => {
        const { getByLabelText, getByTestId } = render(<VehicleForm />);
        const brandInput = getByLabelText('Brand') as HTMLInputElement;
        const modelInput = getByLabelText('Model') as HTMLInputElement;
        const kilometersInput = getByLabelText('Kilometers') as HTMLInputElement;
        const yearInput = getByLabelText('Year') as HTMLInputElement;
        fireEvent.change(brandInput, { target: { value: 'Toyota' } });
        fireEvent.change(modelInput, { target: { value: 'Corolla' } });
        fireEvent.change(kilometersInput, { target: { value: '10000' } });
        fireEvent.change(yearInput, { target: { value: '2020' } });
        const form = getByTestId('vehicle-form');
        fireEvent.submit(form);
        // Here you would check if the form submission handler was called with the correct data.
        // This might require you to mock the function and check if it was called with the correct arguments.
    });

});
