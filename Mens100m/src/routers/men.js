const express = require("express");
const router = new express.Router();
const MensRanking = require("../modules/mens");

router.get("/", async (req, res) => {
  res.send("HEllo");
});
router.post("/mens", async (req, res) => {
  try {
    const ranking = new MensRanking(req.body);
    const insertMens = await ranking.save();
    res.status(201).send(insertMens);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.get("/mens", async (req, res) => {
  try {
    const mens = await MensRanking.find().sort({ ranking: 1 });
    res.status(200).send(mens);
  } catch (e) {
    res.status(400).send(e);
  }
});
//get single value
router.get("/mens/:id", async (req, res) => {
  try {
    const mens = await MensRanking.findById(req.params.id);
    res.status(200).send(mens);
  } catch (e) {
    res.status(400).send(e);
  }
});
// update individual
router.patch("/mens/:id", async (req, res) => {
  try {
    const mens = await MensRanking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).send(mens);
  } catch (e) {
    res.status(400).send(e);
  }
});
// delete individual
router.delete("/mens/:id", async (req, res) => {
  try {
    const mens = await MensRanking.findByIdAndDelete(req.params.id);
    res.status(201).send(mens);
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = router;
