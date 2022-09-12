const db = require('../../data/db-config')

const getAllUsers = () => {
    return db('users');
}

const getUser = userId => {
    return db('users').where(userId).first();
}

const addUser = async user => {
    const [u] = await db('users')
        .insert(user);
    return u;
}

module.exports = {
    getAllUsers,
    getUser,
    addUser,
}











































