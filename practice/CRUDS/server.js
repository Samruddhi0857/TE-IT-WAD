const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());  // To parse incoming JSON data

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mongodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define the student schema and model
const studentSchema = new mongoose.Schema({
    name: String,
    password: String
});

const Student = mongoose.model('student', studentSchema);

// GET - Get all students
app.get('/students', async (req, res) => {
    const students = await Student.find();
    res.send(students);  // Respond with all student data
});

// PUT - Update a student by ID
app.put('/students/:id', async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) {
        return res.status(404).send({ message: 'Student not found' });
    }
    res.send({ message: 'Student updated', student });
});

// POST - Add a new student
app.post('/students', async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send({ message: 'Student added' });
});

// DELETE - Remove a student by ID
app.delete('/students/:id', async (req, res) => {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
        return res.status(404).send({ message: 'Student not found' });
    }
    res.send({ message: 'Student deleted' });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
