// controllers/adminController.js
export const getAdminDashboard = (req, res) => {
    // Add your logic for rendering or fetching data for the admin dashboard
    res.json({
        message: 'Welcome to the Admin Dashboard',
        user: req.session.userId, // This gives you access to the logged-in user ID
    });
};
