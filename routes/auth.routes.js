const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const { ACCESS_TOKEN_SECRET } = require('../configs/config')

router.post(
    'https://streaming-service-test-project.herokuapp.com/register',
    [check('email', 'Email isn`t correct').isEmail(),
    check('password', 'Password isn`t correct').isLength({ min: 6 })],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect registration data'
                })
            };

            const { email, password } = req.body
            const userByEmail = await User.findOne({ email });
            if (userByEmail) {
                return res.status(400).json({ message: 'User is already register' });
            };

            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({ email, password: hashedPassword });

            await user.save();

            res.status(201).json({ message: 'created' })

        } catch (e) {
            res.status(500).json({ message: 'Smth went wrong...Try again!' })
        }
    });

router.post(
    'https://streaming-service-test-project.herokuapp.com/login',
    [check('email', 'Enter correct email').normalizeEmail().isEmail(),
    check('password', 'Enter correct password').exists()],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect data for login'
                })
            }

            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ message: 'Incorrect data for login' });
            };

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: 'Incorrect data for login' })
            };

            const token = jwt.sign(
                { userId: user.id },
                ACCESS_TOKEN_SECRET,
                { expiresIn: '1h' }
            )

            res.json({ token, userId: user.id })

        } catch (e) {
            res.status(500).json({ message: 'Smth went wrong...Try again!' })
        }

    });

module.exports = router;
