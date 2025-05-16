
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
   USE_LOCAL=true # Change to 'false' to use Atlas
   LOCAL_URI=mongodb://localhost:3000/microcourses

   # Atlas fallback if USE_LOCAL=false
   DB_USER=your_user
   DB_PASS=your_password
   DB_CLUSTER=your_cluster.mongodb.net
   DB_NAME=microcourses

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
- **Role**: Initialises the server, sets middleware, establishes MongoDB connection.
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

---

## 🔄 Switching Between Local and Atlas MongoDB

You can choose which MongoDB source to use — either local (`mongodb://localhost...`) or cloud-based MongoDB Atlas.

### ✅ Option 1: Using `.env`

Modify the `.env` file:

```env
USE_LOCAL=true                       # Use local MongoDB
LOCAL_URI=mongodb://localhost:27017/microcourses

# If using Atlas (when USE_LOCAL is false)
DB_USER=your_user
DB_PASS=your_password
DB_CLUSTER=your_cluster.mongodb.net
DB_NAME=microcoursesDB
```

### ✅ Option 2: Using `npm` Scripts

Modify `package.json`:

```json
"scripts": {
  "start:local": "USE_LOCAL=true node server.js",
  "start:atlas": "USE_LOCAL=false node server.js"
}
```

Run one of the following in your terminal:

```bash
npm run start:local    # 👉 Connects to local MongoDB
npm run start:atlas    # 👉 Connects to MongoDB Atlas
```

### ✅ Option 3: Interactive CLI Prompt (optional for CLI users)

You can prompt the user at runtime by using the `prompt-sync` library. This is mainly for interactive tools or dev testing.
