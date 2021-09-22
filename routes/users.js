var express = require("express");
const { listUsers, createUser } = require("../user");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res) {
  try {
    const users = listUsers();
    res.send(users);
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.post("/", function (req, res) {
  const data = req.body;
  console.log({ data });
  try {
    const user = createUser(data);
    res.send(user);
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = router;