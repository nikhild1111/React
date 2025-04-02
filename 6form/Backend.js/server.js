import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// ✅ Use only one middleware for parsing JSON
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); // For form data

app.get('/',(req,res)=>{
    res.send('jung vahi lado bacche jisame jit apani ho ');
})

app.post('/submit', (req, res) => {
    console.log("Received Data:", req.body);
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: "Invalid request body" });
    }
    res.json({ message: "Form submitted successfully", receivedData: req.body });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
