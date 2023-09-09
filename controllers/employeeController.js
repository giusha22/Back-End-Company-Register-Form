const Employee = require('../model/Employee');


const getAllEmployees = async (req, res) => {
    const employees = await Employee.find();
    if (!employees) return res.status(204).json({ 'message': 'No employees found.' });
    res.json(employees);
}
const createNewEmployee = async (req, res) => {
    if (!req.body.firstname || !req.body.lastname) {
        return res.status(400).json({'message': 'First and last names are required'})
    }

    try {
        const result = await Employee.create({
            firstname :req.body.firstname,
            lastname : req.body.lastname
        });
        res.status(201).json({result})
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getAllEmployees,
    createNewEmployee
};