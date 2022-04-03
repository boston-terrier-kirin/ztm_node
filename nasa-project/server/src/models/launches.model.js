const launches = new Map();

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

const launch_2 = {
  flightNumber: 101,
  mission: 'Kepler Explortation X',
  rocket: 'Explorer IS1',
  launchDate: new Date('2022/9/4'),
  destination: 'Kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch_1.flightNumber, launch_1);
launches.set(launch_2.flightNumber, launch_2);

function getAllLaunches() {
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunches,
};
