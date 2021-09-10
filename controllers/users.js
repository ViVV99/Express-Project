const data = require("../data");

/**
 * 
 * @param {*} req requisition parameter from express
 * @param {*} res response parameter from express
 * @description get all users 
 */
const getUsers = (req, res) => {
    res.status(200).json({sucess: true, data: data});
}

/**
 * 
 * @param {*} req requisition parameter from express
 * @param {*} res response parameter from express
 * @description add a user from the incoming json 
 */
const addUser = (req, res) => {
    console.log(req.body);
    const { name } = req.body;

    if(!name) {
        return res.
        status(400).
        json({sucess: false, msg: 'Please add the credentials'});
    }
    console.log(data[0]);
    const arraySize = data.length -1;
    const lastId = data[arraySize] ? Number(data[arraySize].id) : 0;
    const newUser = {
        id: lastId + 1,
        name: name
    };
    data.push(newUser);
    data.sort((item1, item2) => Number(item1.id) > Number(item2.id));

    res.status(200).json({sucess: true, data: newUser});
}

/**
 * 
 * @param {*} req requisition parameter from express
 * @param {*} res response parameter from express
 * @description gets the user from a specified id
 */
const getSingleUser = (req, res) => {
    const { id } = req.params;

    const user = data.find((item) => item.id === Number(id));
    if(!user) {
        return res
        .status(401)
        .json(
            {sucess: false, msg: 'User not found'}
        );
    }

    res.status(200).json({sucess: true, data: user});
}

/**
 * 
 * @param {*} req requisition parameter from express
 * @param {*} res response parameter from express
 * @description updates a user from a specified id
 */
const updateUser = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const user = data.find((item) => item.id === Number(id));

    if(!user) {
        return res
        .status(401)
        .json(
            {sucess: false, msg: 'User not found'}
        );
    }


    const newUser = data.map((item) => {
        if(item.id === Number(id))
            item.name = name;
        return item;
    })

    res.status(200).json({sucess: true, data: newUser});
}


/**
 * 
 * @param {*} req requisition parameter from express
 * @param {*} res response parameter from express
 * @description deletes a user from a specified id
 */
const deleteUser = (req, res) => {
    const { id } = req.params;

    const user = data.find((item) => item.id === Number(id));

    if(!user) {
        return res
        .status(401)
        .json(
            {sucess: false, msg: 'User not found'}
        );
    }
    // data.map((item) => {
    //     if(item.id === Number(id)) {
    //         item.id = undefined;
    //         item.name = undefined;
    //         return true;
    //     }
    // });

    
    const userIndex = data.findIndex(item => item.id === Number(id));

    //remove user
    data.splice(userIndex, userIndex + 1);

    res.status(200).json({sucess: true, data: user});
    data.sort((item1, item2) => Number(item1.id) > Number(item2.id));
}

module.exports = {
    getUsers,
    addUser,
    getSingleUser,
    updateUser,
    deleteUser
}