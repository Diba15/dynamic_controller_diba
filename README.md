# Dynamic CRUD API with Express.js and Mongoose

This is a simple implementation of a RESTful API using Express.js and Mongoose. The API is configured to manage categories with basic CRUD operations.

The API utilizes a single model, `Category`, which includes two fields: `name` and `status`. The `status` field is a boolean that defaults to `true`.

Data validation is implemented using the `express-validator` middleware, with rules specified in the `src/middlewares/category.js` file. The `runValidation` middleware ensures the request data adheres to these rules, returning a 400 status code with errors if validation fails.

The `DynamicController` class, located in `src/controller/DynamicController.js`, manages request handling with five methods: `index`, `store`, `show`, `update`, and `destroy`.

Database interactions are facilitated by the `mongoose` library, with the connection established in the `index.js` file.

The API is configured to run on port 3000 and can be launched by executing `npm start` in the terminal.

## Endpoints

- `GET /api/v1/categories`: Retrieves all categories.
- `POST /api/v1/categories`: Adds a new category.
- `GET /api/v1/categories/:id`: Fetches a category by ID.
- `PUT /api/v1/categories/:id`: Modifies a category by ID.
- `DELETE /api/v1/categories/:id`: Removes a category by ID.

- `GET /api/v1/products`: Retrieves all products.
- `POST /api/v1/products`: Adds a new product.
- `GET /api/v1/products/:id`: Fetches a product by ID.
- `PUT /api/v1/products/:id`: Modifies a product by ID.
- `DELETE /api/v1/products/:id`: Removes a product by ID.

## Request Structure

Requests for category should include fields such as `name` and `status` (default is `true`).

Requests for product should include fields such as `categoryId`, `name`, and `status` (default is `true`).

## Response Structure

Responses will contain:

- `status`: Boolean indicating success.
- `message`: Description of the request outcome.
- `total`: Total number of categories in the database.
- `data`: Array of category objects.

## Error Handling

A 400 status code is returned with error details if request validation fails.
