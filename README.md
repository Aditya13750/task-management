# 🚀 Task Management Application (MERN Stack)

A full-stack **Task Management Application** built using the MERN stack (MongoDB, Express.js, React, Node.js) with **secure authentication, task management features, and modern UI**.

This project demonstrates strong understanding of **backend architecture, authentication, security practices, database handling, frontend integration, and deployment strategies**.

---

## 📌 Features

### 🔐 Authentication & Security

* User Registration & Login
* JWT-based Authentication
* HTTP-only secure cookies
* Password hashing using bcrypt
* Protected routes (frontend + backend)
* Proper error handling & validation

### 📝 Task Management

* Create, Read, Update, Delete (CRUD) tasks
* Each user can access only their own tasks
* Task fields:

  * Title
  * Description
  * Status (Pending / Completed)
  * Created Date

### 🔍 Advanced Functionalities

* Search tasks by title
* Filter tasks by status
* Pagination support
* Real-time UI updates

### 🎨 Frontend UX

* Clean and modern UI using Tailwind CSS
* Toast notifications (react-hot-toast)
* Loading states
* Protected routing
* Responsive design

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (JSON Web Tokens)
* Bcrypt
* Cookie Parser
* CORS

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## 📂 Project Structure

```
task-management/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```

---

## ⚙️ Local Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/task-management.git
cd task-management
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

Run backend:

```
npm run start
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

| Variable   | Description               |
| ---------- | ------------------------- |
| PORT       | Server port               |
| MONGO_URI  | MongoDB connection string |
| JWT_SECRET | Secret key for JWT        |

---

## 📡 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| POST   | /api/auth/register | Register user    |
| POST   | /api/auth/login    | Login user       |
| POST   | /api/auth/logout   | Logout user      |
| GET    | /api/auth/me       | Get current user |

---

### 📝 Task Routes

| Method | Endpoint       | Description                                   |
| ------ | -------------- | --------------------------------------------- |
| GET    | /api/tasks     | Get all tasks (with search/filter/pagination) |
| POST   | /api/tasks     | Create new task                               |
| PUT    | /api/tasks/:id | Update task                                   |
| DELETE | /api/tasks/:id | Delete task                                   |

---

## 🔒 Security Features

* JWT stored in HTTP-only cookies
* Secure cookie configuration (SameSite, Secure flags)
* Password hashing using bcrypt
* Input validation
* Protected API routes
* Users can only access their own data

---

## 🌐 Deployment

* **Frontend (Vercel):** https://your-frontend.vercel.app
* **Backend (Render):** https://your-backend.onrender.com

---

## 🧠 Key Learnings

* Implemented secure authentication using JWT and cookies
* Managed state and protected routes in React
* Designed RESTful APIs with proper error handling
* Integrated frontend with backend using Axios
* Debugged real-world issues like CORS, cookies, and 401 errors
* Deployed full-stack application

---


---

## 👨‍💻 Author

**Aditya Giri**
B.E. CSE (4th Year) | Full Stack Developer

---

## ⭐ Conclusion

This project demonstrates a **production-ready full-stack application** with strong focus on:

* Security
* Scalability
* Clean architecture
* User experience

---

## 📌 Note

This project is built for learning and placement preparation purposes and showcases full-stack development capabilities.

---
