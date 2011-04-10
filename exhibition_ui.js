loadedInterfaceName = "Exhibition";

interfaceOrientation = "portrait";

whRatio = 2 / 3;
infoText = "This is a Exhibition widget.";

function removeTouch() {
	var multi = window.multi;
	var touchToKill = multi.children.pop();   /* remove last child and map to variable */
	multi.container.removeChild(touchToKill); /* remove from web renderer */
}
window.removeTouch = removeTouch;

pages = [[
{
    "name": "multi",
    "type": "MultiTouchXY",
    "x": .0,
    "y": .0,
    "width": 1,
    "height": .8,
    "color": "#555555",
    "stroke": "#aaaaaa",
    "mode": "momentary",
    "protocol": "OSC",
    "midiType": "cc",
    "midiNumber": 5,
    "maxTouches": 5,
    "isMomentary": false,
    "requiresTouchDown": false
},

{
    "name": "magnetButton",
    "type": "Button",
    "x": .2,
    "y": .825,
    "width": .2,
    "height": .15 * whRatio,
    "color": "#0000aa",
    "stroke": "#aaaaaa",
    "label": "magnet +",
    "address": "/magnet",
},

{
    "name": "sloppyButton",
    "type": "Button",
	  "bounds": [.0, .825, .2, .15 * whRatio],
    "color": "#0000aa",
    "stroke": "#aaaaaa",
	  "label": "sloppy -",
	  "address": "/sloppy",
},


{
    "name": "tabButton",
    "type": "Button",
    "x": .8,
    "y": .825,
    "width": .2,
    "height": .15 * whRatio,
    "mode": "toggle",
    "color": "#333333",
    "stroke": "#aaaaaa",
    "isLocal": true,
	"ontouchstart": "if(this.value == this.max) { control.showToolbar(); } else { control.hideToolbar(); }",
},
{
    "name": "tabButtonLabel",
    "type": "Label",
    "x": .8,
    "y": .825,
    "width": .2,
    "height": .15 * whRatio,
    "mode": "contact",
    "isLocal": true,
    "value": "menu",
},
{
    "name": "infoButton",
    "type": "Button",
    "x": .6,
    "y": .825,
    "width": .2,
    "height": .15 * whRatio,
    "mode": "contact",
    "color": "#333333",
    "stroke": "#aaaaaa",
    "midiType": "noteon",
    "isLocal": true,
    "ontouchstart": "control.changePage(1);",
},
{
    "name": "infoButtonLabel",
    "type": "Label",
    "x": .6,
    "y": .825,
    "width": .2,
    "height": .15 * whRatio,
    "color": "#fff",
    "value": "info",
},

],
[
{
    "name": "infoText",
    "type": "Label",
    "x": .1,
    "y": .1,
    "width": .8,
    "height": .7,
    "value": infoText,
    "verticalCenter": false,
    "align": "left",
},
{
    "name": "backButton",
    "type": "Button",
    "x": .8,
    "y": .9,
    "width": .19,
    "height": .09,
    "mode": "contact",
    "color": "#333333",
    "stroke": "#aaaaaa",
    "isLocal": true,
    "ontouchstart": "control.changePage(0);",
},
{
    "name": "infoButtonLabel",
    "type": "Label",
    "x": .8,
    "y": .9,
    "width": .19,
    "height": .09,
    "color": "#fff",
    "value": "back",
},

],

];