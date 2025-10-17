# PET Adoption API (CRUD without Authentication)

A backend API for managing pet adoption data built with Node.js, Express, and MongoDB. This API provides full CRUD functionality for pet profiles and adoption applications without requiring user authentication.

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose

## Features

✅ Full CRUD for Pets: Create, read, update, and delete pet records.  
✅ Full CRUD for Adoption Applications: Manage adoption requests from start to finish.  
✅ No Authentication: Open API endpoints without login or authorization.  
✅ Organized Code: Following MVC or modular structure for easy maintenance.

## Getting Started

### Prerequisites

- Node.js and npm installed  
- MongoDB server (local or Atlas)  
- API client like Postman

### Installation

1. Clone the repository:
   git clone https://github.com/snehalrathod9423/PET_Adoption_API.git2. Change directory:  cd PET_Adoption_API3. Install dependencies:  npm install4. Create a .env file with your MongoDB connection string:  MONGO_URI=your_mongodb_connection_string
PORT=your_preferred_port (optional)5. Start the server:  npm start
## API Endpoints Overview

### Pets  
- GET /api/pets - Get all pets  
- POST /api/pets - Add a pet  
- GET /api/pets/:id - Get pet by ID  
- PUT /api/pets/:id - Update pet by ID  
- DELETE /api/pets/:id - Delete pet by ID  

### Adoption Applications  
- GET /api/adoptions - Get all applications  
- POST /api/adoptions - Create adoption application  
- GET /api/adoptions/:id - Get application by ID  
- PUT /api/adoptions/:id - Update application by ID  
- DELETE /api/adoptions/:id - Delete application by ID
