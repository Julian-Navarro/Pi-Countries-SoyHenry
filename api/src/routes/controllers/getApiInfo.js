const { Country } = require("../../db");

const getApiInfo = async (name) => {
  const countriesDb = await Country.findAll();
  if (name) {
    let countriesByName = countriesDb.filter((c) =>
      c.name.toLowerCase().includes(name.toLowerCase())
    );
    return countriesByName;
  } else {
    return countriesDb;
  }
};

module.exports = {
  getApiInfo,
};
