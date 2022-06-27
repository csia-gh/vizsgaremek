const express = require('express');
const User = require('../../model/user');
const jwt = require('jsonwebtoken');

const router = express.Router();

// post
router.post('/', async (req, res, next) => {
  // const newUser = new User({
  //   email: 'admin@gmail.com',
  //   lastName: 'Admin',
  //   firstName: 'Test',
  //   password: 'test12345',
  // });

  // try {
  //   await newUser.save();
  // } catch (e) {
  //   res.statusCode = 401;
  //   return res.json({ error: 'Database Error' });
  // }
  // return res.json({ newUser });

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
      'asd123asdasdad123',
      {
        expiresIn: '1h',
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
