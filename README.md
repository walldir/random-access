# random-access

# Code Challenge for Senior Software Engineer (Node.js/React)

## Code Challenge

### Task: Build a Simple RESTful API with Node.js and Express

You are required to create a simple RESTful API that manages a list of users. Each user should have the following properties:

* `id` (number)
* `name` (string)
* `email` (string)

### Requirements:

1. **Endpoints**:

* `GET /users`: Retrieve a list of all users.
* `POST /users`: Add a new user.
* `GET /users/:id`: Retrieve a user by ID.
* `PUT /users/:id`: Update a user by ID.
* `DELETE /users/:id`: Delete a user by ID.

2. **Data Storage**: Use an in-memory array to store users. You do not need to implement a database for this challenge.

3. **Validation**: Ensure that the `name` and `email` fields are provided when creating or updating a user.

4. **Error Handling**: Return appropriate HTTP status codes and messages for errors (e.g., 404 for not found, 400 for bad requests).

### Constraints:

* You have 30 minutes to complete this challenge.
* You can use any Node.js version and the Express framework.

## External Resources

* [Express.js Documentation](https://expressjs.com/)
* [Postman](https://www.postman.com/) for testing your API endpoints
