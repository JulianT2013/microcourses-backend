
# 🧠 MicroCourses — Component 2: Back-End Development (Node.js + Express)

## 🎯 Project Scope

This Node.js-based Express API powers the MicroCourses platform, handling course data and interfacing with a MongoDB database (via Mongoose). It supports CRUD operations, is modularised using routes and models, and is built for scalability and integration with a front-end React application.

---

## 📦 Tech Stack

- ⚙️ **Node.js** (LTS)
- 🔁 **Express.js**
- 🧰 **Mongoose** for MongoDB object modeling
- 🌐 **MongoDB Atlas** (cloud DB)
- 🛡️ **dotenv** for environment configuration
- 🔄 **nodemon** for development live reload

---

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- MongoDB Atlas account OR local MongoDB installation

---

### Installation

1. **Clone the repo**
   ```bash
   git clone <your-repo-url>
   cd microcourses-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file**
   ```env
   DB_USER=your_db_user
   DB_PASS=your_password
   DB_CLUSTER=your_cluster.mongodb.net
   DB_NAME=microcoursesDB
   PORT=5000
   ```

4. **Run the server**
   ```bash
   npm run dev
   ```

---

## 🔌 API Endpoints

### `GET /courses`
Returns a list of all courses in the database.

### `GET /courses/:id`
Returns a single course's full details by MongoDB ObjectID.

### `POST /courses`
Adds a new course. Expects JSON body:
```json
{
  "title": "Node.js Basics",
  "description": "Learn core backend concepts with Node.js.",
  "instructor": "Jane Doe",
  "duration": 6,
  "category": "Backend Development"
}
```

---

## 📁 Project Structure

```
microcourses-backend/
├── models/
│   └── Course.js          # Mongoose schema
├── routes/
│   └── courseRoutes.js    # Express routes
├── .env                   # MongoDB credentials (excluded via .gitignore)
├── .gitignore             # Safe exclusions
├── server.js              # App entry point
├── package.json
```

---

## 🔒 Security Best Practices

- Keep `.env` in `.gitignore`
- Use `dotenv` for DB credentials
- Prefer MongoDB Atlas over local DB for production

---

## 🧠 Notes

- Database access credentials and cluster must be pre-configured in Atlas.
- This component integrates with the React front-end via shared routes.

---

## ✅ Component 2 Outcomes

- 📡 REST API serving course data
- 🔗 Secure connection to cloud MongoDB
- ⚙️ Designed to scale with future endpoints
