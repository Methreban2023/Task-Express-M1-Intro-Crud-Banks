const express = require("express");
const PORT = 8000;

const app = express();

app.use(express.json());

const accountRoutes = require("./apis/accounts/accounts.routes.js");

app.use("/accounts", accountRoutes);

app.listen(PORT, () => {
  console.log(`Server Running! on port: ${PORT}`);
});
//
