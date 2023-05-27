const express = require("express");
const router = express.Router();
const Student = require("../models/students");
router.get("/ayy", (req, res) => {
  res.send("ayy");
});

// create a new student using promisses

// router.post("/students", (req, res) => {
//   const user = new Student(req.body);
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });

// create a new student using async/await

router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(err);
  }
});

// get methode
router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(200).send(studentsData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get method for particular user
router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    res.status(200).send(studentData);
  } catch (err) {
    res.status(500).send(err);
  }
});

// patch/ update data
router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updateStudent);
  } catch (err) {
    res.status(404).send(err);
  }
});
// delete data
router.delete("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(_id);
    res.status(200).send(deleteStudent);
    } catch (err) {
      res.status(404).send(err);
      }
      });
      // export router
module.exports = router;
