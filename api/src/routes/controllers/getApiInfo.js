const { Country, Activity } = require("../../db");

const getApiInfo = async (name) => {
  try {
    const countriesFromDatabase = await Country.findAll({
      include: [{ model: Activity }],
    });
    if (name) {
      let countriesByName = countriesFromDatabase.filter((c) =>
        c.name.toLowerCase().includes(name.toLowerCase())
      );
      return countriesByName;
    }
    return countriesFromDatabase;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getApiInfo,
};
