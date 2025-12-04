const express = require('express');
const cors = require('cors');
const predictRoutes = require('./routes/predictRoutes');

// Initialize the app
const app = express();
const PORT = process.env.PORT || 5001; // Use a different port than React

// Middleware
app.use(cors()); // Allow cross-origin requests from your React app
app.use(express.json()); // To parse JSON request bodies

// --- API Routes ---
// Mount the prediction routes
app.use('/api/predict', predictRoutes);

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});