# PET Adoption API with Authentication (CRUD + JWT)
A secure backend API for managing pet adoption data built with Node.js, Express, and local JSON file storage. This API provides full CRUD functionality for pet profiles and user authentication using JWT tokens for protected access.

# Technologies Used
Node.js

Express.js

JSON file-based data storage (users, pets)

JWT-based Authentication and Authorization

# Features
✅ Full CRUD for Pets: Create, read, update, and delete pet records.
✅ JWT Authentication: Secure API endpoints with user registration and login.
✅ Modular Code: Organized folders for controllers, routes, middleware, and utilities.
✅ Environment Configuration: Supports .env file for secret keys and config.

# Getting Started
Prerequisites
Node.js and npm installed

API client like Postman or curl

# Installation
Clone the repository:

git clone https://github.com/snehalrathod9423/PET_Adoption_API.git

Change directory:

cd PET_Adoption_API

Install dependencies:
npm install

Create a .env file in the root with:
PORT=5000

JWT_SECRET=your_secure_jwt_secret_key

Start the server:
node server.js

API Endpoints Overview

# Authentication
1.POST /api/auth/register - Register a new user

2.POST /api/auth/login - User login, returns JWT token

Pets (Protected with JWT Token)
1.GET /api/pets - Get all pets

2.POST /api/pets - Add a pet

3.GET /api/pets/:id - Get pet by ID

4.PUT /api/pets/:id - Update pet by ID

5.DELETE /api/pets/:id - Delete pet by ID

# Usage Notes
1.Include the JWT token in the Authorization header as Bearer <token> for all /api/pets requests.

2.User passwords are hashed and never stored in plain text.

3.Data is stored locally in JSON files under the data/ folder.
