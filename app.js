const express = require("express");
const PORT = 8000;

let accounts = require("./accounts");
const app = express();

app.use(express.json());

//get all products
app.get("/accounts", (req, res) => {
  return res.status(200).json({ accounts });
});

//add one account
app.post("/accounts", (req, res) => {
  const id = accounts[accounts.length - 1].id + 1;
  const funds = 0;
  const newAccount = { ...req.body, id, funds };
  newAccount.push(newAccount);
  return res.status(201).json(newAccount);
});

//delete Account
app.delete("/accounts:accountId", (req, res) => {
  const { accountId } = req.params;
  accounts = accounts.filter((account) => account.id !== +account);
  return res.status(204).json(account);
});
//update ccount
app.put("/accounts/:accountId", (req, res) => {
  const { accountId } = req.params;
  const accountFound = accounts.find((account) => account.id === +accountId);
  if (!accountFound)
    return res.status(404).json({
      msg: "not Found!",
    });
  accountFound.username = req.body.username
    ? req.body.usename
    : accountFound.username;
  accountFound.funds = req.body.funds ? req.body.funds : accountFound.funds;
  return res.status(200).json(accountFound);
});
app.listen(PORT, () => {
  console.log(`Server Running! on port: ${PORT}`);
});
//
