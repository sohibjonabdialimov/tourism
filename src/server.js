const dotenv = require('dotenv');
const connectDB = require('../config/db');
dotenv.config();

const app = require('./app');
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
