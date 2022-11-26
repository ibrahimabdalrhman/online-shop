const User = require('../models/usersModel');
const catchAsync = require('../utils/catchAsync');

const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach((el) => {
        if (allowedFields.includes(el)) {
        newObj[el] = obj[el];
        }
    });
    return newObj;
};


exports.getUsers = catchAsync(async (req, res) => {
    const users = await User.find();
    res.json({
        status: 'success',
        result: users.length,
        data: {
            users
        }
    })
});


exports.getUserById = catchAsync(async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json({
        status: "success",
        data: {
        user,
        },
    });
});

exports.createUser = catchAsync(async (req, res) => {
    const user = await User.create(req.body);
    res.json({
        status: "success",
        data: {
        user,
        },
    });
});


exports.updateUser = catchAsync(async (req, res) => {
    const filterBody = filterObj(req.body, 'name', 'email');
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators:true
    });
    res.json({
        status: "success",
        data: {
        user,
        },
    });
});

exports.deleteUser = catchAsync(async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, { active: false });

    res.json({
        status: "success",
        data: null
    });
});


