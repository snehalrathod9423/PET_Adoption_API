const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const petRoutes = require('./routes/petRoutes');

dotenv.config();
const app = express();

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/pets', petRoutes);

// ✅ Root route for Render homepage
app.get('/', (req, res) => {
  res.send('🐾 Pet Adoption API is running successfully!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
