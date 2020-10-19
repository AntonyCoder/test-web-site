var map;
var marker;
function initMap() {
  map = new ymaps.Map("yandexmap", {
    center: [56.204304, 43.789178],
    zoom: 16
  });
  marker = new ymaps.Placemark([56.204304, 43.789178], {
  });
  map.geoObjects.add(marker);
}
ymaps.ready(initMap);

