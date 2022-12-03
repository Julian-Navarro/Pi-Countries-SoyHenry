const { Router } = require("express");
const router = Router();
const { postActivity } = require("./postActivities");

router.post("/", async (req, res) => {
  try {
    const { name, difficult, duration, seasons, countries } = req.body;
    if (!name || !countries) {
      throw Error("There are missing data to create de activity!");
    }
    let newActivity = postActivity(req.body);
    res.status(200).send("Activity created succesfully");
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

module.exports = router;
