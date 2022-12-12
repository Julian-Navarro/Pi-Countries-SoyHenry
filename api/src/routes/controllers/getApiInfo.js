const { Country, Activity } = require("../../db");

const getApiInfo = async (name) => {
  try {
    const countriesDb = await Country.findAll();
    const db = await Country.findAll({ include: [{ model: Activity }] });
    if (name) {
      let countriesByName = countriesDb.filter((c) =>
        c.name.toLowerCase().includes(name.toLowerCase())
      );
      return countriesByName;
    } else {
      return db;
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getApiInfo,
};
