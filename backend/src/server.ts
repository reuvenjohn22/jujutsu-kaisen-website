import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample API route
app.get('/', (req, res) => {
    res.send('Welcome to the Jujutsu Kaisen API!');
});

// Placeholder for other routes
// app.use('/api/someRoute', someRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});