const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database has been successfully connected into");
});

const contributionsRouter = require("./routes/contributions");
const usersRouter = require("./routes/users");

app.use("/contributions", contributionsRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
