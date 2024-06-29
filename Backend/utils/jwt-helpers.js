import jwt from 'jsonwebtoken';

function jwtTokens({ id, username, email }) {
    const user = { id, username, email };
    const accessToken = jwt.sign(user, process.env.Access_Token_Secret, { expiresIn: '5m' });
    const refreshToken = jwt.sign(user, process.env.Refresh_Token_Secret, { expiresIn: '20m' });
    return { accessToken, refreshToken };
}

export { jwtTokens };
