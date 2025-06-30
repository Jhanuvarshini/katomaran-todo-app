
# katomaran-todo-app
A Fullstack Todo Task Management Web Application for Katomaran Hackathon

# Katomaran Todo Task Manager

This is a Fullstack Todo Task Management Web Application built for the Katomaran Fullstack Hackathon.

---

## 🚀 Features

- Google OAuth 2.0 Login
- Full CRUD for Tasks (Create, Read, Update, Delete)
- Task Sharing with other users by email or username
- Real-time task updates using Socket.io (WebSockets)
- Responsive UI for Desktop and Mobile
- Filtering tasks by status, due date, or priority
- Toast notifications for actions (create/update/delete)
- Error boundaries and basic offline support

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Authentication**: Google OAuth 2.0, JWT
- **Database**: MongoDB Atlas (Cloud Hosted)
- **Real-time**: WebSocket (Socket.io)
- **Deployment**: Vercel (Frontend), Railway or Render (Backend)

---

## 🧑‍💻 Getting Started (Local Setup)

### 🔁 Clone the Repository

```bash
git clone https://github.com/Jhanuvarshini/katomaran-todo-app.git
cd katomaran-todo-app
````

---

### ⚙️ Backend Setup

```bash
cd backend
npm install
# Create a .env file and add:
# MONGO_URI=your_mongodb_connection_string
# GOOGLE_CLIENT_ID=your_google_client_id
# GOOGLE_CLIENT_SECRET=your_google_client_secret
# JWT_SECRET=your_jwt_secret
npm run dev
```

---

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 📷 Architecture Diagram

> (This section will include the image or diagram once created.)

---

## 📹 Loom Video Demo

> (Link to be added once the demo video is recorded.)

---

## 🤝 Assumptions

* Only Google login is implemented for simplicity.
* Task sharing assumes the recipient already exists in the system.
* All UI is tested on modern browsers only.
* Basic error handling is used for quick MVP delivery.

---

## 📬 Contact

> Created as part of Katomaran Hackathon. For queries, raise a GitHub issue or contact via profile.

---

## ✅ Submission Requirement

This project is a part of a hackathon run by [https://www.katomaran.com](https://www.katomaran.com)



