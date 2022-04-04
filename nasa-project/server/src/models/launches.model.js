const launches = new Map();

let latestFlightNumber = 100;

const launch_1 = {
  flightNumber: 100,
  mission: 'Kepler Explortation X',
  rocket: 'Explorer IS1',
  launchDate: new Date('2022/9/4'),
  target: 'Kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch_1.flightNumber, launch_1);

function getAllLaunches() {
  return Array.from(launches.values());
}

function existsLaunchWithId(id) {
  return launches.has(id);
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

function abortLaunchById(id) {
  const launch = launches.get(id);
  launch.upcoming = false;
  launch.success = false;

  return launch;
}

module.exports = {
  getAllLaunches,
  existsLaunchWithId,
  addNewLaunch,
  abortLaunchById,
};
