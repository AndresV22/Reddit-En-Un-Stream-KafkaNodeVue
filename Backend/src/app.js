// Bring in required Modules
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

import redditCommentRoutes from "./routes/redditComment.routes";

var corsOptions = {
  origin: `http://localhost:8080`
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(redditCommentRoutes);

const db = require("./models");
db.sequelize.sync();

//app.use("/api/notes", routes);

// Define PORT
const PORT = 3000;

// Listen to the defined PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
