const express = require('express');
const cors = require('cors');
const { Pool } = require('pg'); // Import the Postgres client
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Create a connection pool using Environment Variables from Docker
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: 5432,
});

// Endpoint to check Database Connection
app.get('/db-health', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()'); // Simple query asking for current time
        res.json({ 
            status: 'Connected', 
            time: result.rows[0].now 
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'Error', error: err.message });
    }
});

app.get('/', (req, res) => {
    res.json({ status: 'Active', system: 'DevOps Inventory API' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});