const launches = new Map();

let latestFlightNumber = 100;

const launch_1 = {
  flightNumber: 100,
  mission: 'Kepler Explortation X',
  rocket: 'Explorer IS1',
  launchDate: new Date('2022/9/4'),
  destination: 'Kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch_1.flightNumber, launch_1);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;

  launches.set(latestFlightNumber, {
    ...launch,
    flightNumber: latestFlightNumber,
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
  });
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
