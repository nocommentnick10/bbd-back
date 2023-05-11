const db = require('../config/db')
const bcrypt = require('bcryptjs')

class SignIn{
    constructor(password){
        this.password = password
    }

    async auth(){
        const sql = `SELECT password FROM admin WHERE password = '${this.password}'`

        const result = await db.query(sql)

        if(result[0][0]){
            return true
        } else {
            return false
        }
    }

}

module.exports = SignIn