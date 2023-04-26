import type { NextApiRequest, NextApiResponse } from 'next';

type VehicleData = {
    brand: string;
    model: string;
    vin: string;
    year: number;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { brand, model, vin, year }: VehicleData = req.body;

        try {
            // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your API.
            const apiUrl = 'YOUR_API_ENDPOINT';
            const apiResponse = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Include any other headers required by your API.
                },
                body: JSON.stringify({ brand, model, vin, year }),
            });

            if (!apiResponse.ok) {
                throw new Error('Error saving vehicle data to the API.');
            }

            res.status(200).json({ success: true, message: 'Vehicle data saved successfully.' });
        } catch (error) {
            res.status(500).json({ success: false, message: error });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed.' });
    }
}