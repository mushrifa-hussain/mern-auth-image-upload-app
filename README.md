# MERN Auth Image Upload App

A simple full stack MERN application that implements:

* User Signup
* User Login
* JWT Authentication
* Image Upload
* Profile Display

The project demonstrates a basic authentication system with protected routes and file upload using the MERN stack.

---

## 🚀 Tech Stack

Frontend

* React (Vite)
* Axios
* CSS

Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Multer (Image Upload)

---

## 📂 Project Structure

```
backend
 ├ config
 ├ middleware
 ├ models
 ├ routes
 ├ uploads
 ├ server.js
 └ package.json

frontend
 ├ src
 │  ├ components
 │  │  ├ Login.jsx
 │  │  ├ Signup.jsx
 │  │  ├ Upload.jsx
 │  │  └ Profile.jsx
 │  ├ api.jsx
 │  └ App.jsx
 └ package.json
```

---

## ⚙️ Features

* User Registration
* Secure Login using JWT
* Protected Profile Route
* Image Upload using Multer
* Display uploaded image in profile
* Token stored in LocalStorage

---

## 🖥️ Screenshots

(Add screenshots here)

---

## 📦 Installation

Clone the repository

```
git clone https://github.com/yourusername/mern-auth-image-upload.git
```

---

### Backend Setup

```
cd backend
npm install
npm start
```

Server runs on

```
http://localhost:5000
```

---

### Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## 🔐 API Routes

| Method | Route         | Description      |
| ------ | ------------- | ---------------- |
| POST   | /auth/signup  | Register user    |
| POST   | /auth/login   | Login user       |
| GET    | /auth/profile | Get user profile |
| POST   | /auth/upload  | Upload image     |

---

## 👩‍💻 Author

Built for learning MERN authentication and file upload.
