// routes/courseRoutes.js
const express = require('express');
const mongoose = require('mongoose');
const Course = require('../models/Course');

const router = express.Router();

// ✅ Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Get course by ID with validation
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid course ID format' });
  }

  try {
    const course = await Course.findById(id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Create new course
router.post('/', async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    const saved = await newCourse.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
