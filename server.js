// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const courseRoutes = require('./routes/courseRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const { DB_USER, DB_PASS, DB_CLUSTER, DB_NAME } = process.env;

if (!DB_USER || !DB_PASS || !DB_CLUSTER || !DB_NAME) {
  console.error('❌ Missing required MongoDB env variables.');
  process.exit(1);
}

const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUSTER}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;


// 🧩 Middleware
app.use(cors());
app.use(express.json());

// 📡 Health Check Route
app.get('/', (req, res) => {
  res.send('📡 MicroCourses API is running');
});

// 🧠 Routes
app.use('/courses', courseRoutes);

// ⚡ Connect to MongoDB
console.log('🔌 Connecting to MongoDB...');
mongoose.connect(MONGO_URI)

.then(() => {
  console.log('✅ MongoDB connected successfully');
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ MongoDB connection failed:', err.message);
  process.exit(1);
});
