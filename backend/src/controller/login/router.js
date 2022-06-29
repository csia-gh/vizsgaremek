const express = require('express');
const User = require('../../model/user');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/', async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    // 401 Unauthorized
    return res.sendStatus(401);
  }

  const valid = user.verifyPasswordSync(password);
  if (valid) {
    const accessToken = jwt.sign(
      {
        _id: user._id,
        email,
        role: 1,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.TOKEN_EXPIRE,
      }
    );

    res.json({
      success: true,
      accessToken,
      user: { ...user._doc, password: '' },
    });
  } else {
    return res.sendStatus(403);
  }
});

module.exports = router;
