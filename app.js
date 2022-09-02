const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const workout1 = [
  {
    type: "upper",
    date: "17/11/2022",
    excersize_1: "1, 2, 3",
    excersize_2: "1, 2, 3",
    excersize_3: "1, 2, 3",
    excersize_4: "1, 2, 3",
    excersize_5: "1, 2, 3",
    excersize_6: "1, 2, 3",
    excersize_7: "1, 2, 3",
  },
  {
    type: "upper",
    date: "17/11/2022",
    excersize_1: "1, 2, 3",
    excersize_2: "1, 2, 3",
    excersize_3: "1, 2, 3",
    excersize_4: "1, 2, 3",
    excersize_5: "1, 2, 3",
    excersize_6: "1, 2, 3",
    excersize_7: "1, 2, 3",
  },
];

app.listen(3000, () => {
  console.log("started Listening on port 3000");
});

app.get("/history", (req, res) => {
  res.send(workout1);
});
