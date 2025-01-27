const express = require("express");
const cors = require("cors");
require("./DB/Conn");
const app = express();
const PORT = 5500;
app.use("/api", require("./Routes"));

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
