🐾 PET Adoption API

A RESTful backend API built with Node.js, Express, and MongoDB to manage pets, users, and adoption requests. This project includes secure authentication, CRUD operations, and follows MVC architecture.

🚀 Features
🔐 Authentication

User Registration

Secure Login with JWT

Password hashing using bcrypt

🐶 PET Management

Add a new pet

View all available pets

Update pet details

Delete a pet

Adopt / Update adoption status

🗄️ Database

Fully migrated to MongoDB

Mongoose schemas & validation

Environment-variable-based DB connection

🧩 Architecture

MVC Pattern

Controllers for logic

Routes for endpoints

Middleware for authentication

Models for MongoDB schemas

🛠️ Tech Stack
Technology	Purpose
Node.js	Runtime
Express.js	Server framework
MongoDB / Mongoose	Database + ORM
JWT	Authentication
bcrypt	Password security
dotenv	Environment variables
📁 Folder Structure
PET_Adoption_API/
├─ controllers/
├─ models/
├─ routes/
├─ middleware/
├─ utils/
├─ server.js
└─ README.md
🔧 Setup Instructions
1️⃣ Clone the Repository
git clone <repo-url>
cd PET_Adoption_API
2️⃣ Install Dependencies
npm install
3️⃣ Create .env File
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
4️⃣ Start the Server
npm start

Server will run on:

http://localhost:5000
📌 API Endpoints
🔐 Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login & receive token
🐾 Pets
Method	Endpoint	Description
GET	/api/pets/	Get all pets
POST	/api/pets/	Add a new pet
GET	/api/pets/:id	Get a pet by ID
PUT	/api/pets/:id	Update pet details
DELETE	/api/pets/:id	Remove a pet
🛡️ Security

Passwords hashed

Token-based authentication

Protected pet routes

Environment variables hidden

📌 Future Enhancements

Image upload for pets

Admin/user role management

Adoption request workflow

Pagination & filtering

🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss your ideas.
