# Backend API Documentation

## Description

This is the backend API for managing books. It provides endpoints to create, read, update, and delete books. The API is built using Express.js and MongoDB.

## Endpoints

### Get All Books

- **URL:** `/api/books`
- **Method:** `GET`
- **Description:** Retrieves a list of all books.
- **Response Codes:**
  - `200 OK`: Successfully retrieved the list of books.
  - `500 Internal Server Error`: An error occurred while retrieving the books.

### Get a Book

- **URL:** `/api/books/:id`
- **Method:** `GET`
- **Description:** Retrieves a single book by its ID.
- **URL Parameters:**
  - `id` (string): The ID of the book to retrieve.
- **Response Codes:**
  - `200 OK`: Successfully retrieved the book.
  - `400 Bad Request`: The ID is required.
  - `404 Not Found`: The book with the specified ID was not found.
  - `500 Internal Server Error`: An error occurred while retrieving the book.

### Create a Book

- **URL:** `/api/books`
- **Method:** `POST`
- **Description:** Creates a new book.
- **Request Body:**
  - `title` (string): The title of the book (required).
  - `author` (string): The author of the book (required).
  - `ISBN` (string): The ISBN of the book (required).
- **Response Codes:**
  - `201 Created`: Successfully created the book.
  - `400 Bad Request`: The title, author, and ISBN are required.
  - `500 Internal Server Error`: An error occurred while creating the book.

### Update a Book

- **URL:** `/api/books/:id`
- **Method:** `PUT`
- **Description:** Updates an existing book by its ID.
- **URL Parameters:**
  - `id` (string): The ID of the book to update.
- **Request Body:**
  - `title` (string): The title of the book (required).
  - `author` (string): The author of the book (required).
  - `ISBN` (string): The ISBN of the book (required).
- **Response Codes:**
  - `200 OK`: Successfully updated the book.
  - `400 Bad Request`: The ID, title, author, and ISBN are required.
  - `404 Not Found`: The book with the specified ID was not found.
  - `500 Internal Server Error`: An error occurred while updating the book.

### Delete a Book

- **URL:** `/api/books/:id`
- **Method:** `DELETE`
- **Description:** Deletes a book by its ID.
- **URL Parameters:**
  - `id` (string): The ID of the book to delete.
- **Response Codes:**
  - `200 OK`: Successfully deleted the book.
  - `400 Bad Request`: The ID is required.
  - `404 Not Found`: The book with the specified ID was not found.
  - `500 Internal Server Error`: An error occurred while deleting the book.

### API Status

- **URL:** `/status`
- **Method:** `GET`
- **Description:** Server status.
- **Response Codes:**
  - `200 OK`: Server running.
  - `500 Internal Server Error`: An error occurred with the server.

## Environment Variables

  - `PORT`: The port on which the server will run.
  - `MONGO_URI`: The URI for connecting to the MongoDB database.