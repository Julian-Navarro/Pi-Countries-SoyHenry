const { Country, Activity } = require("../../db");

const postActivity = async ({
  name,
  difficult,
  duration,
  seasons,
  countries,
}) => {
  try {
    console.log("DIFFICULT!!!!! : ", typeof difficult);
    console.log("DURATION!!!!!! :", typeof duration);
    let newActivity = await Activity.create({
      name,
      difficult,
      duration,
      seasons,
      countries,
    });
    const countriesToAddActivity = await Country.findAll({
      where: { name: countries },
    });
    newActivity.addCountry(countriesToAddActivity);
    return newActivity;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = {
  postActivity,
};
