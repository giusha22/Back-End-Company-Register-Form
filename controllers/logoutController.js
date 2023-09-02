const User = require('../model/User');

const logoutController = async (req, res) => {
    //on client, also delete accessToken
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // no Content
    const refreshToken = cookies.jwt;
    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) {
        res.clearCookie('jwt', {httpOnly: true });
        return res.sendStatus(204);
    }
    // Delete refreshToken in DB
    foundUser.refreshToken = '';
    const reslut = await foundUser.save();
    console.log(reslut);

    res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true });
    return res.sendStatus(204);

}

module.exports = { logoutController }