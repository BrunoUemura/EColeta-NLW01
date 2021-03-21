import express from "express";

const app = express();

app.get("/users", (req, res) => {
  return res.json(["Bruno", "Carla", "Anderson"]);
});

app.post("/users", (req, res) => {
  const user = {};
});

app.listen(3333, () => console.log("Server running on port 3333"));
