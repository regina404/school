const map = L.map('map').setView([50.450100,30.456977], 12);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([50.450100,30.456977]).addTo(map).bindPopup("<strong>Національний технічний університет України «Київський політехнічний інститут імені Ігоря Сікорського»</strong><br />Адрес:проспект Перемоги, 37, Київ, 03056").openPopup();

let distanceFromLocationsInKm = (lat1,lon1,lat2,lon2) => {
    const R = 6371; // Радиус земли
    const dLat = (lat2-lat1).toRad();
    const dLon = (lon2-lon1).toRad();
    const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos((lat1).toRad()) * Math.cos((lat2).toRad()) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c; // Просчитываем дистанцим в киллометрах
    return d;
}

if (typeof(Number.prototype.toRad) === "undefined") {
    Number.prototype.toRad = function() {
    return this * Math.PI / 180;
    }
}

window.navigator.geolocation.getCurrentPosition(function(pos) {
    const locations = [
      [50.450100, 30.456977],
      [pos.coords.latitude,pos.coords.longitude]
    ]

    L.marker([pos.coords.latitude,pos.coords.longitude]).addTo(map).bindPopup("<strong>Ваше местоположение</strong><br />").openPopup();
    const polyline = L.polyline(locations, {color:'red'}).addTo(map)
    const ourDistanse = distanceFromLocationsInKm(50.450100, 30.456977,pos.coords.latitude,pos.coords.longitude);
    const box = document.getElementById("distance");
    box.innerHTML = "Расстояние между нами:" +" " + ourDistanse +" " + "км";
});