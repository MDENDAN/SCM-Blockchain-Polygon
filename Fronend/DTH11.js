// Define point A and point B as latitude and longitude
const pointA = { latitude: 40.7128, longitude: -74.0060 };
const pointB = { latitude: 37.7749, longitude: -122.4194 };

// Define the range for temperature and humidity values
const temperatureRange = { min: 10, max: 30 };
const humidityRange = { min: 20, max: 80 };

// Calculate the distance between point A and point B
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180; // deg2rad below
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}
const distance = calculateDistance(
  pointA.latitude,
  pointA.longitude,
  pointB.latitude,
  pointB.longitude
);

// Calculate the time interval between each location
const interval = 5 * 60 * 1000; // 5 minutes in milliseconds

// Generate locations and values at each interval
let currentTime = new Date().getTime();
let currentLocation = { latitude: pointA.latitude, longitude: pointA.longitude };
let data = [];
while (currentLocation.latitude != pointB.latitude && currentLocation.longitude != pointB.longitude) {
  // Calculate the next location
  const bearing = Math.atan2(
    pointB.longitude - currentLocation.longitude,
    pointB.latitude - currentLocation.latitude
  );
  const nextLatitude =
    currentLocation.latitude +
    ((distance * Math.cos(bearing)) / 111.32 / 1000) * 0.0000089;
  const nextLongitude =
    currentLocation.longitude +
    ((distance * Math.sin(bearing)) / 111.32 / 1000 / Math.cos(currentLocation.latitude * 0.018));
  currentLocation = { latitude: nextLatitude, longitude: nextLongitude };

  // Generate random temperature and humidity values
  const temperature =
    Math.floor(Math.random() * (temperatureRange.max - temperatureRange.min + 1)) + temperatureRange.min;
  const humidity =
    Math.floor(Math.random() * (humidityRange.max - humidityRange.min + 1)) + humidityRange.min;

  // Add the location and values to the data array
  data.push({ location: currentLocation, temperature, humidity });

  // Update the current time for the next interval
  currentTime += interval;
}

console.log(data); // Output the data array with location and values at each interval
