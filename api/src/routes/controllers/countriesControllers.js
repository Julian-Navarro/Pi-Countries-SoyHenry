const { Router } = require("express");
const router = Router();
const { getApiInfo } = require("./getApiInfo");
const { Country, Activity } = require("../../db");

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const countries = await getApiInfo(name);
    countries.length > 0
      ? res.status(200).send(countries)
      : res.status(200).send(vacio);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

router.get("/continents", async (req, res) => {
  try {
    const dbCountries = await Country.findAll();
    let arrContinentsFilt = [];
    dbCountries.forEach((c) => {
      if (!arrContinentsFilt.includes(c.continent)) {
        arrContinentsFilt.push(c.continent);
      }
    });
    res.status(200).send(arrContinentsFilt);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

router.get("/:idCountry", async (req, res) => {
  try {
    const { idCountry } = req.params;
    const dbCountry = await Country.findByPk(idCountry, {
      include: [{ model: Activity, through: { attributes: [] } }],
    });
    res.status(200).send(dbCountry);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

module.exports = router;
