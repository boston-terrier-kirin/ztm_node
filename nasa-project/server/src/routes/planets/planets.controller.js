// { planets } しないと配列に戻らない。
// module.exports = {
//   loadPlanetsData,
//   planets: results,
// };
const { planets } = require('../../models/planets.model');

function getAllPlanets(req, res) {
  return res.status(200).json(planets);
}

module.exports = {
  getAllPlanets,
};
