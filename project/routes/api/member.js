const express = require("express");
const router = express.Router();
const members = require("../../Members");
const uuid = require("uuid");
// routing
// gets all the member data as response.
router.get("/", (req, res) => res.json(members));

// Get singl member

router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `Member with ${req.params.id} not found` });
  }
});

// create a member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    statur: "active",
  };
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include all the fields" });
  }

  members.push(newMember);
  // res.json(members);
  res.redirect('/')
});

// update member
router.put("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    const updMember = req.body;
    members.forEach((member) => {
      if (member.id == parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.email = updMember.email ? updMember.email : member.email;
        res.json({ msg: "Member updated", member });
      }
    });
  } else {
    res.status(400).json({ msg: `Member with ${req.params.id} not found` });
  }
});

// delete member
router.delete("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json({msg:'Member deleted',
        members: members.filter((member) => member.id !== parseInt(req.params.id))
  });
  } else {
    res.status(400).json({ msg: `Member with ${req.params.id} not found` });
  }
});
module.exports = router;
