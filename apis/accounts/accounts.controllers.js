let accounts = require("../../accounts");

exports.getAllAccounts = (req, res) => {
  return res.status(200).json({ accounts });
};

exports.getByName = (req, res) => {
  const { accountUserName } = req.params;
  console.log(req.params);

  //find product
  const accountFound = accounts.find(
    (account) =>
      account.username.toUpperCase() === accountUserName.toUpperCase()
  );
  console.log(accountFound);
  if (!accountFound)
    return res.status(404).json({ message: "account not found!" });
  else return res.status(200).json(accountFound);
};

exports.createAccount = (req, res) => {
  const id = accounts[accounts.length - 1].id + 1;
  const funds = 0;
  const newAccount = { ...req.body, id, funds };
  accounts.push(newAccount);
  return res.status(201).json(newAccount);
};

exports.deleteAccount = (req, res) => {
  const { accountId } = req.params;
  accounts = accounts.filter((account) => account.id !== +accountId);
  return res.status(204).json(accounts);
};

exports.updateAccount = (req, res) => {
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
};
