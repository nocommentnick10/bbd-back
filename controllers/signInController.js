const SignIn = require('../models/signInModel')

exports.signIn = async (req, res, next) => {
    const pass = req.body.password

    const signInObj = new SignIn(pass)

    const signInRes = await signInObj.auth()

    // if(signInRes){
    //     req.session.isAuth = true
    //     res.redirect('http://localhost:8082/?#/admin')
    // }
}

// exports.addBid = async (req, res, next) => {
//     const {name, phone} = req.body
//     console.log(name, phone)
//     const bidObj = new BidNew(name, phone)
//     const bidRes = await bidObj.addBid()

//     res.json(bidRes)
// }