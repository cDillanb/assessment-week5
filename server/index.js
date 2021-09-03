const express = require("express");
const cors = require("cors");
const ctrl = require("./ctrl/ctrl");
const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.


app.get("/api/compliment", ctrl.getCompliment);
app.get("/api/fortune", ctrl.getFortune);
app.post("/api/comment", ctrl.createComment);
app.get("/api/poster", ctrl.getPoster);
app.get("/api/quote", ctrl.getQuote);

app.listen(4000, () => console.log("Server running on 4000"));
