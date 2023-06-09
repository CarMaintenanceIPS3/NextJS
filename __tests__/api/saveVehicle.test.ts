import { server } from '../../mocks/server';
import axios, { AxiosError } from 'axios';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('saveVehicle API route', () => {
    it('responds with success when given valid data', async () => {
        const response = await axios.post('/api/saveVehicle', {
            brand: 'Toyota',
            model: 'Corolla',
            year: 2020,
            kilometers: 10000,
        });
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ success: true, message: 'Vehicle data saved successfully.' });
    });

    it('responds with error when given invalid data', async () => {
        try {
            await axios.post('/api/saveVehicle', {
                brand: 'Toyota',
                model: 'Corolla',
                year: 'invalid year',
                kilometers: 'invalid kilometers',
            });
        } catch (error) {
            if (error && (error as AxiosError).response) {
                const axiosError = error as AxiosError;
                if (axiosError.response) {
                    expect(axiosError.response.status).toBe(500);
                    expect(axiosError.response.data).toEqual({ success: false, message: 'Invalid data' });
                }
            }
        }
    });

    // More tests can be added
});