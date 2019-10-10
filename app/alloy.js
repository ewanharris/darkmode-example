// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

if (OS_ANDROID) {
	const mode = Ti.UI.Android.nightModeStatus;
	if (mode === Ti.UI.Android.MODE_NIGHT_YES) {
		Ti.UI.semanticColorType = Ti.UI.SEMANTIC_COLOR_TYPE_DARK;
	} else {
		Ti.UI.semanticColorType = Ti.UI.SEMANTIC_COLOR_TYPE_LIGHT;
	}
}

const colors = require('/semantic.colors.json');
Alloy.CFG.color = {};
for (var [ color ] of Object.entries(colors)) {
	Alloy.CFG.color[color] = Ti.UI.fetchSemanticColor(color);
}
console.log(Alloy.CFG.color);
