// { planets } しないと配列に戻らない。
// module.exports = {
//   loadPlanetsData,
//   planets: results,
// };
const { getAllPlanets } = require('../../models/planets.model');

function httpGetAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};
