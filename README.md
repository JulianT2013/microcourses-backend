
# 🧠 MicroCourses — Component 2: Back-End Development (Node.js + Express)

## 🎯 Project Scope

This Node.js-based Express API powers the MicroCourses platform, handling course data and interfacing with a MongoDB database (via Mongoose). It supports CRUD operations, is modularized using routes and models, and is built for scalability and integration with a front-end React application.

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


---

## 🧩 Code Overview

| File                 | Purpose                                                                 |
|----------------------|-------------------------------------------------------------------------|
| `server.js`          | Main entry point. Sets up Express app, connects to MongoDB, and loads routes. |
| `models/Course.js`   | Defines the Mongoose schema for Course documents stored in MongoDB.     |
| `routes/courseRoutes.js` | Handles API routes for CRUD operations on course data.            |
| `.env`               | Stores sensitive environment variables like database credentials.       |

---

## ⚙️ Technical Details

### `server.js`
- **Role**: Initializes the server, sets middleware, establishes MongoDB connection.
- **Input**: Loads credentials and port from `.env`.
- **Output**: Starts Express server and logs connection status.

### `models/Course.js`
- **Role**: Defines `Course` schema.
- **Fields**:
  - `title` (String, required)
  - `description` (String)
  - `instructor` (String)
  - `duration` (Number)
  - `category` (String)
- **Output**: Exports a usable Mongoose model.

### `routes/courseRoutes.js`
- **GET /courses** → Returns all courses.
- **GET /courses/:id** → Returns a specific course.
- **POST /courses** → Accepts JSON to create a new course.

---

## 🧠 Problem-Solving

### Challenge 1: MongoDB Atlas connection errors
- **Cause**: Incorrect URI formatting and variable use in `.env`.
- **Fix**: Refactored `.env` and used dynamic URI construction in `server.js`.

### Challenge 2: Invalid ObjectId in GET by ID
- **Cause**: Route tested with `:id` instead of a real ID.
- **Fix**: Added input validation using `mongoose.Types.ObjectId.isValid()` and updated Postman collection.

---

## 🌟 Achievements

- 🔌 Connected to a live MongoDB Atlas cluster with secure env handling.
- ⚙️ Built a modular backend using MVC structure.
- ✅ Validated API endpoints using Postman collection.
- 🧪 Added logic to handle common production errors like invalid IDs and missing fields.
