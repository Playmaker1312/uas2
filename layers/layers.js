var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_JlnUtama_1 = new ol.format.GeoJSON();
var features_JlnUtama_1 = format_JlnUtama_1.readFeatures(json_JlnUtama_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JlnUtama_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JlnUtama_1.addFeatures(features_JlnUtama_1);
var lyr_JlnUtama_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JlnUtama_1, 
                style: style_JlnUtama_1,
                popuplayertitle: 'JlnUtama',
                interactive: true,
                title: '<img src="styles/legend/JlnUtama_1.png" /> JlnUtama'
            });
var format_Fasilitas_2 = new ol.format.GeoJSON();
var features_Fasilitas_2 = format_Fasilitas_2.readFeatures(json_Fasilitas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_2.addFeatures(features_Fasilitas_2);
var lyr_Fasilitas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitas_2, 
                style: style_Fasilitas_2,
                popuplayertitle: 'Fasilitas',
                interactive: true,
                title: '<img src="styles/legend/Fasilitas_2.png" /> Fasilitas'
            });
var format_kapling_3 = new ol.format.GeoJSON();
var features_kapling_3 = format_kapling_3.readFeatures(json_kapling_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kapling_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kapling_3.addFeatures(features_kapling_3);
var lyr_kapling_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kapling_3, 
                style: style_kapling_3,
                popuplayertitle: 'kapling',
                interactive: true,
    title: 'kapling<br />\
    <img src="styles/legend/kapling_3_0.png" /> 67.133<br />\
    <img src="styles/legend/kapling_3_1.png" /> 68.846<br />\
    <img src="styles/legend/kapling_3_2.png" /> 69.432<br />\
    <img src="styles/legend/kapling_3_3.png" /> 69.767<br />\
    <img src="styles/legend/kapling_3_4.png" /> 69.857<br />\
    <img src="styles/legend/kapling_3_5.png" /> 69.895<br />\
    <img src="styles/legend/kapling_3_6.png" /> 70.871<br />\
    <img src="styles/legend/kapling_3_7.png" /> 71.924<br />\
    <img src="styles/legend/kapling_3_8.png" /> 73.555<br />\
    <img src="styles/legend/kapling_3_9.png" /> 74.800<br />\
    <img src="styles/legend/kapling_3_10.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_JlnUtama_1.setVisible(true);lyr_Fasilitas_2.setVisible(true);lyr_kapling_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_JlnUtama_1,lyr_Fasilitas_2,lyr_kapling_3];
lyr_JlnUtama_1.set('fieldAliases', {'Nama Jalan': 'Nama Jalan', 'panjang': 'panjang', });
lyr_Fasilitas_2.set('fieldAliases', {'Nama': 'Nama', });
lyr_kapling_3.set('fieldAliases', {'luas': 'luas', 'Kode': 'Kode', 'Statius': 'Statius', });
lyr_JlnUtama_1.set('fieldImages', {'Nama Jalan': 'TextEdit', 'panjang': '', });
lyr_Fasilitas_2.set('fieldImages', {'Nama': 'TextEdit', });
lyr_kapling_3.set('fieldImages', {'luas': 'TextEdit', 'Kode': 'TextEdit', 'Statius': 'TextEdit', });
lyr_JlnUtama_1.set('fieldLabels', {'Nama Jalan': 'no label', 'panjang': 'no label', });
lyr_Fasilitas_2.set('fieldLabels', {'Nama': 'no label', });
lyr_kapling_3.set('fieldLabels', {'luas': 'no label', 'Kode': 'no label', 'Statius': 'no label', });
lyr_kapling_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});