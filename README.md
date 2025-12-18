# EduNESTA – LMS Project

This project is a full-stack Learning Management System (LMS) built using **React (Vite)** for frontend and **Node.js + Express + MongoDB** for backend.

This README explains **how to download the project and run it locally for development and changes**.

---

## 📁 Project Structure

```
edunesta/
├── frontend/   # React (Vite) frontend
└── backend/    # Node.js + Express backend
```

---

## 📥 How to Download the Project

### Option 1: Clone using Git
```bash
git clone https://github.com/amityadav-72/edunesta.git
cd edunesta
```

### Option 2: Download ZIP
1. Open the GitHub repository
2. Click **Code → Download ZIP**
3. Extract the ZIP file
4. Open the extracted folder

---

## ⚙️ Prerequisites

Make sure you have installed:
- Node.js (v18 or above)
- npm
- MongoDB (local or MongoDB Atlas)

---

## 🔐 Environment Setup

### Backend Environment (`backend/.env`)
Create a file named **`.env`** inside the `backend` folder:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

### Frontend Environment (`frontend/.env`)
Create a file named **`.env`** inside the `frontend` folder:

```env
VITE_API_URL=http://localhost:8080
```

---

## ▶️ How to Run the Project Locally

### 1️⃣ Start Backend Server
```bash
cd backend
npm install
npm run dev
```

Backend will run on:
```
http://localhost:8080
```

---

### 2️⃣ Start Frontend Server
Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:
```
http://localhost:5173
```

---

## ✏️ Making Changes

- Frontend code → `frontend/src`
- Backend code → `backend/`
- After changes:
  - Frontend auto-reloads
  - Restart backend if needed

---

## 🧪 Testing Flow (Recommended)

1. Login as **Teacher**
2. Create a test
3. Add questions
4. Login as **Student**
5. Attempt the test
6. Login again as **Teacher**
7. View submissions / Download Excel

---

## ❗ Notes

- Do NOT push `.env` files to GitHub
- Use same backend URL in frontend `.env`
- Make sure backend is running before frontend

---

## 👨‍💻 Author

**Amit Kumar Yadav**  
GitHub: https://github.com/amityadav-72
