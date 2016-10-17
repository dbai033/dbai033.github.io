var size = 0;
function categories_FinalProject(feature, value) {
                switch(value) {case "":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(115,115,115,0.8)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(130,130,130,0.8)"})
    })];
                    break;
case "A1":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(115,115,115,0.8)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(232,232,232,0.8)"})
    })];
                    break;
case "A2":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(115,115,115,0.8)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(172,228,228,0.8)"})
    })];
                    break;
case "A3":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(115,115,115,0.8)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(90,200,200,0.8)"})
    })];
                    break;
case "B1":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(115,115,115,0.8)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(223,176,214,0.8)"})
    })];
                    break;
case "B2":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(115,115,115,0.8)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(165,173,211,0.8)"})
    })];
                    break;
case "B3":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(115,115,115,0.8)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(86,152,185,0.8)"})
    })];
                    break;
case "C1":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(115,115,115,0.8)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(190,100,172,0.8)"})
    })];
                    break;
case "C2":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(115,115,115,0.8)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(140,98,170,0.8)"})
    })];
                    break;
case "C3":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(115,115,115,0.8)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(59,73,148,0.8)"})
    })];
                    break;}};
var styleCache_FinalProject={}
var style_FinalProject = function(feature, resolution){
    var value = feature.get("Catagory");
    var style = categories_FinalProject(feature, value);
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_FinalProject[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_FinalProject[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_FinalProject[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};