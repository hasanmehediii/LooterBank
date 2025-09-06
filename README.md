# LooterBank

<p align="center">
  <img src="frontend/public/images/money.png" alt="LooterBank Logo" width="150" height="150" style="border-radius: 50%; border: 2px solid #ccc;" />
  <br>
  <strong>LooterBank – Unsafe your money most</strong>
</p>

LooterBank is a full-stack banking application built with Node.js, Express.js, MongoDB for the backend, and React.js for the frontend. It provides a secure and user-friendly platform for managing banking operations.

## Features

### Backend
- User Authentication (Register, Login)
- Secure Password Hashing (bcryptjs)
- JSON Web Token (JWT) for authentication
- MongoDB Integration with Mongoose
- CORS Enabled
- Sample Data Seeding

### Frontend
- Beautiful Welcome Page with gradient text and animations
- Responsive Navigation Bar with Home, About Us, Contact, and FAQ links
- Login and Sign Up forms
- Styled Components for CSS-in-JS
- Custom Background Image

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- bcryptjs
- jsonwebtoken
- cors
- dotenv

### Frontend
- React.js
- Vite
- React Router DOM
- Styled Components
- Axios

## Setup and Installation

To set up the project, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd LooterBank
    ```

2.  **Backend Setup:**
    a.  Navigate to the `backend` directory:
        ```bash
        cd backend
        ```
    b.  Install backend dependencies:
        ```bash
        npm install
        ```
    c.  Create a `.env` file in the `backend` directory and add your MongoDB connection URI and JWT Secret:
        ```
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret_token
        ```
        Replace `your_mongodb_connection_string` with your actual MongoDB Atlas connection string and `your_jwt_secret_token` with a strong, random string.

3.  **Frontend Setup:**
    a.  Navigate to the `frontend` directory:
        ```bash
        cd ../frontend
        ```
    b.  Install frontend dependencies:
        ```bash
        npm install
        ```

## How to Run the Application

1.  **Start the Backend Server:**
    From the `backend` directory, run:
    ```bash
    npm start
    ```
    The backend server will run on `http://localhost:5000`.

2.  **Start the Frontend Development Server:**
    From the `frontend` directory, run:
    ```bash
    npm run dev
    ```
    The frontend application will typically run on `http://localhost:5173` (or another available port).

## Database Seeding

To populate your MongoDB database with sample data (users, accounts, transactions, activity logs), use the seeding script:

1.  Ensure your backend server is **not** running.
2.  From the project root directory (`/home/mehedi/LooterBank`), run:
    ```bash
    node backend/data/seed.js
    ```
    This will delete all existing data in the collections and insert new sample data.

3.  To destroy all sample data, run:
    ```bash
    node backend/data/seed.js -d
    ```

## API Endpoints

### Authentication
-   `POST /api/auth/register`: Register a new user.
    -   Request Body: `{ "name": "string", "email": "string", "password": "string" }`
    -   Response: `{ "token": "string" }`
-   `POST /api/auth/login`: Authenticate a user and get a JWT token.
    -   Request Body: `{ "email": "string", "password": "string" }`
    -   Response: `{ "token": "string" }`

