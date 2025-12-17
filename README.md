🐾 PET Adoption API

A RESTful backend API built with Node.js, Express, and MongoDB to manage pets, users, and adoption requests. The project includes secure authentication, CRUD operations, data export features, and follows the MVC architecture.

🚀 Features
🔐 Authentication

User Registration

Secure Login with JWT

Password hashing using bcrypt

🐶 Pet Management

Add a new pet

View all available pets

Update pet details

Delete a pet

Search and filter pets (by name, breed, age, adoption status)

🐾 Adoption Requests

Users can send adoption requests

Prevent duplicate requests for the same pet

Admin can approve/reject requests

Pet status updates automatically on approval

📧 Email Notifications

Sends approval/rejection emails to users

Uses Ethereal email for testing

🗄️ Data Export

Download pets and adoption requests as PDF or Excel

🗃️ Database

Fully managed with MongoDB

Mongoose schemas & validations

Environment-variable-based DB connection

🧩 Architecture

MVC Pattern

Controllers handle logic

Routes define endpoints

Middleware for authentication and validation

Models for MongoDB schemas

🛠️ Tech Stack
Technology	Purpose
Node.js	Runtime
Express.js	Server framework
MongoDB / Mongoose	Database + ORM
JWT	Authentication
bcrypt	Password security
dotenv	Environment variables
nodemailer	Email notifications
exceljs / pdfkit	Export Excel & PDF
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
EMAIL_USER=your_test_email
EMAIL_PASS=your_email_password


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
🐾 Adoption Requests
Method	Endpoint	Description
POST	/api/adoptions/:petId	Create adoption request
PUT	/api/adoptions/:id	Approve/Reject request (admin)
GET	/api/adoptions/	Get all adoption requests
🗄️ Export Data
Method	Endpoint	Description
GET	/api/export/pets/excel	Export all pets as Excel
GET	/api/export/pets/pdf	Export all pets as PDF
GET	/api/export/adoptions/excel	Export adoption requests Excel
GET	/api/export/adoptions/pdf	Export adoption requests PDF
🛡️ Security

Passwords are hashed with bcrypt

JWT-based authentication

Protected routes for pet management and adoption requests

Sensitive info stored in .env

📌 Future Enhancements

Image upload for pets

Admin/user role management

Pagination & advanced filtering

Email notifications in production
