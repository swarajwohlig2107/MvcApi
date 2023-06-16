const express = require("express");
const router = new express.Router();

const saveData = require("../controller/adduser");
const findUser = require("../controller/finduser")
const updateUser = require("../controller/updateuser")
const deleteUser = require("../controller/deleteuser")

router.post("/addUser",saveData);
router.get("/findUser",findUser)
router.patch("/updateUser/:id",updateUser)
router.delete("/deleteUser/:id",deleteUser)

module.exports = router;
