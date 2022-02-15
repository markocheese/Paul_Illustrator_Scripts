/*
Generates Sequential Numbers - Paul Markovich 2008

This will add measurement marks and dimensions to any selected item.

This script requires that a swatch already exist for the colour "Cutter" (or "cutter")
*/

var myDocument = app.activeDocument;
var selectedObject = myDocument.selection;
var activeLayer = app.activeDocument.activeLayer;
var layerName = activeLayer.name;


var rows = prompt("Input rows");
var columns = prompt("Input columns");
var startNumber = prompt("Input start Number");
var endNumber = prompt("Input end Number");

var columnWidth = 25;
var rowHeight = 25;

var numberLayer = myDocument.layers.add();
numberLayer.name = "Number Grid";

var numberGroup = numberLayer.groupItems.add();
numberGroup.name = "numberGroup";

//loop through columns and rows
//generate sequential numbers
var startNumberInt = parseInt(startNumber,10);
for(var r=0;r<rows;r++){
	for(var c=0;c<columns;c++){
		if ( (r*columns)+c+startNumberInt <= endNumber){
			var gridNumber = numberGroup.textFrames.add();
			//gridNumber[0].paragraphs.paragraphAttributes.justification = Justification.CENTER;
			//var paraAttr_1 = gridNumber.paragraphs[0].paragraphAttributes;
			//paraAttr_1.justification = Justification.CENTER;
			gridNumber.contents = (r*columns)+c+startNumberInt;
			gridNumber.top = -r*rowHeight;
			gridNumber.left = c*columnWidth;
		}else{
			break;
		}
	}
}
/*var gridNumber = numberGroup.textFrames.add();
gridNumber.contents = finalWidth + "mm";
gridNumber.top = y1 + 42;
gridNumber.left = xCentre;
gridNumber.paragraphs[0].paragraphAttributes.justification = Justification.CENTER;
for (i=0;i<gridNumber.textRange.characters.length;i++) {
	gridNumber.characters[i].characterAttributes.fillColor = cutterSwatch.color;
}*/
