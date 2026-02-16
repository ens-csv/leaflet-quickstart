
//const map = L.map('map').setView([-16.495612, -68.133554], 13)

var map = L.map('map',{
    center: [-16.495612, -68.133554],
    zoom:13,
   
    zoomControl: false
})

// Añadimos dos capas de teselas para poder cambiar entre ellas
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

var cartoDB = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',{
    attribution:'CARTO'
}).addTo(map)

var baseLayers={
    'Open Street Map': osm,
    'CartoDB Voyager': cartoDB    
}
L.control.layers(baseLayers).addTo(map)

L.control.zoom({
    position:'topleft',
    zoomInText:'+',
    zoomOutText:'—',
    zoomInTitle: 'Acercar',
    zoomOutTitle:'Alejar'
}).addTo(map)

L.control.scale({
    maxWidth: 200,         // Ancho máximo
    metric: true,
    imperial:true,
    position:'bottomleft'
}).addTo(map)

var marcadorBolivia = L.marker([-16.495612, -68.133554]).addTo(map)

var iconoPersonalizado = L.icon({
    iconUrl:'img/frame.png',
    //iconSize:[38,95]
})

var marcadorPersonalizado = L.marker([-16.517823, -68.217563],{
    icon:iconoPersonalizado
}).addTo(map)

marcadorBolivia.bindPopup("<b>Hola La Paz</b><br>Sede de Bolivia").openPopup()

marcadorPersonalizado.bindTooltip("Ubicación especial", {
    permanent: false,
    direction: 'top'
})

marcadorBolivia.on('click', function(e){
    console.log('marcador clickeado', e.latlng)
})
