const express = require('express');
const router = express.Router();
const {
    getUsers,
    addUser,
    getSingleUser,
    updateUser,
    deleteUser
} = require('../controllers/users')

router.route('/')
.get(getUsers)
.post(addUser);

router.route('/:id')
.get(getSingleUser)
.patch(updateUser)
.delete(deleteUser);

module.exports = router;