const { User, Recipe, MyWeek } = require('../models')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//login
exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
};

// create a user
exports.createUser = async (req, res) => {
    const user = await User.create(req.body);
    await MyWeek.create({ user_id: user.id })
    res.status(201).json(user);
};

// get all users
exports.getAllUsers = async (req, res) => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] },
        include: [
            {
                model: Recipe,
                attributes: ['id', 'title', 'category', 'steps']
            }
        ]
    });
    res.json(users);
};

// get user by id
exports.getUserById = async (req, res) => {
    const user = await User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Recipe,
                attributes: ['id', 'title', 'category', 'steps']
            }
        ]
    });
    if (user == null) {
        return res.status(404).json({ message: 'Cannot find user' });
    }
    res.json(user);
};

// delete a user
exports.deleteUser = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
        await user.destroy();
        res.json({ message: 'Deleted User' });
    } else {
        res.status(404).json({ message: 'Cannot find user' });
    }
};