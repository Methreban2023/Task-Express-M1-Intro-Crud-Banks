const express = require("express");
const router = express.Router();
const {
  createAccount,
  getAllAccounts,
  deleteAccount,
  updateAccount,
  getByName,
} = require("./accounts.controllers");
let accounts = require("../../accounts");

router.get("/", getAllAccounts);
router.get("/:accountUserName", getByName);
router.post("/", createAccount);
router.delete("/:accountId", deleteAccount);
router.put("/:accountId", updateAccount);

module.exports = router;
