const express = require('express');
const app = express();
 const petRoutes = require('./routes/petRoutes');

 app.use(express.json()); // Middleware to parse JSON


app.get('/', (req, res) => {
    res.send('Pet Adoption API is running');
});

app.use('/api/pets', petRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));