const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const clientRoutes = require("./routes/client");
const doctorsRouter = require('./routes/doctor');
const cors = require('cors');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());


app.use("/api/doctors", doctorsRouter);
app.use("/api/clients", clientRoutes); 


app.use("/g", (req, res) => {
    res.send("Hello, World!");
});


app.listen(4000, () => {
  console.log('Server running on port 4000');
});

