const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const router = Router();
const { findUserByEmail, createUser, checkUserPassword } = require('../dataBase/userDataBase')

router.post(
    '/register',
    [check('email', 'Email isn`t correct').isEmail(),
    check('password', 'Password isn`t correct').isLength({ min: 6 })],
    (req, res) => {
        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect registration data'
                })
            }

            const { email, password } = req.body
            const result = findUserByEmail(email)
            if (result) {
                return res.status(400).json({ message: 'User is already register' })
            }

            createUser(email, password);
            res.status(201).json({ message: 'created' })

        } catch (e) {
            res.status(500).json({ message: 'Smth went wrong...Try again!' })
        }
    });

router.post(
    '/login',
[check('email', 'Enter correct email').normalizeEmail().isEmail(),
check('password', 'Enter correct password').exists()],
(req, res) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message:'Incorrect data for login'
            })
        }

        const {email, password} = req.body;

        if(findUserByEmail(email) && checkUserPassword(password)){
            

        }

    } catch (e) {
        res.status(500).json({ message: 'Smth went wrong...Try again!' })
    }

});

module.exports = router;
