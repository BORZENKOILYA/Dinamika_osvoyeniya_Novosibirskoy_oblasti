var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Административные границы'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: 'Населенные пункты'
            });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1,lyr__2];
lyr__1.set('fieldAliases', {'NAME': 'NAME', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'Название': 'Название', 'OFFICIAL_S': 'OFFICIAL_S', 'Тип поселения': 'Тип поселения', 'A_RGN': 'A_RGN', 'Административно-территориальное деление': 'Административно-территориальное деление', 'Население ': 'Население ', 'Год основания': 'Год основания', 'Прежнее название': 'Прежнее название', 'Численность': 'Численность', });
lyr__1.set('fieldImages', {'NAME': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'Hidden', 'Название': 'TextEdit', 'OFFICIAL_S': 'Hidden', 'Тип поселения': 'Hidden', 'A_RGN': 'Hidden', 'Административно-территориальное деление': 'TextEdit', 'Население ': 'Hidden', 'Год основания': 'DateTime', 'Прежнее название': 'TextEdit', 'Численность': 'TextEdit', });
lyr__1.set('fieldLabels', {'NAME': 'no label', });
lyr__2.set('fieldLabels', {'Название': 'inline label', 'Административно-территориальное деление': 'inline label', 'Год основания': 'inline label', 'Прежнее название': 'inline label', 'Численность': 'inline label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});