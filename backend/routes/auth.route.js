// Import the Express framework for building the API routes
import express from "express";

// Import the authentication-related functions from the auth.controller file
// These functions handle the logic for signup, login, logout, and checking user authentication
import {
  login,
  logout,
  signup,
  checkAuth,
} from "../controllers/auth.controller.js";

// Import the middleware function to verify the token
// This middleware checks if the user is authenticated before allowing access to certain routes
import { verifyToken } from "../middleware/verifyToken.js";

// Create an instance of the Express router
// This router will handle the routes related to authentication
const router = express.Router();

// Route for checking if the user is authenticated
// Uses the verifyToken middleware to protect this route
// If the token is valid, the checkAuth function will be called to respond with user info or status
router.get("/check-auth", verifyToken, checkAuth);

// Route for user signup (registration)
// The signup function will be called when a POST request is made to /signup
// This function will create a new user in the database with the provided details
router.post("/signup", signup);

// Route for user login
// The login function will be called when a POST request is made to /login
// This function checks the user's credentials and issues a token if they are valid
router.post("/login", login);

// Route for user logout
// The logout function will be called when a POST request is made to /logout
// This function typically invalidates the user's session or token
router.post("/logout", logout);

// Export the router so it can be used in other parts of the application
// For example, it can be imported and used in the main server file to include these routes in the app
export default router;
