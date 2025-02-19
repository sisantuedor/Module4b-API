const express = require("express");
const tv_watchlistRoutes = require("./src/tvwatchlist /routers")
const app = express(); 
const port = 4000;

app.use(express.json());

const cors = require("cors");
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    res.send("What's up Point Park! API is working");
});

//API Route 
app.use("/api/version1/tvwatchlist", tv_watchlistRoutes);

app.listen(port, () => console.log(`Running on port ${port}`));

