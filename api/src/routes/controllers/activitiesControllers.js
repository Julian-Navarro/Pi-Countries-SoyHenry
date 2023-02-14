const { Router } = require("express");
const { postActivity } = require("./postActivities");
const { Country, Activity } = require("../../db");
const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, difficult, duration, seasons, countries } = req.body;
    if (!name || !countries) {
      throw Error("There are missing data to create the activity!");
    }
    // name.length > 50 ? res.status(404).send("Algo salio mal") : null;
    if (name.length > 50) {
      return res.status(500).send(Error("Algo ha salido mal"));
      // throw new Error("Algo salio mal!");
    }
    let newActivity = postActivity(req.body);
    res.status(200).send("Activity created succesfully");
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const json = await Activity.findAll();
    res.status(200).send(json);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

router.get("/activities", async (req, res) => {
  try {
    const json = await Activity.findAll({
      include: [
        {
          model: Country,
        },
      ],
    });
    res.status(200).send(json);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

router.put("/", async (req, res) => {
  try {
    const { id } = req.body;
    let destroy = await Activity.destroy({ where: { id: id } });
    res.status(200).send("Activity deleted");
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

// router.put("/put", async (req, res) => {
//   try {
//     const { input } = req.body;
//     console.log("INPUTTTTTTTTTTTTTTT!!!!!!!!", input);
//     res.status(200).send("Activity changed");
//   } catch (error) {
//     console.log(error);
//     res.status(404).send(error);
//   }
// });

module.exports = router;
