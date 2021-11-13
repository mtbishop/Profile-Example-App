const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');
const path = require('path');

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.use('/api/users', userRoutes);

//deployment
__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API Connected');
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`server started on port ${PORT}`));
