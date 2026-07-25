# 🔐 JWT Authentication API

A simple Node.js and Express.js REST API that demonstrates JWT (JSON Web Token) Authentication using Express Middleware. This project provides a protected endpoint that can only be accessed with a valid JWT token.

## 📌 Features

- JWT-based Authentication
- Protected API Endpoint
- Express Middleware for Token Verification
- RESTful API Design
- Proper Error Handling
- JSON Responses

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- JSON Web Token (JWT)
- JavaScript (ES6)

---

## 📂 Project Structure

```
jwt-auth-api/
│
├── middleware/
│   └── auth.js
│
├── routes/
│   └── protected.js
│
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/<your-username>/jwt-auth-api.git
```

### Navigate to the Project

```bash
cd jwt-auth-api
```

### Install Dependencies

```bash
npm install
```

### Start the Server

```bash
node server.js
```

or

```bash
npx nodemon server.js
```

The server will start at:

```
http://localhost:5000
```

---

## 📮 API Endpoints

### 1️⃣ Generate JWT Token

**POST**

```
/api/login
```

#### Response

```json
{
    "token": "your_generated_jwt_token"
}
```

---

### 2️⃣ Access Protected Resource

**GET**

```
/api/protected
```

### Headers

```
Authorization: Bearer <your_jwt_token>
```

#### Success Response

```json
{
    "message": "Protected Resource Accessed Successfully",
    "user": {
        "id": 1,
        "username": "Akansha"
    }
}
```

---

## ❌ Error Responses

### Missing Token

```json
{
    "message": "Token missing"
}
```

### Invalid Token

```json
{
    "message": "Invalid Token"
}
```

---

## 🔒 Authentication Flow

1. Client sends a **POST** request to `/api/login`.
2. Server generates a JWT using `jwt.sign()`.
3. Client receives the JWT token.
4. Client includes the token in the `Authorization` header.
5. Authentication middleware verifies the token using `jwt.verify()`.
6. If the token is valid, access to the protected route is granted.
7. If the token is missing or invalid, the server returns **401 Unauthorized**.

---

## 🧪 Testing

You can test the API using:

- Postman
- Thunder Client
- Insomnia

### Example Header

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 📚 Concepts Demonstrated

- JWT Authentication
- Express Middleware
- REST API Development
- Route Protection
- Authorization Header Handling
- JSON Responses
- Error Handling

---

## 📄 License

This project was developed as part of a technical interview assessment to demonstrate JWT Authentication using Node.js and Express.js.
