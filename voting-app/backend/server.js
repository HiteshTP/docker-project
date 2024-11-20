const express = require('express');
const mongoose = require('mongoose');
const voteRoutes = require('./routes/voteRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use('/api/votes', voteRoutes);

// MongoDB connection
mongoose.connect('mongodb://mongo_db:27017/voting', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error(err));
