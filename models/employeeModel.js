const { Schema, model } = require('mongoose');

const EmployeeSchema = new Schema(
    {
        age: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        salary: {
            type: Number,
            required: true,
        },
    }
);

EmployeeSchema.method('toJSON', function () {
    return {
      _id: this._id,
      age: this.age,
      name: this.name,
      salary: this.salary
    };
  });


module.exports = model('Employee', EmployeeSchema);

