# 📄 **FitForge **

```md
# 💪 FitForge Backend — Personalized Workout Planner & Progress Tracker

## 📌 Project Overview
FitForge is a backend system for a personalized fitness application that allows users to generate workout plans, track progress, log workouts, and receive diet recommendations based on their fitness goals.

---

## 🚀 Features

### 🔐 Authentication
- User registration and login
- JWT-based authentication
- Secure password hashing using bcrypt

### 🏋️ Workout Management
- Generate personalized workout plans
- Log daily workouts
- Update and delete workout logs

### 📊 Progress Tracking
- Weekly workout statistics
- Workout volume tracking
- Adherence rate calculation

### 🍽️ Diet Planning
- Macro calculation using Mifflin-St Jeor equation
- Personalized diet plans

### 👤 User Management
- View and update user profile
- Admin access for managing users

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **Caching:** Redis  
- **Authentication:** JWT, bcryptjs  
- **Testing:** Jest, Supertest, mongodb-memory-server  
- **Mutation Testing:** Stryker  
- **Version Control:** Git & GitHub  

---

## 📂 Project Structure

```

fitforge-backend/
├── src/
│   ├── config/
│   ├── models/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── tests/
├── package.json
└── .env

```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```

git clone [https://github.com/your-username/your-repo.git](https://github.com/your-username/your-repo.git)
cd fitforge-backend

```

### 2️⃣ Install dependencies
```

npm install

```

### 3️⃣ Create `.env` file
```

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
JWT_REFRESH_SECRET=your_refresh_secret
JWT_EXPIRES_IN=1h
JWT_REFRESH_EXPIRES_IN=7d

```

### 4️⃣ Run the server
```

npm run dev

```

---

## 🧪 Testing

### Run integration tests
```

npm test

```

### Run regression tests
```

npm run test:regression

```

### Run mutation testing
```

npx stryker run

```

---

## 🌐 API Endpoints

### 🔐 Auth
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/auth/me`

### 🏋️ Workouts
- GET `/api/workouts/plan`
- POST `/api/workouts/log`
- GET `/api/workouts/log`

### 📊 Progress
- GET `/api/progress/weekly`
- GET `/api/progress/chart`

### 🍽️ Diet
- GET `/api/diet/plan`
- GET `/api/diet/macros`

### 👤 Users
- GET `/api/users/profile`
- PUT `/api/users/profile`

---

## 📸 Screenshots
(Add your API testing screenshots here)

---

## 📌 Future Improvements
- Frontend integration
- Advanced AI-based recommendations
- Improved caching strategies
- Deployment on cloud platforms

---

## 👩‍💻 Author
Kriti Saini

---

## 📜 License
This project is for academic purposes.
```

---

# ✅ WHAT YOU SHOULD DO

1. Create file:

```bash
README.md
```

2. Paste this content

3. Replace:

```bash
https://github.com/Kriti2709/personalized-workout-planner.git
```

with your actual repo link

---


Just tell me 👍
