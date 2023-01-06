const { Country } = require("../../db");
const axios = require("axios");
const url = "https://restcountries.com/v3/all";

const createCountriesIntoDb = async () => {
  const apiInfo = await axios.get(url);

  const countries = apiInfo.data.map((c) => {
    let capital = c.capital ? c.capital[0] : "Not found";
    return {
      id: c.cca3,
      name: c.name.common,
      capital: capital,
      continent: c.region,
      subregion: c.subregion,
      img: c.flags[1],
      area: c.area,
      population: c.population,
    };
  });
  countries.forEach(async (c) => {
    await Country.findOrCreate({
      where: {
        name: c.name,
      },
      defaults: {
        id: c.id,
        capital: c.capital,
        continent: c.continent,
        subregion: c.subregion,
        img: c.img,
        area: c.area,
        population: c.population,
      },
    });
  });
};

module.exports = {
  createCountriesIntoDb,
};
