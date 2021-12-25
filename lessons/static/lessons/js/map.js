const map = L.map('map').setView([50.450100,30.456977], 15);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([50.450100,30.456977]).addTo(map).bindPopup("<strong>Національний технічний університет України «Київський політехнічний інститут імені Ігоря Сікорського»</strong><br />Адрес:проспект Перемоги, 37, Київ, 03056").openPopup();

