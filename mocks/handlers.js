import { rest } from 'msw';

export const handlers = [
    rest.post('/api/saveVehicle', (req, res, ctx) => {
        const { brand, model, year, kilometers } = req.body;

        if (!brand || !model || !year || !kilometers) {
            return res(
                ctx.status(500),
                ctx.json({ success: false, message: 'Invalid data' })
            );
        }

        return res(
            ctx.status(200),
            ctx.json({ success: true, message: 'Vehicle data saved successfully.' })
        );
    }),
    // Add more handlers for other API routes as needed
];