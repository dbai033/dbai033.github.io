var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OpenMapSurfer adminb',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://openmapsurfer.uni-hd.de/tiles/adminb/x={x}&y={y}&z={z}',
        attributions: [new ol.Attribution({html: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @University of Heidelberg</a> &mdash; Map data:&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_FinalProject = new ol.format.GeoJSON();
var features_FinalProject = format_FinalProject.readFeatures(geojson_FinalProject, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FinalProject = new ol.source.Vector();
jsonSource_FinalProject.addFeatures(features_FinalProject);var lyr_FinalProject = new ol.layer.Vector({
                source:jsonSource_FinalProject, 
                style: style_FinalProject,
                title: "Final Project"
            });

lyr_FinalProject.setVisible(true);
var layersList = [baseLayer,lyr_FinalProject];
lyr_FinalProject.set('fieldAliases', {'Area': 'Area', 'Jobless 13': 'Jobless 13', 'Change 06': 'Change 06', 'Population': 'Population', 'AU2013': 'AU2013', 'Catagory': 'Catagory', });
lyr_FinalProject.set('fieldImages', {'Area': 'TextEdit', 'Jobless 13': 'TextEdit', 'Change 06': 'TextEdit', 'Population': 'TextEdit', 'AU2013': 'Hidden', 'Catagory': 'TextEdit', });
lyr_FinalProject.set('fieldLabels', {'Area': 'inline label', 'Jobless 13': 'inline label', 'Change 06': 'inline label', 'Population': 'inline label', 'Catagory': 'inline label', });
