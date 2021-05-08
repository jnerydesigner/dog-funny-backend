import express from "express";

import { createDog } from "./routes/index.routes";

const app = express();

app.use(express.json());

app.get("/", createDog);

app.post("/dog", (request, response) => {
  const { name, breed } = request.body;
  return response.json({ name, breed });
});

app.listen(3333, () => console.log("Server is running 🐕"));
