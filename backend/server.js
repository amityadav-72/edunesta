require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const testRoutes = require('./routes/tests');
const questionRoutes = require('./routes/questions');
const submissionRoutes = require('./routes/submissions');
const materialRoutes = require('./routes/materials');

const app = express();
const PORT = process.env.PORT || 8080;

// Connect DB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static uploads
app.use('/uploads', express.static(path.join(__dirname, process.env.UPLOAD_DIR || 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tests', testRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/submissions', submissionRoutes);
app.use('/api/materials', materialRoutes);

// Basic health
app.get('/', (req, res) => res.send({ status: 'ok', service: 'EduNesta Backend' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
