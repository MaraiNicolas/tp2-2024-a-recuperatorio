import "dotenv/config";
import express from "express";
import moviesRouter from "./routes/movies.js";
import salesRouter from "./routes/sales.js";

require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use("/api/sales", salesRouter);
app.use("/api/movies", moviesRouter);

app.listen(PORT, () => {
  console.log("Servidor Web en el puerto:", PORT);
});
