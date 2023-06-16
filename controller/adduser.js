const mongoose = require("mongoose");
const Student = require("../model/student")

const addUser = async (req, res) => {

  try {
    const data = new Student(req.body);
    const add = await data.save()
    res.status(200).send(add);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = addUser;
