import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// GET,POST, PUT, DELETE for an /api/users endpoint
app.get('/api/users', (req, res) => {
    // Logic to get users
    res.json({ message: 'Get all users' });
});

app.post('/api/users', (req, res) => {
    // Logic to create a new user
    res.json({ message: 'Create a new user' });
});

app.put('/api/users/:id', (req, res) => {
    // Logic to update a user by ID
    const userId = req.params.id;
    res.json({ message: `Update user with ID ${userId}` });
}
);
app.delete('/api/users/:id', (req, res) => {
    // Logic to delete a user by ID
    const userId = req.params.id;
    res.json({ message: `Delete user with ID ${userId}` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

