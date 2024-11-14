// A simple middleware to check for authorization headers
module.exports = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ message: 'No authorization token found' });
    }
  
    // Add your token validation logic here (e.g., using JWT)
  
    next();
  };
  