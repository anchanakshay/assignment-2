const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`server is runing on http://localhost:${PORT}`);
});

app.get("/info/:id", (req, res) => {
  const pathParam = req.params.id;
  const queryParam = req.query.name;

  res.json({
    message: "Success",
    pathParam,
    queryParam,
  });
});

app.post("/data", (req, res) => {
  const receivedData = req.body;

  const responseArray = [receivedData];
  res.json(responseArray);
});