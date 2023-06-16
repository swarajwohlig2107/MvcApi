const mongoose = require('mongoose');
const Student = require('../model/student');

const updateUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const update = req.body;
    console.log(update);
    const data = await Student.findByIdAndUpdate(_id, update, { new: true });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};


module.exports = updateUser