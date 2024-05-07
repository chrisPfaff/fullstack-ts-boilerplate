import "dotenv/config";

import cors from "cors";
import express from "express";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../../client/frontend/dist")));
const PORT = process.env.PORT || 3001;

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "../../client/frontend/dist/index.html"));
});

app.get("/api", (_req, res) => {
  res.status(200).json({ message: "Hello from the server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
