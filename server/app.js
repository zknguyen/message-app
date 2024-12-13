const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: ["*"],
        methods: ["GET", "POST", "PUT"]
    }
));

app.get("/", (req, res) => res.send("Hello world.."));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`My first Express app - listening on port ${PORT}`);
})