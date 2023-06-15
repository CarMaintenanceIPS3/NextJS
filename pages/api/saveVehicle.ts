import type { NextApiRequest, NextApiResponse } from 'next';

type VehicleData = {
    brand: string;
    model: string;
    year: number;
    kilometers: number;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { brand, model, year, kilometers, token }: VehicleData & { token: string } = req.body;
        console.log({ brand, model, year, kilometers });

        try {
            const apiUrl = 'http://fauna_db_api:4000/Fauna/CreateCar';
            const apiResponse = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ brand, model, year, kilometers }),
            });

            if (!apiResponse.ok) {
                console.log(apiResponse);

                if (apiResponse.bodyUsed) {
                    const errorResponse = await apiResponse.json(); 
                    console.log('Server response:', errorResponse); 
                } else {
                    console.log('No response body');
                }

                throw new Error('Error saving vehicle data to the API.');
            }

            res.status(200).json({ success: true, message: 'Vehicle data saved successfully.' });
        } catch (error) {
            console.log('Error:', error);
            res.status(500).json({ success: false, message: error });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed.' });
    }
}