const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

function isHabitablePlanet(planet) {
  return (
    planet['koi_disposition'] === 'CONFIRMED' &&
    planet['koi_insol'] > 0.36 &&
    planet['koi_insol'] < 1.11 &&
    planet['koi_prad'] < 1.6
  );
}

const results = [];

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      // __diername: D:\dev\udemy_personal\ztm_node\nasa-project\server\src\models
      // .. .. で2つdirを上がって
      // data, kepler_data.csvを指定する。
      // .. は / がOSによって違うのを吸収するための方法らしい。
      path.join(__dirname, '..', '..', 'data', 'kepler_data.csv')
    )
      .pipe(
        parse({
          comment: '#',
          columns: true,
        })
      )
      .on('data', (data) => {
        if (isHabitablePlanet(data)) {
          results.push(data);
        }
      })
      .on('error', (err) => {
        console.log(err);
        reject(err);
      })
      .on('end', () => {
        console.log(`${results.length} habitable planet found.`);
        resolve(results);
      });
  });
}

module.exports = {
  loadPlanetsData,
  planets: results,
};
