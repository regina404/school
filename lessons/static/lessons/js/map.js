const map = L.map('map').setView([50.450100,30.456977], 15);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([50.450100,30.456977]).addTo(map).bindPopup("<strong>Національний технічний університет України «Київський політехнічний інститут імені Ігоря Сікорського»</strong><br />Адрес:проспект Перемоги, 37, Київ, 03056").openPopup();

let distanceFromLocationsInKm = (lat1,lon1,lat2,lon2) => {
    const R = 6371; // Радиус земли
    const dLat = degToRad(lat2-lat1);
    const dLon = degToRad(lon2-lon1);
    const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c; // Просчитываем дистанцим в киллометрах
    return d;
  }

  let degToRad = (deg) => {
    return deg * (Math.PI/180)
  }

let locations = [
    [50.450100, 30.456977],
    [50.458, 30.457]
]
const distance = distanceFromLocationsInKm(locations[0][0],locations[0][1],locations[1][0],locations[1][1]);

let polyline = L.polyline(locations, {color:'red'}).addTo(map)
  console.log(distance);