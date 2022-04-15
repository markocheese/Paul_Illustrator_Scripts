/*
Generates sequential numbers with a leading letters as seperate text groups on a new layer
Paul Markovich 2021
*/

var myDocument = app.activeDocument;
var selectedObject = myDocument.selection;
var activeLayer = app.activeDocument.activeLayer;
var layerName = activeLayer.name;

var rows = prompt("Input Rows");
var columns = prompt("Input Columns");

var columnWidth = 40;
var rowHeight = 20;

var numberLayer = myDocument.layers.add();
numberLayer.name = "Data Layer";

var numberGroup = numberLayer.groupItems.add();
numberGroup.name = "numberGroup";

//Function to add padding to numbers if needed
function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

//loop through columns and rows
//generate sequential numbers with leading letters
for(var r=0;r<rows;r++){
	for(var c=0;c<columns;c++){
        var gridNumber = numberGroup.textFrames.add();
        //gridNumber[0].paragraphs.paragraphAttributes.justification = Justification.CENTER;
        //var paraAttr_1 = gridNumber.paragraphs[0].paragraphAttributes;
        //paraAttr_1.justification = Justification.CENTER;

         var CombinedCode = String.fromCharCode(65 + r) + zeroPad(c, 2)

        gridNumber.contents = CombinedCode
        gridNumber.top = -r*rowHeight;
        gridNumber.left = c*columnWidth;
	}
}
