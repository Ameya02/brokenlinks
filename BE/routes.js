
// Import the necessary modules
import express from 'express';
import checkURL  from './controllers.js';

// Create an instance of the Express router
const router = express.Router();

// Define the route for checkURL
router.post('/checkURL', checkURL);

// Export the router
export default router;
