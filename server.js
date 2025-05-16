require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const courseRoutes = require('./routes/courseRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Determine the correct DB URI
let MONGO_URI;

if (process.env.USE_LOCAL === 'true') {
  MONGO_URI = process.env.LOCAL_URI;
} else {
  const { DB_USER, DB_PASS, DB_CLUSTER, DB_NAME } = process.env;
  if (!DB_USER || !DB_PASS || !DB_CLUSTER || !DB_NAME) {
    console.error('❌ Missing Atlas credentials in .env');
    return;
  }
  MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUSTER}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
}

// Exit early if URI is undefined
if (!MONGO_URI) {
  console.error('❌ MONGO_URI could not be determined');
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => res.send('📡 MicroCourses API is running'));

// API routes
app.use('/courses', courseRoutes);

// Connect to MongoDB
console.log('🔌 Connecting to MongoDB...');
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected successfully');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });
