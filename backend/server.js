import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Routes
import userRoutes from './routes/users.js';
app.use('/api/users', userRoutes);

// Events
import eventRoutes from './routes/events.js';
app.use('/api/events', eventRoutes);

// Testing if clear db works
fetch('http://localhost:5000/api/events/deleteAll', { method: 'DELETE' })
  .then(response => response.json())
  .catch(err => console.error('Fetch error:', err));

// Start server
app.listen(process.env.PORT, () => {
  console.log(`\n Server running on port ${process.env.PORT}`);
});