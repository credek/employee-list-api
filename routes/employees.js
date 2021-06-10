const express = require('express');
const { getEmployees, getEmployee ,addEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const router = express.Router();



router
  .route('/')
  .get(getEmployees)
  .post(addEmployee);

router
  .route('/:id')
  .get(getEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee);  

module.exports = router;
