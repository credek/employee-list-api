# Employee List API

I created a small API which is a list of employees (CRUD, Error handlig, CORS).

## Dependencies

- express.js
- MongoDB
- mongoose
- http-errors

## Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm start` to start the local server (localhost:3000)
- Mongo database running locally

## Testing

All CRUD operations (curl/Postman):

**GET, POST** 
http://localhost:3000/api/employees
**GET, UPDATE, DELETE by id**  
http://localhost:3000/api/employees/{id}

Mongoose model:

Name
Age
Salary


