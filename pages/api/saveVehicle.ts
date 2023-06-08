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
        const { brand, model, year, kilometers }: VehicleData = req.body;
        console.log({ brand, model, year, kilometers });

        try {
            const apiUrl = 'http://fauna_db_api:4000/Fauna/CreateCar';
            const apiResponse = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Iks1MVBVLWlpQ0ZRQ1k4SVRpZ1B1SSJ9.eyJpc3MiOiJodHRwczovL2Rldi1qbWR0dzNiNXkxdXNveGExLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJ4RTZTamdFNlhpNHNaU0Nqc0tudFZibGpKeDg4NlhYZEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3QvY2FybWFpbnRlbmFuY2UiLCJpYXQiOjE2ODQ0ODk4NTMsImV4cCI6MTY4NDU3NjI1MywiYXpwIjoieEU2U2pnRTZYaTRzWlNDanNLbnRWYmxqSng4ODZYWGQiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJwZXJtaXNzaW9ucyI6W119.eVic85D4jU9i9c1ZZIB-D_ELn9OT5Pn7l2b2KI_GCO7dmy3JVCvkRmlEUOI_ihp3OMcUufvrSu3ds3Bj60JFW6dJcj7Sv6-iJV3bUGMhJZ8AawZzpGHEMT15YF3hgaxkmDTGuQMY7hYtpJBlkw25-33siKyWdafpwZ2QJg1jimqSpWs5UCdd9U1EnaQHm5o0btHC2XvJprblgPRLjmu0JM99axTrSyNZDhttaimscCMr2tcwrz6S8dO2FdnJUHkDDZDtPIYJdzvbyypUkeuSmBHNsTVPy-KE8n20X-fPDKv5wdFEoqa3AaQAtnn_gscOlPF-t8WVDXwr6sZd_gl4ow`,
                },
                body: JSON.stringify({ brand, model, year, kilometers }),
            });
            //}).catch(error => {
            //    console.error('Fetch failed:', error)
            //});

            if (!apiResponse.ok) {
                console.log(apiResponse); // Log the raw response

                if (apiResponse.bodyUsed) {
                    const errorResponse = await apiResponse.json(); // Try to parse the response body
                    console.log('Server response:', errorResponse); // Log the response
                } else {
                    console.log('No response body');
                }

                throw new Error('Error saving vehicle data to the API.');
            }

            res.status(200).json({ success: true, message: 'Vehicle data saved successfully.' });
        } catch (error) {
            console.log('Error:', error); // Log the error
            res.status(500).json({ success: false, message: error });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed.' });
    }
}