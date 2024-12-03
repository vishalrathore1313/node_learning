const express = require("express");
const { createUser, deleteUser,updateUser,showAll,user} = require("../controllers/userController");

const router = express.Router();

router.post("/", createUser);

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);

router.get("/", showAll);

router.get("/:id", user);

module.exports = router;
