// pages/api/callback.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cookie from 'cookie';

export default async function callback(req: NextApiRequest, res: NextApiResponse) {
    const { code } = req.query;

    if (!code) {
        res.status(400).json({ error: 'Missing authorization code' });
        return;
    }

    try {
        const response = await axios.post('https://dev-jmdtw3b5y1usoxa1.eu.auth0.com/oauth/token', {
            grant_type: 'authorization_code',
            client_id: 'upxBUXTPTeTxvCOzgvV9jM9qvBYC63lH',
            client_secret: 'aI4j182T5BZamfUtxRvNDm_F8FgVWN0r1cPTKB0m1YQC2CvVvi8HtSEi4w20a80r',
            code: code,
            redirect_uri: 'http://localhost:3000/api/callback',
            audience: 'https://localhost/carmaintenance',
        });

        const { access_token } = response.data;

        res.setHeader('Set-Cookie', cookie.serialize('token', access_token, {
            httpOnly: false, // Allow client-side scripts to access the cookie
            secure: process.env.NODE_ENV === 'production', // Use the Secure attribute in production
            sameSite: 'lax', // Use 'lax' for local development
            maxAge: 3600,
            path: '/',
        }));
        console.log('Token set in cookie:', access_token);

        res.redirect('/');
    } catch (error) {
        console.error('Error exchanging authorization code for access token:', error);
        res.status(500).json({ error: 'Failed to exchange authorization code for access token' });
    }
}
