import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function token(req, res) {
    const { accessToken } = await getAccessToken(req, res, {
        /*scopes: [process.env.AUTH0_SCOPE],*/
        audience: "https://localhost/carmaintenance",
    });
    res.send({ accessToken });
});
