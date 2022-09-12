const router = require('express').Router();
const Users = require('./users-model');


router.get('/', (req, res, next) => {
    // Users.getAllUsers()
    //     .then(classes => {
    //         res.json(classes);
    //     })
    //     .catch(next);
    res.json("HEY YOU GUYS!!!")
});









module.exports = router;





































