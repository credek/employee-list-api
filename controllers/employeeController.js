const mongoose = require('mongoose');
const createError = require('http-errors');
const Employee = require('../models/employeeModel');



exports.getEmployees = async (req, res, next) => {
    try {
        const employees = await Employee.find()
        res.status(200).send(employees);
    } catch (error) {
        next(error);
    }
}

exports.getEmployee = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) throw new createError.NotFound();
        const user = await Employee
            .findById(id)
        if (!user) throw new createError.NotFound();
        res.status(200).send(user);
    } catch (error) {
        next(error);
    }
}

exports.addEmployee = async (req, res, next) => {
    try {
        const newEmployee = new Employee({
            ...req.body
    });
        await newEmployee.save();
        res.status(201).send(newEmployee);
    } catch (error) {
        next(error);
    }
}


exports.updateEmployee = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) throw new createError.NotFound();
        const updated = await Employee.findByIdAndUpdate(id, { ...req.body }, { new: true, runValidators: true });
        if (!updated) throw new createError.NotFound();
        res.status(200).send(updated);
    } catch (error) {
        next(error);
    }
};

exports.deleteEmployee = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) throw new createError.NotFound();
        const deleted = await Employee.findByIdAndRemove(id);
        if (!deleted) throw new createError.NotFound(); 
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};