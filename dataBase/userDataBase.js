let userDatabase = [

];

module.exports = {
    getAllUser: () => {
        return userDatabase
    },
    createUser: (email, password) => {
        let userInfo = { email: email, password: password }
        userDatabase.push(userInfo)
    },
    findUserByEmail: (email) => {
        for (let i = 0; i < userDatabase.length; i++) {
            if (userDatabase[i].email === email) {
                return {
                    true: true,
                user: userDatabase[i]
                }
            }
        }
    },
    checkUserPassword: (password) => {
        for (let i = 0; i < userDatabase.length; i++) {
            if (userDatabase[i].password === password) {
                return true

            }
        }
    }
}